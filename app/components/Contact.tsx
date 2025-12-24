'use client';

import { useEffect, useRef } from 'react';

export default function Contact() {
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
    <section id="contact" className="py-[120px]" ref={sectionRef}>
      <div className="container">
        <div className="glass-thick rounded-3xl max-w-[700px] mx-auto p-16 text-center fade-in">
          <p className="section-label" style={{ color: 'var(--apple-blue)' }}>
            Get in Touch
          </p>
          <h2 className="section-title">Let&apos;s build something great together</h2>
          <p
            className="text-lg mb-6"
            style={{ color: 'var(--content-secondary)' }}
          >
            Whether you want to learn more about our products, explore partnership
            opportunities, or just say hello — we&apos;d love to hear from you.
          </p>

          <div className="mb-8" style={{ color: 'var(--content-muted)', fontSize: '14px' }}>
            <p>85 Great Portland Street, First Floor</p>
            <p>London, England, W1W 7LT</p>
          </div>

          <a
            href="mailto:hello@epicsoftwarelabs.com"
            className="btn-primary text-lg py-[18px] px-8"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            hello@epicsoftwarelabs.com
          </a>
        </div>
      </div>
    </section>
  );
}
