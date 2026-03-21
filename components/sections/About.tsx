import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

export default function About() {
  return (
    <section id="o-mnie" className="py-24 px-4 max-w-7xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/portrait/800/1000"
              alt="Portret psychoterapeuty"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>
        
        <FadeIn>
          <div>
            <span className="text-[#5A7358] font-semibold tracking-widest uppercase text-xs mb-3 block">Poznajmy się</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-10 text-slate-900">
              O Mnie
            </h2>
            
            <div className="prose prose-slate prose-lg font-light text-slate-600">
              <p>
                Jestem magistrem psychologii klinicznej oraz magistrem informatyki w naukach eksperymentalnych. Poszukuję jak najbardziej skutecznych metod rozwiązywania problemów psychologicznych, wykorzystując do tego najnowsze badania naukowe.
              </p>
              <p className="font-medium text-slate-800">
                Specjalizuję się w psychoterapii traum rozwojowych oraz szokowych.
              </p>
              
              <h4 className="font-serif text-2xl text-slate-900 mt-12 mb-6">Edukacja i szkolenia</h4>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#5A7358] mr-4 mt-2.5 shrink-0" />
                  <span>4-letni kurs Psychoterapii Systemowej Rodzin w Ośrodku Szkoleń Systemowych w Krakowie.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#5A7358] mr-4 mt-2.5 shrink-0" />
                  <span>Ukończyłam pierwsze w Polsce 2-letnie szkolenie z terapii traumy relacji: przywiązania i więzi NARM.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#5A7358] mr-4 mt-2.5 shrink-0" />
                  <span>EMDR - Eye Movement Desensitization and Reprocessing – nowatorskie podejście do terapii osób z traumą rozwojową, depresją i lękiem. EMDR jest zalecaną metodą terapii po traumatycznych przeżyciach.</span>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
