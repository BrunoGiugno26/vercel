import React, { FC } from "react";
import Image from "next/image";

interface LayoutAuthProps {
    children: React.ReactNode;
}

const LayoutAuth: FC<LayoutAuthProps> = ({children})=> {
    return(
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div className="flex-[.5] p-8 h-full relative overflow-hidden">
                <Image
                    src="https://ik.imagekit.io/fefgntjox/Login.jpg?updatedAt=1749593203439"
                    alt="login"
                    fill
                    className="object-cover w-full h-full"
                    priority
                />
            </div>
            <div className="flex-[.5] flex items-center justify-center p-8">
                <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center gap-4">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default LayoutAuth;