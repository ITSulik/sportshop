import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import MainNav from "./components/NavBar_Footer_Search/MainNav";
import TopNav from "./components/NavBar_Footer_Search/TopNav";
import Footer from "./components/NavBar_Footer_Search/Footer";
import SearchModal from "./components/NavBar_Footer_Search/Search";
import Contacting from "./components/Contact";
import About from "./components/About";

function App() {
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <>
            <TopNav />
            <MainNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contacting />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />

            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </>
    );
}

export default App;
