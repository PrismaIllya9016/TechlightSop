import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Techlight Shop",
  description: "Techlight shop seguridad inteligente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full flex pl-4 items-center">
          <Image
            width={50}
            height={50}
            src={"/images/LogoMenu.png"}
            alt="Logo techlight"
          />
          /
          <Image
            width={180}
            height={50}
            src={"/images/LogoBlanco.png"}
            alt="Logo techlight"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
