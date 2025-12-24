'use client';

import { useEffect, useRef } from 'react';

const timeline = [
  {
    status: 'Beta',
    statusBg: 'rgba(255,159,10,0.15)',
    statusColor: 'var(--apple-orange)',
    title: 'BookedCalls.ai',
    description:
      'Our first product, helping businesses automate their booking and scheduling workflows. Currently in beta testing.',
  },
  {
    status: 'Pending',
    statusBg: 'rgba(255,214,10,0.15)',
    statusColor: 'var(--apple-yellow)',
    title: 'TitanCard',
    description:
      'Digital business cards that make networking modern and effortless. Awaiting app store approvals.',
  },
  {
    status: '2026',
    statusBg: 'rgba(255,159,10,0.15)',
    statusColor: 'var(--apple-orange)',
    title: 'TappShop',
    description:
      'Link-in-bio commerce for non-physical goods. Think TikTok Shop, but for digital products and services.',
  },
  {
    status: 'Future',
    statusBg: 'rgba(191,90,242,0.15)',
    statusColor: 'var(--apple-purple)',
    title: "What's Next?",
    description:
      "We're always exploring new ideas. Got a problem that needs solving? Let's talk.",
  },
];

export default function Journey() {
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
    <section className="section-dark py-[120px]" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-[700px] mx-auto mb-16 fade-in">
          <p className="section-label" style={{ color: 'var(--apple-pink)' }}>
            Our Journey
          </p>
          <h2 className="section-title">Building momentum</h2>
          <p style={{ color: 'var(--content-secondary)', fontSize: '18px' }}>
            From idea to execution, here&apos;s our roadmap.
          </p>
        </div>

        <div className="max-w-[600px] mx-auto">
          {timeline.map((item, index) => (
            <div
              key={item.title}
              className="mb-12 fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className="timeline-badge badge"
                style={{
                  background: item.statusBg,
                  color: item.statusColor,
                }}
              >
                {item.status}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p style={{ color: 'var(--content-muted)' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
