// components/Footer.tsx (o donde tengas tu Footer)

import Link from "next/link";
import React from "react";
import { navbarLinks } from "@/constants/Navbar"; 

const Footer = () => {
    return (
        <>
            <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Giugno Distribuciones</span>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            {/* Aquí mapeamos los navbarLinks */}
                            {navbarLinks.map((item) => (
                                <li key={item.label}> {/* Usar label como key, asumiendo que es único */}
                                    <Link href={item.href as string} className="hover:underline me-4 md:me-6">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">GiugnoDistribuciones™</a>. Todos los derechos reservados.</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;

