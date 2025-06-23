"use client";

import Button from "@/components/UI/Button";
import Input from "@/components/UI/input";
import { useAuthContext } from "@/context/authContext"; // Importa tu hook de contexto
import { routes } from "@/routes";
// Importar los tipos de retorno de servicio: ServiceSuccessResult y ServiceErrorResult
// y UserDataInResponse (que se usa en los tipos de retorno)
import { postLogin, ServiceSuccessResult, ServiceErrorResult, UserDataInResponse } from "@/services/auth"; 
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { IUser } from "@/types"; // Asegúrate de que esta importación sea correcta
import usePublic from "@/hooks/usePublic";

// NOTA: No importamos AxiosError aquí si no se va a usar axios.isAxiosError en el catch
// import axios, { AxiosError } from "axios"; 

export interface FormDataLogin {
    email:string;
    password:string;
}

// === PostLoginResponse (Ahora es simplemente la unión de los resultados del servicio) ===
type PostLoginResponse = ServiceSuccessResult<{ token: string; user?: UserDataInResponse }> | ServiceErrorResult;


const LoginFormUI = () => {
    usePublic();
    const router = useRouter();
    const { saveUserData } = useAuthContext(); 

    const [formData, setFormData] = useState<FormDataLogin>({
        email: "",
        password: '',
    });

    const [fromErrors, setFormErrors] = useState<FormDataLogin>({
        email: "",
        password: "",
    });

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [loading,setLoading] = useState<boolean>(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((state) => ({
            ...state,
            [name]: value,
        }));
        if (hasBeenSubmitted) {
            validate();
        }
    };

    const validate = () => {
        const errors: FormDataLogin = { email: "", password: "" };
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {
            errors.email = "Por favor, ingresa un correo electrónico válido.";
        }

        if (formData.password.trim() === "") {
            errors.password = "Por favor, ingresa una contraseña.";
        } else if (formData.password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 caracteres.";
        }

        setFormErrors(errors);

        return !errors.email && !errors.password;
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasBeenSubmitted(true);
        if (!validate()) { 
            toast.error("Por favor, corrige los errores del formulario.");
            return;
        }

        try {
            setLoading(true);
            const res: PostLoginResponse = await postLogin(formData); 
            
            // === LÓGICA DE ÉXITO/ERROR: Ahora es simplemente `res.success` ===
            if (res.success) { 
                const loginData = res.data; 

                console.log("¡Login exitoso! Datos del usuario:", loginData.user); 
                console.dir(loginData.user, { depth: null }); 
                console.log("Token de usuario:", loginData.token);
                
                // === LLAMADA A saveUserData (login del contexto) con el payload correcto ===
                // Verificamos que 'user' y 'token' dentro de 'loginData' existan antes de pasarlos
                if (loginData.user && loginData.token) { 
                    const payload = {
                        user: loginData.user as IUser, // Casteamos a IUser
                        token: loginData.token,
                        login: true // 'login' en SaveUserPayload es tu flag 'isAuth'
                    };
                    saveUserData(payload); // <--- ¡ESTA ES LA CORRECCIÓN! Pasamos UN solo objeto payload
                } else {
                    console.warn("Login exitoso, pero datos de usuario o token incompletos para guardar en contexto:", loginData);
                }
                
                toast.success(res.message); 
                
                setTimeout(() => {
                    router.push(routes.home);
                }, 3600);
            } else { // Si res.success es false (Hubo un error)
                console.error("Error al iniciar sesión. Respuesta completa:", res); 
                toast.error(res.message); 
            }
            
        } catch (error: unknown) {
            // === BLOQUE CATCH ADAPTADO A TU PREFERENCIA ===
            let errorMessage = "Ocurrió un error inesperado al iniciar sesión.";
            
            if (error instanceof Error) { 
                console.error("Error (catch block):", error.message);
                errorMessage = error.message;
            } else {
                console.error("Tipo de error desconocido:", error);
                errorMessage = "Ocurrió un error inesperado de tipo desconocido.";
            }
            toast.error(errorMessage);
        } finally {
            setLoading(false)
        }
    };
    
    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <form onSubmit={onSubmit} className="w-full">
                <Input
                    label="Correo electrónico"
                    type="text"
                    placeholder="sample@gmail.com"
                    autoComplete="email"
                    name="email"
                    id="email"
                    className="mb-4 w-full"
                    classnameContainer="w-full"
                    value={formData.email}
                    onChange={onChange}
                    required/>
                { fromErrors.email && (
                    <p className="text-red-300 text-sm mb-2">{fromErrors.email}</p>
                )}

                <Input
                    label="Contraseña"
                    type="password"
                    placeholder="********"
                    autoComplete="current-password"
                    name="password"
                    id="password"
                    className="mb-4 w-full"
                    classnameContainer="w-full"
                    value={formData.password}
                    onChange={onChange}
                    required/>
                { fromErrors.password && (
                    <p className="text-red-300 text-sm mb-2">{fromErrors.password}</p>
                )}
                
                <div className="flex flex-col items-center gap-2 w-full">
                    <Button
                    type="submit"
                    variant="default"
                    label="Iniciar sesión"
                    className="w-full mt-4"
                    loading={loading}
                    />

                    <Button
                        type="button"
                        variant="Link"
                        label="¿No tienes cuenta? Regístrate"
                        className="w-full"
                        onClick={() => router.push(routes.register)}
                    />
                </div>
            </form>

        </div>
    )
}

export default LoginFormUI;