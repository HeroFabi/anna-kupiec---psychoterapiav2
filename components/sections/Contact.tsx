'use client';

import { useState } from 'react';
import { MapPin, Phone, CheckCircle2, Loader2 } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const myForm = e.currentTarget;
    const formData = new FormData(myForm);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        myForm.reset();
      } else {
        throw new Error('Wystąpił błąd podczas wysyłania wiadomości.');
      }
    } catch (err) {
      setError('Przepraszamy, nie udało się wysłać wiadomości. Spróbuj ponownie później lub skontaktuj się telefonicznie.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 px-4 max-w-7xl mx-auto w-full">
      <FadeIn>
        <div className="text-center mb-16">
          <span className="text-[#5A7358] font-semibold tracking-widest uppercase text-xs mb-3 block">Zrób pierwszy krok</span>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900">
            Kontakt
          </h2>
        </div>
      </FadeIn>
      
      <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <FadeIn delay={0.2} direction="right">
          <div className="p-10 md:p-16 h-full flex flex-col justify-center bg-[#5A7358] text-white">
            <h3 className="font-serif text-3xl mb-10">Dane Kontaktowe</h3>
            <div className="space-y-8 text-white/90 font-light text-lg">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <p>ul. Mickiewicza 24/4c<br/>60-836 Poznań</p>
              </div>
              <a href="tel:+48609048100" className="flex items-center group transition-opacity hover:opacity-80 w-fit">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-white/20 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <p>+48 609 048 100</p>
              </a>
            </div>
            
            <div className="mt-12 rounded-2xl overflow-hidden shadow-lg border border-white/10 h-64 relative group/map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.789188400843!2d16.90632363471262!3d52.41049679970093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b354ead2ff9%3A0xa07d52204a58bfa!2sAdama%20Mickiewicza%2024%2F4c%2C%2060-835%20Pozna%C5%84!5e0!3m2!1spl!2spl!4v1774172539800!5m2!1spl!2spl" 
                className="w-full h-full grayscale-[15%] transition-all group-hover/map:grayscale-0"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl"></div>
            </div>

            <div className="mt-12 pt-10 border-t border-white/20">
              <p className="text-sm text-white/70 italic">
                W trakcie sesji nie odbieram telefonu. Proszę o pozostawienie wiadomości SMS, oddzwonię najszybciej jak to możliwe.
              </p>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="p-10 md:p-16">
            <h3 className="font-serif text-2xl text-slate-900 mb-8">Napisz wiadomość</h3>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-100 p-8 rounded-2xl text-center">
                <CheckCircle2 className="w-16 h-16 text-[#5A7358] mx-auto mb-4" />
                <h4 className="font-serif text-2xl text-slate-900 mb-2">Dziękuję za wiadomość!</h4>
                <p className="text-slate-600">Odpowiem najszybciej jak to możliwe.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-[#5A7358] hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                action="/"
                data-netlify="true" 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Imię i nazwisko</label>
                    <input 
                      type="text" 
                      name="name"
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5A7358]/20 focus:border-[#5A7358] transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Adres e-mail *</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5A7358]/20 focus:border-[#5A7358] transition-all" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Numer telefonu</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5A7358]/20 focus:border-[#5A7358] transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Wiadomość *</label>
                  <textarea 
                    name="message"
                    required 
                    rows={4} 
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5A7358]/20 focus:border-[#5A7358] transition-all resize-none"
                  ></textarea>
                </div>
                
                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#5A7358] text-white px-8 py-4 rounded-xl text-sm font-semibold tracking-wider hover:bg-[#4a6048] transition-all shadow-md hover:shadow-lg uppercase disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Wysyłanie...
                      </>
                    ) : (
                      'Wyślij Wiadomość'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
