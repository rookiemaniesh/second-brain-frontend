 import React from 'react';
 export interface ButtonProps {
    variant: "primary"|"secondary";
    size:"sm"|"md"|"lg";
    text:String;
    startIcon?:any;
    endIcon?:any;
    onClick?:()=>void;
}
const ButtonVariant={
    "primary":"bg-blue-500 text-white",
    "secondary":"bg-gray-500 text-white"
}
const ButtonSize={
    "sm":"px-2 py-1 text-xl",
    "md":"px-4 py-2 text-2xl",
    "lg":"px-8 py-4 text-3xl"
}
const defaultStyle="rounded-md m-2" 

 const  Button=(props: ButtonProps)=>{
   
    
    return<button className={`${ButtonVariant[props.variant]} ${ButtonSize[props.size]} ${defaultStyle}` } >{props.text}</button>
 }
 export default Button