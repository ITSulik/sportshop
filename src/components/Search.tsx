import type { FC } from "react";
import { FaSearch } from "react-icons/fa";
import { FaS } from "react-icons/fa6";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: FC<Props> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="bg-opacity-95 fixed inset-0 z-50 flex justify-center bg-white">
            <div className="relative w-full max-w-2xl p-6">
                <div className="mb-4 text-left">
                    <button className="text-gray text-3xl" onClick={onClose} aria-label="Close">
                        &times;
                    </button>
                </div>
                <form className="flex">
                    <input
                        type="text"
                        name="q"
                        placeholder="Search ..."
                        className="w-full rounded-l border border-gray-300 px-4 py-2"
                    />
                    <button type="submit" className="rounded-r bg-green-500 px-4 py-2 text-white">
                        <FaSearch />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchModal;
