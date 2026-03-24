
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
          <div className="relative h-[600px] overflow-hidden">
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
            <h2 className="font-serif text-4xl md:text-5xl mb-10 text-slate-900">
              Obszary Specjalizacji
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="space-y-3 text-[#5A7358]">
              {items.map((item, i) => (
                <li key={i} className="flex items-center group">
                  <div className="w-1.5 h-1.5 bg-[#5A7358] mr-4 shrink-0" />
                  <span className="text-base font-normal leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
