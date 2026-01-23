import { useCustomCursor } from '@/hooks/useCustomCursor';

const CustomCursor = () => {
  const { cursorRef, isHovering } = useCustomCursor();

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-300"
      style={{
        width: isHovering ? '60px' : '25px',
        height: isHovering ? '60px' : '25px',
        backgroundColor: isHovering ? 'rgba(204, 255, 0, 0.3)' : 'hsl(75, 100%, 50%)',
      }}
    />
  );
};

export default CustomCursor;
