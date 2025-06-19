// front/src/constants/navbar.ts (o la ruta donde lo estés guardando)
import { NavbarItemProps } from "@/components/UI/Navbar/NavbarItem";
import { routes } from "@/routes";

export const navbarLinks: NavbarItemProps[] = [
{
    label: "Inicio",
    href: routes.home,
},
{    label: "Cart",
    href: routes.cart,
},
{
    label: "Perfil",
    href: routes.profile,
},
{
    label: "Landing",
    href: routes.landing
},
];
