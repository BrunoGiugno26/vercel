import React from "react"
import NavbarItem from "./NavbarItem"
import { navbarLinks } from "@/constants/Navbar"
import Link from "next/link"
import Image from "next/image"
import AuthNav from "./AuthNav"

const Navbar = () =>{
    return(
        <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {/*Logo App*/}
        <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
                        src="/images/app-logo.png" 
                        alt="Giugno-Distribuciones" 
                        width={40} 
                        height={40} 
                        className="h-10" 
                                        
                    />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Giugno Distribuciones</span>
        </Link>
        <AuthNav/>
        
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            {/*Links items List*/}
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                {navbarLinks.map((item) => (
            <NavbarItem
            key={item.label}
            label={item.label}
            href={item.href}
/>
))}
            </ul>
        </div>
    </div>
</nav>
</>
    )
}

export default Navbar






