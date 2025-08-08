import { useState, useEffect } from "react";

function App() {
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
        <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
            <div className="flex self-center w-4/5 dark:text-white">
                <svg className="mt-8" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="20" fill="none" className="stroke-black dark:stroke-white"
                            strokeWidth="2"/>
                    <line x1="0" y1="25" x2="50" y2="25" className="stroke-red-500" strokeWidth="2"/>

                </svg>

                <div className="">
                    <p>123</p>
                </div>
            </div>

            <div
                className="self-center dark:bg-[url('/bg-dark-abstract.jpg')] bg-[url('/bg-light-abstract.jpg')]
                bg-cover bg-center w-4/5 h-96 rounded-xl shadow-xl flex-col justify-center items-center mt-8"
            >

                <h1 className="text-center text-6xl font-serif text-white px-8 m-8">Arorms Studio</h1>
                <p className="text-xl font-semibold font-mono text-white px-16 mt-12">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                    animi ex fugiat id illum iste officiis sapiente veniam vero
                    voluptate? Accusamus ad architecto dolor dolorem iure placeat
                    voluptatum. Impedit, quos.
                </p>
                <a href="https://github.com/Arorms-Studio" className="flex justify-center items-center">
                    <button
                        className="m-8 px-4 py-2 rounded-lg bg-white text-xl text-blue-600 transition duration-200 hover:shadow-xl">
                        Github
                    </button>
                </a>
            </div>

            <button
                onClick={toggleDarkMode}
                className="m-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
            >
                {darkMode ? "切换到浅色" : "切换到深色"}
            </button>

        </div>
    );
}

export default App;