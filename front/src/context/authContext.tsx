"use client";

import { IUser } from "@/types";
import React, { createContext, useContext, useState, useEffect } from "react";

type SaveUserPayload = {
    user:IUser;
    token:string;
    login:boolean
};

type AuthContextType = {
    //states
    //los valores
    user:IUser | null;
    token?:string | null
    isAuth:boolean | null
    //Actions
    // las acciones
    saveUserData:(data:SaveUserPayload) => void
    resetUserData:() => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

//local storage key
const USER_LOCAL_KEY = "user";


export const AuthProvider = ({ children }:{children:React.ReactNode}) =>{
    const [user,setUser] = useState<AuthContextType["user"]>(null)
    const [token,setToken] = useState<string | null>(null)
    const [isAuth,setIsAuth] = useState<AuthContextType["isAuth"]>(null);

    const saveUserData = (data:SaveUserPayload) =>{
        setUser(data.user)
        setIsAuth(data.login)
        setToken(data.token)

        //PERSISTIR LOS DATOS EN LOCAL STORAGE
        try { // Añadimos try-catch para la escritura también, por si hay problemas de storage lleno
            localStorage.setItem( USER_LOCAL_KEY, JSON.stringify(data));
        } catch (e) {
            console.error("Error guardando en localStorage:", e);
        }
    }

    const resetUserData = () =>{
        setUser(null);
        setIsAuth(false);
        setToken(null)
        //ELIMINAR LOS DATOS EN EL LOCAL STORAGE
        try {
            localStorage.removeItem(USER_LOCAL_KEY);
        } catch (e) {
            console.error("Error limpiando localStorage:", e);
        }
    };

    useEffect(() => {
        const storedData = localStorage.getItem(USER_LOCAL_KEY); // Obtiene el string o null
        let storage: SaveUserPayload; // <--- Declaramos 'storage' con el tipo esperado

        if (!storedData) { // Si no hay datos almacenados (es null), no hay sesión
            setIsAuth(false);
            return;
        }

        try {
            // === ASIGNAMOS Y PARSEAMOS DENTRO DEL TRY PARA SEGURIDAD ===
            // Aquí parseamos y TypeScript infiere el tipo, luego lo usamos de forma segura.
            // Si el parse falla, el catch lo manejará.
            storage = JSON.parse(storedData); 
            
            console.log("storage", storage); // Tu console.log original aquí

            // === VALIDACIÓN Y USO DE 'storage' ===
            // Comprobamos que 'storage' tenga las propiedades esenciales y válidas
            if (storage && typeof storage === 'object' && 'user' in storage && 'token' in storage && typeof (storage as SaveUserPayload).token === 'string' && 'login' in storage && typeof (storage as SaveUserPayload).login === 'boolean') {
                // Aquí, TypeScript ya sabe que 'storage' es SaveUserPayload
                setUser((storage as SaveUserPayload).user);
                setIsAuth((storage as SaveUserPayload).login);
                setToken((storage as SaveUserPayload).token);
            } else {
                // Si el objeto parseado no tiene las propiedades esperadas (es corrupto o un {})
                console.warn("Datos de autenticación en localStorage incompletos o corruptos. Limpiando.");
                resetUserData(); // Llama a tu función para limpiar el estado y localStorage
            }
        } catch (e) {
            // === MANEJO DEL ERROR DE JSON.parse ===
            // Esto se ejecutará si 'storedData' no es un JSON válido
            console.error("Error al cargar la sesión de localStorage (JSON parse error):", e);
            resetUserData(); // Limpiamos la sesión si el JSON está mal
        }
    }, []); // El array vacío para que se ejecute solo una vez al montar

    return(
        <AuthContext.Provider value={{
            user,
            token,
            isAuth,
            //Actions
            saveUserData,
            resetUserData,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook

export const useAuthContext = () =>{
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("useAuthContext debe usarse dentro de un AuthProvider")
    }

    return context
};