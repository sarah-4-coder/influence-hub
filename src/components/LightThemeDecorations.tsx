import { useTheme } from '@/hooks/useTheme';

const Sparkle = ({ delay, left, top }: { delay: number; left: string; top: string }) => (
  <div
    className="fixed w-2 h-2 animate-sparkle pointer-events-none will-change-transform"
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

const Confetti = ({ delay, left, color }: { delay: number; left: string; color: string }) => (
  <div
    className="fixed bottom-0 w-2 h-2 rounded-sm animate-confetti pointer-events-none will-change-transform"
    style={{
      left,
      animationDelay: `${delay}s`,
      backgroundColor: color,
    }}
  />
);

const GradientBlob = ({ className, colors }: { className: string; colors: string }) => (
  <div
    className={`fixed rounded-full blur-[60px] pointer-events-none animate-blob will-change-transform ${className}`}
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
    { delay: 2, left: '50%', top: '30%' },
    { delay: 2.5, left: '30%', top: '80%' },
    { delay: 3, left: '90%', top: '50%' },
    { delay: 3.5, left: '5%', top: '40%' },
  ];

  const confettiColors = ['#3498DB', '#2980B9', '#22d3ee', '#facc15', '#34d399'];
  const confetti = Array.from({ length: 10 }, (_, i) => ({
    delay: i * 0.8,
    left: `${10 + (i * 8)}%`,
    color: confettiColors[i % confettiColors.length],
  }));

  return (
    <>
      {/* Gradient Blobs - Reduced blur for performance */}
      <GradientBlob
        className="w-[300px] h-[300px] top-[5%] left-[-10%] opacity-30"
        colors="linear-gradient(135deg, #3498DB, #2980B9)"
      />
      <GradientBlob
        className="w-[400px] h-[400px] top-[30%] right-[-15%] opacity-25"
        colors="linear-gradient(135deg, #22d3ee, #2980B9)"
      />
      <GradientBlob
        className="w-[250px] h-[250px] bottom-[15%] left-[20%] opacity-25"
        colors="linear-gradient(135deg, #facc15, #34d399, #3498DB)"
      />

      {/* Sparkles */}
      {sparkles.map((sparkle, i) => (
        <Sparkle key={i} {...sparkle} />
      ))}

      {/* Confetti */}
      {confetti.map((c, i) => (
        <Confetti key={i} {...c} />
      ))}
    </>
  );
};

export default LightThemeDecorations;
