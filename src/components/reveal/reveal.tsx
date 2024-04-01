import React, { ReactNode, useEffect, useState, useRef } from 'react';
import 'intersection-observer';

interface RevealCompProps {
  children: ReactNode;
  duration: string;
  x?: number;
  y?: number;
}

const Reveal = ({ children, duration }: RevealCompProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity ${duration} ease-in-out, transform ${duration} ease-in-out`,
        opacity: isVisible ? 1 : 0,
      }}
      className={`transition ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
