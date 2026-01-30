import { useRevealAnimation } from '@/hooks/useRevealAnimation';

interface HeroSectionProps {
  onOpenBrandForm: () => void;
}

const HeroSection = ({ onOpenBrandForm }: HeroSectionProps) => {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 pt-20 z-10">
      <div
        ref={ref}
        className={`max-w-6xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary mb-6 md:mb-8">
          SaaS-ENABLED // INFLUENCE ORCHESTRATION
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-[9rem] font-black leading-[0.85] md:leading-[0.8] mb-8 md:mb-12 tracking-tighter uppercase">
          SCALING <br /> <span className="text-primary">WITHOUT MESS.</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-2xl max-w-3xl mx-auto mb-10 md:mb-16 font-light leading-relaxed px-2">
          An automated infrastructure built for high-scale brand activations. From influencer
          onboarding to campaign completion—everything is{' '}
          <span className="text-white font-bold italic">perfectly orchestrated</span> through our
          proprietary SaaS platform.
        </p>

        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 justify-center items-center">
          <button onClick={onOpenBrandForm} className="btn-protocol px-8 md:px-12 py-4 md:py-5 rounded-sm text-[10px] md:text-xs w-full md:w-auto max-w-xs">
            Request Brand Access
          </button>
          <a
            href="#join"
            className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white flex items-center group"
          >
            Influencer Portal
            <svg
              className="ml-2 md:ml-3 w-4 h-4 group-hover:translate-x-2 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
