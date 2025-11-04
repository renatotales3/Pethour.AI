import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pethour.AI - Assistente Virtual para Petshops",
  description: "Automatize atendimento, cotações e agendamentos do seu petshop com IA. Responda clientes 24/7 no WhatsApp.",
  keywords: ["petshop", "IA", "assistente virtual", "agendamento", "WhatsApp", "veterinário online"],
  openGraph: {
    title: "Pethour.AI - Assistente Virtual para Petshops",
    description: "Automatize atendimento, cotações e agendamentos do seu petshop com IA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
