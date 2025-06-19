"use client"
import { useAuthContext } from "@/context/authContext";
import { routes } from "@/routes";
import { getOrdersUser } from "@/services/orders";
import { IOrder } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrdersUser = () => {
    const router = useRouter();
    const {token} = useAuthContext();
    const [orders,setOrders] = useState<IOrder[] | null>(null);

    useEffect(() =>{
        const res = async () =>{
            try{

                if(!token){
                    console.warn("No token found,cannot fetch orders");
                    return router.push(routes.login);
                }

                const response = await getOrdersUser(token);
                
                setOrders(response);
            }catch(error){
                console.warn("Error fetching orders:", error);
            }
        };
        
        res();
    },[router,token])

    if(orders === null){
        return <p>Cargando ordenes...</p>
    }
    return (
        <>
        {orders.length > 0 ? (
            orders.map((order) => {
                const total = order.products && order.products.length > 0
                    ? order.products.reduce((sum, product) => sum + product.price, 0)
                    : 0;
                return (
                <div key={order.id} className="mb-4 p-3 border rounded-md">
                    <p className="text-gray-700 font-semibold">Orden ID: {order.id}</p>
                    <p className="text-gray-700">Estado: {order.status}</p>
                    <p className="text-gray-700">
                        Fecha: {new Date(order.date).toLocaleDateString()}
                    </p>
                    <h4 className="text-md font-medium mt-2 mb-1">Productos de la Orden:</h4>
                    {order.products && order.products.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-600 text-sm">
                            {order.products.map((product) => (
                                <li key={product.id}>
                                    {product.name} - (x1) ${product.price}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600 text-sm">No hay productos en esta orden.</p>
                    )}
                    <p className="text-right font-bold mt-2">Total: ${total}</p>
                </div>
                );
            })
        ) : (
            <p>No tienes órdenes.</p>
        )}
        </>
    )
}

export default OrdersUser