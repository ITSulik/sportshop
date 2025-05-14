import shoe from "../../assets/img/banner_img_01.jpg";
import flex from "../../assets/img/flexwear.png";
import power from "../../assets/img/powergrip.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Arrow = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 z-10 -translate-y-1/2 text-3xl text-green-500 ${
            direction === "left" ? "left-4" : "right-4"
        } transition-colors duration-200 hover:text-green-600`}
    >
        {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
);

const HeroCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000,
        nextArrow: <Arrow direction="right" />,
        prevArrow: <Arrow direction="left" />,
        customPaging: () => (
            <div className="mx-1 h-1 w-6 bg-green-500 opacity-50 transition-opacity duration-300 hover:opacity-100"></div>
        ),
        appendDots: (dots) => (
            <div>
                <ul className="mt-6 flex justify-center">{dots}</ul>
            </div>
        ),
    };

    const slides = [
        {
            image: shoe,
            title: "Alege Încaltamintea top",
            subtitle: "„Mișcă-te cu stil. T-Mork.”",
            text: `T-Mork nu e doar o pereche de pantofi sport. Este o declarație de stil, viteză și motivație. Proiectați pentru mișcare, gândiți pentru impact – fiecare pas te apropie de cea mai bună versiune a ta.`,
            discount: "-18%",
        },
        {
            image: flex,
            title: "FlexWear - Respirǎ miscarea",
            text: `Tricou sport ușor, elastic și ultra-respirabil. Ideal pentru orice tip de antrenament intens.`,
            discount: "-20%",
        },
        {
            image: power,
            title: "PowerGrip",
            subtitle: "Control total, fără compromisuri",
            text: `PowerGrip este alegerea ideală pentru cei care ridică serios. Mănuși cu aderență maximă, protecție și confort de durată.`,
            discount: "-15%",
        },
    ];
    return (
        <div className="relative w-full bg-gray-100 px-4 py-8">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full px-4">
                        {/* Discount */}
                        <span className="absolute top-4 right-4 z-20 rounded bg-red-500 px-4 py-1 text-xs font-semibold text-white shadow">
                            {slide.discount}
                        </span>

                        {/* Slide content */}
                        <div className="mx-auto flex max-w-5xl flex-col-reverse items-center justify-between p-6 md:flex-row">
                            {/* Text */}
                            <div className="px-4 text-left lg:w-1/2">
                                <h1 className="mb-2 text-3xl font-bold text-green-600">{slide.title}</h1>
                                {slide.subtitle && (
                                    <h3 className="mb-2 text-xl font-semibold text-gray-800">{slide.subtitle}</h3>
                                )}
                                <p className="mb-6 max-w-100 text-gray-700">{slide.text}</p>
                                <a
                                    href="#"
                                    className="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-white transition hover:bg-green-600"
                                >
                                    Cumpără acum
                                </a>
                            </div>

                            {/* Imagine */}
                            <div className="px-4 sm:w-1/5 md:w-1/3 lg:w-1/2">
                                <img src={slide.image} alt={slide.title} className="h-auto w-full" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroCarousel;
