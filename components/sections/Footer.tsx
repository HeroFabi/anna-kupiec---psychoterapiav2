export default function Footer({ navLinks }: { navLinks: { name: string, href: string }[] }) {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl text-white">Anna Kupiec</div>
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium tracking-wider uppercase">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
