"use client";
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Input from '@/components/UI/input';
import FormErrorMsg from '@/components/UI/FormErrorMsg';
import Button from '@/components/UI/Button';
// Importa los tipos de retorno de servicio: ServiceSuccessResult y ServiceErrorResult
// y UserDataInResponse (que se usa en los tipos de retorno)
import { postRegister, ServiceSuccessResult, ServiceErrorResult, UserDataInResponse } from '@/services/auth'; 
import { toast } from "react-toastify";
import { routes } from "@/routes";
import { useRouter } from "next/navigation";
import usePublic from '@/hooks/usePublic';

const SignupSchema = yup.object().shape({
    name: yup.string().required("El nombre es requerido"),
    password: yup.string()
        .min(6, 'La contraseña es demasiado corta')
        .required('La contraseña es requerida'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), ""], "Las contraseñas deben coincidir")
        .required("La confirmacion de contraseña es requerida"),
    address: yup.string().required("La direccion es requerida"),
    phone: yup
    .string()
    .matches(/^[0-9]{8,15}$/, "El número de teléfono debe contener solo números y tener entre 8 y 15 dígitos")
    .required("El numero de telefono es requerido"),
    email: yup.string().email('Correo electrónico inválido').required('El correo electronico es requerido'),
});

export interface FormDataRegister {
    name:string;
    password:string;
    address:string;
    phone:string;
    email:string;
}

const RegisterFormUI = () => {
    usePublic()
    const router = useRouter();
    return (
        <Formik 
            initialValues={{
                email: "", // Cambia esto para cada prueba de registro
                password: '',
                confirmPassword: '', 
                name: '',
                address: '',
                phone: '',
            }}

            validationSchema={SignupSchema}
            onSubmit={async (values) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { confirmPassword,...data } = values;

                try{
                    const res: ServiceSuccessResult<UserDataInResponse> | ServiceErrorResult = await postRegister(data); 

                    // === LÓGICA CLAVE: VERIFICAR res.success ===
                    if (res.success){ // <--- ¡CAMBIO AQUÍ! Ahora simplemente verificamos 'success'
                        toast.success(res.message); // El mensaje de éxito viene en res.message
                        // Si quieres ver los datos del usuario registrado:
                        console.log("Usuario registrado exitosamente:", res.data); 
                        
                        setTimeout(()=>{
                            router.push(routes.login)
                        },3600)
                    } else { // Si res.success es false (Hubo un error)
                        toast.error(res.message); // El mensaje de error viene en res.message
                        // Los detalles del error estarían en res.errors (si existen)
                        console.error("Detalles del error de registro:", res.errors); 
                    }

                } catch (error: unknown) {
                    let errorMessage = "Ocurrió un error inesperado al registrar el usuario.";
                    
                    // Manejo básico de errores para la consola
                    if (error instanceof Error) {
                        console.error("Error (catch block):", error.message);
                        errorMessage = error.message;
                    } else {
                        console.error("Tipo de error desconocido:", error);
                        errorMessage = "Ocurrió un error inesperado de tipo desconocido.";
                    }
                    toast.error(errorMessage);
                } finally {
                    // Puedes poner setLoading(false) aquí si tienes un estado de carga global
                }
            }}
        >
            {({ errors, touched, handleChange, handleBlur, values, isSubmitting, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-4">
                    <div className="flex flex-row gap-4 w-full">
                        <div className="flex flex-col gap-4 w-1/2">
                            <Input
                                id='email'
                                label='Correo electrónico'
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                classnameContainer='w-full'
                            />
                            {errors.email && touched.email && <FormErrorMsg msg={errors.email} />}

                            <Input
                                id='password'
                                label='Contraseña'
                                type="password"
                                name="password"
                                placeholder='***********'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                classnameContainer='w-full'
                            />
                            {errors.password && touched.password && <FormErrorMsg msg={errors.password} />}

                            <Input
                                id='confirmPassword'
                                label='Confirmar contraseña'
                                type="password"
                                name="confirmPassword"
                                placeholder='***********'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                classnameContainer='w-full'
                            />
                            {errors.confirmPassword && touched.confirmPassword && <FormErrorMsg msg={errors.confirmPassword} />}
                        </div>
                        <div className="flex flex-col gap-4 w-1/2">
                            <Input
                                id='name'
                                label='Nombre'
                                type="text"
                                name="name"
                                placeholder='Ingrese su nombre'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                classnameContainer='w-full'
                            />
                            {errors.name && touched.name && <FormErrorMsg msg={errors.name} />}

                            <Input
                                id='address'
                                label='Dirección'
                                placeholder='Ingrese su dirección'
                                type="text"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                                classnameContainer='w-full'
                            />
                            {errors.address && touched.address && <FormErrorMsg msg={errors.address} />}

                            <Input
                                id='phone'
                                label='Teléfono'
                                placeholder='2612445468'
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                                classnameContainer='w-full'
                            />
                            {errors.phone && touched.phone && <FormErrorMsg msg={errors.phone} />}
                        </div>
                    </div>
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        label="Registrarse"
                        variant="default"
                        className="w-full mt-4"
                    >
                        Registrarse
                    </Button>
                </form>
            )}
        </Formik>
    );
};

export default RegisterFormUI;