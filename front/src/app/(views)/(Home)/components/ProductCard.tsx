import { IProduct } from "@/types";
import React, { FC } from "react";
import Image from "next/image"; 
import Link from "next/link";
import { routes } from "@/routes";
import CardAddBtn from "@/components/CartAddBtn";

const ProductCard: FC<Partial<IProduct>> = (product) =>{
  const{
    name,
    description,
    price,
    stock,
    image,
    id
  } = product


  const generateUrl = (id:string | number) => {
    return `${routes.product_detail}/${id}/${name?.toLowerCase().replace(/\s+/g, '-')}`;
  }

return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {/* Enlace de la imagen del producto */}
      {/* Si usas Link de Next.js, pasa `href` dinámicamente */}
    <Link href={generateUrl(id||"default-id")}>
    <div className="relative w-full h-52">
        <Image
        fill
        className="p-8 rounded-t-lg object-contain"
        src={image || "/docs/images/products/apple-watch.png"}
        alt={name || "product image"}
        />
    </div>
    </Link>
    <div className="px-5 pb-5">
        {/* Enlace del nombre del producto */}
        <Link href={generateUrl(name||"default-id")} className="hover:underline">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name || "Producto sin nombre"}
        </h5>
        </Link>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
        {description || "Sin descripción"}
        </p>
        <div className="flex items-center mt-2.5 mb-5">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
        </div>
          {/* Aquí usas `Primary-100` y `Primary-800` que son correctos de tu tema */}
        <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-primary-200 dark:text-primary-800">
            5.0
        </span>
        </div>
        <div className="flex items-center justify-between flex-col gap-3">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price !== undefined ? `$${price}` : "Sin precio"}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
            {stock !== undefined ? `Stock: ${stock}` : "Sin stock"}
        </span>
          {/* MANTENEMOS COMO <a> ENLACE CON SUS ESTILOS DE COLOR PRIMARY */}
      <CardAddBtn
      product={product}
      />
        </div>
    </div>
    </div>
);
};

export default ProductCard