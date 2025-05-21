import { FaHeart, FaEye, FaCartPlus, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
type Props = {
    title: string;
    image: string;
    price: number;
    rating: number;
    sizes: string[];
};

export default function Card({ title, image, price, rating, sizes }: Props) {
    return (
        <div className="group relative max-w-sm overflow-hidden rounded border border-gray-200 bg-white shadow">
            <div className="group relative">
                <img
                    className="object-fit h-min w-full border-b border-gray-200 group-hover:opacity-80"
                    src={image}
                    alt={title}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex flex-col gap-3 text-3xl">
                        <button className="cursor-pointer rounded-sm bg-green-600 p-2 text-white hover:bg-green-700">
                            <FaHeart />
                        </button>
                        <button className="cursor-pointer rounded-sm bg-green-600 p-2 text-white hover:bg-green-700">
                            <Link to="/shopsingle">
                                <FaEye />
                            </Link>
                        </button>
                        <button className="cursor-pointer rounded-sm bg-green-600 p-2 text-white hover:bg-green-700">
                            <FaCartPlus />
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4">
                <h5 className="text-lg font-light text-gray-900">{title}</h5>
                <p className="text-md text-gray-600">{sizes.join("/")}</p>
                <div className="my-2 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={i < rating ? "text-yellow-300" : "text-gray-300"}
                            size={22}
                            aria-hidden="false"
                        />
                    ))}
                </div>
                <p className="text-center text-xl font-light text-gray-900">${price}</p>
            </div>
        </div>
    );
}
