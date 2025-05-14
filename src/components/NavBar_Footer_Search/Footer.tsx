import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bottom-0 mt-5 w-full bg-gray-800 text-white">
            <div className="container mx-auto px-20 py-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Col 1 */}
                    <div>
                        <h2 className="border-b border-gray-700 pb-3 text-3xl text-green-400">Fit cu Stil</h2>
                        <ul className="text-m mt-4 space-y-4 font-light">
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt className="mt-1" />
                                str.Nicolae Dimo 21/1, sect.Ciocana, Chisinau
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhone />
                                <a href="tel:060945543" className="hover:text-green-400">
                                    060945543
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope />
                                <a href="mailto:infosportshop@company.md" className="hover:text-green-400">
                                    infosportshop@company.md
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h2 className="border-b border-gray-700 pb-3 text-4xl">Produse</h2>
                        <ul className="text-m mt-4 space-y-2">
                            {[
                                "Lux",
                                "Îmbrăcăminte sport",
                                "Încălțăminte bărbați",
                                "Încălțăminte femei",
                                "Ținute populare",
                                "Accesorii pentru sală",
                                "Încălțăminte sport",
                            ].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="font-light hover:text-green-400">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h2 className="border-b border-gray-700 pb-3 text-3xl">Informații suplimentare</h2>
                        <ul className="text-m mt-4 space-y-2 font-light">
                            {["Acasă", "Despre noi", "Locații magazine", "Întrebări frecvente", "Contact"].map(
                                (item, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:text-green-400">
                                            {item}
                                        </a>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>

                {/* Social & Subscribe */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-6 md:flex-row">
                    <ul className="flex gap-4">
                        {[
                            { href: "http://facebook.com/", icon: <FaFacebookF /> },
                            { href: "https://www.instagram.com/", icon: <FaInstagram /> },
                            { href: "https://twitter.com/", icon: <FaTwitter /> },
                            { href: "https://www.linkedin.com/", icon: <FaLinkedin /> },
                        ].map((social, i) => (
                            <li key={i} className="rounded-full border border-gray-600 p-2 hover:bg-gray-700">
                                <a href={social.href} target="_blank" rel="noreferrer" className="text-3xl text-white">
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex w-full items-center md:w-auto">
                        <input
                            type="text"
                            placeholder="Email address"
                            className="w-full rounded-l-md border border-gray-600 bg-gray-800 px-4 py-2 text-white md:w-64"
                        />
                        <button className="rounded-r-md bg-green-600 px-4 py-2 text-white">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-slate-900 py-3">
                <div className="container mx-auto px-5 py-2">
                    <p>
                        Copyright &copy; 2025 Company Name | Designed by{" "}
                        <a href="#" className="hover:text-green-400" target="_blank" rel="sponsored">
                            Sport Company
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
