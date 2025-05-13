import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

function TopNav() {
    return (
        <div className="flex justify-center bg-slate-800 py-2 text-sm text-white lg:block">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="flex items-center space-x-4 text-white">
                    <FaEnvelope className="mx-2 h-4 w-4" />
                    <a
                        className="navbar-sm-brand text-light text-decoration-none"
                        href="mailto:infosportshop@company.md"
                    >
                        infosportshop@company.md
                    </a>

                    <FaPhone className="mx-2 h-4 w-4" />
                    <a className="navbar-sm-brand text-light text-decoration-none" href="tel:+37360-945-543">
                        +37360-945-543
                    </a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="https://fb.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="h-5 w-5 text-white" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="h-5 w-5 text-white" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="h-5 w-5 text-white" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="h-5 w-5 text-white" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopNav;
