import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

export default function Symptoms() {
  const symptoms = [
    'Unikasz kontaktu z innymi ludźmi',
    'Czujesz lęk w relacjach z ludźmi',
    'Przejawiasz bierną postawę w związku',
    'Zrywasz relacje z niewiadomych powodów',
    'Jesteś agresywny w relacjach',
    'Czujesz zawstydzenie, poczucie winy',
    'Masz niskie poczucie wartości',
    'Nie jesteś w kontakcie ze swoim ciałem i emocjami',
    'Nie jesteś zdolny do zdrowej współzależności',
    'Nie umiesz stawiać granic',
  ];

  return (
    <section className="py-24 px-4 bg-[#F3F4F1] w-full">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5A7358] font-semibold tracking-widest uppercase text-xs mb-3 block">Rozpoznaj swoje potrzeby</span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">
              Czy często...
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {symptoms.map((item, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-white/50 h-full flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#5A7358]/40 mr-4 shrink-0" />
                  <p className="text-slate-700 font-light">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="lg:col-span-5">
            <FadeIn delay={0.4} direction="left">
              <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/seed/tent/800/1000"
                  alt="Osoba w namiocie patrząca na góry"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
