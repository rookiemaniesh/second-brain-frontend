export function SideBarItems({text,icon}:{text:String,icon:React.ReactElement}) {
 
    return <div className="pl-2">
        <div className="flex text-gray-500 items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
            {icon}
            <span className="text-gray-500 text-xl">{text}</span>
        </div>
    </div>



}