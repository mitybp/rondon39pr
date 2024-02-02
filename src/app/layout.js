import "./globals.css";
import Header from "./components/header";


export const metadata = {
  title: "Grupo Escoteiro Marechal Rondon 39°PR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
