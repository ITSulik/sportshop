import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

function Categories() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="">
            {/* Sidebar Categorii */}
            <div>
                <div className="flex flex-col justify-between gap-6">
                    <h1 className="text-4xl font-light">Categorii</h1>
                    <ul className="space-y-6">
                        {/* Gen */}
                        <li>
                            <button
                                onClick={() => toggleIndex(0)}
                                className="flex w-full cursor-pointer items-center justify-between text-2xl font-light hover:text-gray-600 focus:outline-none"
                            >
                                Gen
                                <FaChevronCircleDown
                                    className={`mt-1 transition-transform duration-300 ${
                                        openIndex === 0 ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                            </button>
                            <ul
                                className={`mt-2 space-y-1 overflow-hidden pl-4 transition-all duration-300 ${
                                    openIndex === 0 ? "max-h-40" : "max-h-0"
                                }`}
                            >
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-gray-600">
                                        Bǎrbați
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-gray-600">
                                        Femei
                                    </a>
                                </li>
                            </ul>
                        </li>

                        {/* Vânzări */}
                        <li>
                            <button
                                onClick={() => toggleIndex(1)}
                                className="flex w-full cursor-pointer items-center justify-between text-2xl font-light hover:text-gray-600 focus:outline-none"
                            >
                                Vânzări
                                <FaChevronCircleDown
                                    className={`mt-1 transition-transform duration-300 ${
                                        openIndex === 1 ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                            </button>
                            <ul
                                className={`mt-2 space-y-1 overflow-hidden pl-4 transition-all duration-300 ${
                                    openIndex === 1 ? "max-h-40" : "max-h-0"
                                }`}
                            >
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-gray-600">
                                        Sport
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-gray-600">
                                        Lux
                                    </a>
                                </li>
                            </ul>
                        </li>

                        {/* Produse */}
                        <li>
                            <button
                                onClick={() => toggleIndex(2)}
                                className="flex w-full cursor-pointer items-center justify-between text-2xl font-light hover:text-gray-600 focus:outline-none"
                            >
                                Produse
                                <FaChevronCircleDown
                                    className={`mt-1 transition-transform duration-300 ${
                                        openIndex === 2 ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                            </button>
                            <ul
                                className={`mt-2 space-y-1 overflow-hidden pl-4 transition-all duration-300 ${
                                    openIndex === 2 ? "max-h-40" : "max-h-0"
                                }`}
                            >
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-gray-600">
                                        Genți
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-gray-600">
                                        Pulovere
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-gray-600">
                                        Ochelari
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Categories;
