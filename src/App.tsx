import { useState } from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import MainNav from "./components/MainNav";
import SearchModal from "./components/Search";
import HeroCarousel from "./components/Banners";
import TopSelect from "./components/TopSelect";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
function App() {
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <>
            <TopNav />
            <MainNav />
            <HeroCarousel />
            <TopSelect />
            <Tools />
            <Footer />

            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </>
    );
}

export default App;
