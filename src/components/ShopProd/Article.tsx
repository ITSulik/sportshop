// RelatedCarousel.tsx
import Slider from "react-slick";
import Card from "../Shop/Card";
import { products } from "../Shop/Products";

function Article() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        customPaging: () => <div className="h-10 w-10 scale-200 rounded-full bg-gray-400"></div>,
        appendDots: (dots) => (
            <div className="m-4 flex justify-center">
                <ul className="space-x-2">
                    {dots.map((dot, index) => (
                        <li key={index}>
                            {/* Extragem clasa slick-active și o mapăm manual */}
                            <button
                                className={`m-3 h-10 w-10 scale-200 rounded-full transition-all duration-300 ${
                                    dot.props.className?.includes("slick-active")
                                        ? "scale-220 bg-gray-800"
                                        : "bg-gray-400"
                                }`}
                                onClick={dot.props.children.props.onClick}
                            ></button>
                        </li>
                    ))}
                </ul>
            </div>
        ),
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

    return (
        <section className="py-10">
            <div className="container mx-auto px-4 py-10">
                <div className="mb-4">
                    <h4 className="text-left text-2xl font-semibold">Related Products</h4>
                </div>
                <Slider {...settings}>
                    {products.map((item, index) => (
                        <div key={index} className="max-w-2xl px-2">
                            <Card
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                sizes={item.sizes}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Article;
