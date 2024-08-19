import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";
import { IoSunny } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";

export default function Header() {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        // Handle the case where the context is null
        throw new Error("ThemeContext must be used within a ThemeProvider");
    }

    const { theme, toggleTheme } = themeContext;

    return (
        <div className='dark:bg-purple-dark h-14 flex items-center justify-around'>
            <span className='dark:text-purple-light font-bold text-lg'>
                Prashant Maitra
            </span>
            <div className='flex items-center space-x-4'>
                {theme === "light" ? (
                    <IoSunny
                        className='text-xl cursor-pointer'
                        onClick={toggleTheme}
                    />
                ) : (
                    <FiMoon
                        className='text-xl cursor-pointer text-white'
                        onClick={toggleTheme}
                    />
                )}
                <span className='text-gray-light text-sm'>Projects</span>
                <span className='text-gray-light text-sm'>Blogs</span>
            </div>
        </div>
    );
}
