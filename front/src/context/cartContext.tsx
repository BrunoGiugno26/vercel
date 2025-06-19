"use client";

import { IProduct } from "@/types";
import React, { createContext, useContext, useEffect } from "react";

type CartContextType = {
    //States
    cart:Partial<IProduct>[];
    total:number;
    priceTotal:number;

    //Actions
    addToCart:(product:Partial<IProduct>) => void;
    removerFromCart:(productId:number) => void;
    isProductInCart:(productId:number) => boolean;
    resetCart:() => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_LOCAL_STORAGE_KEY= "cart";
const CART_TOTAL_LOCAL_STORAGE_KEY = "cartTotal";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart,setCart] = React.useState<CartContextType["cart"] | undefined>()
    const [total,setTotal] = React.useState<number>()
    const [priceTotal,setPriceTotal] = React.useState<number>()

    const addToCart = (product: Partial<IProduct>) =>{
        setCart((prevCart) => [...(prevCart || []), product]);
        setTotal((prevTotal) => (prevTotal || 0) + 1);
        setPriceTotal((prevPriceTotal) => {
            if(prevPriceTotal === undefined || prevPriceTotal < 0){
                return product.price || 0;
            }
            return prevPriceTotal + (product.price || 0);
        });
    };

    const removerFromCart = (productId:number) =>{
        setCart((prevCart) =>{
            if(!prevCart){
                return[];
            } 
            const updatedCart = prevCart.filter((item) => item.id !== productId);
            return updatedCart
        })
        setTotal((prevTotal) => {
            if(prevTotal === undefined || prevTotal <= 0){
                return 0;
            }
            return prevTotal -1;
        });

        setPriceTotal((prevPriceTotal) => {
            if(prevPriceTotal === undefined || prevPriceTotal <= 0){
                return 0;
            }
            const productToRemove = cart?.find((item) => item.id === productId);
            return(
                prevPriceTotal - (productToRemove?.price || 0)
            ); // Restar el precio del producto eliminado
            });
        ;
    };

    const resetCart = () =>{
        setCart([]);
        setTotal(0);
        setPriceTotal(0);
        localStorage.removeItem(CART_LOCAL_STORAGE_KEY);
        localStorage.removeItem(CART_TOTAL_LOCAL_STORAGE_KEY);
    };

    const isProductInCart = (productId:number) =>{
        return cart ? cart.some((item) => item.id === productId): false;
    };

    useEffect(() => {
        if(!cart){
            return;
        }
        //Guardar el carrito en localStorage
        localStorage.setItem(CART_LOCAL_STORAGE_KEY,JSON.stringify(cart));
        localStorage.setItem(CART_TOTAL_LOCAL_STORAGE_KEY,JSON.stringify(total || 0));
    },[cart,total])

    //Restauracion

    useEffect(() =>{
        const storedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
        const storedTotal = localStorage.getItem(CART_TOTAL_LOCAL_STORAGE_KEY);

        if(!storedCart || !storedTotal){
            setCart([]);
            setTotal(0);
            return;
        }
            setCart(JSON.parse(storedCart));
            setTotal(JSON.parse(storedTotal));
        
    },[])

    //Agregados

    //useEffect(() =>{
    //    if(!cart || cart.length === 0){
    //        setPriceTotal(0);
    //        return;
    //    }

    //    const totalPrice = cart.reduce((acc,item) => acc + (item.price || 0),0);
    //    setPriceTotal(totalPrice);
    //},[cart])

    return (
        <CartContext.Provider
        value={
        {
            cart: cart || [],
            total:total || 0,
            priceTotal:priceTotal || 0,
          // Actions
            addToCart,
            removerFromCart,
            isProductInCart,
            resetCart,
        }
    }
    >
        {children}
        </CartContext.Provider>
    );
};

// custom hook
// const {...las props del context} = useCartContext();
export const useCartContext = () => {
  // Component
const context = useContext(CartContext);

if (!context) {
    throw new Error("useCartContext debe usarse dentro de un AuthProvider");
}

return context;
};