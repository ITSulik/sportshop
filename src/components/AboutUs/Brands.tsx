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
        <section className="bg-slate-200 py-20">
            <div className="mx-auto max-w-4xl px-4">
                <div className="mb-10 text-center">
                    <h1 className="mb-4 text-5xl font-light">Brandurile noastre</h1>
                    <p className="max-w-4xl text-gray-700">
                        Colaborăm cu cele mai de încredere branduri din domeniul sportului și modei pentru a-ți oferi
                        produse de calitate, stil și performanță. Fiecare brand este ales cu grijă pentru a-ți completa
                        stilul activ și modern.
                    </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="text-gray-400 transition-colors hover:text-green-600"
                    >
                        <FaChevronLeft size={24} />
                    </button>

                    <div className="w-1/2 lg:w-full">
                        <Slider ref={sliderRef} {...settings}>
                            {brandLogos.map((logo, index) => (
                                <div key={index} className="flex -translate-x-[-40pt] justify-center">
                                    <img src={logo} alt={`Brand ${index}`} className="h-16 object-contain grayscale" />
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
