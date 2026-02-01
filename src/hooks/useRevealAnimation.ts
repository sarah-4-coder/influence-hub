import { useEffect, useRef, useState } from 'react';

export const useRevealAnimation = (threshold = 0.1, startVisible = false) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(startVisible);

  useEffect(() => {
    // If startVisible is true, trigger immediately
    if (startVisible) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, startVisible]);

  return { ref, isVisible };
};
