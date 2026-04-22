import type { Metadata } from 'next';
import { Montserrat, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anna Kupiec - Psychoterapia Poznań | EMDR, NARM, Trauma',
  description: 'Profesjonalny gabinet psychoterapii w Poznaniu. Specjalizacja w pracy z traumą relacyjną, EMDR, NARM. Psychoterapia indywidualna, par i rodzin. Umów wizytę.',
  keywords: ['psychoterapia', 'Poznań', 'terapia EMDR', 'terapia NARM', 'trauma relacyjna', 'psychoterapeuta Poznań', 'terapia par', 'terapia rodzinna', 'Anna Kupiec'],
  openGraph: {
    title: 'Anna Kupiec - Psychoterapia Poznań',
    description: 'Profesjonalny gabinet psychoterapii. Specjalizacja w pracy z traumą relacyjną, EMDR, NARM.',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`scroll-smooth ${montserrat.variable} ${cormorant.variable}`}>
      <body className="font-sans text-gray-800 antialiased bg-[#FAFAFA] w-full overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
