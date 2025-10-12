import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/landing/Header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "ChajaratMariam – Rose de Jéricho authentique",
  description:
    "Coffrets premium de roses de Jéricho ChajaratMariam : rituels guidés, intentions manuscrites et accompagnement pour vos moments de renaissance.",
  openGraph: {
    title: "ChajaratMariam – Rose de Jéricho authentique",
    description:
      "Découvrez les coffrets rituels ChajaratMariam et la magie de la rose de Jéricho.",
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
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-white text-gray-900`}
      >
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
