import Image from "next/image";
import React from "react";
import Container from "@/components/UI/Container"
import ProductList from "./components/ProductList";
import { getProducts } from "@/services/products";

const getData = async() =>{
  const products = await getProducts();
    return{
      products
    }
}

export default async function Home() {
  const { products } = await getData();
  return (
    <>
      {/* Sección del banner/imagen de héroe */}
      <div className="relative w-full h-[60vh] overflow-hidden"> {/* He puesto h-[60vh] como lo quieres */}
        {/* Tu imagen de héroe */}
        <Image
          src="https://ik.imagekit.io/fefgntjox/Ecommerce.jpg?updatedAt=1749235609588"
          alt="hero"
          fill
          className="object-cover"
        />
      </div>

      {/* Aquí es donde envolvemos el título y el mapeo de productos en el Container */}
      <Container> 
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-8 pl-2 border-l-4 border-red-500">
          Productos destacados
        </h2>
        <ProductList
        products={products || []}
        />
      </Container> 
    </>
  );
}