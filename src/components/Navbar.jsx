import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/hamburgerMenu.svg";
import closeIcon from "../assets/close.svg";
import styles from '../components/styles.js'; 
import BookingForm from "./BookingForm.jsx";

export default function Navbar({ setShowModal }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // Close menu after clicking
  };


  return (
    <header className="bg-skyBlue relative z-50">
      <nav className="flex items-center justify-between py-4 px-6 md:px-12">
      {/* <nav className={`flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 `}> */}
        {/* {`bg-navyBlue ${styles.paddingY}`} */}
        {/* px-4 sm:px-8 md:px-12 lg:px-16 */}
        
        {/* Logo */}
        <img src={logo} alt="logo" className="w-12 h-12" />

        {/* Desktop Nav */}
        <ul className={`hidden md:flex flex-row gap-8 
          absolute left-1/2 transform -translate-x-1/2 
          text-navyBlue font-medium text-base`}>
          <li className="cursor-pointer hover:text-cyan 
          transition-colors"
          onClick={() => scrollToSection("home")}>Home</li>
          <li className="cursor-pointer hover:text-cyan 
          transition-colors"
          onClick={() => scrollToSection("services")}>Our Services</li>
          <li className="cursor-pointer hover:text-cyan 
          transition-colors"
          onClick={() => scrollToSection("samples")}>Samples</li>
          <li className="cursor-pointer hover:text-cyan 
          transition-colors"
          onClick={() => scrollToSection("how-it-works")}>How it Works</li>
          {/* <li className="cursor-pointer hover:text-cyan 
          transition-colors"
          onClick={() => scrollToSection("about")}>About Us</li> */}
        </ul>

        {/* Desktop Button */}
        {/* <button className="hidden md:block bg-navyBlue 
        text-white px-6 py-2 rounded-full font-semibold 
        hover:opacity-90 transition-opacity text-sm "
        onClick={() => scrollToSection("book-test")}>
          Contact Us
        </button> */}
        <button className="hidden md:block bg-navyBlue 
        text-white px-6 py-2 rounded-full font-semibold 
        hover:opacity-90 transition-opacity text-sm "
        onClick={() => setShowModal(true)}>
          Contact Us
        </button>

        {/* Hamburger (mobile/tablet only) */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <img
            src={isOpen ? closeIcon : menuIcon}
            alt="menu"
            className="w-7 h-7"
          />
        </button>
      </nav>

      {/* Dark Overlay (covers entire screen) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-skyBlue w-full fixed left-0 top-20 z-50 shadow-lg py-6 px-6">
          <ul className="flex flex-col gap-6 text-navyBlue text-lg font-medium">
            <li className="cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("services")}>Our Services</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("samples")}>Samples</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("how-it-works")}>How it Works</li>
            {/* <li className="cursor-pointer" onClick={() => scrollToSection("about")}>About Us</li> */}
            {/* include about page later */}
          </ul>

          {/* <button 
            className="mt-6 w-full bg-navyBlue text-white py-3 rounded-full font-semibold"
            onClick={() => scrollToSection("book-test")}
          >
            Contact Us
          </button> */}

          <button 
            className="mt-6 w-full bg-navyBlue text-white py-3 rounded-full font-semibold"
            onClick={() => setShowModal(true)}>
            Contact Us
          </button>

        </div>
      )}
    </header>
  );
}