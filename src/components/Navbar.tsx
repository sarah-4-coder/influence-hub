import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  onOpenBrandForm: () => void;
  variant?: 'influencer' | 'agency';
}

const Navbar = ({ onOpenBrandForm, variant = 'agency' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = variant === 'influencer' 
    ? [
        { href: '#opportunities', label: 'Opportunities' },
        { href: '#verticals', label: 'Verticals' },
        { href: '#success', label: 'Success Stories', highlight: true },
      ]
    : [
        { href: '#logic', label: 'The Logic' },
        { href: '#services', label: 'Capabilities' },
        { href: '#proof', label: 'Evidence', highlight: true },
      ];

  const ctaText = variant === 'influencer' ? 'Join Network' : 'Get Access';

  return (
    <>
      <nav
        className={`fixed w-full z-[100] px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'glass py-4' : 'py-6'
        }`}
      >
        <div
          className="flex items-center space-x-3 group cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm rotate-45 group-hover:bg-primary group-hover:rotate-0 transition-all duration-500">
            <div className="w-2 h-2 bg-black -rotate-45 group-hover:rotate-0" />
          </div>
          <span className="font-heading font-bold text-2xl tracking-tighter uppercase">
            DOT<span className="text-primary">FLUENCE</span>
          </span>
        </div>

        <div className="hidden md:flex space-x-12 text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className={`hover:text-foreground transition ${link.highlight ? 'text-primary' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <a
            href="https://platform.dotfluence.in/login"
            className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition"
          >
            Login
          </a>
          <button
            onClick={onOpenBrandForm}
            className="btn-protocol px-6 py-2.5 rounded-sm text-[10px] dark:hover:bg-white"
          >
            {ctaText}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground hover:text-primary transition-colors z-[110]"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-background/95 backdrop-blur-lg transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={`text-2xl font-black uppercase tracking-widest transition ${
                link.highlight ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-8 flex flex-col items-center space-y-6">
            <ThemeToggle />
            <a
              href="https://platform.dotfluence.in/login"
              onClick={closeMobileMenu}
              className="text-lg font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition"
            >
              Login
            </a>
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenBrandForm();
              }}
              className="btn-protocol dark:hover:bg-white px-8 py-4 rounded-sm text-sm"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
