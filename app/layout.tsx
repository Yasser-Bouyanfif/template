import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/hero8-header";
import FooterSection from "@/components/footer";

export const metadata: Metadata = {
  title: "CHAJARATMARIAM — Rose de Jericho contemporaine",
  description:
    "Rituels modernes et minimalistes autour de la Rose de Jericho : renaissance botanique, objets de soin et expériences immersives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <HeroHeader />
            <div className="flex min-h-screen flex-col">
              <main className="flex-1 pt-20">{children}</main>
              <FooterSection />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
