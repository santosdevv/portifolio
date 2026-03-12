import React, { useEffect, useRef, useState } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
}

const SectionReveal: React.FC<SectionRevealProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default SectionReveal;
