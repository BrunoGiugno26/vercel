"use server";
import axios from "axios";

const axiosApiBack = axios.create({
    baseURL: process.env.API_URL//"http://localhost:3002",
})

export const getProducts = async () => {
    try{
        //Fetch Products FROM BACKEND
    //const res = await fetch("http://localhost:3002" + "/products")
    //const products = await res.json();
    
    const res = await axiosApiBack.get("/products");

    if(!res.data || !Array.isArray(res.data)){
        console.warn("invalid products data format",res.data)
        return [];
    }

    return res.data
    } catch (e:unknown){
        if(e instanceof Error)
        console.warn("Error fetching products list",e?.message);
        return[];
    }
}

export const getProductById = async (id: string) => {
try {
    const res = await axiosApiBack.get(`/products/${id}`); // La ruta es relativa a baseURL de axiosApiBack

    // Verificar si los datos recibidos son válidos (no nulos y es un objeto)
    if (!res.data || typeof res.data !== "object") {
    console.warn("Invalid product data format", res.data);
      return null; // Retornar null si los datos no son válidos
    }

    // Retornar los datos del producto (axios guarda la respuesta en `res.data`)
    return res.data; 

} catch (e: unknown){ 
    if(e instanceof Error)
    console.warn("Error fetching product by ID", e?.message); // Usar e?.message para errores de red
    return null; // Retornar null en caso de cualquier error
    }
};