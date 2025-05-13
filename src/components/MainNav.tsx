import "../App.css";
import { useState } from "react";
import SearchModal from "./Search";
import { FaSearch, FaCartArrowDown, FaUser } from "react-icons/fa";

function MainNav() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <nav className="bg-white shadow">
                <div className="container mx-auto flex items-center justify-between px-5 py-5">
                    <a href="#" className="text-5xl font-medium text-green-600">
                        Fit cu Stil
                    </a>

                    <ul className="hidden space-x-30 text-2xl font-light md:flex">
                        <li>
                            <a href="#" className="transition hover:text-green-500">
                                Acasă
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition hover:text-green-500">
                                Despre noi
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition hover:text-green-500">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition hover:text-green-500">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className="flex space-x-4">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="hidden text-xl lg:inline"
                            aria-label="Search"
                        >
                            <FaSearch className="pointer-fine: h-6 w-6" />
                        </button>

                        <a href="#">
                            <FaCartArrowDown className="h-6 w-6 text-black" />
                        </a>

                        <a href="#">
                            <FaUser className="h-6 w-6 text-black" />
                        </a>
                    </div>
                </div>
            </nav>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}

export default MainNav;
