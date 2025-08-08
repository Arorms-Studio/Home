import Header from "./layouts/header.tsx";

function App() {


    return (
        <div className="flex flex-col h-screen bg-white dark:bg-neutral-950 transition">
            <Header/>
            <div className="px-10 sm:px-16 md:px-24 lg:px-32">
                <div className="self-center
                                dark:bg-[url('/bg-dark-abstract.jpg')]
                                bg-[url('/bg-light-abstract.jpg')]
                                bg-cover bg-center
                                h-96 rounded-xl shadow-xl
                                flex flex-col justify-center items-center
                                mt-12
                                p-8
                                transition-colors duration-500">
                    <h1 className="text-center text-5xl md:text-6xl font-serif text-white drop-shadow-lg mb-6">
                        Arorms Studio
                    </h1>

                    <p className="max-w-4xl text-center text-xl md:text-xl font-semibold font-mono text-white px-6 md:px-16 leading-relaxed drop-shadow-lg">
                        "And be not fashioned according to this world: but be ye transformed by the renewing of your
                        mind,
                        and ye may prove what is the good and acceptable and perfect will of God."
                    </p>

                    <p className="text-right max-w-4xl w-full text-white font-semibold font-mono mt-6 px-6 md:px-16 drop-shadow-md">
                        — Romans 12:2
                    </p>

                    <a href="https://github.com/Arorms-Studio" className="flex justify-center w-full mt-10">
                        <button
                            className="px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold text-xl
                   hover:shadow-xl transition duration-300
                   dark:bg-neutral-700 dark:text-white"
                        >
                            Github
                        </button>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default App;