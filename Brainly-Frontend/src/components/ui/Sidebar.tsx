import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="bg-white h-screen border-r w-72 fixed top-0 left-0 pl-6 ">
        <div className="text-2xl pt-4 flex items-center"> 
            <div className="pr-2 text-purple-500">
                <Logo/>
            </div>
           

            Brainly
        </div>
        <div className="pt-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
        <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
        </div>
    </div>
}