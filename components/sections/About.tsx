import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

export default function About() {
  return (
    <section id="o-mnie" className="py-24 px-4 max-w-7xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <div className="relative h-[700px] overflow-hidden">
            <Image
              src="/images/TOP_1.jpg"
              alt="Portret psychoterapeuty"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-10 text-[#5A7358]">
              O Mnie
            </h2>

            <div className="prose prose-slate prose-lg font-light text-slate-600">
              <p>
                Jestem magistrem psychologii klinicznej oraz magistrem informatyki w naukach eksperymentalnych. Poszukuję jak najbardziej skutecznych metod rozwiązywania problemów psychologicznych, wykorzystując do tego najnowsze badania naukowe.
              </p>

              <h4 className="font-serif text-2xl text-slate-900 mt-12 mb-6">Przygotowanie:</h4>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#5A7358] mr-4 mt-2.5 shrink-0" />
                  <span>4-letni kurs Psychoterapii Systemowej Rodzin w Ośrodku Szkoleń Systemowych w Krakowie, akredytowany przez PTP</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#5A7358] mr-4 mt-2.5 shrink-0" />
                  <span>Ukończyłam pierwsze w Polsce 2-letnie szkolenie z terapii traumy relacji: przywiązania i więzi (Neuro Affective Relational Model™ (NARM™))</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#5A7358] mr-4 mt-2.5 shrink-0" />
                  <span>EMDR - Eye Movement Desensitization and Reprocessing – nowatorskie podejście do terapii osób z traumą rozwojową, depresją i lękiem. EMDR jest zalecaną metodą terapii po traumatycznych przeżyciach.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#5A7358] mr-4 mt-2.5 shrink-0" />
                  <span>Logoterapia - certyfikowane pełne szkolenie - specjalizacja psychoterapia egzystencjalna, sens życia, duchowość w psychoterapii,</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#5A7358] mr-4 mt-2.5 shrink-0" />
                  <span>Szkolenie Terapia Krótkoterminowa Skoncentrowana na Rozwiązaniach,</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#5A7358] mr-4 mt-2.5 shrink-0" />
                  <span>Posiadam doświadczenie organizowania i prowadzenia treningów rozwojowych.</span>
                </li>
              </ul>
              <p className="mt-10 text-slate-900 border-t border-slate-100 pt-8">
                W życiu prywatnym cenię sobie sztukę i sport.<br />
                Interesuję się fizyką kwantową i duchowością w psychoterapii.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
