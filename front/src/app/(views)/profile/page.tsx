import Container from "@/components/UI/Container";
import React from "react";
import DataUser from "./components/DataUser";
import OrdersUser from "./components/OrdersUser";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Perfil | Ususario",
    description: "Perfil de ussuario",
};

const ProfilePage = () => {

return (
    <Container>
    <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold m-4">Perfil de Usuario</h1>
        <div className="bg-white shadow-md rounded-lg p-6 w-full ">
    <DataUser/>
        


    <h3 className="text-lg font-semibold mb-2">Órdenes</h3>
    <OrdersUser/>
    </div>
    </div>
    </Container>
    );
};

export default ProfilePage;