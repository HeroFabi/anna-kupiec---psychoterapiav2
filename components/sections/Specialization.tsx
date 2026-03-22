import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

export default function Specialization() {
  const items = [
    'Trauma / CPTSD / PTSD',
    'Problemy w związkach, trudności w budowaniu bliskich relacji',
    'Depresja i inne zaburzenia nastroju',
    'Zaburzenia lękowe i ataki paniki',
    'Problemy z odżywianiem',
    'Dolegliwości psychosomatyczne',
    'Przewlekły stres i wypalenie',
    'Żałoba, strata, trudne zmiany życiowe',
    'Trudności w znalezieniu sensu życia'
  ];

  return (
    <section id="specjalizacja" className="py-24 px-4 max-w-7xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/Roslina__1.jpg"
              alt="Rosnąca roślina w dłoniach - symbol wzrostu"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </FadeIn>
        
        <div>
          <FadeIn>
            <span className="text-[#5A7358] font-semibold tracking-widest uppercase text-xs mb-3 block">W czym pomagam</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-10 text-slate-900">
              Obszary Specjalizacji
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <ul className="space-y-5 text-slate-700">
              {items.map((item, i) => (
                <li key={i} className="flex items-start group">
                  <CheckCircle2 className="w-6 h-6 text-[#5A7358]/70 mr-4 shrink-0 mt-0.5 group-hover:text-[#5A7358] transition-colors" />
                  <span className="text-lg font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
