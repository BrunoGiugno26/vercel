// front/src/app/(views)/landing/page.tsx

import React from "react";
import Image from "next/image"; 
import Link from "next/link"; 
import Container from "@/components/UI/Container"; 
import ProductList from "@/app/(views)/(Home)/components/ProductList"; 
import productsSample from "@/helpers/products"; 
import Button from "@/components/UI/Button"; 
import { routes } from "@/routes"; 

const LandingPage = () => {
return (
    <>
      {/* Sección Hero / Banner Principal */}
    <div className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center bg-gray-100">
        <Image
        src="https://ik.imagekit.io/fefgntjox/Banner.jpg?updatedAt=1749432569224" 
        alt="Banner de productos de tecnología"
        layout="fill"
        objectFit="cover" 
        priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay oscuro */}
        <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            La Mejor Tecnología a Tu Alcance
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Descubre las últimas innovaciones en celulares, computadoras, gaming y más.
        </p>
        <Link href={routes.home}>
            <Button
            label="Explorar Productos"
            className="px-8 py-3 text-lg font-semibold bg-primary-500 hover:bg-primary-400 transition-colors shadow-lg"
            />
        </Link>
        </div>
    </div>

      {/* Sección de Productos Destacados */}
    <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mt-12 mb-8">
        Nuestros Productos Más Populares
        </h2>
        {/* Aquí usas tu ProductList para mostrar una selección de productos */}
        {/* Puedes pasarle solo una parte de productsSample si no quieres mostrar todos */}
        <ProductList products={productsSample.slice(0, 4)} /> {/* Mostrar los primeros 4 productos */}
        
        {/* Enlace para ver todos los productos */}
        <div className="text-center mt-10 mb-12">
        <Link href={routes.home}>
            <Button
                label="Ver Todos los Productos"
                className="px-6 py-3 text-lg font-semibold bg-primary-500 hover:bg-primary-400 transition-colors shadow-lg"
            />
        </Link>
        </div>
    </Container>

      {/* Sección Adicional (Opcional, por ejemplo, "Sobre Nosotros" o "Servicios") */}
    <div className="bg-gray-50 py-16">
        <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ¿Quiénes Somos?
            </h2>
            <p className="text-gray-600 leading-relaxed">
                Giugno Distribuciones es tu aliado tecnológico. Nos dedicamos a ofrecer los mejores productos electrónicos del mercado, con un enfoque en la calidad, la innovación y un servicio al cliente excepcional. Nuestra misión es acercarte el futuro, hoy.
            </p>
            <Link href={routes.landing} className="inline-block mt-6">
                <Button
                label="Conocer mas"
                className="px-6 py-3 text-lg font-semibold bg-secondary-500 hover:bg-secondary-400 transition-colors shadow-lg"
            />
            </Link>
            </div>
            <div className="flex justify-center">
            <Image 
                src="https://ik.imagekit.io/fefgntjox/Logo%20GiugnoDistribuciones.jpeg?updatedAt=1749432834776" 
                alt="Sobre Nosotros" 
                width={400} 
                height={300} 
                className="rounded-lg shadow-lg" 
            />
            </div>
        </div>
        </Container>
    </div>
    </>
);
};

export default LandingPage;