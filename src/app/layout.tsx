import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-satoshi",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-integral",
});

export const metadata: Metadata = {
  title: "Shopvia - Find Clothes That Match Your Style",
  description: "Experience the next generation of online shopping with Shopvia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${archivoBlack.variable}`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
