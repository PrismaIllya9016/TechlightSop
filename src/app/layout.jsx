import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
  openGraph: {
    type: "website", // Tipo de contenido (puedes cambiarlo según sea necesario)
    url: "https://techlight-sop.vercel.app/", // La URL de tu página
    title: "Techlight Shop", // Título que se mostrará en Open Graph
    description: "Techlight shop seguridad inteligente", // Descripción de la página
    images: [
      {
        url: "https://techlightshop.com/images/LogoMenu.png", // URL de la imagen
        width: 800, // Ancho de la imagen
        height: 600, // Altura de la imagen
        alt: "Techlight Shop Logo", // Texto alternativo
      },
    ],
    siteName: "Techlight Shop", // Nombre de tu sitio
  },
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
