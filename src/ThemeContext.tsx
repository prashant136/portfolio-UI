import { createContext, useState, useEffect, ReactNode, FC } from "react";

// Define the shape of the context value
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Define the props for the ThemeProvider component
interface ThemeProviderProps {
    children: ReactNode;
}

// Create the context with an initial value (null, because it will be provided by ThemeProvider)
const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>("dark");

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
