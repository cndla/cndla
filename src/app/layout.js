import "./globals.css";
import { LenisScroller } from "./LenisScroll";
import { Roboto } from "next/font/google";


export const metadata = {
  title: "Cndla Collective",
  description: "",
};

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
