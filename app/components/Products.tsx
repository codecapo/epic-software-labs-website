'use client';

import { useEffect, useRef } from 'react';

const products = [
  {
    name: 'BookedCalls.ai',
    status: 'Beta',
    statusColor: 'var(--apple-orange)',
    statusBg: 'rgba(255,159,10,0.15)',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    iconGradient: 'linear-gradient(135deg, var(--apple-blue), var(--apple-indigo))',
    description:
      'Intelligent scheduling and booking automation for businesses. Currently in beta — streamline your calendar, reduce no-shows, and convert more leads into booked appointments.',
    link: 'https://www.bookedcalls.ai/',
    linkText: 'Join Beta',
  },
  {
    name: 'TitanCard',
    status: 'Pending',
    statusColor: 'var(--apple-yellow)',
    statusBg: 'rgba(255,214,10,0.15)',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    iconGradient: 'linear-gradient(135deg, var(--apple-green), var(--apple-teal))',
    description:
      'Digital business cards reimagined. Create stunning, shareable digital profiles that make lasting first impressions. Currently pending approval on the App Store and Play Store.',
    link: 'https://titancard.me/',
    linkText: 'Learn More',
  },
  {
    name: 'TappShop',
    status: '2026',
    statusColor: 'var(--apple-orange)',
    statusBg: 'rgba(255,159,10,0.15)',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    iconGradient: 'linear-gradient(135deg, var(--apple-orange), var(--apple-yellow))',
    description:
      'The link-in-bio e-commerce platform for non-physical goods. Perfect for SMBs, consultants, and freelancers to monetise their links with a simple, no-gimmick storefront.',
    link: 'https://tappshop.me/',
    linkText: 'Coming Soon',
  },
];

export default function Products() {
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
    <section id="products" className="py-16 md:py-[120px]" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-[700px] mx-auto mb-10 md:mb-16 fade-in">
          <p className="section-label" style={{ color: 'var(--apple-indigo)' }}>
            Our Products
          </p>
          <h2 className="section-title">Solutions we&apos;ve built</h2>
          <p className="text-base md:text-lg" style={{ color: 'var(--content-secondary)' }}>
            Each product is designed to solve specific business challenges with simplicity
            and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="card-glass fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className="product-status badge"
                style={{
                  background: product.statusBg,
                  color: product.statusColor,
                }}
              >
                <span
                  className="dot"
                  style={{ background: product.statusColor }}
                />
                {product.status}
              </div>

              <div
                className="icon-box"
                style={{ background: product.iconGradient }}
              >
                {product.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{product.name}</h3>

              <p
                className="mb-6"
                style={{ color: 'var(--content-muted)' }}
              >
                {product.description}
              </p>

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="product-link"
              >
                {product.linkText}
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
