import torch from "../../assets/img/feature_prod_01.jpg";
import Wpro from "../../assets/img/feature_prod_02.jpg";
import Camera from "../../assets/img/feature_prod_03.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";

function Tools() {
    return (
        <>
            <div className="mt-15 bg-slate-100 pb-20">
                <div className="mt-15 px-4 py-15 text-center">
                    <h1 className="mb-4 text-5xl font-light">Echipat pentru Performanță</h1>
                    <p className="text-1xl mx-auto max-w-3xl text-gray-600">
                        🎯 „Fă mișcare. Arată bine. Trăiește Fit.”
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 px-2">
                    {[
                        {
                            img: torch,
                            alt: "Torch",
                            price: "$240.00",
                            name: "SmartFit Torch",
                            reviews: 24,
                            stars: 3,
                        },
                        {
                            img: Wpro,
                            alt: "Watch",
                            price: "$480.00",
                            name: "WatchX Pro",
                            reviews: 48,
                            stars: 3,
                        },
                        {
                            img: Camera,
                            alt: "Camera",
                            price: "$360.00",
                            name: "RetroMotion Cam",
                            reviews: 74,
                            stars: 5,
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-4 mx-5 flex w-full max-w-xs min-w-[180px] flex-col items-center border-2 border-gray-200 bg-white sm:w-[48%] md:w-[31%] lg:w-[23%]"
                        >
                            <img src={item.img} alt={item.alt} className="object-fit h-min w-full" />
                            <div className="w-full p-3">
                                <ul className="flex list-none items-center justify-between py-2">
                                    <li className="flex space-x-1">
                                        {[...Array(item.stars)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-500" />
                                        ))}
                                        {[...Array(5 - item.stars)].map((_, i) => (
                                            <FaRegStar key={i} className="text-gray-400" />
                                        ))}
                                    </li>
                                    <li className="text-right text-gray-500">{item.price}</li>
                                </ul>
                                <a href="shop-single.html" className="block text-2xl font-light">
                                    {item.name}
                                </a>
                                <p className="font-light">
                                    Lumină puternică pentru antrenamentele de seară sau plimbările de dimineață.
                                    Compactă, modernă și mereu pregătită.
                                </p>
                                <p className="bottom-1 py-4 text-gray-500">Reviews ({item.reviews})</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Tools;
