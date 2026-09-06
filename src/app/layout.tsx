import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { brandConfig } from "@/config/brand";

// Configuração da fonte principal (fácil de trocar importando outra fonte do Google)
const primaryFont = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${brandConfig.name} - Conectando ideias ao futuro do software`,
  description: "Desenvolvemos soluções sob medida, consultoria estratégica em TI e produtos proprietários de alta performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${primaryFont.variable} antialiased selection:bg-primary/30 selection:text-primary-foreground`}>
        {children}
      </body>
    </html>
  );
}
