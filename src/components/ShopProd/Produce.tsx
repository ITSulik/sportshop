import { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ps1 from "../../assets/img/product_single_01.jpg";
import ps2 from "../../assets/img/product_single_02.jpg";
import ps3 from "../../assets/img/product_single_03.jpg";
import ps4 from "../../assets/img/product_single_04.jpg";
import ps5 from "../../assets/img/product_single_05.jpg";
import ps6 from "../../assets/img/product_single_06.jpg";
import ps7 from "../../assets/img/product_single_07.jpg";
import ps8 from "../../assets/img/product_single_08.jpg";
import ps9 from "../../assets/img/product_single_09.jpg";

type ArrowProps = {
    className?: string;
    onClick?: () => void;
};

const NextArrow = ({ onClick }: ArrowProps) => {
    return (
        <button className="absolute top-1/2 -right-8 z-10 -translate-y-1/2 rounded-full p-2" onClick={onClick}>
            <FaChevronRight className="text-2xl text-black" />
        </button>
    );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
    return (
        <button className="absolute top-1/2 -left-8 z-10 -translate-y-1/2 rounded-full p-2" onClick={onClick}>
            <FaChevronLeft className="text-2xl text-black" />
        </button>
    );
};

const ProductDetails = () => {
    const thumbnails = [ps1, ps2, ps3, ps4, ps5, ps6, ps7, ps8, ps9];

    const [selectedSize, setSelectedSize] = useState("S");
    const [quantity, setQuantity] = useState(1);

    const [mainImage, setMainImage] = useState(thumbnails[0]);

    const renderStars = () => {
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`f${i}`} className="text-yellow-400" />
                ))}
                {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`e${i}`} className="text-yellow-400" />
                ))}
            </>
        );
    };

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const product = {
        title: "Active Wear",
        price: 25,
        rating: 4.8,
        brand: "Easy Wear",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.",
        availableColors: ["White", "Black"],
        specifications: [
            "Lorem ipsum dolor sit",
            "Amet, consectetur",
            "Adipiscing elit,set",
            "Duis aute irure",
            "Ut enim ad minim",
            "Dolore magna aliqua",
            "Excepteur sint",
        ],
        sizes: ["S", "M", "L", "XL"],
    };

    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto flex flex-col justify-center gap-10 px-4 lg:flex-row">
                {/* Left side - Images */}
                <div className="md:w-1/2 lg:w-1/3">
                    <div className="rounded-lg bg-white shadow">
                        <img src={mainImage} alt="Product Main" className="h-auto w-full rounded-md object-cover" />
                    </div>
                    <div className="relative mt-4 max-w-xl">
                        <Slider {...settings} arrows={true}>
                            {thumbnails.map((thumb, index) => (
                                <div key={index} className="px-5">
                                    <img
                                        src={thumb}
                                        alt={`Thumb ${index}`}
                                        className="cursor-pointer rounded-md transition hover:scale-105"
                                        onClick={() => setMainImage(thumb)}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                {/* Right side - Info */}
                <div className="w-full rounded-md bg-white p-6 shadow">
                    <h1 className="mb-2 text-3xl font-light">{product.title}</h1>
                    <p className="mb-4 text-2xl font-light">${product.price.toFixed(2)}</p>
                    <div className="mb-2 flex items-center gap-2">
                        {renderStars()}
                        <span className="text-md text-gray-600">Rating {product.rating} | 36 Comments</span>
                    </div>
                    <div className="mb-4">
                        <h6 className="font-medium">Brand:</h6>
                        <p className="text-gray-600">{product.brand}</p>
                    </div>

                    <div className="mb-4">
                        <h6 className="font-medium">Description:</h6>
                        <p className="text-gray-600">{product.description}</p>
                    </div>

                    <div className="mb-4">
                        <h6 className="font-medium">Available Colors:</h6>
                        <p className="text-gray-600">{product.availableColors.join(" / ")}</p>
                    </div>

                    <div className="mb-4">
                        <h6 className="font-medium">Specification:</h6>
                        <ul className="list-inside list-disc text-gray-600">
                            {product.specifications.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Size selector */}
                    <div className="mb-4">
                        <h6 className="font-medium">Size:</h6>
                        <div className="mt-1 flex gap-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`rounded border px-3 py-1 ${
                                        selectedSize === size ? "bg-green-600 text-white" : "bg-white text-black"
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity selector */}
                    <div className="mb-6">
                        <h6 className="mb-1 font-medium">Quantity:</h6>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="rounded bg-green-600 px-3 py-1 text-white"
                            >
                                -
                            </button>
                            <span className="text-lg">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="rounded bg-green-600 px-3 py-1 text-white"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="rounded-lg bg-green-600 py-2 text-lg text-white hover:bg-green-700">
                            Buy
                        </button>
                        <button className="rounded-lg bg-green-600 py-2 text-lg text-white hover:bg-green-700">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
