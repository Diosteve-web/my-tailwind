import React from "react";
import { Routes, Route } from "react-router-dom";
// ... (your existing imports)
import CelebritySection from "./components/cele.jsx";

// Import new celebrity data
import { Celebrities } from "./cele.js"; 
import { Shop } from "./shop.js";
import { NavLinks } from "./data.js";
import { Data } from "./features.js";

// Import Cart Page
import CartPage from "./components/stores/CartPage.jsx";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Tag from "./components/Tag.jsx";
import Products from "./components/Products";
import Card from "./components/card.jsx";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Diorimage from "./image/logo.png";
import DiorVid from "./video/dior.webm";

function App() {
  return (
    <main className="bg-black min-h-screen">
      <Nav
        imgSrc={Diorimage}
        imgAlt="Dior Logo"
        imgClass="w-16 h-auto rounded-2xl"
        navLinks={NavLinks}
      />

      <Routes>
        <Route path="/" element={
          <>
            <section id="home" className="w-full xl:px-16 pb-12">
              <Hero VideoSrc={DiorVid} />
            </section>

            <section id="features" className="px-8 py-12">
              <Features future={Data} />
            </section>

            {/* NEW CELEBRITY SECTION */}
            <CelebritySection celebs={Celebrities} />

            <section id="shop" className="px-0 py-12">
              <Tag shopData={Shop} />
            </section>

            <section id="products" className="px-8 py-12 bg-gray-50">
              <Products />
              <Card product={Shop[0]} /> 
          
            </section>
          </>
        } />

        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <footer className="bg-slate-900 text-white px-8 pt-12 pb-8">
            <Reviews />
        <Footer />
      </footer>
    </main>
  );
}

export default App;