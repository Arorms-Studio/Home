import Logo from "../icons/Logo";
import {useEffect, useState} from "react";

function Header() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    }, []);


    const toggleDarkMode = () => {
        setDarkMode(prev => {
            const newMode = !prev;
            document.documentElement.classList.toggle("dark", newMode);
            localStorage.setItem("theme", newMode ? "dark" : "light");
            return newMode;
        });
    };

    return (
        <header className="flex justify-between items-center px-32 py-2 bg-white dark:bg-neutral-800 shadow-md">
            <div className="flex items-center">
                <Logo/>
                <span className="ml-3 text-xl font-semibold text-gray-900 dark:text-white drop-shadow-md">
                    Arorms Studio
                </span>
            </div>

            <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
                <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                    Home
                </a>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                    Projects
                </a>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                    Contact
                </a>

                <button
                    onClick={toggleDarkMode}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                    {darkMode ? "Dark" : "Light"}
                </button>
            </nav>

            <button className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </header>
    );
}

export default Header;
