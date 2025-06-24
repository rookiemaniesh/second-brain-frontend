// import { CloseIcon } from "../icons/closeIcon"


// export function CreateModal({open,onClose}){
//  if(!open) return null;
//  return <div className="inset-0 fixed flex items-center justify-center z-50">
//      <div className="absolute  bg-black opacity-50  "
//       onClick={onClose}/>
//         <div className="flex  justify-center">
//             <span className="bg-white opacity-100 rounded-md text-black p-4">
//             <div className="flex justify-end">
//         <CloseIcon/>
//             </div>
//         <Input/>
//         <Input/>
//             </span>
//         </div>
//     </div>

 
// }
//  const Input =()=>{
//     return <input className="p-4 rounded-b-md" type="text" placeholder="hello" />
//  }


import { CloseIcon } from "../icons/closeIcon";
import Button from "./button";

export function CreateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative bg-white rounded-md text-black p-6 z-10 min-w-[300px]">
        <div className="flex justify-end pb-4">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <Input placeholder="Type" />
        <Input placeholder="Link"/>
        <div className="flex justify-center">

        <Button  variant="primary" text="Submit" size="md" />
        </div>

      </div>
    </div>
  );
}

const Input = ({onChange,placeholder}:{onChange:()=>void,placeholder:String}) => {
  return (
    <input
      className="p-4 rounded-md border border-gray-300 w-full mb-4"
      type="text"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
