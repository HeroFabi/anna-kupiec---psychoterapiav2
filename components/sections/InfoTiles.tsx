import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

export default function InfoTiles() {
  return (
    <section className="py-24 px-4 bg-white w-full border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        <FadeIn delay={0.1}>
          <div className="flex flex-col items-center h-full">
            <div className="relative w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden shadow-md">
              <Image src="https://picsum.photos/seed/therapy1/600/450" alt="Sesja terapeutyczna" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-slate-900">Dla Kogo</h3>
            <p className="text-slate-600 font-light mb-6">W zakresie spotkań terapeutycznych znajduje się:</p>
            <ul className="text-slate-600 font-light text-left space-y-3 mb-8 w-full max-w-xs mx-auto">
              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#5A7358] mr-3" /> psychoterapia indywidualna</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#5A7358] mr-3" /> psychoterapia par</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#5A7358] mr-3" /> psychoterapia rodzin</li>
              <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-[#5A7358] mr-3" /> psychoterapia grupowa</li>
            </ul>
            <p className="text-sm font-medium text-[#5A7358] mt-auto bg-[#5A7358]/5 py-2 px-4 rounded-full">Pracuję również z osobami neuroróżnorodnymi.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col items-center h-full">
            <div className="relative w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden shadow-md">
              <Image src="https://picsum.photos/seed/therapy2/600/450" alt="Rozmowa terapeutyczna" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-slate-900">Gotowy na pierwszy krok?</h3>
            <p className="text-slate-600 font-light mb-8 leading-relaxed">
              Wystarczy wiadomość, e-mail lub telefon, aby umówić się na pierwsze spotkanie. Możesz wybrać sesje w gabinecie lub online – tak, jak będzie dla Ciebie najbardziej komfortowo.
            </p>
            <a href="#kontakt" className="mt-auto bg-[#5A7358] text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wider hover:bg-[#4a6048] transition-all shadow-md hover:shadow-lg uppercase">
              Umów wizytę
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col items-center h-full">
            <div className="relative w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden shadow-md">
              <Image src="https://picsum.photos/seed/coffee/600/450" alt="Dwie filiżanki kawy" fill className="object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-slate-900">Denerwujesz się terapią?</h3>
            <p className="text-slate-600 font-light mb-8 leading-relaxed">
              To częste uczucie. Moim celem jest stworzenie swobodnej i bezpiecznej atmosfery, w której rozmowa i praca nad sobą będą możliwie najbardziej komfortowe.
            </p>
            <a href="#o-mnie" className="mt-auto border-2 border-[#5A7358] text-[#5A7358] px-8 py-3 rounded-full text-sm font-semibold tracking-wider hover:bg-[#5A7358] hover:text-white transition-all uppercase">
              Poznajmy się
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
