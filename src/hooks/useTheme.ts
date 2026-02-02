import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

/**
 * Custom hook for managing application theme with persistence and system preference detection.
 * 
 * On first load, the hook respects the following priority:
 * 1. Stored theme preference in localStorage ('dotfluence-theme')
 * 2. Fallback to 'light' theme
 * 
 * @returns {Object} Theme management object
 * @returns {Theme} returns.theme - Current theme ('dark' | 'light')
 * @returns {() => void} returns.toggleTheme - Function to toggle between themes
 * @returns {(theme: Theme) => void} returns.setTheme - Function to set theme explicitly
 * 
 * @example
 * const { theme, toggleTheme, setTheme } = useTheme();
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('dotfluence-theme') as Theme;
      if (stored) return stored;
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('dotfluence-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme, setTheme };
};
