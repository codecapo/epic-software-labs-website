'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'glass-thin border-b border-white/[0.06]' : ''
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-xl font-semibold text-white no-underline">
          Epic Software Labs
        </a>
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
              className="btn-primary !py-2.5 !px-5 !text-sm"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
