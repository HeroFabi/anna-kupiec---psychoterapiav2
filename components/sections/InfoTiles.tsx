import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { CheckCircle2, ArrowRight, HeartPulse } from 'lucide-react';

export default function InfoTiles() {
  return (
    <section className="py-24 px-4 bg-[#FAFAFA] w-full">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-12">
        {/* Card 1 */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 border border-slate-100 group">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <Image 
                src="/images/osoba_na_terapii.jpg" 
                alt="Sesja terapeutyczna" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <h3 className="font-serif text-3xl mb-4 text-slate-900">Dla Kogo</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">W zakresie spotkań terapeutycznych znajduje się:</p>
              <ul className="text-slate-600 font-light space-y-4 mb-8">
                {['psychoterapia indywidualna', 'psychoterapia par', 'psychoterapia rodzin', 'psychoterapia grupowa'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#5A7358] mr-3 shrink-0 mt-0.5" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-slate-100">
                <div className="inline-flex items-center text-sm font-medium text-[#5A7358] bg-[#5A7358]/10 py-2.5 px-5 rounded-3xl">
                  <HeartPulse className="w-4 h-4 mr-2 shrink-0" />
                  Pracuję również z osobami neuroróżnorodnymi
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Card 2 */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 border border-slate-100 group">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <Image 
                src="/images/Relaksująca.jpg" 
                alt="Rozmowa terapeutyczna" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <h3 className="font-serif text-3xl mb-4 text-slate-900">Gotowy na pierwszy krok?</h3>
              <p className="text-slate-600 font-light mb-8 leading-relaxed">
                Wystarczy wiadomość, e-mail lub telefon, aby umówić się na pierwsze spotkanie. Możesz wybrać sesje w gabinecie lub online – tak, jak będzie dla Ciebie najbardziej komfortowo.
              </p>
              <div className="mt-auto">
                <a href="#kontakt" className="inline-flex items-center justify-center w-full bg-[#5A7358] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#4a6048] hover:shadow-lg hover:-translate-y-1 group/btn">
                  Umów wizytę
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Card 3 */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 border border-slate-100 group">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <Image 
                src="/images/Roslina__1.jpg" 
                alt="Dwie filiżanki kawy" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <h3 className="font-serif text-3xl mb-4 text-slate-900">Denerwujesz się terapią?</h3>
              <p className="text-slate-600 font-light mb-8 leading-relaxed">
                To częste uczucie. Moim celem jest stworzenie swobodnej i bezpiecznej atmosfery, w której rozmowa i praca nad sobą będą możliwie najbardziej komfortowe.
              </p>
              <div className="mt-auto">
                <a href="#o-mnie" className="inline-flex items-center justify-center w-full bg-white border-2 border-[#5A7358] text-[#5A7358] px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:bg-[#5A7358] hover:text-white hover:shadow-lg hover:-translate-y-1 group/btn">
                  Poznajmy się
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
