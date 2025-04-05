import { ReactElement } from "react"

export function SidebarItem({text,icon}:{
    text:string,
    icon:ReactElement
}){
    return <div className="flex items-center py-1 cursor-pointer hover:bg-gray-300 rounded-lg">
        <div className="pr-2">{icon} </div>
        <div >{text}</div>

    </div>
}