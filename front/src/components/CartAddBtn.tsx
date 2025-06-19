"use client"
import React from "react";
import Button from "./UI/Button";
import { useAuthContext } from "@/context/authContext";
import { routes } from "@/routes";
import Link from "next/link";
import { useCartContext } from "@/context/cartContext";
import { IProduct } from "@/types";
import { toast } from "react-toastify";

const CardAddBtn = ({ product }:{
    product:Partial<IProduct>;
}) =>{
    const { isAuth } = useAuthContext();
    const { addToCart,isProductInCart } = useCartContext();
    const isOnCart = isProductInCart(product.id || 0);

    const onAddClick = () =>{
        addToCart(product);
        toast.success(
            `Producto ${product.name} añadido al carrito`
        )
    };

    if(isAuth === null){
        return null; // no muestra nada pero podria ser un botton cargando
    }

    if(!isAuth){
        return(
            <div className="text-center p-4 border border-red-500 rounded-md">
                <p className="text-red-500 font-semibold text-xs">Debes <Link href={routes.login} className="text-black hover:bg-primary-400 text-xs bg-black-300">iniciar sesón</Link>  para agregar elementos al carrito.</p>
            
            </div>
        )
    }

    return(
        <Button
                className="w-full bg-primary-500 hover:bg-secondary-300 text-white font-semibold py-2 px-4 rounded"
                onClick={onAddClick} disabled = {isOnCart}
                label ={!isOnCart ? "Añadir al carrito": "Añadido al carrito"}
            />
    )
}

export default CardAddBtn;

