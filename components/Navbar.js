"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "About Me", href: "#" },
    { name: "Services", href: "#" },
    { name: "How It Works", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 py-4">
      <div className="container">
        <nav className="flex justify-between items-center">
          {/* Logo - Updated with Satoshi font */}
          <div className="flex flex-col">
            <div className="text-xl font-normal text-primary leading-none font-satoshi">
              DR. SURYA TEJA
            </div>
            <div className="text-xs text-dark mt-1 tracking-wide font-satoshi">
              SAVING TOOTH, CARING SMILES
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="book-btn">
              Book A Session
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="container">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="nav-link block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="book-btn inline-block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book A Session
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
