import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

const Welcome = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [phase, setPhase] = useState<'boot' | 'welcome' | 'question'>('boot');
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const bootSequence = [
    '> Initializing DotFluence Protocol...',
    '> Loading creator infrastructure...',
    '> Connecting to network nodes...',
    '> System ready.',
  ];
  
  const [bootLine, setBootLine] = useState(0);
  const [bootComplete, setBootComplete] = useState(false);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Boot sequence
  useEffect(() => {
    if (phase === 'boot' && bootLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setBootLine(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else if (phase === 'boot' && bootLine >= bootSequence.length) {
      setTimeout(() => {
        setBootComplete(true);
        setPhase('welcome');
      }, 500);
    }
  }, [phase, bootLine]);

  // Welcome typing effect
  useEffect(() => {
    if (phase === 'welcome') {
      const welcomeText = 'WELCOME TO DOTFLUENCE';
      let index = 0;
      const timer = setInterval(() => {
        if (index <= welcomeText.length) {
          setTypedText(welcomeText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => setPhase('question'), 800);
        }
      }, 80);
      return () => clearInterval(timer);
    }
  }, [phase]);

  const handleSelection = (type: 'influencer' | 'agency') => {
    navigate(type === 'influencer' ? '/influencer' : '/agency');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-6 relative overflow-hidden ${theme === 'dark' ? 'dot-matrix' : 'social-pattern'}`}>
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'var(--gradient-primary)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        {/* Terminal Window */}
        <div className="glass rounded-2xl overflow-hidden border border-border shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/50">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="ml-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              dotfluence://terminal
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-8 md:p-12 font-mono min-h-[400px] flex flex-col justify-center">
            {/* Boot Sequence */}
            {phase === 'boot' && (
              <div className="space-y-2 text-sm text-muted-foreground">
                {bootSequence.slice(0, bootLine).map((line, i) => (
                  <div 
                    key={i} 
                    className={`transition-opacity duration-300 ${i === bootLine - 1 ? 'text-primary' : ''}`}
                  >
                    {line}
                  </div>
                ))}
                <span className={`inline-block w-2 h-4 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            )}

            {/* Welcome Text */}
            {phase === 'welcome' && (
              <div className="text-center">
                <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tighter">
                  <span className="gradient-text">{typedText}</span>
                  <span className={`inline-block w-1 h-8 md:h-12 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                </h1>
              </div>
            )}

            {/* Question Phase */}
            {phase === 'question' && (
              <div className="text-center space-y-12 animate-fade-in">
                <div>
                  <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tighter mb-4">
                    <span className="gradient-text">WELCOME TO DOTFLUENCE</span>
                  </h1>
                  <p className="text-muted-foreground text-sm md:text-base uppercase tracking-widest">
                    India's Premier Influencer Infrastructure
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-lg md:text-xl font-bold mb-8">
                    Who are you?
                  </p>

                  <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <button
                      onClick={() => handleSelection('influencer')}
                      className="group glass px-8 py-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="text-2xl mb-2">🎬</div>
                      <h3 className="font-heading text-xl font-black uppercase tracking-tight gradient-text mb-1">
                        Influencer
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Content Creator
                      </p>
                    </button>

                    <button
                      onClick={() => handleSelection('agency')}
                      className="group glass px-8 py-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="text-2xl mb-2">🏢</div>
                      <h3 className="font-heading text-xl font-black uppercase tracking-tight gradient-text mb-1">
                        Agency / Brand
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Business Partner
                      </p>
                    </button>
                  </div>
                </div>

                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Press to enter your portal
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © 2026 DotFluence Infrastructure
        </p>
      </div>
    </div>
  );
};

export default Welcome;
