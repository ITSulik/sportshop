import { FaTruck, FaExchangeAlt, FaPercent, FaUser } from "react-icons/fa";

function Services() {
    return (
        <section className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-2xl pt-10 pb-6 text-center">
                    <h1 className="mb-4 text-5xl font-light">Serviciile Noastre</h1>
                    <p className="text-gray-700">
                        La Fit cu Stil, ne dedicăm să-ți oferim o experiență de shopping fără stres – de la livrare
                        rapidă și retururi ușoare, până la oferte exclusive și asistență 24/7. Totul ca tu să fii mereu
                        în formă, cu stil.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 px-5 py-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="group flex flex-col items-center bg-white p-6 text-center shadow-xl transition hover:bg-green-600 hover:text-white">
                        <FaTruck className="mb-4 text-4xl text-green-600 transition-colors group-hover:text-white" />
                        <h2 className="text-lg font-semibold">Servicii de Livrare</h2>
                    </div>

                    <div className="group flex flex-col items-center bg-white p-6 text-center shadow-xl transition hover:bg-green-600 hover:text-white hover:shadow-lg">
                        <FaExchangeAlt className="mb-4 text-4xl text-green-600 transition-colors group-hover:text-white" />
                        <h2 className="text-lg font-semibold">Livrare & Retur</h2>
                    </div>

                    <div className="group flex flex-col items-center bg-white p-6 text-center shadow-xl transition hover:bg-green-600 hover:text-white hover:shadow-lg">
                        <FaPercent className="mb-4 text-4xl text-green-600 transition-colors group-hover:text-white" />
                        <h2 className="text-lg font-semibold">Promoții</h2>
                    </div>

                    <div className="group flex flex-col items-center bg-white p-6 text-center shadow-xl transition hover:bg-green-600 hover:text-white hover:shadow-lg">
                        <FaUser className="mb-4 text-4xl text-green-600 transition-colors group-hover:text-white" />
                        <h2 className="text-lg font-semibold">Serviciu 24/7</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
