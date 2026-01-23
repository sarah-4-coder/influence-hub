import { useEffect, useRef, useState } from 'react';

export const useCustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x - 12.5}px, ${cursorPos.current.y - 12.5}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const animationId = requestAnimationFrame(animateCursor);

    // Add hover listeners to interactive elements
    const hoverables = document.querySelectorAll('button, a, .glass, .hoverable');
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return { cursorRef, isHovering };
};
