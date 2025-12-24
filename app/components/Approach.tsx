'use client';

import { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    color: 'var(--apple-blue)',
    title: 'Research',
    description:
      'Deep dive into market needs, competitor analysis, and user pain points.',
  },
  {
    number: '02',
    color: 'var(--apple-green)',
    title: 'Design',
    description:
      'User-first design that prioritises clarity, efficiency, and delight.',
  },
  {
    number: '03',
    color: 'var(--apple-orange)',
    title: 'Develop',
    description:
      'Clean, scalable code built with modern frameworks and best practices.',
  },
  {
    number: '04',
    color: 'var(--apple-purple)',
    title: 'Iterate',
    description:
      'Continuous improvement driven by real user feedback and data.',
  },
];

export default function Approach() {
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
    <section id="approach" className="py-16 md:py-[120px]" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-[700px] mx-auto mb-10 md:mb-16 fade-in">
          <p className="section-label" style={{ color: 'var(--apple-teal)' }}>
            Our Approach
          </p>
          <h2 className="section-title">How we build products</h2>
          <p className="text-base md:text-lg" style={{ color: 'var(--content-secondary)' }}>
            A methodical approach to creating software that delivers real value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="glass-regular rounded-[20px] p-6 fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="process-number" style={{ color: step.color }}>
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm" style={{ color: 'var(--content-muted)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
