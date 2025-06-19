import { Params, SearchParams } from "@/types";
import React from "react";
import Image from "next/image";
import Container from "@/components/UI/Container";
import { redirect } from "next/navigation";
import { routes } from "@/routes";
import { getProductById } from "@/services/products";
import CardAddBtn from "@/components/CartAddBtn";

export default async function ProductDetail(props: {
    params: Params
    searchParams: SearchParams
}) {
    const params = await props.params;
    const [id = undefined] = params.slug;
    
    const product = await getProductById(id || "")

    //const product = productsSample.find((product) => product.id === Number(id));

    if(!product){
        return redirect(routes.not_found);
    }    
    
    return (
        <Container>
            <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden">
            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">Detalle del producto</span>
                {product ? (
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 w-full h-64 relative">
                            <Image
                                src={product.image} 
                                alt={product.name} 
                                layout="fill"     
                                objectFit="contain" 
                                className="rounded-xl" 
                                priority          
                            />
                        </div>
                        <div className="md:w-1/2 w-full p-8 ">
                            <h2 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h2>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <div className="flex items-center mb-2">
                                <span className="text-xl font-semibold text-green-600 mr-4">${product.price}</span>
                                <span className={`px-3 py-1 rounded-full text-sm ${product.stock > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                    {product.stock > 0 ? `In Stock: ${product.stock}` : "Sin Stock"}
                                </span>
                            </div>
                            <CardAddBtn
                            product ={product}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">Producto no encontrado</h2>
                        <p className="text-gray-500">Por favor, verifica la URL o vuelve a la lista de productos.</p>
                    </div>
                )}
            </div>
        </Container>
    );
}