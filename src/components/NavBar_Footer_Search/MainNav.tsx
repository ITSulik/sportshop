import { useState } from "react";
import SearchModal from "./Search";
import { FaSearch, FaCartArrowDown, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function MainNav() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="drop-shadow-black-200 z-10 w-full bg-white drop-shadow-2xl">
                <div className="container mx-auto flex items-center justify-between px-5 py-5">
                    <Link to="/" className="text-5xl font-medium text-green-600">
                        Fit cu Stil
                    </Link>

                    <ul className="hidden space-x-10 text-2xl font-light lg:flex">
                        <li>
                            <Link to="/" className="transition hover:text-green-500">
                                Acasă
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="transition hover:text-green-500">
                                Despre noi
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop" className="transition hover:text-green-500">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="transition hover:text-green-500">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="flex items-center lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? (
                                <FaTimes className="h-6 w-6 text-black" />
                            ) : (
                                <FaBars className="h-6 w-6 text-black" />
                            )}
                        </button>
                    </div>

                    <div className="hidden space-x-4 lg:flex">
                        <button onClick={() => setIsSearchOpen(true)} className="text-xl" aria-label="Search">
                            <FaSearch className="h-6 w-6 cursor-pointer" />
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

            {isMenuOpen && (
                <ul
                    className={`top-30 left-0 z-1000 flex w-full transform flex-col items-center space-y-5 bg-white py-5 text-2xl font-light transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-10 opacity-0"}`}
                >
                    <li>
                        <Link to="/" className="transition hover:text-green-500">
                            Acasă
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="transition hover:text-green-500">
                            Despre noi
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className="transition hover:text-green-500">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="transition hover:text-green-500">
                            Contact
                        </Link>
                    </li>

                    <li className="flex space-x-4">
                        <button onClick={() => setIsSearchOpen(true)} className="text-xl" aria-label="Search">
                            <FaSearch className="h-6 w-6 cursor-pointer" />
                        </button>

                        <a href="#">
                            <FaCartArrowDown className="h-6 w-6 text-black" />
                        </a>

                        <a href="#">
                            <FaUser className="h-6 w-6 text-black" />
                        </a>
                    </li>
                </ul>
            )}

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}

export default MainNav;
