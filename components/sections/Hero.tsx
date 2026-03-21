'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[75vh] min-h-[400px] flex items-center justify-center pt-20">
        <Image
          src="https://picsum.photos/seed/mountainslake/1920/1080"
          alt="Góry i jezioro - spokojny krajobraz"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      <section className="bg-[#5A7358] py-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="block text-white/70 font-semibold tracking-widest uppercase text-xs mb-4">
            Profesjonalny Gabinet Psychoterapii
          </span>
          <h1 className="font-serif text-2xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white">
            Bezpieczna przestrzeń <br/><span className="italic font-light">do leczenia relacji</span>
          </h1>
          <p className="text-base md:text-lg mb-10 text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Specjalizuję się w pracy z traumą relacyjną. Pomagam leczyć doświadczenia wynikające z trudnych więzi, przywracając równowagę i spokój.
          </p>
          <a 
            href="#kontakt"
            className="inline-flex items-center justify-center bg-white text-[#5A7358] px-10 py-4 rounded-full text-sm font-bold tracking-wider hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 uppercase"
          >
            Zapytaj o termin
          </a>
        </motion.div>
      </section>
    </>
  );
}
