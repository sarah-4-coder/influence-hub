import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { useCounter } from '@/hooks/useCounter';

const CaseEvidenceSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useRevealAnimation();
  const { ref: flipkartRef, isVisible: flipkartVisible } = useRevealAnimation();
  const { ref: myntraRef, isVisible: myntraVisible } = useRevealAnimation();

  const flipkartCreators = useCounter(1000, flipkartVisible);
  const flipkartDays = useCounter(14, flipkartVisible);
  const flipkartROI = useCounter(216, flipkartVisible);
  const myntraNodes = useCounter(598, myntraVisible);

  return (
    <section id="proof" className="py-20 md:py-40 px-4 md:px-12 bg-black relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-24 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-[8rem] font-black mb-4 md:mb-6 tracking-tighter italic uppercase">
            Case <span className="text-primary">Evidence.</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-black">
            Managed Network Output
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Flipkart Case */}
          <div
            ref={flipkartRef}
            className={`glass p-6 sm:p-10 md:p-16 rounded-2xl md:rounded-[3rem] border-primary/10 hover:bg-primary/[0.02] transition-all relative overflow-hidden group duration-1000 ${
              flipkartVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="absolute top-0 right-0 p-4 md:p-10 text-[8px] md:text-[10px] font-black text-primary">
              MULTI-TIER ACTIVATION
            </div>
            <h4 className="text-3xl md:text-5xl font-black mb-4 md:mb-8 uppercase tracking-tighter mt-4 md:mt-0">Flipkart</h4>
            <p className="text-muted-foreground text-sm md:text-lg mb-8 md:mb-12 leading-relaxed font-light">
              Executed a <span className="text-white font-bold">1,000+ creator activation</span>{' '}
              within 14 days. Spread across specific categories with structured orchestration.
            </p>
            <div className="grid grid-cols-3 gap-3 md:gap-6 border-t border-white/10 pt-6 md:pt-10">
              <div>
                <p className="text-xl md:text-3xl font-black text-white">
                  {flipkartCreators.toLocaleString()}+
                </p>
                <p className="text-[7px] md:text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-1">
                  Creators
                </p>
              </div>
              <div>
                <p className="text-xl md:text-3xl font-black text-white">{flipkartDays}</p>
                <p className="text-[7px] md:text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-1">
                  Days
                </p>
              </div>
              <div>
                <p className="text-xl md:text-3xl font-black text-white">{flipkartROI}%</p>
                <p className="text-[7px] md:text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-1">
                  ROI
                </p>
              </div>
            </div>
          </div>

          {/* Myntra Case */}
          <div
            ref={myntraRef}
            className={`glass p-6 sm:p-10 md:p-16 rounded-2xl md:rounded-[3rem] hover:bg-white/[0.03] transition-all relative overflow-hidden group duration-1000 ${
              myntraVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="absolute top-0 right-0 p-4 md:p-10 text-[8px] md:text-[10px] font-black text-muted-foreground group-hover:text-primary transition uppercase">
              Orchestration Proof
            </div>
            <h4 className="text-3xl md:text-5xl font-black mb-4 md:mb-8 uppercase tracking-tighter mt-4 md:mt-0">Myntra</h4>
            <p className="text-muted-foreground text-sm md:text-lg mb-8 md:mb-12 leading-relaxed font-light">
              Direct management and orchestration of{' '}
              <span className="text-white font-bold">598 influencers</span> simultaneously. Zero
              manual friction achieved through platform logic.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6 border-t border-white/10 pt-6 md:pt-10">
              <div>
                <p className="text-xl md:text-3xl font-black text-white">{myntraNodes}</p>
                <p className="text-[7px] md:text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-1">
                  Nodes Orchestrated
                </p>
              </div>
              <div>
                <p className="text-xl md:text-3xl font-black text-primary">LIVE</p>
                <p className="text-[7px] md:text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-1">
                  Status
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseEvidenceSection;
