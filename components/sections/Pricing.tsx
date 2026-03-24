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
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900">
              Cennik
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4 mb-16 max-w-3xl mx-auto">
          {prices.map((item, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div className="bg-white py-4 px-6 transition-shadow flex justify-between items-center border-l-2 border-[#5A7358]">
                <div>
                  <h3 className="text-slate-900 font-medium text-[15px]">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-light">{item.time}</p>
                </div>
                <div className="text-slate-900 font-medium ml-4 shrink-0 text-[15px]">
                  {item.price}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-slate-600 font-light leading-relaxed text-center max-w-3xl mx-auto">
            <p className="mb-4">
              Psychoterapia indywidualna, pary, rodziny – to spotkania z psychoterapeutą, które odbywają się w określonej częstotliwości ustalonej między terapeutą a klientem.
            </p>
            <p className="mb-4">
              Psychoterapia jest poprzedzona konsultacją wstępną (1 do 3 spotkań), która pozwala określić cel terapii oraz oczekiwane zmiany.
            </p>
            <p className="mt-8 text-[#5A7358] text-sm font-medium tracking-wide uppercase">
              Spotkania mogą odbywać się również online.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
