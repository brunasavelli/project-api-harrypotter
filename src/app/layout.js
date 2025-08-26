import "./globals.css";
import perfil from "./perfil/page"

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <perfil />
      </body>
    </html>
  );
}