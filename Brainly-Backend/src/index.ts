import express from "express";
import cors from "cors";

import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from "./db";
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";
import { random } from "./utils";

const app = express();

app.use(express.json());
app.use(cors());
 
app.post("/api/v1/signup",async (req,res)=>{
    //do zod validation and hash the password
    const username = req.body.username;
    const password = req.body.password;
    
    try{
            await UserModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "user signed up"
        })
    }catch(e){
        res.status(411).json({
            message:"User already exists"
        })
    }
    
})

app.post("/api/v1/signin",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        },JWT_PASSWORD)
        res.send({
            token
        })

    }else{
        res.status(411).json({
            message: "invalid username or password"
        })
    }


   
});


//@ts-ignore
app.post("/api/v1/content",userMiddleware,async(req,res)=>{
    const title = req.body.title;
    const link = req.body.link;
    await ContentModel.create({
        link,
        title,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })
    res.json({
        message: "content added"
    })



})

//@ts-ignore
app.get("/api/v1/content",userMiddleware,async (req,res)=>{
    const userId = req.body.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId","username")

    res.json({
        content
    })

})

//@ts-ignore
app.delete("/api/v1/content",userMiddleware,async (req,res)=>{
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId:req.userId
    })
    res.json({
        message:"deleted the content"
    })
})
//@ts-ignore

app.post("/api/v1/brain/share",userMiddleware,async (req,res)=>{
    const share = req.body.share;
    if(share){
        const existingLink = await LinkModel.findOne({
            //@ts-ignore
            userId: req.userId
        })
        if(existingLink){
            res.json({
                hash:existingLink.hash
            })
            return;
        }

        const hash =  random(10);
        await LinkModel.create({
            hash:hash,
            //@ts-ignore
            userId: req.userId
        })
        res.json({
           hash
        })
    }else{
         await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId,
        })
        res.json({
            message:"Removed sharable Link"
        })
    }
  


})

app.get("/api/v1/brain/:shareLink",async (req,res)=>{
    const hash = req.params.shareLink;
    const link = await LinkModel.findOne({
        hash
    });

    if(!link){
        res.status(411).json({
            message: "sorry incorrect input"
        })
        return;
    }
    const content = await ContentModel.findOne({
        userId: link.userId
    })

    const user = await UserModel.findOne({
        _id: link.userId
    })
    if(!user){
        res.status(411).json({
            message: "user not found; error should ideally not happen   "
        })
        return;
    }

    res.json({
        username: user.username,
        content : content
    })
})

app.listen(3000);