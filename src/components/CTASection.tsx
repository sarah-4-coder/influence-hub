import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Link } from "react-router-dom";

interface CTAContent {
  title: string;
  titleHighlight: string;
  subtitle: string;
  creatorCard?: {
    title: string;
    description: string;
    cta: string;
  };
  brandCard?: {
    title: string;
    description: string;
    cta: string;
  };
  agencyCard?: {
    title: string;
    description: string;
    cta: string;
  };
  enterpriseCard?: {
    title: string;
    description: string;
    cta: string;
  };
}

interface CTASectionProps {
  onOpenBrandForm: () => void;
  content: CTAContent;
  variant?: "influencer" | "agency";
}

const CTASection = ({
  onOpenBrandForm,
  content,
  variant = "agency",
}: CTASectionProps) => {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <section
      id="join"
      className="py-48 px-6 text-center relative overflow-hidden z-10"
    >
      <div
        ref={ref}
        className={`max-w-5xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="font-heading text-6xl md:text-[8rem] font-black leading-none mb-12 tracking-tighter italic uppercase">
          {content.title} <br />{" "}
          <span className="gradient-text">{content.titleHighlight}</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          {content.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {variant === "influencer" ? (
            <>
              {/* Creator Card */}
              <div className="glass p-12 rounded-[2.5rem] border-primary/20 text-left hover:bg-primary/5 transition cursor-pointer group">
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-primary">
                  {content.creatorCard?.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-10 leading-relaxed font-medium">
                  {content.creatorCard?.description}
                </p>
                <Link
                  to="https://platform.dotfluence.in/login"
                  className="btn-protocol dark:hover:bg-white w-full py-5 rounded-sm text-[10px] block text-center"
                >
                  {content.creatorCard?.cta}
                </Link>
              </div>

              {/* Brand Card */}
              <div
                className="glass p-12 rounded-[2.5rem] border-border text-left hover:bg-foreground/5 transition cursor-pointer group"
                onClick={onOpenBrandForm}
              >
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-foreground">
                  {content.brandCard?.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-10 leading-relaxed font-medium">
                  {content.brandCard?.description}
                </p>
                <button className="bg-foreground text-background font-black w-full py-5 rounded-sm text-[10px] uppercase tracking-widest hover:bg-foreground/90 transition">
                  {content.brandCard?.cta}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Agency Card */}
              <div
                className="glass p-12 rounded-[2.5rem] border-primary/20 text-left hover:bg-primary/5 transition cursor-pointer group"
              >
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-primary">
                  {content.agencyCard?.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-10 leading-relaxed font-medium">
                  {content.agencyCard?.description}
                </p>
                <Link
                  to="https://platform.dotfluence.in/company/signup"
                  className="btn-protocol dark:hover:bg-white w-full py-5 rounded-sm text-[10px] block text-center"
                >
                  {content.agencyCard?.cta}
                </Link>
              </div>

              {/* Enterprise Card */}
              <div
                className="glass p-12 rounded-[2.5rem] border-border text-left hover:bg-foreground/5 transition cursor-pointer group"
                onClick={onOpenBrandForm}
              >
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-foreground">
                  {content.enterpriseCard?.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-10 leading-relaxed font-medium">
                  {content.enterpriseCard?.description}
                </p>
                <button className="bg-foreground text-background font-black w-full py-5 rounded-sm text-[10px] uppercase tracking-widest hover:bg-foreground/90 transition">
                  {content.enterpriseCard?.cta}
                </button>
              </div>
            </>
          )}
        </div>
        <p className="mt-24 text-[10px] uppercase font-black text-muted-foreground tracking-[0.5em]">
          Direct Operations:{" "}
          <span className="text-foreground">collaborate@dotfluence.in</span>
        </p>
      </div>
    </section>
  );
};

export default CTASection;
