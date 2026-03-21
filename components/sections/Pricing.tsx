import { FadeIn } from '@/components/ui/FadeIn';

export default function Pricing() {
  const prices = [
    { title: 'Psychoterapia indywidualna', price: '230 zł', time: '50 min' },
    { title: 'Psychoterapia indywidualna EMDR', price: '230 zł', time: '50 min' },
    { title: 'Psychoterapia pary', price: '250 zł', time: '50 min' },
    { title: 'Psychoterapia rodziny', price: '300 zł', time: '90 min' },
  ];

  return (
    <section id="cennik" className="py-24 px-4 bg-[#F3F4F1] w-full">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#5A7358] font-semibold tracking-widest uppercase text-xs mb-3 block">Inwestycja w siebie</span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900">
              Cennik
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {prices.map((item, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-center border-l-4 border-[#5A7358]">
                <div>
                  <h3 className="font-serif text-xl text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-light">{item.time}</p>
                </div>
                <div className="text-2xl font-medium text-[#5A7358]">
                  {item.price}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="bg-white p-10 rounded-3xl shadow-sm text-slate-600 font-light leading-relaxed text-center max-w-3xl mx-auto">
            <p className="mb-4">
              Psychoterapia indywidualna, pary, rodziny – to spotkania z psychoterapeutą, które odbywają się w określonej częstotliwości ustalonej między terapeutą a klientem.
            </p>
            <p className="mb-4">
              Psychoterapia jest poprzedzona konsultacją wstępną (1 do 3 spotkań), która pozwala określić cel terapii oraz oczekiwane zmiany.
            </p>
            <div className="mt-8 inline-block bg-[#5A7358]/10 text-[#5A7358] px-6 py-2 rounded-full text-sm font-medium tracking-wide uppercase">
              Spotkania mogą odbywać się również online.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
