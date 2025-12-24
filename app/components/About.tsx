'use client';

import { useEffect, useRef } from 'react';

export default function About() {
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
    <section id="about" className="py-[120px]" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <p className="section-label" style={{ color: 'var(--apple-blue)' }}>
              Who We Are
            </p>
            <h2 className="section-title">
              Product builders,
              <br />
              not just developers.
            </h2>
            <p
              className="text-lg mb-6"
              style={{ color: 'var(--content-secondary)' }}
            >
              Epic Software Labs isn&apos;t your typical software agency. We&apos;re a dedicated
              product house that builds, launches, and grows our own B2B SaaS solutions.
              Every product we create solves real problems for real businesses.
            </p>
            <p className="text-lg" style={{ color: 'var(--content-secondary)' }}>
              We combine deep technical expertise with genuine market understanding to
              create software that businesses actually want to use. Our focus is on
              simplicity, reliability, and delivering genuine value.
            </p>
          </div>

          {/* Floating shapes */}
          <div
            className="fade-in relative h-[400px]"
            style={{ transitionDelay: '0.2s' }}
          >
            <div
              className="shape absolute"
              style={{
                width: '180px',
                height: '180px',
                background: 'linear-gradient(135deg, var(--apple-blue), var(--apple-indigo))',
                top: 0,
                left: '32px',
                boxShadow: '0 0 60px rgba(10,132,255,0.3)',
              }}
            />
            <div
              className="shape absolute"
              style={{
                width: '140px',
                height: '140px',
                background: 'linear-gradient(135deg, var(--apple-green), var(--apple-teal))',
                bottom: '64px',
                right: '32px',
                animationDelay: '-2s',
                boxShadow: '0 0 60px rgba(48,209,88,0.3)',
              }}
            />
            <div
              className="shape absolute"
              style={{
                width: '110px',
                height: '110px',
                background: 'linear-gradient(135deg, var(--apple-orange), var(--apple-yellow))',
                top: '50%',
                right: '30%',
                animationDelay: '-4s',
                boxShadow: '0 0 60px rgba(255,159,10,0.3)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
