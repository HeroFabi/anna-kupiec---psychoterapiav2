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
          <div className="bg-white p-10 transition-all border border-slate-100 h-full flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A7358]/20 to-[#5A7358] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <h3 className="font-serif text-3xl mb-6 text-slate-900">EMDR</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow text-[15px]">
              EMDR - uznana za jedną z najskuteczniejszych rozwijających się współcześnie form psychoterapii. Terapia EMDR stosowana jest m.in. w leczeniu zespołu stresu pourazowego (PTSD, cPTSD), depresji, zaburzeń lękowych czy fobii. Terapia EMDR pomaga w bezpieczny sposób przetworzyć trudne wspomnienia, tak aby przestały mieć wpływ na teraźniejszość. Celem terapii EMDR jest zmniejszenie cierpienia emocjonalnego związanego z trudnymi doświadczeniami i przekonaniami na temat siebie i świata oraz umożliwienie bardziej adaptacyjnego i satysfakcjonującego funkcjonowania.
            </p>
            <Link href="/metody-pracy#emdr" className="inline-flex items-center text-[#5A7358] font-medium hover:text-[#4a6048] transition-colors mt-auto">
              Dowiedz się więcej <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
        
        {/* NARM */}
        <FadeIn delay={0.3}>
          <div className="bg-white p-10 transition-all border border-slate-100 h-full flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A7358]/20 to-[#5A7358] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <h3 className="font-serif text-3xl mb-6 text-slate-900">NARM</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow text-[15px]">
              NARM - NARM to metoda zajmująca się leczeniem traumy relacji i przywiązania (cPTSD) poprzez pracę nad wczesnymi nieświadomymi wzorcami zerwania więzi, które wpływają na naszą tożsamość, emocje, fizjologię oraz zachowania. Praca z układem nerwowym jest kluczowa dla przerwania tendencji mózgu do przewidywania przyszłości. Stosowanie technik, które wspierają silniejsze połączenie z samym sobą i z innymi jest nieodzownym elementem wzmacniania skutecznej samoregulacji i budowaniu nowych, służących doświadczaniu radości sposobów reagowania. A wszystko to służy umiejętnościom budowania satysfakcjonującej relacji z sobą oraz innymi.
            </p>
            <Link href="/metody-pracy#narm" className="inline-flex items-center text-[#5A7358] font-medium hover:text-[#4a6048] transition-colors mt-auto">
              Dowiedz się więcej <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        {/* LOGOTERAPIA */}
        <FadeIn delay={0.4}>
          <div className="bg-white p-10 transition-all border border-slate-100 h-full flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A7358]/20 to-[#5A7358] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <h3 className="font-serif text-3xl mb-6 text-slate-900">Logoterapia</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow text-[15px]">
              Logoterapia - Logoterapia to nurt psychoterapii, którego podejście opiera się na przekonaniu, że jedną z najważniejszych ludzkich potrzeb jest poszukiwanie sensu i znaczenia w życiu. Poczucie sensu pomaga człowiekowi radzić sobie z trudnościami, cierpieniem i kryzysami życiowymi. Logoterapia zakłada, że nawet w bardzo trudnych okolicznościach człowiek może odnaleźć znaczenie swoich doświadczeń i zachować wewnętrzną wolność w sposobie, w jaki na nie reaguje. W procesie terapeutycznym ważne jest również rozwijanie poczucia odpowiedzialności za własne wybory oraz odkrywanie możliwości działania nawet w sytuacjach, które wydają się bardzo ograniczające.
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
