/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "selector",
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            "purple-light": "#7263D9",
            "purple-mid": "#1A1A28",
            "purple-dark": "#181824",
            "gray-light": "#F5F5F5",
            "gray-mid": "#BDBDBD",
            "gray-dark": "#31313F",
            white: "#ffffff",
            black: "#000000"
        }
    },
    plugins: []
};
