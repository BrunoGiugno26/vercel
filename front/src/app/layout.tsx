import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";
import { Bounce, ToastContainer } from "react-toastify";
import { AuthProvider } from "@/context/authContext";
import { CartProvider } from "@/context/cartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giugno Distribuciones",
  description: "Ecommerce de ventas de productos de tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AuthProvider>
        <CartProvider>
        {children}
        <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
        </CartProvider>
      </AuthProvider>
      </body>
    </html>
  );
}
