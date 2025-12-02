import { Flower, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() =>{
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }else{
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
            
        }
    })
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true)
        }
    }

    return (
    
    <div className="fixed top-5 right-5 z-50">
            <div className="relative group">
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="p-2 rounded-full transition-colors duration-300"
                >
                    {isDarkMode ? (
                        <Flower className="h-6 w-6 text-white" />
                    ) : (
                        <Flower className="h-6 w-6 text-pink-500" />
                    )}
                </button>
                <div className="absolute right-1/2 top-full ml-4 mb-4 w-max max-w-xs px-3 py-2 text-sm text-primary rounded-md
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                transition-opacity duration-300 transform ">
                    {isDarkMode ? (
                        <p>Click to change to light mode!</p>
                    ) : (
                        <p>Click to change to dark mode!</p>
                    )}
                </div>
            </div>
        </div>

)
}

