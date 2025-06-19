// products.ts o products.js

import { IProduct } from "@/types";

export const productsSample:IProduct[] = [
{
    id: 1,
    name: "iPhone 11",
    price: 699,
    description: "Experimenta potencia y elegancia con el iPhone 11: captura momentos increíbles con su sistema de doble cámara, disfruta de un rendimiento excepcional y sumérgete en una brillante pantalla Liquid Retina. ¡Descubre un mundo de posibilidades en la palma de tu mano!",
    image: "https://ik.imagekit.io/fefgntjox/Iphone%2011.jpg?updatedAt=1749308996839",
    categoryId: 1, // Celulares
    stock: 10,
},
{
    id: 2,
    name: "MacBook Air M2",
    price: 999,
    description: "Adopta eficiencia y sofisticación con la MacBook Air M2: diseño liviano con gran rendimiento, una pantalla Liquid Retina impresionante que da vida a tu trabajo y batería de larga duración para mantenerte productivo donde sea que vayas. Eleva tu experiencia informática con la MacBook Air.",
    image: "https://ik.imagekit.io/fefgntjox/MackBook%20Air%20M2.jpg?updatedAt=1749309519661",
    categoryId: 2, // Computadoras / Laptops
    stock: 10,
},
{
    id: 3,
    name: "iPad Pro 11-inch",
    price: 799,
    description: "Desata tu creatividad y productividad con el iPad Pro: alto rendimiento, pantalla Liquid Retina impresionante y batería para todo el día hacen del iPad Pro la herramienta perfecta para trabajar y jugar. Transforma tus ideas en realidad con el iPad Pro.",
    image: "https://ik.imagekit.io/fefgntjox/iPad%20Pro%2011-inch.jpg?updatedAt=1749309519551",
    categoryId: 3, // Tablets
    stock: 10,
},
{
    id: 4,
    name: "Apple Watch Series 9",
    price: 399,
    description: "Mantente conectado y saludable con el Apple Watch Series 9: registra tus entrenamientos, monitorea tu salud y mantente en contacto con la información y personas que más te importan. Vive el futuro del bienestar con el Apple Watch Series 9.",
    image: "https://ik.imagekit.io/fefgntjox/Apple%20Watch%20Series%209.jpg?updatedAt=1749309520098",
    categoryId: 4, // Wearables / Smartwatches
    stock: 10,
},
{
    id: 5,
    name: "AirPods Pro (2nd Gen)",
    price: 249,
    description: "Sumérgete en el sonido con los AirPods Pro: cancelación activa de ruido, modo de transparencia y ajuste personalizable hacen de los AirPods Pro el compañero perfecto para música, llamadas y mucho más. Eleva tu experiencia de audio con los AirPods Pro.",
    image: "https://ik.imagekit.io/fefgntjox/AirPods%20Pro%20(2nd%20Gen).jpg?updatedAt=1749309520034",
    categoryId: 5, // Audio / Auriculares
    stock: 10,
},
{
    id: 6,
    name: "HomePod mini",
    price: 99,
    description: "Mejora tu experiencia de audio en casa con el HomePod mini: sonido envolvente, asistente inteligente y centro de hogar inteligente hacen del HomePod mini el complemento perfecto para tu hogar. Disfruta de música, noticias y más con el HomePod mini.",
    image: "https://ik.imagekit.io/fefgntjox/HomePod%20mini.jpg?updatedAt=1749309519802",
    categoryId: 6, // Smart Home / Parlantes Inteligentes
    stock: 10,
},
{
    id: 7,
    name: "Samsung Galaxy S24",
    price: 799,
    description: "Descubre el Samsung Galaxy S24: un smartphone revolucionario con funciones impulsadas por IA, pantalla impresionante y un sistema de cámaras avanzado. Vive la innovación en la palma de tu mano.",
    image: "https://ik.imagekit.io/fefgntjox/Samsung%20Galaxy%20S24.jpg?updatedAt=1749309519451",
    categoryId: 1, // Celulares
    stock: 15,
},
{
    id: 8,
    name: "PlayStation 5 (PS5)",
    price: 499,
    description: "Sumérgete en cargas ultrarrápidas con un SSD de alta velocidad, mayor inmersión con retroalimentación háptica, gatillos adaptativos y audio 3D, y una nueva generación de increíbles juegos de PlayStation.",
    image: "https://ik.imagekit.io/fefgntjox/PlayStation%205%20(PS5).jpg?updatedAt=1749309518703",
    categoryId: 7, // Consolas de Videojuegos
    stock: 7,
},
{
    id: 9,
    name: "Dell XPS 15",
    price: 1499,
    description: "Experimenta el máximo rendimiento móvil y visuales impresionantes con la Dell XPS 15. Cuenta con una vibrante pantalla InfinityEdge y potentes procesadores para todas tus necesidades creativas.",
    image: "https://ik.imagekit.io/fefgntjox/Dell%20XPS%2015.jpg?updatedAt=1749309519246",
    categoryId: 2, // Computadoras / Laptops
    stock: 8,
},
{
    id: 10,
    name: "Nintendo Switch OLED",
    price: 349,
    description: "Mejora tu experiencia de juego con la Nintendo Switch Modelo OLED. Disfruta de colores vibrantes, contraste nítido y un audio mejorado con la nueva pantalla OLED.",
    image: "https://ik.imagekit.io/fefgntjox/Nintendo%20Switch%20OLED.jpg?updatedAt=1749309519723",
    categoryId: 7, // Consolas de Videojuegos
    stock: 12,
},
];

export default productsSample