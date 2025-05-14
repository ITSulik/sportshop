import { useState } from "react";
import SearchModal from "./Search";
import { FaSearch, FaCartArrowDown, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function MainNav() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <nav className="bg-white shadow-xl shadow-zinc-100">
                <div className="container mx-auto flex items-center justify-between px-5 py-5">
                    <Link to="/" className="text-5xl font-medium text-green-600">
                        Fit cu Stil
                    </Link>

                    <ul className="hidden space-x-30 text-2xl font-light md:flex">
                        <li>
                            <Link to="/" className="transition hover:text-green-500">
                                Acasă
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="transition hover:text-green-500">
                                Despre noi
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="transition hover:text-green-500">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="transition hover:text-green-500">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="flex space-x-4">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="hidden text-xl lg:inline"
                            aria-label="Search"
                        >
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
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}

export default MainNav;
