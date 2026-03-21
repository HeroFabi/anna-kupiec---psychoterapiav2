import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export default function Methods() {
  return (
    <section id="metody" className="py-24 px-4 max-w-7xl mx-auto w-full">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#5A7358] font-semibold tracking-widest uppercase text-xs mb-3 block">Podejście terapeutyczne</span>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900">
            Metody Pracy
          </h2>
        </div>
      </FadeIn>
      
      <div className="grid md:grid-cols-2 gap-8">
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm hover:shadow-xl transition-all border border-slate-100 h-full flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A7358]/20 to-[#5A7358] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <h3 className="font-serif text-3xl mb-6 text-slate-900">EMDR</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow">
              Terapia EMDR stosowana jest w leczeniu zespołu stresu pourazowego (PTSD). Z czasem badania potwierdziły jej skuteczność w znacznie szerszym zakresie zaburzeń o podłożu lękowym, zaburzeń obsesyjno-kompulsywnych i depresji. Od lat metodę tą stosuje się z powodzeniem w leczeniu psychologicznych traum, wynikających z różnego rodzaju trudnych doświadczeń tj. przemocy fizycznej lub psychicznej, zaniedbania, molestowania seksualnego, gwałtu, wypadków drogowych, klęsk żywiołowych, bycia świadkiem czyjejś śmierci lub towarzyszenie bliskim w chorobie i in.
            </p>
            <a href="#kontakt" className="inline-flex items-center text-[#5A7358] font-medium hover:text-[#4a6048] transition-colors mt-auto">
              Zapytaj o terapię <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm hover:shadow-xl transition-all border border-slate-100 h-full flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A7358]/20 to-[#5A7358] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <h3 className="font-serif text-3xl mb-6 text-slate-900">NARM</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow">
              Metoda zajmująca się leczeniem traumy relacji i przywiązania poprzez pracę nad wczesnymi nieświadomymi wzorcami zerwania więzi (np. gdy opiekun dziecka jest: niedostępny fizycznie bądź emocjonalnie, w depresji, w uzależnieniach, stosuje przemoc, dziecko przeżyło traumę lub zaszły inne przeszkody na drodze do zbudowania bliskości), które wpływają na naszą tożsamość, emocje, fizjologię oraz zachowania.
            </p>
            <a href="#kontakt" className="inline-flex items-center text-[#5A7358] font-medium hover:text-[#4a6048] transition-colors mt-auto">
              Zapytaj o terapię <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
