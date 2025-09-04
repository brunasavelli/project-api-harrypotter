import "./globals.css";
import localFont from 'next/font/local';

const WizardWorldSimplified = localFont({
  src: [
    {
      path: '../../public/fonts/WizardWorldSimplified.ttf',
      weight: '400',
      style: 'normal'
    },
  ],
  variable: '--font-wizard',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={WizardWorldSimplified.variable}>
      <body className={WizardWorldSimplified.className}>
        {children}
      </body>
    </html>
  );
}