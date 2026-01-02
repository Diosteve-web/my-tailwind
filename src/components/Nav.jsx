import React, { useState } from "react"; // Added useState
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useStore } from "../stores.js";
import { IoMdContact } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io"; // Added Close Icon
import { motion, AnimatePresence } from "framer-motion"; // Added for smooth animation

export default function Nav(props) {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu
  const cartCount = useStore((state) => state.getCartCount());

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img 
            src={props.imgSrc} 
            alt={props.imgAlt}
            className={`${props.imgClass} h-10 sm:h-12 brightness-110`}
          />
        </Link>
        
        {/* Desktop Links - Hidden on Mobile */}
        <ul className="hidden lg:flex space-x-12 items-center">
          {props.navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`/#${link.id}`}
                className="text-white/70 text-[11px] tracking-[0.4em] uppercase hover:text-amber-500 transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Action Icons */}
        <div className="flex items-center gap-6">
            <button className="hidden md:inline-block text-amber-500 border border-amber-500/30 px-6 py-2 text-[10px] tracking-[0.3em] uppercase hover:bg-amber-500 hover:text-black transition-all duration-500">
              Discover Dior
            </button>
            
            <Link to="/cart" className="relative group">
              <FaCartShopping className="text-xl text-white/80 group-hover:text-amber-500 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-amber-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-black">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/contact" className="hidden sm:block text-white/80 hover:text-amber-500 transition-colors">
              <IoMdContact className="text-2xl" />
            </Link>

            {/* Mobile Toggle Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-2xl text-amber-500 hover:text-white transition-colors z-[60]"
            >
              {isOpen ? <IoMdClose /> : <TiThMenu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed inset-0 h-screen bg-black z-50 flex flex-col items-center justify-center lg:hidden"
          >
            {/* Background Grain/Texture for Dior feel */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <ul className="flex flex-col space-y-10 text-center">
              {props.navLinks.map((link, index) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a 
                    href={`/#${link.id}`} 
                    onClick={toggleMenu} // Close menu on click
                    className="text-white text-3xl font-light tracking-[0.2em] uppercase hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-10 flex flex-col gap-6 items-center"
              >
                 <Link to="/contact" onClick={toggleMenu} className="text-amber-500 tracking-[0.5em] text-xs uppercase">Contact Us</Link>
                 <div className="w-12 h-px bg-amber-500/40"></div>
                 <p className="text-zinc-600 text-[9px] tracking-[0.8em] uppercase">Paris • London • New York</p>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}