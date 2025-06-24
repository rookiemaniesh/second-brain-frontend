import { IgIcon } from "../icons/igIcon"
import { MainIcon } from "../icons/mainIcon"
import { XIcon } from "../icons/xIcon"
import { YtIcon } from "../icons/ytIcon"
import { SideBarItems } from "./SideBarItems"


export const SideBar = () => {
 return <div className="min-h-screen w-76 bg-white border-r-2 border-grey-300 p-4 absolute left-0 top-0">
 <div className="flex items-center justify-start gap-2 mb-2">
    <MainIcon/>
    <h1 className="text-2xl font-bold text-purple-800 ">Brainly</h1>

 </div>
 <SideBarItems text="Tweets" icon={<XIcon />} />
 <SideBarItems text="Instagram" icon={<IgIcon />} />
  <SideBarItems text="Youtube" icon={<YtIcon/>} />
 </div>

}