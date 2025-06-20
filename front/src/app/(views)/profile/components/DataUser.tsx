"use client";
import { useAuthContext } from "@/context/authContext";
import usePrivate from "@/hooks/usePrivate";
import { routes } from "@/routes";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const DataUser = () =>{
    const router = useRouter()
    usePrivate();
    const { user } = useAuthContext();

    useEffect(() => {
    if (!user) {
        router.push(routes.home)
    }
    }, [user,router]);

if (!user) {
    return null;
}
    return(
        <>
        <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
        <p className="text-gray-700 mb-1">Email: {user.email}</p>
        <p className="text-gray-700 mb-1">Dirección: {user.address}</p>
        <p className="text-gray-700 mb-1">Teléfono: {user.phone}</p>
        <p className="text-gray-700 mb-4">Rol: {user.role}</p>
        </>
    )
}

export default DataUser