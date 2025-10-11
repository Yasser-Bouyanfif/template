import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/landing/Header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "ELEC'CONNECT: Explorez la mobilité durable",
  description:
    "ELEC'CONNECT vous accompagne vers une mobilité durable avec ses solutions de recharge.",
  openGraph: {
    title: "ELEC'CONNECT: Explorez la mobilité durable",
    description:
      "ELEC'CONNECT vous accompagne vers une mobilité durable avec ses solutions de recharge.",
  },
  icons: {
    icon: "/logo.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr" data-theme="emerald">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900`}>
        <Providers>
          <Header />
          <main className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-5xl flex-col gap-6 px-4 py-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
