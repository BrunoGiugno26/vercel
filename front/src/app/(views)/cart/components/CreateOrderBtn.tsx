"use client";
import Button from "@/components/UI/Button";
import Modal from "@/components/UI/Modal";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import usePrivate from "@/hooks/usePrivate";
import { routes } from "@/routes";
import { postOrder } from "@/services/orders";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

export interface CreateOrderPayload{
    products: number[];
    userId: number;
}

const CreateOrderBtn = () => {
    const router = useRouter();
    const {user,token} = useAuthContext();
    const {cart,resetCart} = useCartContext();
    const [isModalOpen,setIsModalOpen] = React.useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleCreateOrder = async () =>{
        console.log("Crear Orden")
        const payload: CreateOrderPayload = {
            userId: user?.id || 0,
            products:cart.map((item) => item.id as number),
        };

        try{
            if(!token){
                console.warn("No token found,cannot fetch orders");
                return router.push(routes.login);
                }
            const res = await postOrder(payload,token);

            if(!res){
                console.warn("No se pudo crear la orden");
                toast.error("No se pudo crear la orden");
                return
            }

            // Se creo la orden correctamente
            toast.success("Orden creada correctamente: #" + res.id);

            resetCart();
            setTimeout(() =>{
                router.push(routes.profile);},3000)
        } catch(error){
            console.warn("Error creating order:",error);
            toast.error("No se pudo crear la orden");
        } finally{
            handleCloseModal();
        }
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    usePrivate();

    return(
        <>
        <Button onClick={handleOpenModal} label = "Crear orden"></Button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold text-primary-600 mb-2">Confirmación</h2>
            <p className="mb-5">¿Estas seguro que deseas crear una orden?</p>
            <div className="flex gap-5 w-fit">
                <Button
                className="bg-primary-500 hover:bg-primary-300"
                onClick={handleCloseModal}
                label="Cancelar"
                />
                <Button
                className="bg-primary-500 hover:bg-primary-300"
                onClick={handleCreateOrder}
                label="Crear Orden"
                />
            </div>
            </div>
        </Modal>
        </>
    );
};

export default CreateOrderBtn