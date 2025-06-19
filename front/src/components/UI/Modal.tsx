"use client"
import React from "react";
import GenericPortal from "../GenericPortal"; // Asegúrate de que la ruta sea correcta

interface ModalProps {
  isOpen: boolean; // Controla si el modal está abierto o cerrado
  onClose: () => void; // Función para cerrar el modal
  children: React.ReactNode; // Contenido que se mostrará dentro del modal
  containerId?: string | null; // ID opcional del elemento donde se montará el portal (para GenericPortal)
}

const Modal = ({ isOpen, onClose, children, containerId = null}: ModalProps) => {
  // Si el modal no está abierto (isOpen es false), no renderiza nada
    if (!isOpen) return null;

return (
    // Usa GenericPortal para renderizar el modal fuera del flujo normal del DOM (ej. en el body)
    <GenericPortal {...(containerId && { containerId})}>
      {/* Overlay: cubre toda la pantalla, atenúa el fondo y cierra el modal al hacer clic fuera del contenido */}
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={onClose} // Cierra el modal si se hace clic en el overlay
    >
        {/* Contenido del Modal: la caja blanca flotante */}
        <div
        className="bg-white rounded-xl p-6 shadow-xl z-50 min-w-[300px] max-w-[90%]"
          // Evita que el clic dentro del contenido del modal cierre el modal
        onClick={(e) => e.stopPropagation()} 
        >
          {/* Botón de cierre (la 'x') */}
        <button
            onClick={onClose} // Cierra el modal al hacer clic en el botón
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
            x {/* Icono o texto de cierre */}
        </button>
          {children} {/* Aquí se renderiza el contenido que se le pase al modal */}
        </div>
    </div>
    </GenericPortal>
);
};

export default Modal;