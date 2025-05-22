import { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import br1 from "../../assets/img/brand_01.png";
import br2 from "../../assets/img/brand_02.png";
import br3 from "../../assets/img/brand_03.png";
import br4 from "../../assets/img/brand_04.png";

const brandLogos = [br1, br2, br3, br4];

export default function BrandsSlick() {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="bg-slate-200 px-4 py-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 text-center">
                    <h1 className="mb-4 text-2xl font-light sm:text-3xl md:text-4xl lg:text-5xl">Brandurile noastre</h1>
                    <p className="md:text-md text-xs text-gray-700 sm:text-sm lg:px-20 lg:text-lg">
                        Colaborăm cu cele mai de încredere branduri din domeniul sportului și modei pentru a-ți oferi
                        produse de calitate, stil și performanță. Fiecare brand este ales cu grijă pentru a-ți completa
                        stilul activ și modern.
                    </p>
                </div>

                <div className="flex items-center justify-center px-4 sm:px-10">
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="text-gray-400 transition-colors hover:text-green-600"
                    >
                        <FaChevronLeft size={24} />
                    </button>

                    <div className="w-full max-w-md sm:w-4/5 sm:max-w-4xl">
                        <Slider ref={sliderRef} {...settings}>
                            {brandLogos.map((logo, index) => (
                                <div key={index} className="flex justify-center">
                                    <img
                                        src={logo}
                                        alt={`Brand ${index}`}
                                        className="h-16 min-w-[80px] translate-x-20 grayscale sm:translate-x-25"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="text-gray-400 transition-colors hover:text-green-600"
                    >
                        <FaChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
