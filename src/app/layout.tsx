import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Geist, Geist_Mono } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YaMerito | Asistente de recuerdos y recordatorios inteligentes",
  description: "Asistente de recuerdos y recordatorios inteligentes - Tec de Veracruz",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#2B3467",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar/>
          <main className="flex-1 bg-background w-full">
            <div className="w-full mx-auto">
              {children}
            </div>
          </main>
          <Footer/>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
