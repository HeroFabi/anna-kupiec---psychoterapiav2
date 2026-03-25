import Link from 'next/link';

export default function Footer({ navLinks }: { navLinks: { name: string, href: string }[] }) {
  return (
    <footer className="w-full bg-[#5A7358] text-white/70 py-12 border-t border-[#4a6048]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-xl md:text-2xl text-white leading-tight text-center">
          Psychoterapia <br /> Anna Kupiec
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium tracking-wider uppercase">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">
            Polityka Prywatności
          </Link>
        </nav>
        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
