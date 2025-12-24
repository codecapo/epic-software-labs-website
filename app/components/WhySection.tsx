'use client';

import { useEffect, useRef } from 'react';

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3l1.5 4.5H18l-3.5 2.5 1.5 4.5-4-3-4 3 1.5-4.5L6 7.5h4.5L12 3zM5 19h14M5 22h14" />
      </svg>
    ),
    iconBg: 'rgba(10,132,255,0.2)',
    iconColor: 'var(--apple-blue)',
    title: 'Simplicity First',
    description:
      'We strip away the unnecessary to focus on what truly matters for your business.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    iconBg: 'rgba(48,209,88,0.2)',
    iconColor: 'var(--apple-green)',
    title: 'Reliability',
    description:
      'Our products are built to be dependable. When you need them, they work.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    iconBg: 'rgba(255,159,10,0.2)',
    iconColor: 'var(--apple-orange)',
    title: 'User-Centric',
    description:
      'Every decision we make starts with the question: how does this help our users?',
  },
];

export default function WhySection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div className="fade-in">
            <p className="section-label" style={{ color: 'var(--apple-purple)' }}>
              Why We Exist
            </p>
            <h2 className="section-title">
              Software should be simple, not complicated.
            </h2>
            <p
              className="text-base md:text-lg mb-6"
              style={{ color: 'var(--content-secondary)' }}
            >
              We started Epic Software Labs because we were tired of bloated software
              with unnecessary features, confusing interfaces, and hidden costs. We
              believe businesses deserve tools that just work.
            </p>
            <p className="text-base md:text-lg" style={{ color: 'var(--content-secondary)' }}>
              Our mission is to create B2B SaaS products that are powerful yet
              intuitive, feature-rich without being overwhelming, and priced fairly
              for the value they deliver.
            </p>
          </div>

          <div className="fade-in flex flex-col gap-4" style={{ transitionDelay: '0.2s' }}>
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-regular rounded-2xl p-6"
              >
                <div className="value-item">
                  <div
                    className="icon-box-sm"
                    style={{ background: value.iconBg, color: value.iconColor }}
                  >
                    {value.icon}
                  </div>
                  <div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
