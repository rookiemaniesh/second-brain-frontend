 import React, { type ReactElement } from 'react';
 export interface ButtonProps {
    variant: "primary"|"secondary";
    size:"sm"|"md"|"lg";
    text:String;
    endIcon?:ReactElement;
    startIcon?:ReactElement;
    onclick?:()=>void;
}
const ButtonVariant={
    "primary":"bg-purple-800 text-purple-500",
    "secondary":"bg-purple-500 text-purple-800"
}
const ButtonSize={
    "sm":"px-2 py-1 text-sm",
    "md":"px-4 py-2 text-xl",
    "lg":"px-8 py-4 text-2xl"
}
const defaultStyle="rounded-md font-light m-2 flex items-center justify-center gap-2" 

 const  Button=(props: ButtonProps)=>{
   
    
    return<button onClick={props.onclick} className={`${ButtonVariant[props.variant]} ${ButtonSize[props.size]} ${defaultStyle} ` } >{props.startIcon}{props.text}{props.endIcon}</button>
 }
 export default Button