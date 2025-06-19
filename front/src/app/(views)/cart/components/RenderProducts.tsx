"use client";
import GenericPortal from "@/components/GenericPortal";
import { useCartContext } from "@/context/cartContext";
import { IProduct } from "@/types";
import Image from "next/image";
import { BsTrash3 } from "react-icons/bs";
import React from "react";
import { toast } from "react-toastify";

const RenderProducts = () =>{
    const {cart,removerFromCart,priceTotal} = useCartContext();
        const showCartItems = cart && cart.length > 0; 
        
    const onDelete = (crrP: Partial<IProduct>) =>{
        if (crrP.id !== undefined) { // Asegúra de que el id no sea undefined
            removerFromCart(crrP.id);
            toast.success(`Producto ${crrP.name || ''} eliminado del carrito`); // Fallback para crrP.name
        }
}; 
            
    return(
        <>
        {showCartItems ? ( // Esto ahora será true si hay productos
                    // Si showCartItems es true, mapea y muestra los productos
                    cart.map((product) => (
                        <div key={product.id} className="mb-8 border-b pb-4 flex items-start gap-4">
                            {/* === ¡CORRECCIÓN AQUÍ PARA product.image! === */}
                            {product.image ? ( // Condición para asegurar que product.image es un string
                                <Image
                                    src={product.image} // Solo se usa si product.image existe
                                    alt={product.name || 'Imagen de producto'} // Agregué un fallback para alt
                                    width={128}
                                    height={128}
                                    className="w-32 h-32 object-cover"
                                />
                            ) : (
                                // Esto se muestra si product.image es undefined o null
                                <div className="w-32 h-32 bg-gray-200 flex items-center justify-center mr-4 rounded-md">
                                    <span className="text-gray-500 text-xs">No image</span>
                                </div>
                            )}
                            
                            <div>
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p>
                                    <strong>Precio:</strong> ${product.price}
                                </p>
                                <p>
                                    <strong>Descripción:</strong> {product.description}
                                </p>

                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={() => onDelete(product)}>
                                    <BsTrash3 className="w-9 h-9 hover:text-gray-400 transition-colors" />
                                </button>
                            </div>
                        </div>
                    ))
                    ) : (
                    // Si showCartItems es false, muestra el mensaje de carrito vacío
                    <p className="text-red-500">No hay productos en el carrito.</p>
                    )}
                    
                    <GenericPortal containerId="total-container">
                        <p>Total: ${priceTotal.toFixed(2)}</p>
                    </GenericPortal>
        </>
    )
}

export default RenderProducts