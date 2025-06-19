import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

export const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description: "Experimenta potencia y elegancia con el iPhone 11: captura momentos increíbles con su sistema de doble cámara, disfruta de un rendimiento excepcional y sumérgete en una brillante pantalla Liquid Retina. ¡Descubre un mundo de posibilidades en la palma de tu mano!",
    image: "https://ik.imagekit.io/fefgntjox/Iphone%2011.jpg?updatedAt=1749308996839",
    categoryId: 1, // Celulares
    stock: 10,
  },
  {
    name: "MacBook Air M2",
    price: 999,
    description: "Adopta eficiencia y sofisticación con la MacBook Air M2: diseño liviano con gran rendimiento, una pantalla Liquid Retina impresionante que da vida a tu trabajo y batería de larga duración para mantenerte productivo donde sea que vayas. Eleva tu experiencia informática con la MacBook Air.",
    image: "https://ik.imagekit.io/fefgntjox/MackBook%20Air%20M2.jpg?updatedAt=1749309519661",
    categoryId: 2, // Computadoras / Laptops
    stock: 10,
  },
  {
    name: "iPad Pro 11-inch",
    price: 799,
    description: "Desata tu creatividad y productividad con el iPad Pro: alto rendimiento, pantalla Liquid Retina impresionante y batería para todo el día hacen del iPad Pro la herramienta perfecta para trabajar y jugar. Transforma tus ideas en realidad con el iPad Pro.",
    image: "https://ik.imagekit.io/fefgntjox/iPad%20Pro%2011-inch.jpg?updatedAt=1749309519551",
    categoryId: 3, // Tablets
    stock: 10,
  },
  {
    name: "Apple Watch Series 9",
    price: 399,
    description: "Mantente conectado y saludable con el Apple Watch Series 9: registra tus entrenamientos, monitorea tu salud y mantente en contacto con la información y personas que más te importan. Vive el futuro del bienestar con el Apple Watch Series 9.",
    image: "https://ik.imagekit.io/fefgntjox/Apple%20Watch%20Series%209.jpg?updatedAt=1749309520098",
    categoryId: 4, // Wearables / Smartwatches
    stock: 10,
  },
  {
    name: "AirPods Pro (2nd Gen)",
    price: 249,
    description: "Sumérgete en el sonido con los AirPods Pro: cancelación activa de ruido, modo de transparencia y ajuste personalizable hacen de los AirPods Pro el compañero perfecto para música, llamadas y mucho más. Eleva tu experiencia de audio con los AirPods Pro.",
    image: "https://ik.imagekit.io/fefgntjox/AirPods%20Pro%20(2nd%20Gen).jpg?updatedAt=1749309520034",
    categoryId: 5, // Audio / Auriculares
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description: "Mejora tu experiencia de audio en casa con el HomePod mini: sonido envolvente, asistente inteligente y centro de hogar inteligente hacen del HomePod mini el complemento perfecto para tu hogar. Disfruta de música, noticias y más con el HomePod mini.",
    image: "https://ik.imagekit.io/fefgntjox/HomePod%20mini.jpg?updatedAt=1749309519802",
    categoryId: 6, // Smart Home / Parlantes Inteligentes
    stock: 10,
  },
  {
    name: "Samsung Galaxy S24",
    price: 799,
    description: "Descubre el Samsung Galaxy S24: un smartphone revolucionario con funciones impulsadas por IA, pantalla impresionante y un sistema de cámaras avanzado. Vive la innovación en la palma de tu mano.",
    image: "https://ik.imagekit.io/fefgntjox/Samsung%20Galaxy%20S24.jpg?updatedAt=1749309519451",
    categoryId: 1, // Celulares
    stock: 15,
  },
  {
    name: "PlayStation 5 (PS5)",
    price: 499,
    description: "Sumérgete en cargas ultrarrápidas con un SSD de alta velocidad, mayor inmersión con retroalimentación háptica, gatillos adaptativos y audio 3D, y una nueva generación de increíbles juegos de PlayStation.",
    image: "https://ik.imagekit.io/fefgntjox/PlayStation%205%20(PS5).jpg?updatedAt=1749309518703",
    categoryId: 7, // Consolas de Videojuegos
    stock: 7,
  },
  {
    name: "Dell XPS 15",
    price: 1499,
    description: "Experimenta el máximo rendimiento móvil y visuales impresionantes con la Dell XPS 15. Cuenta con una vibrante pantalla InfinityEdge y potentes procesadores para todas tus necesidades creativas.",
    image: "https://ik.imagekit.io/fefgntjox/Dell%20XPS%2015.jpg?updatedAt=1749309519246",
    categoryId: 2, // Computadoras / Laptops
    stock: 8,
  },
  {
    name: "Nintendo Switch OLED",
    price: 349,
    description: "Mejora tu experiencia de juego con la Nintendo Switch Modelo OLED. Disfruta de colores vibrantes, contraste nítido y un audio mejorado con la nueva pantalla OLED.",
    image: "https://ik.imagekit.io/fefgntjox/Nintendo%20Switch%20OLED.jpg?updatedAt=1749309519723",
    categoryId: 7, // Consolas de Videojuegos
    stock: 12,
  },
];

const productsToPreLoad1: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.apple.com/v/macbook-air/a/images/meta/og__d5k62k8b4qka.png",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://www.apple.com/v/ipad-pro/a/images/meta/og__d8m6x7smkntm.png",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://www.apple.com/v/apple-watch-series-6/a/images/meta/og__c1zv8c8n7q06.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://www.apple.com/v/airpods-pro/a/images/meta/og__c1zv8c8n7q06.png",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://www.apple.com/v/homepod-mini/a/images/meta/og__d5k62k8b4qka.png",
    categoryId: 6,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
