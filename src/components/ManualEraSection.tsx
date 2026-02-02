import { useRevealAnimation } from '@/hooks/useRevealAnimation';

interface ManualEraContent {
  title: string;
  titleHighlight: string;
  description: string;
  features: {
    number: string;
    title: string;
    description: string;
  }[];
}

interface ManualEraSectionProps {
  content: ManualEraContent;
}

const ManualEraSection = ({ content }: ManualEraSectionProps) => {
  const { ref: leftRef, isVisible: leftVisible } = useRevealAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useRevealAnimation();

  return (
    <section id="logic" className="py-32 px-6 md:px-12 bg-card relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div
          ref={leftRef}
          className={`transition-all duration-1000 ${
            leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-black mb-8 leading-tight">
            {content.title} <br />
            <span className="text-muted-foreground italic uppercase tracking-tighter">{content.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            {content.description}
          </p>
          <div className="space-y-6">
            {content.features.map((feature) => (
              <div key={feature.number} className="flex items-start space-x-4 group">
                <div className="w-6 h-6 rounded-full border border-primary flex items-center justify-center text-[10px] text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {feature.number}
                </div>
                <div>
                  <p className="text-foreground/80 text-sm font-bold uppercase tracking-widest">
                    {feature.title}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={rightRef}
          className={`glass rounded-3xl p-2 aspect-square md:aspect-video relative overflow-hidden group transition-all duration-1000 ${
            rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                Active Pipeline: 598 Nodes
              </span>
            </div>
            <div className="flex-grow flex items-end space-x-3">
              <div className="w-full bg-primary/10 h-[30%] rounded-t-lg border-t border-primary/20 hover:h-[40%] transition-all duration-500" />
              <div className="w-full bg-primary/20 h-[60%] rounded-t-lg border-t border-primary/30 hover:h-[70%] transition-all duration-500" />
              <div className="w-full bg-primary h-[90%] rounded-t-lg shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:scale-x-105 transition-all" />
              <div className="w-full bg-primary/40 h-[45%] rounded-t-lg border-t border-primary/50 hover:h-[55%] transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualEraSection;
