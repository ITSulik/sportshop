import "../../App.css";
import { FaCheckCircle } from "react-icons/fa";
import Hero from "../../assets/img/about-hero.svg";

function Top() {
    return (
        <section className="bg-green-600 py-10">
            <div className="container mx-auto flex flex-col items-center gap-10 px-8 lg:flex-row">
                <div className="space-y-6 text-white lg:w-2/3">
                    <div>
                        <h1 className="mb-2 text-4xl font-semibold">1. Scurtă Introducere</h1>
                        <p className="text-[16pt] font-light">
                            „La Fit cu Stil, credem că sportul nu este doar o activitate fizică, ci un mod de viață. Am
                            creat acest magazin online pentru a inspira oamenii să se simtă bine în pielea lor, să fie
                            activi și... să o facă cu stil!”
                        </p>
                    </div>
                    <div>
                        <h1 className="mb-2 text-4xl font-semibold">2. Misiunea Noastră</h1>
                        <p className="text-[16pt] font-light">
                            „Misiunea noastră este să oferim produse sportive de calitate, care combină confortul,
                            funcționalitatea și designul modern. Fiecare articol din colecția noastră este ales cu grijă
                            pentru a te susține în drumul tău spre o viață mai sănătoasă.”
                        </p>
                    </div>
                    <div>
                        <h1 className="mb-2 text-4xl font-semibold">3. De ce să alegi Fit cu Stil?</h1>
                        <ul className="space-y-2 text-[16pt] font-light">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="mt-1 text-white" />
                                <span>Produse testate și recomandate de sportivi</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="mt-1 text-white" />
                                <span>Design modern și atrăgător</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="mt-1 text-white" />
                                <span>Livrare rapidă & suport client dedicat</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lg:w-1/3">
                    <img src={Hero} alt="About Hero" className="mx-auto w-full max-w-sm" />
                </div>
            </div>
        </section>
    );
}

export default Top;
