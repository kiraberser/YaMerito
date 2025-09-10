import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YaMerito | Asistente de recuerdos y recordatorios inteligentes",
  description: "Asistente de recuerdos y recordatorios inteligentes - Tec de Veracruz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen grid grid-rows-[auto,1fr]">
          <Navbar/>
          <main className="mx-auto w-full max-w-6xl sm:p-6 md:p-8">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
