'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const fadeElements = contentRef.current?.querySelectorAll('.fade-in');
    fadeElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center py-[120px_0_80px] relative overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'var(--apple-blue)',
          filter: 'blur(100px)',
          opacity: 0.3,
          top: '-200px',
          left: '20%',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'var(--apple-indigo)',
          filter: 'blur(100px)',
          opacity: 0.3,
          bottom: '-100px',
          right: '10%',
        }}
      />

      <div className="container" ref={contentRef}>
        <div className="relative max-w-[900px]">
          <div className="badge fade-in">
            <span className="badge-dot" style={{ background: 'var(--apple-green)' }} />
            Building the future of B2B SaaS
          </div>

          <h1
            className="fade-in mt-6"
            style={{
              fontSize: 'clamp(48px, 8vw, 80px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '24px',
              transitionDelay: '0.1s',
            }}
          >
            We build software
            <br />
            <span className="gradient-text">that scales.</span>
          </h1>

          <p
            className="fade-in text-xl max-w-[600px] mb-10"
            style={{
              color: 'var(--content-secondary)',
              transitionDelay: '0.2s',
            }}
          >
            Epic Software Labs is a product-focused development house creating B2B SaaS solutions
            that help businesses grow, automate, and thrive.
          </p>

          <div
            className="fade-in flex gap-4 flex-wrap"
            style={{ transitionDelay: '0.3s' }}
          >
            <a
              href="#products"
              onClick={(e) => scrollToSection(e, '#products')}
              className="btn-primary"
            >
              Explore Our Products
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="btn-secondary"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
