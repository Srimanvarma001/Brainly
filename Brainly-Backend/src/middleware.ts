import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";


export const userMiddleware =(req:Request,res: Response,next:NextFunction) => {
    //@ts-ignore
    const  header = req.headers["authorization"];
    const decode = jwt.verify(header,JWT_PASSWORD);

    if(decode){
        //@ts-ignore
        req.userId = decode.id;
        next()
    }else{
        //@ts-ignore
        res.status(411).json({
            message:"you are not logged in"
        })
    }
}