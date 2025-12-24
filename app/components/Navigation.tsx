'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          scrolled || mobileMenuOpen ? 'glass-thin border-b border-white/[0.06]' : ''
        }`}
      >
        <div className="container flex justify-between items-center">
          <a href="#" className="text-xl font-semibold text-white no-underline">
            Epic Software Labs
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            <li>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, '#about')}
                className="text-[var(--content-secondary)] no-underline text-sm font-medium transition-colors hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => scrollToSection(e, '#products')}
                className="text-[var(--content-secondary)] no-underline text-sm font-medium transition-colors hover:text-white"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#approach"
                onClick={(e) => scrollToSection(e, '#approach')}
                className="text-[var(--content-secondary)] no-underline text-sm font-medium transition-colors hover:text-white"
              >
                Approach
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn-primary !py-2.5 !px-5 !text-sm !w-auto"
              >
                Get in Touch
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-[72px] left-0 right-0 glass-thick border-b border-white/10 p-6">
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="block py-3 text-white no-underline text-lg font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => scrollToSection(e, '#products')}
                  className="block py-3 text-white no-underline text-lg font-medium"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  onClick={(e) => scrollToSection(e, '#approach')}
                  className="block py-3 text-white no-underline text-lg font-medium"
                >
                  Approach
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="btn-primary justify-center"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
