// front/src/components/ProductList.tsx (o donde decidas ubicarlo)

import React, { FC } from "react";
import ProductCard from "./ProductCard"; 
import { IProduct } from "@/types"; 

interface ProductListProps {
products: Partial<IProduct>[]; 
}

const ProductList: FC<ProductListProps> = ({ products }) => {
    if(!products || products.length === 0){
        return(
        <div className="min-h-[45vh] text-center flex items-center justify-center">
            <p>No hay productos disponibles</p>
        </div>
        )
    }
return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p: Partial<IProduct>) => ( 
            <ProductCard 
                key={p.id} 
                {...p}    
            />
        ))}
    </div>
);
};

export default ProductList;