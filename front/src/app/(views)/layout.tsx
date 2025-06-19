import React from "react";
import { FC } from "react";
import Navbar from "@/components/UI/Navbar/Navbar";
import Footer from "@/components/UI/Footer";
interface LayoutProps{
    children:React.ReactNode
}

const Layout: FC <(LayoutProps)> = ({children}) =>{
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout