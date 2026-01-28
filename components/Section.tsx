import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className="text-xl font-medium mb-4 text-black tracking-normal">{title}</h2>
      <div className="text-gray-800 leading-relaxed space-y-4 text-base font-light">
        {children}
      </div>
    </section>
  );
};