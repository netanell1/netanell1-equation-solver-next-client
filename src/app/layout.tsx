import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./colors.scss"
import "./animations.scss"
import AppHeader from "@/components/appHeader/appHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solvy",
  description: "An artificial intelligence bot that knows how to solve equations with variables"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={`${inter.className} bg-body overflow-x-hidden`}>
        <AppHeader />
        <main className="m-auto w-max mt-20 max-width-calc-screen" style={{ width: "63rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
