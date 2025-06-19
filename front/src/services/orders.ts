"use server";
import { CreateOrderPayload } from "@/app/(views)/cart/components/CreateOrderBtn";
import { IOrder } from "@/types";
import axios from "axios"; // Importar AxiosError para un mejor tipado

const axiosApiBack = axios.create({
    baseURL: process.env.API_URL, // "http://localhost:3002",
});

export const getOrdersUser = async(token:string) =>{
    try{
        const response = await axiosApiBack.get("/users/orders",{
            headers:{
                Authorization: token,
            }, // objeto options para la peticion
        });
        return response.data;
    }catch (error){
        console.error("Error fetching user orders:",error);
        throw error;
    }
};

export const postOrder = async(data:CreateOrderPayload,token:string): Promise<IOrder> =>{
    try{
        const response = await axiosApiBack.post("/orders",data,{
            headers:{
                Authorization: token,
            }, // objeto options para la peticion
        });
        return response.data;
    } catch(error){
        console.error("Error creating order:",error);
        throw error;
    }
}