
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";

function Header({ minimal = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = minimal
  ? [
      { to: "/", label: "Home" },
      { to: "/lehengas", label: "Lehnga" },
      { to: "/makeup", label: "Makeup" },
      // { to: "/book-appointment", label: "Book Appointment" }
    ]
  : [
      { to: "#home", label: "Home" },
      { to: "#services", label: "Services" },
      { to: "/lehengas", label: "Lehnga" },
      { to: "/makeup", label: "Makeup" },
      { to: "#about", label: "About Us" },
      { to: "#specialists", label: "Our Specialists" },
      { to: "#contact", label: "Contact" },
      // { to: "/book-appointment", label: "Book Appointment" }
    ];


  const handleNavClick = (e, to) => {
    e.preventDefault();
    if (to.startsWith("#")) {
      const sectionId = to.replace("#", "");
      if (location.pathname === "/") {
        scrollToSection(sectionId);
      } else {
        navigate("/");
        setTimeout(() => scrollToSection(sectionId), 300);
      }
    } else {
      navigate(to);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-pink-100 to-purple-100 sticky top-0 z-50 relative">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded shrink-0"
        >
          <img
            src="/logo.svg"
            alt="Velora Bridal Atelier logo"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full shadow-sm"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-pink-600 whitespace-nowrap">
            Velora <span className="font-semibold text-gray-800">Atelier</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={(e) => handleNavClick(e, link.to)}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-600 focus:rounded"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile & Tablet Menu Button */}
        <button
          className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile & Tablet Menu */}
        {isMenuOpen && (
          <aside className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-pink-100 py-4 px-4 z-50">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={(e) => handleNavClick(e, link.to)}
                    className="block text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors duration-200 py-2.5 px-3 text-left w-full font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={(e) => handleNavClick(e, "#appointment")}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded-full transition shadow-md font-medium"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </aside>
        )}

        {/* Appointment Button */}
        <nav className="hidden lg:block shrink-0">
          <button
            onClick={(e) => handleNavClick(e, "#appointment")}
            className="bg-pink-600 hover:bg-pink-700 text-white px-5 xl:px-6 py-2 rounded-full transition shadow-md whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
          >
            Book Appointment
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

