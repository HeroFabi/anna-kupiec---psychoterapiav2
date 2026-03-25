'use client';

import Navbar, { navLinks } from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PolitykaPrywatnosciPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#5A7358]/20">
      <Navbar isSolid />

      <section className="relative pt-40 pb-20 px-4 overflow-hidden bg-[#FAFAFA]">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-[#5A7358]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
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

            <h1 className="font-serif text-3xl md:text-5xl text-[#5A7358] leading-[1.1] mb-12">
              Polityka <br />
              <span>prywatności</span>
            </h1>
            
            <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed">
              <section>
                <h2 className="font-serif text-2xl text-slate-900 mb-4 mt-8">1. Informacje ogólne</h2>
                <ol className="list-decimal list-outside pl-6 space-y-2 mt-2 mb-4">
                  <li>
                    Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: <strong>poznanpsychoterapeuta.pl</strong>
                  </li>
                  <li>
                    Operatorem serwisu oraz Administratorem danych osobowych jest:<br />
                    <strong>Anna Kupiec</strong><br />
                    Adres kontaktowy poczty elektronicznej operatora: <strong>anna_kupiec@o2.pl</strong>
                  </li>
                  <li>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</li>
                  <li>
                    Serwis wykorzystuje dane osobowe w następujących celach:
                    <ul className="list-disc list-outside pl-6 space-y-1 mt-2 mb-4">
                      <li>Obsługa zapytań przez formularz</li>
                    </ul>
                  </li>
                  <li>
                    Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
                    <ul className="list-disc list-outside pl-6 space-y-1 mt-2 mb-4">
                      <li>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</li>
                      <li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka").</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate-900 mb-4 mt-8">2. Wybrane metody ochrony danych stosowane przez Operatora</h2>
                <ol className="list-decimal list-outside pl-6 space-y-2 mt-2 mb-4">
                  <li>Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.</li>
                  <li>Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.</li>
                </ol>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate-900 mb-4 mt-8">3. Hosting</h2>
                <ol className="list-decimal list-outside pl-6 space-y-2 mt-2 mb-4">
                  <li>Serwis jest hostowany (technicznie utrzymywany) na serwerze operatora: Netlify, Inc.</li>
                  <li>
                    Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:
                    <ul className="list-disc list-outside pl-6 space-y-1 mt-2 mb-4">
                      <li>zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików),</li>
                      <li>czas nadejścia zapytania,</li>
                      <li>czas wysłania odpowiedzi,</li>
                      <li>nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,</li>
                      <li>informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</li>
                      <li>adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik,</li>
                      <li>informacje o przeglądarce użytkownika,</li>
                      <li>informacje o adresie IP,</li>
                      <li>informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na stronie,</li>
                      <li>informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez Operatora.</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate-900 mb-4 mt-8">4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h2>
                <ol className="list-decimal list-outside pl-6 space-y-2 mt-2 mb-4">
                  <li>
                    Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.
                  </li>
                  <li>
                    Przysługuje Ci prawo żądania od Administratora:
                    <ul className="list-disc list-outside pl-6 space-y-1 mt-2 mb-4">
                      <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                      <li>ich sprostowania,</li>
                      <li>usunięcia,</li>
                      <li>ograniczenia przetwarzania,</li>
                      <li>oraz przenoszenia danych.</li>
                    </ul>
                  </li>
                  <li>Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.</li>
                  <li>Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</li>
                  <li>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
                  <li>W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.</li>
                  <li>Dane osobowe są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że przesyłamy je poza teren Unii Europejskiej.</li>
                </ol>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate-900 mb-4 mt-8">5. Informacje w formularzach</h2>
                <ol className="list-decimal list-outside pl-6 space-y-2 mt-2 mb-4">
                  <li>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</li>
                  <li>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
                  <li>Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.</li>
                  <li>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.</li>
                </ol>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate-900 mb-4 mt-8">6. Logi Administratora</h2>
                <ol className="list-decimal list-outside pl-6 space-y-2 mt-2 mb-4">
                  <li>Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</li>
                </ol>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate-900 mb-4 mt-8">7. Istotne techniki marketingowe</h2>
                <p>Brak specyficznych technik marketingowych wymagających opisu.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate-900 mb-4 mt-8">8. Informacja o plikach cookies</h2>
                <ol className="list-decimal list-outside pl-6 space-y-2 mt-2 mb-4">
                  <li>Serwis korzysta z plików cookies.</li>
                  <li>Pliki cookies (tzw. „ciasteczka") stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</li>
                  <li>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</li>
                  <li>
                    Pliki cookies wykorzystywane są w następujących celach:
                    <ol className="list-decimal list-outside pl-6 space-y-2 mt-2 mb-4">
                      <li>utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</li>
                      <li>realizacji celów określonych powyżej w części &quot;Istotne techniki marketingowe&quot;;</li>
                    </ol>
                  </li>
                  <li>W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne" (session cookies) oraz „stałe" (persistent cookies). Cookies „sesyjne" są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe" pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</li>
                  <li>Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</li>
                  <li>Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</li>
                  <li>Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).</li>
                </ol>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-slate-900 mb-4 mt-8">9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</h2>
                <ol className="list-decimal list-outside pl-6 space-y-2 mt-2 mb-4">
                  <li>Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.</li>
                  <li>
                    W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:
                    <ul className="list-disc list-outside pl-6 space-y-1 mt-2 mb-4">
                      <li>Edge</li>
                      <li>Internet Explorer</li>
                      <li>Chrome</li>
                      <li>Safari</li>
                      <li>Firefox</li>
                      <li>Opera</li>
                    </ul>
                  </li>
                  <li>
                    Urządzenia mobilne:
                    <ul className="list-disc list-outside pl-6 space-y-1 mt-2 mb-4">
                      <li>Android</li>
                      <li>Safari (iOS)</li>
                      <li>Windows Phone</li>
                    </ul>
                  </li>
                </ol>
              </section>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="flex-grow" />

      <Footer navLinks={navLinks} />
    </main>
  );
}
