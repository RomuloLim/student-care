import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    daisyui: {
        themes: [
            "light",
            {
                studentCare: {
                    primary: "#785bc6",

                    secondary: "#efa7db",

                    accent: "#ffd6bf",

                    neutral: "#1a161d",

                    "base-100": "#dfe3ec",

                    info: "#85b8ea",

                    success: "#7be0c2",

                    warning: "#b6610c",

                    error: "#df2620",
                },
            },
        ],
    },

    plugins: [forms, daisyui],
};
