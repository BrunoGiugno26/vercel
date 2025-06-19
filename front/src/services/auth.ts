// services/auth.ts
"use server";
import { FormDataLogin } from "@/app/(static)/(auth)/login/components/LoginFormUI";
import { FormDataRegister } from "@/app/(static)/(auth)/register/components/RegisterForm";
import axios, { AxiosError } from "axios"; // Importar AxiosError para un mejor tipado

const axiosApiBack = axios.create({
    baseURL: process.env.API_URL || "http://localhost:3002", // Mantenemos baseURL igual
})

// === INTERFACES para las estructuras de datos específicas de tu API ===

export interface CredentialData {
    id?: number;
    password?: string;
}

export interface UserDataInResponse {
    id?: number;
    name?: string;
    email?: string;
    address?: string;
    phone?: string;
    role?: string;
    credential?: CredentialData;
    orders?: unknown[];
}

export interface BackendErrorRawResponse {
    message?: string;
    errors?: Record<string, unknown> | string;
}

export interface ServiceSuccessResult<T> {
success: true;
message: string;
  data: T; // Los datos útiles (ej. UserDataInResponse, {token: string, user: UserDataInResponse})
}

export interface ServiceErrorResult {
success: false;
message: string;
errors?: Record<string, unknown> | string;
}


// === FUNCIÓN postRegister con la lógica de éxito MÁS ROBUSTA ===
export const postRegister = async (data:FormDataRegister): Promise<ServiceSuccessResult<UserDataInResponse> | ServiceErrorResult> => {
    try{
    const res = await axiosApiBack.post("/users/register", data );

        // === CAMBIO CLAVE AQUÍ: Lógica de éxito SIMPLIFICADA y ROBUSTA para registro ===
        // Si el status es 200 o 201, Y res.data existe, Y encontramos un 'id' en res.data o res.data.errors
        // Esto cubre casos donde el backend devuelve el ID en diferentes niveles
        if((res.status === 200 || res.status === 201) && res.data && typeof res.data === 'object' && 
            ('id' in res.data || ('errors' in res.data && typeof res.data.errors === 'object' && 'id' in res.data.errors)) ){
            
            // Intentamos extraer los datos del usuario de 'errors' o directamente de 'res.data'
            const userData = ('errors' in res.data && typeof res.data.errors === 'object' && res.data.errors) 
                            ? res.data.errors as UserDataInResponse
                            : res.data as UserDataInResponse;

            return {
                success: true, // ¡Forzamos a 'true' si cumple esta condición!
                message:"Usuario registrado correctamente", // Mensaje CLARO
                data: userData, // Los datos de usuario extraídos
            };
        } 
        // Si no cumple la condición de éxito (status no 200/201, o no encontramos un 'id' válido)
        else { 
            console.warn("Respuesta de registro con formato inesperado o fallo (services/auth.ts):", res.data);
            return {
                success: false,
                message: res.data?.message || "Error al registrar el usuario: formato inesperado de respuesta.",
                errors: res.data,
            };
        }

    } catch (e:unknown){
    const axiosError = e as AxiosError<BackendErrorRawResponse>;
    console.warn("Error en postRegister (catch block):", axiosError.message, axiosError.response?.data);
    
    return{
    success: false,
    message: axiosError.response?.data?.message || "Error al registrar el usuario", 
    errors: axiosError.response?.data?.errors || axiosError.message || "Error desconocido", 
    }}
}

// === FUNCIÓN postLogin (Se mantiene igual a la última versión correcta) ===
export const postLogin = async (data:FormDataLogin): Promise<ServiceSuccessResult<{ token: string; user?: UserDataInResponse }> | ServiceErrorResult> => {
    try{
    const res = await axiosApiBack.post("/users/login", data );

    if(res.status === 200 && res.data && res.data.token){
        return {
            success: true,
            message:"Inicio de sesión exitoso", 
            data: {
            token: res.data.token,
            user: res.data.errors?.user as UserDataInResponse || res.data.user as UserDataInResponse,
        },
    };

    } else {
        console.warn("Respuesta de login exitosa con formato inesperado (sin token):", res.data);
        return {
            success: false,
            message: res.data?.message || "Error al iniciar sesión: formato inesperado de respuesta.",
            errors: res.data,
        };
    }

    } catch (e:unknown){
        const axiosError = e as AxiosError<BackendErrorRawResponse>;
        console.warn("Error en postLogin (catch block):", axiosError.message, axiosError.response?.data);

    return{
        success: false,
            message: axiosError.response?.data?.message || "Error al iniciar sesion",
            errors: axiosError.response?.data?.errors || axiosError.message || "Error desconocido",
    }}
}