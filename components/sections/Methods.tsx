import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import Link from 'next/link';

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
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* EMDR */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all border border-slate-100 h-full flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A7358]/20 to-[#5A7358] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <h3 className="font-serif text-3xl mb-6 text-slate-900">EMDR</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow">
              Terapia EMDR stosowana jest m.in. w leczeniu zespołu stresu pourazowego (PTSD), zaburzeń lękowych czy fobii. Pomaga skutecznie przetwarzać wspomnienia z trudnych i traumatycznych zdarzeń, aby przestały obciążać teraźniejszość.
            </p>
            <Link href="/metody-pracy#emdr" className="inline-flex items-center text-[#5A7358] font-medium hover:text-[#4a6048] transition-colors mt-auto">
              Dowiedz się więcej <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
        
        {/* NARM */}
        <FadeIn delay={0.3}>
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all border border-slate-100 h-full flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A7358]/20 to-[#5A7358] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <h3 className="font-serif text-3xl mb-6 text-slate-900">NARM™</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow">
              Metoda zajmująca się leczeniem traumy relacji i przywiązania. Skupia się m.in. na wczesnych wzorcach wchodzenia w więź oraz regulacji układu nerwowego, ułatwiając budowanie satysfakcjonującej relacji ze sobą i ludźmi.
            </p>
            <Link href="/metody-pracy#narm" className="inline-flex items-center text-[#5A7358] font-medium hover:text-[#4a6048] transition-colors mt-auto">
              Dowiedz się więcej <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        {/* LOGOTERAPIA */}
        <FadeIn delay={0.4}>
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all border border-slate-100 h-full flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A7358]/20 to-[#5A7358] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <h3 className="font-serif text-3xl mb-6 text-slate-900">Logoterapia</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow">
              Nurt oparty na przekonaniu, że naszą wielką potrzebą jest poczucie sensu. Poczucie sensu, własnej woli oraz odpowiedzialności pomaga człowiekowi radzić sobie w kryzysach oraz brać odważne stery za swoje życie.
            </p>
            <Link href="/metody-pracy#logoterapia" className="inline-flex items-center text-[#5A7358] font-medium hover:text-[#4a6048] transition-colors mt-auto">
              Dowiedz się więcej <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
