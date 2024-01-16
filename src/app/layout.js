import "./globals.css";
import { LenisScroller } from "./LenisScroll";
import { Roboto } from "next/font/google";



const roboto = Roboto({ subsets: ["latin"], weight: "400" });
export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={roboto.className}>{children}
        <LenisScroller />
      </body>
    </html>
  );
}
