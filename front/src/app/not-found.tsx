"use client";
import { routes } from "@//routes"; 
import Button from "@/components/UI/Button";
import Container from "@/components/UI/Container";
import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar/Navbar";
import Link from "next/link";
import React from "react";

const GlobalErrorPage = () => {
return (
    <>
        <Navbar/>
        <Container>
    <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-3xl font-bold text-red-600 mb-4">¡Algo salió mal! 404</h1>
        <p className="mb-6 text-gray-700 text-center max-w-md">
            Encontramos un error inesperado. Por favor, inténtalo de nuevo más tarde.
        </p>
        <Link
            href={routes.home}
            className="inline-block px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
        >
            <Button variant="default"
                label="Volver a la página principal"
                className="w-full"/>
        </Link>
    </div>
    </Container>
    <Footer/>
    </>

);
};

export default GlobalErrorPage;