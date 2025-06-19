import React, { FC } from "react";
import cs from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    labelclassName?: string;
    classnameContainer?: string;
    id: string;
}

const Input:FC<InputProps> = ({id,label,labelclassName,className,classnameContainer,required, ...props}) => {
return (
    <div className={classnameContainer}>
    <label htmlFor={id} 
    className={cs("block mb-2 text-sm font-medium text-gray-900 dark:text-white",labelclassName)}
    >
    {label || "Input Label"}
    {required && <span className="text-red-500 ml-1">*</span>}

    </label>
    <input type="password" id={id} className={cs("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ,props.disabled && "opacity-50 cursor-not-allowed"
        ,props.readOnly && "bg-gray-100"
        ,className,
    )} 
    {...props}
    />
    </div>
)
}
export default Input;