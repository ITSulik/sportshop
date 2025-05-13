import "../index.css";
import torch from "../assets/img/feature_prod_01.jpg";
import Wpro from "../assets/img/feature_prod_02.jpg";
import Camera from "../assets/img/feature_prod_03.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";

function Tools() {
    return (
        <>
            <div className="my-15 bg-slate-100 pb-5">
                <div className="mt-15 px-4 py-15 text-center">
                    <h1 className="mb-4 text-5xl font-light">Echipat pentru Performanță</h1>
                    <p className="text-1xl mx-auto max-w-3xl text-gray-600">
                        🎯 „Fă mișcare. Arată bine. Trăiește Fit.”
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-10">
                    <div className="rounded-4 flex w-[420px] flex-col items-center border-2 border-gray-200 bg-white">
                        <img src={torch} alt="Watch" />
                        <div className="p-3">
                            <ul className="flex list-none items-center justify-between py-2">
                                <li className="flex space-x-1">
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaRegStar className="text-gray-400" />
                                    <FaRegStar className="text-gray-400" />
                                </li>
                                <li className="text-right text-gray-500">$240.00</li>
                            </ul>
                            <a href="shop-single.html" className="text-3xl font-light">
                                SmartFit Torch
                            </a>
                            <p className="font-light">
                                Lumină puternică pentru antrenamentele de seară sau plimbările de dimineață. Compactă,
                                modernă și mereu pregătită.
                            </p>
                            <p className="bottom-1 py-4 text-gray-500">Reviews (24)</p>
                        </div>
                    </div>
                    <div className="flex w-[420px] flex-col items-center border-2 border-gray-200 bg-white">
                        <img src={Wpro} alt="Watch" />
                        <div className="p-3">
                            <ul className="flex list-none items-center justify-between py-2">
                                <li className="flex space-x-1">
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaRegStar className="text-gray-400" />
                                    <FaRegStar className="text-gray-400" />
                                </li>
                                <li className="text-right text-gray-500">$480.00</li>
                            </ul>
                            <a href="shop-single.html" className="text-3xl font-light">
                                WatchX Pro
                            </a>
                            <p className="font-light">
                                Lumină puternică pentru antrenamentele de seară sau plimbările de dimineață. Compactă,
                                modernă și mereu pregătită.
                            </p>
                            <p className="bottom-1 py-4 text-gray-500">Reviews (48)</p>
                        </div>
                    </div>
                    <div className="flex w-[420px] flex-col items-center border-2 border-gray-200 bg-white">
                        <img src={Camera} alt="Watch" />
                        <div className="p-3">
                            <ul className="flex list-none items-center justify-between py-2">
                                <li className="flex space-x-1">
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </li>
                                <li className="text-right text-gray-500">$360.00</li>
                            </ul>
                            <a href="shop-single.html" className="text-3xl font-light">
                                RetroMotion Cam
                            </a>
                            <p className="font-light">
                                Lumină puternică pentru antrenamentele de seară sau plimbările de dimineață. Compactă,
                                modernă și mereu pregătită.
                            </p>
                            <p className="bottom-1 py-4 text-gray-500">Reviews (74)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tools;
