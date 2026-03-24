'use client';

import Navbar, { navLinks } from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
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
              <h1 className="font-serif text-3xl md:text-5xl text-slate-900 leading-[1.1] mb-8">
                Poznaj moje <br />
                <span>metody pracy</span>
              </h1>
              <p className="text-base text-slate-600 font-light leading-relaxed">
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

                  <h2 className="font-serif text-4xl text-slate-900 mb-4">EMDR</h2>
                  <p className="text-xs font-bold text-[#5A7358] tracking-[0.2em] uppercase">
                    Eye Movement Desensitization <br /> and Reprocessing
                  </p>
                </div>

                <div className="md:col-span-8">
                  <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed space-y-6">
                    <p>
                      EMDR (Eye Movement Desensitization and Reprocessing), Nazwa najczęściej tłumaczona jako „terapia odwrażliwiania za pomocą ruchu gałek ocznych”, uznana za jedną z najskuteczniejszych rozwijających się współcześnie form psychoterapii. Jest to kompleksowe, przebadane naukowo podejście terapeutyczne.
                    </p>
                    <p>
                      Od lat metodę tę stosuje się z powodzeniem w leczeniu psychologicznych traum, wynikających z różnego rodzaju trudnych doświadczeń tj. przemocy fizycznej lub psychicznej, zaniedbania, odrzucenia, molestowania seksualnego, gwałtu, wypadków drogowych, klęsk żywiołowych, bycia świadkiem czyjejś śmierci lub towarzyszenie bliskim w chorobie i in.
                    </p>
                    <p>
                      Terapia EMDR bywa pomocna w pracy z różnymi formami lęku i fobii – zarówno uogólnionym napięciem, jak i konkretnymi sytuacjami wywołującymi silną reakcję emocjonalną. Terapia może wspierać osoby doświadczające ataków paniki, nadmiernego zamartwiania się czy trudności w radzeniu sobie ze stresem.
                    </p>
                    <p>
                      Czasem nawet po wielu latach wspomnienia mogą wywoływać silne emocje, napięcie, lęk czy poczucie bezradności. Dzieje się tak dlatego, że mózg nie miał kiedyś możliwości w pełni przetworzyć danego doświadczenia. W takich sytuacjach przeszłość może wciąż wpływać na nasze reakcje, myśli o sobie i relacje z innymi. Terapia EMDR pracuje nad zmianą pozostałych w pamięci nieadaptacyjnych myśli, ponieważ wiele przekonań o sobie – np. „nie jestem wystarczająco dobry”, „nie zasługuję na miłość” – ma swoje źródło we wcześniejszych doświadczeniach. EMDR pomaga dotrzeć do tych wspomnień i przetworzyć je, dzięki czemu możliwe jest budowanie bardziej wspierającego obrazu siebie i zdrowszych relacji z sobą i innymi.
                    </p>
                    <p>
                      <strong>Cel terapii:</strong><br />
                      Terapia EMDR pomaga w bezpieczny sposób przetworzyć trudne wspomnienia, tak aby przestały mieć wpływ na teraźniejszość. Celem terapii EMDR jest zmniejszenie cierpienia emocjonalnego związanego z trudnymi doświadczeniami i przekonaniami na temat siebie i świata oraz umożliwienie bardziej adaptacyjnego i satysfakcjonującego funkcjonowania.
                    </p>
                  </div>

                  <div className="mt-12 p-8 md:p-12 bg-[#FAFAFA] border border-slate-100 transition-hover duration-500">
                    <h3 className="font-serif text-2xl mb-8 text-slate-900 border-b border-slate-200 pb-4 inline-block">
                      Terapia EMDR jest szczególnie pomocna w pracy z:
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        "Doświadczeniami traumatycznymi i trudnymi wydarzeniami z przeszłości (PTSD i cPTSD)",
                        "Silnym stresem i napięciem emocjonalnym",
                        "Lękiem, atakami paniki i fobiami",
                        "Trudnymi wspomnieniami z dzieciństwa",
                        "Poczuciem wstydu, winy lub niskiej wartości",
                        "Zaburzeniami nastroju, stanami depresyjnymi",
                        "Stanami nadpobudliwości lub zamrożenia",
                        "Stanami dysocjacji, odrealnienia",
                        "Powracającymi obrazami i myślami związanymi z trudnymi doświadczeniami",
                        "Utknięciem w różnych sytuacjach życiowych, relacyjnych"
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

                    <h2 className="font-serif text-4xl text-slate-900 mb-4">NARM™</h2>
                    <p className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
                      NeuroAffective <br /> Relational Model
                    </p>
                  </div>

                  <div className="md:col-span-8">
                    <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed space-y-6">
                      <p>
                        NARM to metoda zajmująca się leczeniem traumy relacji i przywiązania (cPTSD) poprzez pracę nad wczesnymi nieświadomymi wzorcami zerwania więzi (np. gdy opiekun dziecka jest: niedostępny fizycznie bądź emocjonalnie, w depresji, w uzależnieniach, stosuje przemoc, dziecko przeżyło traumę lub zaszły inne przeszkody na drodze do zbudowania bliskości), które wpływają na naszą tożsamość, emocje, fizjologię oraz zachowania.
                      </p>
                      <p>
                        NARM™ koncentruje się jednocześnie na rozpoznawaniu zaburzeń więzi i objawów rozstrojenia układu nerwowego oraz na ich wzajemnym oddziaływaniu.
                      </p>
                      <p>
                        Praca z układem nerwowym jest kluczowa dla przerwania tendencji mózgu do przewidywania przyszłości. To prawdziwy kontakt z własnym ciałem i z innymi ludźmi przywraca uzdrawiającą regulację.
                      </p>
                      <p>
                        Stosowanie technik, które wspierają silniejsze połączenie z samym sobą i z innymi jest nieodzownym elementem wzmacniania skutecznej samoregulacji i budowaniu nowych, służących doświadczaniu radości sposobów reagowania. A wszystko to służy umiejętnościom budowania satysfakcjonującej relacji ze sobą oraz innymi.
                      </p>
                      <p>
                        NARM™ bazuje na powiązaniach pomiędzy problemami psychologicznymi a ciałem, i czerpiąc z umiejętności stosowanych w pracy z traumą szokową, tworzy spójne podejście do leczenia traumy rozwojowej.
                      </p>
                    </div>

                    <div className="mt-12 p-8 md:p-12 bg-white border border-slate-100">
                      <h3 className="font-serif text-2xl mb-8 text-slate-900 border-b border-slate-200 pb-4 inline-block">
                        Metoda polecana jeśli:
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                        {[
                          "Unikasz kontaktu z innymi ludźmi",
                          "Czujesz lęk w relacjach z ludźmi",
                          "Przejawiasz bierną postawę w związku",
                          "Zrywasz relację z niewiadomych powodów",
                          "Jesteś agresywny w relacjach",
                          "Czujesz zawstydzenie, poczucie winy",
                          "Masz niskie poczucie wartości",
                          "Nie jesteś w kontakcie ze swoim ciałem i swoimi emocjami",
                          "Nie jesteś zdolny do zdrowej zależności i współzależności z innymi ludźmi",
                          "Nie umiesz stawiać granic",
                          "Przejawiasz nadmiarowe wymagania i roszczenia w stosunku do partnera"
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

                  <h2 className="font-serif text-4xl text-slate-900 mb-4">Logoterapia</h2>
                  <p className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
                    Psychoterapia skoncentrowana <br /> na sensie
                  </p>
                </div>

                <div className="md:col-span-8">
                  <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-light leading-relaxed space-y-6">
                    <p>
                      Logoterapia to nurt psychoterapii, której podejście opiera się na przekonaniu, że jedną z najważniejszych ludzkich potrzeb jest <strong>poszukiwanie sensu i znaczenia w życiu</strong>. Poczucie sensu pomaga człowiekowi radzić sobie z trudnościami, cierpieniem i kryzysami życiowymi.
                    </p>
                    <p>
                      W ujęciu logoterapii wiele trudności psychicznych wiąże się nie tylko z konfliktem wewnętrznym czy objawami emocjonalnymi, lecz także z doświadczeniem utraty znaczenia, kierunku lub wartości, które nadają życiu spójność. Logoterapia zakłada, że nawet w bardzo trudnych okolicznościach człowiek może odnaleźć znaczenie swoich doświadczeń i zachować wewnętrzną wolność w sposobie, w jaki na nie reaguje.
                    </p>
                    <p>
                      Logoterapia nie koncentruje się na analizowaniu problemów czy przeszłości, lecz wspiera człowieka w odkrywaniu <strong>osobistego sensu, celów i wartości</strong>, które mogą nadać życiu większą spójność i kierunek. W procesie terapeutycznym ważne jest również rozwijanie poczucia odpowiedzialności za własne wybory oraz odkrywanie możliwości działania nawet w sytuacjach, które wydają się bardzo ograniczające.
                    </p>

                    <div className="bg-[#5A7358]/5 p-8 border border-[#5A7358]/10 my-8">
                      <p className="font-serif text-2xl text-slate-800 mb-6 not-prose">Logoterapia opiera się na kilku ważnych ideach:</p>
                      <ul className="space-y-4 not-prose">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5A7358] mr-4 mt-2.5 shrink-0"></span>
                          <span className="text-slate-600 font-light leading-relaxed"><strong>Wola sensu</strong> – naturalna potrzeba odnajdywania znaczenia w życiu</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5A7358] mr-4 mt-2.5 shrink-0"></span>
                          <span className="text-slate-600 font-light leading-relaxed"><strong>Wolność wewnętrzna</strong> – zdolność wyboru postawy wobec trudnych doświadczeń</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5A7358] mr-4 mt-2.5 shrink-0"></span>
                          <span className="text-slate-600 font-light leading-relaxed"><strong>Odpowiedzialność za własne życie</strong> – możliwość nadawania kierunku swoim działaniom tym, co dla danej osoby jest naprawdę ważne.</span>
                        </li>
                      </ul>
                    </div>

                    <p>
                      Dzięki temu możliwe staje się przeżywanie większego poczucia kierunku, sprawczości i satysfakcji z życia nawet pomimo życiowych trudności.
                    </p>
                  </div>

                  <div className="mt-12 p-8 md:p-12 bg-[#FAFAFA] border border-slate-100">
                    <h3 className="font-serif text-2xl mb-8 text-slate-900 border-b border-slate-200 pb-4 inline-block">
                      Logoterapia może być szczególnie pomocna w sytuacjach takich jak:
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        "Kryzysy egzystencjalne i poczucie braku sensu życia",
                        "Momenty dużych zmian życiowych lub utraty dotychczasowego kierunku",
                        "Doświadczenie pustki wewnętrznej i braku motywacji",
                        "Trudności w odnajdywaniu własnych wartości i celów",
                        "Przeżywanie straty, choroby lub innych trudnych doświadczeń",
                        "Długotrwałe poczucie niezadowolenia z życia mimo pozornego „spełnienia”"
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
      </div>

      <Footer navLinks={navLinks} />
    </main>
  );
}
