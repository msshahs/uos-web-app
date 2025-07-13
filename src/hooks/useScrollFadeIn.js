
// 1. Install react-intersection-observer
// npm install @react-intersection-observer

// 2. Create a custom hook for fade-in animation using Intersection Observer
// src/hooks/useScrollFadeIn.js
import { useInView } from 'react-intersection-observer';

export function useScrollFadeIn(threshold = 0.1, rootMargin = '0px') {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin,
  });

  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    transition: 'all 0.6s ease-out',
    willChange: 'opacity, transform',
  };

  return { ref, style };
}
