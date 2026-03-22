'use client';

import Navbar, { navLinks } from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { Brain, HelpCircle, Compass, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MetodyPracyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#5A7358]/20">
      {/* Wymuszamy solidny navbar dla lepszej widoczności na jasnym tle */}
      <Navbar isSolid />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden bg-[#FAFAFA]">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-[#5A7358]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative">
          <FadeIn>
            <div className="mb-12">
              <Link 
                href="/" 
                className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#5A7358] hover:text-[#4a6048] transition-all group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Powrót do strony głównej
              </Link>
            </div>
            
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl md:text-7xl text-slate-900 leading-[1.1] mb-8">
                Poznaj moje <br />
                <span className="text-[#5A7358] italic">metody pracy</span>
              </h1>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Podejście terapeutyczne, które stosuję, opiera się na integracji sprawdzonych nurtów psychoterapii. 
                Dzięki temu mogę dopasować proces do Twoich indywidualnych potrzeb, historii i celów, 
                zapewniając bezpieczną przestrzeń do rozwoju.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Sections */}
      <div className="flex-grow">
        {/* EMDR */}
        <section id="emdr" className="py-24 px-4 scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-4 md:sticky md:top-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#5A7358] flex items-center justify-center text-white shadow-lg shadow-[#5A7358]/20">
                      <Brain className="w-7 h-7" />
                    </div>
                  </div>
                  <h2 className="font-serif text-4xl text-slate-900 mb-4">EMDR</h2>
                  <p className="text-xs font-bold text-[#5A7358] tracking-[0.2em] uppercase">
                    Eye Movement Desensitization <br /> and Reprocessing
                  </p>
                </div>
                
                <div className="md:col-span-8">
                  <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed space-y-6">
                    <p>
                      EMDR to jedna z najskuteczniejszych i najlepiej przebadanych współczesnych metod psychoterapii, uznana m.in. przez WHO. Początkowo stworzona do pracy z traumą, dziś z powodzeniem stosowana w leczeniu szerokiego spektrum zaburzeń.
                    </p>
                    <p>
                      Pracujemy nad tym, jak Twój mózg przechowuje trudne wspomnienia. Czasem zdarzenia z przeszłości &quot;utykają&quot; w układzie nerwowym w nieprzetworzonej formie, sprawiając, że dziś czujesz lęk, napięcie lub bezradność. EMDR pomaga &quot;odblokować&quot; ten proces, pozwalając na naturalne przetworzenie doświadczeń.
                    </p>
                    <p>
                      <strong>Kiedy pomaga?</strong> Metoda ta jest niezwykle skuteczna w pracy z traumami (wypadki, przemoc, trudne relacje), ale także w przypadku ataków paniki, fobii, niskiego poczucia wartości czy przewlekłego stresu.
                    </p>
                  </div>

                  <div className="mt-12 p-8 md:p-12 bg-[#FAFAFA] rounded-[2.5rem] border border-slate-100 shadow-sm transition-hover hover:shadow-md duration-500">
                    <h3 className="font-serif text-2xl mb-8 text-slate-900 border-b border-slate-200 pb-4 inline-block">
                      Terapia EMDR pomaga szczególnie przy:
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        "Traumatycznych wydarzeniach (PTSD/cPTSD)",
                        "Silnym napięciu i stresie",
                        "Lęku i atakach paniki",
                        "Trudnych relacjach z przeszłości",
                        "Poczuciu wstydu i niskiej wartości",
                        "Zaburzeniach nastroju",
                        "Powracających, trudnych obrazach",
                        "Uczuciu emocjonalnego zamrożenia"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="w-5 h-5 text-[#5A7358] mr-3 shrink-0 mt-0.5" />
                          <span className="text-slate-700 leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <div className="bg-[#FAFAFA]">
          {/* NARM */}
          <section id="narm" className="py-24 px-4 scroll-mt-24">
            <div className="max-w-5xl mx-auto">
              <FadeIn>
                <div className="grid md:grid-cols-12 gap-12 items-start">
                  <div className="md:col-span-4 md:sticky md:top-32">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[#5A7358] shadow-sm">
                        <HelpCircle className="w-7 h-7" />
                      </div>
                    </div>
                    <h2 className="font-serif text-4xl text-slate-900 mb-4">NARM™</h2>
                    <p className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
                      NeuroAffective <br /> Relational Model
                    </p>
                  </div>
                  
                  <div className="md:col-span-8">
                    <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed space-y-6">
                      <p>
                        NARM to nowoczesne podejście koncentrujące się na leczeniu traumy relacji i przywiązania (cPTSD). Zajmujemy się tutaj tym, jak wczesne doświadczenia w budowaniu więzi ukształtowały Twoją dzisiejszą tożsamość, emocje i fizjologię.
                      </p>
                      <p>
                        Zamiast skupiać się wyłącznie na przeszłości, NARM pracuje z tym, jak nieświadome wzorce powstałe w dzieciństwie przeszkadzają Ci w byciu obecnym i autentycznym w teraźniejszości. To praca na styku psychologii i neurologii.
                      </p>
                      <p>
                        <strong>Kluczowy aspekt:</strong> Praca z układem nerwowym pomaga przywrócić zdolność do samoregulacji. Pozwala to na budowanie zdrowszych, głębszych relacji z samym sobą i z innymi ludźmi.
                      </p>
                    </div>

                    <div className="mt-12 p-8 md:p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                      <h3 className="font-serif text-2xl mb-8 text-slate-900 border-b border-slate-200 pb-4 inline-block">
                        Sięgnij po NARM, jeśli:
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                        {[
                          "Czujesz lęk w kontakcie z ludźmi",
                          "Unikasz bliskości lub ją sabotujesz",
                          "Masz trudność ze stawianiem granic",
                          "Czujesz wieczne poczucie winy/wstydu",
                          "Brakuje Ci kontaktu z własnym ciałem",
                          "Często czujesz się nieadekwatnie",
                          "Jesteś nadmiernie wymagający wobec siebie",
                          "Czujesz pustkę w relacjach"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <ChevronRight className="w-5 h-5 text-[#5A7358] mr-3 shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        </div>

        {/* LOGOTERAPIA */}
        <section id="logoterapia" className="py-24 px-4 scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-4 md:sticky md:top-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-lg">
                      <Compass className="w-7 h-7" />
                    </div>
                  </div>
                  <h2 className="font-serif text-4xl text-slate-900 mb-4">Logoterapia</h2>
                  <p className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
                    Psychoterapia skoncentrowana <br /> na sensie
                  </p>
                </div>
                
                <div className="md:col-span-8">
                  <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed space-y-6">
                    <p>
                      Logoterapia to nurt, który za oś życia człowieka uznaje potrzebę odnalezienia sensu i wartości. Wierzymy, że poczucie znaczenia jest najpotężniejszą siłą motywacyjną, która pozwala przetrwać nawet najtrudniejsze kryzysy życiowe.
                    </p>
                    <p>
                      W procesie terapeutycznym wspieram Cię w odkrywaniu Twojego osobistego &quot;dlaczego&quot;. Logoterapia nie analizuje tylko deficytów, ale szuka Twojego potencjału, wolności wewnętrznej i odpowiedzialności za kształt własnego życia.
                    </p>
                    <div className="bg-[#5A7358]/5 p-8 rounded-3xl border border-[#5A7358]/10 italic my-8">
                      &quot;Ten, kto wie, dlaczego żyje, nie musi się martwić o to, jak żyje&quot; – te słowa Victora Frankla, twórcy nurtu, najlepiej oddają ducha tej pracy.
                    </div>
                  </div>

                  <div className="mt-12 p-8 md:p-12 bg-[#FAFAFA] rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <h3 className="font-serif text-2xl mb-8 text-slate-900 border-b border-slate-200 pb-4 inline-block">
                      Wsparcie w obszarach:
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        "Kryzysy egzystencjalne i brak sensu",
                        "Doświadczenie pustki wewnętrznej",
                        "Trudne zmiany życiowe (strata, choroba)",
                        "Brak motywacji i kierunku działania",
                        "Trudności w odnajdywaniu wartości",
                        "Poczucie niezadowolenia mimo sukcesów",
                        "Lęki egzystencjalne",
                        "Budowanie poczucia sprawczości"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="w-5 h-5 text-[#5A7358] mr-3 shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>

      <Footer navLinks={navLinks} />
    </main>
  );
}
