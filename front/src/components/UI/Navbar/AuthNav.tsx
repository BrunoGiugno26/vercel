"use client"
import React from "react";
import { routes } from "@/routes";
import { useAuthContext } from "@/context/authContext";
import { RiUser3Fill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";
import { useCartContext } from "@/context/cartContext";

const AuthNav = () => {
    const { user,isAuth,resetUserData } = useAuthContext();
    const {total} = useCartContext();
    console.log("user",user);

    const logout = () =>{
        resetUserData();

        location.href = routes.home
    };

    if(isAuth === null){
        return <p>...Cargando</p>
    }

    if(isAuth){
        console.log("==> Usuario actual en AuthNav (seguimiento persistente):");
        console.dir(user, { depth: null }); // Muestra el objeto user completamente expandido
        // Si por alguna razón console.dir no te lo expande, usa JSON.stringify:
        // console.log("==> Usuario actual en AuthNav (seguimiento persistente - JSON):", JSON.stringify(user, null, 2));
        return(
            <div className="flex items-center justify-end space-x-4 rtl:space-x-reverse">
                <Link href={routes.cart}>
                <div className="relative w-6 h-6 flex items-center justify-center mx-2">
                    <GiShoppingCart />
                    {Boolean(total) && (<span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {total}
                    </span>
                    )}
                </div>{" "}
                </Link>
                <Link href={routes.profile} className="flex gap-4 items-center">
                <span>{user?.name ||"Nombre del Usuario"}</span>

                <div className="w-fit h-6 flex items-center justify-center rounded-full mr-2 bg-red-50 text-red-400">
                    <RiUser3Fill size={24} />
                </div>
                </Link>

                <button className = "text-sm text-primary-500 dark:text-blue hover:underline" onClick={logout}>
                <IoMdLogOut className="h-5 w-5" />
                </button>
            </div>
        );
    }
    return(
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link href={routes.register} className="text-sm text-primary-300 hover:underline">Registrarse</Link>
            <Link href={routes.login} className="text-sm text-primary-300 hover:underline">Iniciar sesión</Link>
        </div>
    )
}
export default AuthNav
