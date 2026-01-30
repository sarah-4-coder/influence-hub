import { useRevealAnimation } from '@/hooks/useRevealAnimation';

const services = [
  {
    title: 'Celebrity & Macro Campaigns',
    description:
      "Collaboration with India's top-tier Instagram personalities. Designed to boost awareness, visibility, and brand authority through high-reach collaborations with verified creators.",
    tag: 'VERIFIED CREATORS',
  },
  {
    title: 'Micro & Nano Collaborations',
    description:
      'Tapping into highly engaged niche communities for brands valuing authenticity over vanity metrics. Relatable storytelling, superior engagement, and long-term loyalty.',
    tag: 'NICHE COMMUNITIES',
  },
  {
    title: 'Product Seeding & UGC Content',
    description:
      'End-to-end management of gifting, unboxing, and user-generated content. We identify influencers who genuinely love your product to create reusable visual assets.',
    tag: 'UGC ASSETS',
  },
];

const networkTiers = [
  { range: '1K-10K', label: 'Nano' },
  { range: '10K-100K', label: 'Micro' },
  { range: '100K-500K', label: 'Mid-Tier' },
  { range: '500K-1M', label: 'Macro' },
  { range: '1M+', label: 'Mega' },
  { range: 'Verified', label: 'OTT Celebs' },
];

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useRevealAnimation();
  const { ref: networkRef, isVisible: networkVisible } = useRevealAnimation();

  return (
    <section id="services" className="py-16 md:py-32 px-4 md:px-12 bg-black relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-black mb-3 md:mb-4 uppercase tracking-tighter">
              System <span className="text-primary">Capabilities.</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Automated influencer marketing services designed for awareness, authority, and
              engagement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 100} />
          ))}
        </div>

        <div
          ref={networkRef}
          className={`mt-12 md:mt-24 transition-all duration-1000 ${
            networkVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="font-heading text-lg md:text-2xl font-black mb-6 md:mb-10 uppercase tracking-widest text-center text-muted-foreground italic">
            Dynamic Influencer Network
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {networkTiers.map((tier, index) => (
              <div
                key={index}
                className="glass p-3 md:p-6 rounded-lg md:rounded-xl text-center border-white/5 hover:border-primary/30 transition group"
              >
                <p className="text-primary text-sm md:text-lg font-black">{tier.range}</p>
                <p className="text-[6px] md:text-[8px] font-bold text-muted-foreground uppercase tracking-widest">
                  {tier.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  title,
  description,
  tag,
  delay,
}: {
  title: string;
  description: string;
  tag: string;
  delay: number;
}) => {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <div
      ref={ref}
      className={`glass p-6 md:p-10 rounded-xl md:rounded-2xl neon-border-glow transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h4 className="text-primary text-[10px] md:text-xs font-black uppercase mb-3 md:mb-4 tracking-widest">{title}</h4>
      <p className="text-muted-foreground text-xs md:text-sm mb-6 md:mb-8">{description}</p>
      <div className="flex flex-wrap gap-2">
        <span className="px-2 md:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[6px] md:text-[7px] font-bold">
          {tag}
        </span>
      </div>
    </div>
  );
};

export default ServicesSection;
