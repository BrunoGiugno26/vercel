"use client"
import Link from "next/link";
import React, { FC } from "react";
import cs from "classnames";
import { usePathname } from "next/navigation";

export interface NavbarItemProps{
    label:string;
    href?:string;
    isActive?:boolean

}

const NavbarItem:FC<NavbarItemProps> = ({
    label,
    href = "#",
    isActive = false
}) => {
    const pathname = usePathname();
    const isCurrentPage = pathname===href
    return(
        <li>
            <Link href={href} className={cs("text-gray-900 dark:text-white hover:underline",(isActive|| isCurrentPage) && "font-bold text-primary-200 dark:text-primary200")} aria-current="page">{label}</Link>
        </li>
    )
}

export default NavbarItem