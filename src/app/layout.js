import "./globals.css";
import { LenisScroller } from "./LenisScroll";




export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>{children}
        <LenisScroller />
        </body>
    </html>
  );
}
