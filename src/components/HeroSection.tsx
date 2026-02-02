interface HeroContent {
  tagline: string;
  title: string[];
  description: string;
  cta: string;
  secondaryCta: string;
}

interface HeroSectionProps {
  onOpenBrandForm: () => void;
  content: HeroContent;
  variant?: "influencer" | "agency";
}

const HeroSection = ({
  onOpenBrandForm,
  content,
  variant = "agency",
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 z-10">
      <div className="max-w-6xl opacity-100 translate-y-0 animate-fade-in">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-8">
          {content.tagline}
        </p>
        <h1 className="font-heading text-6xl md:text-[9rem] font-black leading-[0.8] mb-12 tracking-tighter uppercase">
          {content.title[0]} <br />{" "}
          <span className="gradient-text">{content.title[1]}</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          {content.description}
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-center items-center">
          <button
            onClick={onOpenBrandForm}
            className="btn-protocol dark:hover:bg-white px-12 py-5 rounded-sm text-xs"
          >
            {content.cta}
          </button>
          {/* <a
            href={variant === "influencer" ? "/agency" : "#join"}
            className="text-[11px] font-black uppercase tracking-[0.4em] text-foreground flex items-center group"
          >
            {content.secondaryCta}
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
