export const profile = {
login: true,

user: {
    id: 1,
    name: "Juan Pérez",
    email: "usuario@example.com",
    address: "Calle Falsa 123, Buenos Aires, Argentina",
    phone: "+54 9 11 1234 5678",
    role: "user",
    orders: [
    {
        id: 1,
        status: "approved",
        date: "2025-06-04T15:03:11.455Z",
    },
    ],
},
token:
    "hola",
};

export const profileOrders = [
{
    "id": 1,
    "status": "approved",
    "date": "2025-06-04T15:03:11.455Z",
    "products": [
    {
        "id": 1,
        "name": "iPhone 11",
        "description": "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        "price": 699,
        "stock": 10,
        "image": "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png",
        "categoryId": 1
    },
    {
        "id": 2,
        "name": "MacBook Air",
        "description": "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
        "price": 999,
        "stock": 10,
        "image": "https://www.apple.com/v/macbook-air/a/images/meta/og__d5k62k8b4qka.png",
        "categoryId": 2
    },
    {
        "id": 3,
        "name": "iPad Pro",
        "description": "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
        "price": 799,
        "stock": 10,
        "image": "https://www.apple.com/v/ipad-pro/a/images/meta/og__d8m6x7smkntm.png",
        "categoryId": 3
    }
    ]
}
]
