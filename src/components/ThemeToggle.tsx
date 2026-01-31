import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-secondary border border-border transition-all duration-300 hover:scale-105 group"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
          theme === 'dark'
            ? 'left-1 bg-primary'
            : 'left-7 bg-gradient-to-r from-[#3498DB] via-[#2980B9] to-cyan-400'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-3.5 h-3.5 text-primary-foreground" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-white" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
