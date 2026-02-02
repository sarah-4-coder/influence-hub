import { useTheme } from '@/hooks/useTheme';

const Sparkle = ({ delay, left, top }: { delay: number; left: string; top: string }) => (
  <div
    className="fixed w-2 h-2 animate-sparkle pointer-events-none"
    style={{
      left,
      top,
      animationDelay: `${delay}s`,
    }}
  >
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill="url(#sparkle-gradient)"
      />
      <defs>
        <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498DB" />
          <stop offset="50%" stopColor="#2980B9" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const GradientBlob = ({
  className,
  colors,
}: {
  className: string;
  colors: string;
}) => (
  <div
    className={`fixed rounded-full blur-[80px] pointer-events-none animate-blob ${className}`}
    style={{ background: colors }}
  />
);

const LightThemeDecorations = () => {
  const { theme } = useTheme();

  if (theme === 'dark') return null;

  const sparkles = [
    { delay: 0, left: '10%', top: '15%' },
    { delay: 0.5, left: '85%', top: '20%' },
    { delay: 1, left: '20%', top: '60%' },
    { delay: 1.5, left: '75%', top: '70%' },
  ];

  return (
    <>
      {/* Gradient Blobs - Reduced count for performance */}
      <GradientBlob
        className="w-[300px] h-[300px] top-[5%] left-[-10%] opacity-30"
        colors="linear-gradient(135deg, #3498DB, #2980B9)"
      />
      <GradientBlob
        className="w-[350px] h-[350px] top-[40%] right-[-10%] opacity-25"
        colors="linear-gradient(135deg, #22d3ee, #2980B9)"
      />

      {/* Sparkles - Reduced count */}
      {sparkles.map((sparkle, i) => (
        <Sparkle key={i} {...sparkle} />
      ))}
    </>
  );
};

export default LightThemeDecorations;
