'use client';

import { useEffect, useRef } from 'react';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 18h6M10 22h4M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9c0 4 3.5 6.5 5 8 .5.5.5 1 .5 2h7c0-1 0-1.5.5-2 1.5-1.5 5-4 5-8z" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, var(--apple-blue), var(--apple-indigo))',
    title: 'Ideate',
    description:
      'We identify real market problems and validate solutions before writing a single line of code.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, var(--apple-green), var(--apple-teal))',
    title: 'Build',
    description:
      'We develop robust, scalable products with clean architecture and modern technology stacks.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, var(--apple-orange), var(--apple-yellow))',
    title: 'Scale',
    description:
      'We continuously improve and grow our products based on real user feedback and data.',
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);

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

    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in');
    fadeElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-dark py-16 md:py-[120px]" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-[700px] mx-auto mb-10 md:mb-16 fade-in">
          <p className="section-label" style={{ color: 'var(--apple-green)' }}>
            What We Do
          </p>
          <h2 className="section-title">Crafting SaaS solutions for modern businesses</h2>
          <p className="text-base md:text-lg" style={{ color: 'var(--content-secondary)' }}>
            We identify gaps in the market and build focused, elegant solutions that address
            specific business needs without unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="stat-glass fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className="icon-box mx-auto"
                style={{ background: service.gradient }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm" style={{ color: 'var(--content-muted)' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
