import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Cndla Collective",
  description:
    "Especialistas en marketing digital y estrategias creativas con enfoque global. Presencia en LATAM, USA y Europa. Impulsamos tu marca. ¡Contáctanos y descubre más!",
};

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        {/* <LenisScroller /> */}
      </body>
    </html>
  );
}
