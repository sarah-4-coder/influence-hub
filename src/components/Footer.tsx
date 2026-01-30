const Footer = () => {
  return (
    <footer className="py-10 md:py-20 border-t border-white/5 px-4 md:px-12 bg-[#050505] flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground z-10 relative">
      <div className="text-center md:text-left">
        © 2026 DotFluence Infrastructure
      </div>
      <div className="flex space-x-8 md:space-x-12">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          Instagram
        </a>
        <a href="#" className="hover:text-primary transition">
          LinkedIn
        </a>
      </div>
      <div className="text-white opacity-40 text-center">System built for the 1%</div>
    </footer>
  );
};

export default Footer;
