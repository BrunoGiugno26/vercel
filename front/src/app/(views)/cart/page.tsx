// app/(views)/Cart/page.tsx 
import React from "react";
import Container from "@/components/UI/Container";
import CreateOrderBtn from "./components/CreateOrderBtn";
import RenderProducts from "./components/RenderProducts";

const CartPage = () => {
    return (
        <Container>
        <div className="py-8 "> 
        <h1 className="text-2xl font-bold m-10 text-center">Carrito de Compras</h1>

            {/* Sección de Productos en el Carrito */}
        <div className="bg-greay shadow-md rounded-lg p-6 mb-6"> 
            <div className="flex items-center justify-between text-xl font-semibold mb-8 p-6">
                <h2>Productos en el Carrito</h2>
                <CreateOrderBtn/>
            </div>

        <RenderProducts/>
        </div>

            {/* Sección de Resumen del Pedido */}
        <div className="bg-white shadow-md rounded-lg p-6"> {/* Caja blanca para resumen */}
        <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
        <div id="total-container"></div>
        </div>
        </div>
        </Container>
    );
};

export default CartPage;