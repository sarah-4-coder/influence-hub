import { useTheme } from '@/hooks/useTheme';
import { useParallax } from '@/hooks/useParallax';

const Sparkle = ({ delay, left, top }: { delay: number; left: string; top: string }) => (
  <div
    className="absolute w-2 h-2 animate-sparkle pointer-events-none"
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
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Confetti = ({ delay, left, color }: { delay: number; left: string; color: string }) => (
  <div
    className="fixed bottom-0 w-3 h-3 rounded-sm animate-confetti pointer-events-none"
    style={{
      left,
      animationDelay: `${delay}s`,
      backgroundColor: color,
      animationDuration: `${8 + Math.random() * 4}s`,
    }}
  />
);

const GradientBlob = ({
  className,
  colors,
  parallaxSpeed,
}: {
  className: string;
  colors: string;
  parallaxSpeed: number;
}) => {
  const scrollY = useParallax();

  return (
    <div
      className={`fixed rounded-full blur-[80px] pointer-events-none animate-blob ${className}`}
      style={{
        background: colors,
        transform: `translateY(${scrollY * parallaxSpeed}px)`,
      }}
    />
  );
};

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

  const confettiColors = ['#f472b6', '#a855f7', '#22d3ee', '#facc15', '#fb923c'];
  const confetti = Array.from({ length: 15 }, (_, i) => ({
    delay: i * 0.5,
    left: `${5 + Math.random() * 90}%`,
    color: confettiColors[i % confettiColors.length],
  }));

  return (
    <>
      {/* Gradient Blobs */}
      <GradientBlob
        className="w-[400px] h-[400px] top-[5%] left-[-10%] opacity-40"
        colors="linear-gradient(135deg, #f472b6, #a855f7)"
        parallaxSpeed={0.03}
      />
      <GradientBlob
        className="w-[500px] h-[500px] top-[30%] right-[-15%] opacity-30"
        colors="linear-gradient(135deg, #22d3ee, #a855f7)"
        parallaxSpeed={-0.05}
      />
      <GradientBlob
        className="w-[350px] h-[350px] bottom-[10%] left-[20%] opacity-35"
        colors="linear-gradient(135deg, #facc15, #fb923c, #f472b6)"
        parallaxSpeed={0.08}
      />
      <GradientBlob
        className="w-[300px] h-[300px] top-[60%] right-[25%] opacity-25"
        colors="linear-gradient(135deg, #34d399, #22d3ee)"
        parallaxSpeed={-0.04}
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
