import React from "react";
import cs from "classnames";

type ButtonVariant =
    | "default"
    | "alternative"
    | "dark"
    | "Link"
    | "light"
    | "green"
    | "red"
    | "yellow"
    | "purple";


    const variantClasses: Record<ButtonVariant, string> = {
        default:
            "text-white bg-primary-400 hover:bg-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
        alternative:
            "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
        dark:
            "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",

        Link:
            "text-primary-300 hover:underline bg-transparent border-none shadow-none px-0 py-0 font-medium text-sm me-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:text-primary-400 dark:hover:text-primary-300",

        light:
            "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
        green:
            "text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
        red:
            "text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
        yellow:
            "text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900",
        purple:
            "text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
    };

    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        variant?: ButtonVariant;
        label?: React.ReactNode;
        loading?: boolean;
    }

    const Button: React.FC<ButtonProps> = ({
        variant = "default",
        label,
        className = "",
        loading = false,
        ...props
    }) => {
        return (
            <button
                type="button"
                className={cs(
                    variantClasses[variant],
                    className,
                    {
                        "opacity-50 cursor-not-allowed": props.disabled,
                    }
                )}
                disabled={props.disabled}
                {...props}
            >
                {label}
                {loading && <span className="ml-2">Cargando...</span>}
            </button>
        );
    };

export default Button;