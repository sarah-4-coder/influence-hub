import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { useCounter } from '@/hooks/useCounter';

interface CaseStudy {
  brand: string;
  tag?: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
}

interface CaseEvidenceContent {
  title: string;
  titleHighlight: string;
  subtitle: string;
  cases: CaseStudy[];
}

interface CaseEvidenceSectionProps {
  content: CaseEvidenceContent;
}

const CaseEvidenceSection = ({ content }: CaseEvidenceSectionProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useRevealAnimation();

  return (
    <section id="proof" className="py-40 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-24 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-heading text-6xl md:text-[8rem] font-black mb-6 tracking-tighter italic uppercase">
            {content.title} <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-[0.5em] text-[10px] font-black">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {content.cases.map((caseStudy, index) => (
            <CaseCard key={caseStudy.brand} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseCard = ({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) => {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <div
      ref={ref}
      className={`glass p-16 rounded-[3rem] ${index === 0 ? 'border-primary/10 hover:bg-primary/[0.02]' : 'hover:bg-foreground/[0.02]'} transition-all relative overflow-hidden group duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {caseStudy.tag && (
        <div className="absolute top-0 right-0 p-10 text-[10px] font-black text-primary uppercase">
          TYPE: {caseStudy.tag}
        </div>
      )}
      <h4 className="text-5xl font-black mb-8 uppercase tracking-tighter">{caseStudy.brand}</h4>
      <p className="text-muted-foreground text-lg mb-12 leading-relaxed font-light">
        {caseStudy.description}
      </p>
      <div className={`grid ${caseStudy.stats.length > 2 ? 'md:grid-cols-3' : 'grid-cols-2'} gap-6 border-t border-border pt-10`}>
        {caseStudy.stats.map((stat) => (
          <StatCounter key={stat.label} stat={stat} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
};

const StatCounter = ({ stat, isVisible }: { stat: { value: string; label: string }; isVisible: boolean }) => {
  // Extract numeric value and suffix (like %, M, +, etc.)
  const numericMatch = stat.value.match(/^([\d,]+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1].replace(/,/g, '')) : 0;
  const suffix = stat.value.replace(/^[\d,]+/, '');
  
  const count = useCounter(numericValue, isVisible);
  
  return (
    <div>
      <p className="text-3xl font-black text-foreground">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-1">
        {stat.label}
      </p>
    </div>
  );
};

export default CaseEvidenceSection;
