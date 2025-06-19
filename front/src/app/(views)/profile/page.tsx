import Container from "@/components/UI/Container";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import DataUser from "./components/DataUser";
import OrdersUser from "./components/OrdersUser";


export async function generateMetadata(
  { params }: { // 'params' se usa para 'slug'
    params: {slug:string};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _parent: ResolvingMetadata // Usar '_parent' y la directiva Eslint
): Promise<Metadata> {
  const { slug } = params; // 'slug' se extrae de 'params'
  
  // fetch post information (si esto es un placeholder y no se usa, Eslint lo marcará)
  const user ={ // 'user' se usa en el title de la Metadata
    name:"Usuario",
    email:"",
  }

  return{
     // === ¡AQUÍ ES DONDE SE USA 'slug' PARA RESOLVER EL ERROR DE ESLINT! ===
    title:`Perfil de ${slug || user.name || "Usuario"} | Giugno Distribuciones`, // Usamos slug o user.name como fallback
    description: "Ecommerce de venta de productos de tecnologia"
  }
}


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