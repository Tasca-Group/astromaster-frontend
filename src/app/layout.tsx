import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = localFont({
  src: [
    { path: "../../public/fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AstroMaster — Dein wahres Sternzeichen",
  description:
    "86% aller Menschen haben ein anderes Sternzeichen als sie glauben. Finde deins heraus — basierend auf echter Astronomie.",
  metadataBase: new URL("https://astro-masters.com"),
  openGraph: {
    title: "AstroMaster — Dein wahres Sternzeichen",
    description:
      "Siderische Astrologie, Numerologie, Human Design & mehr. 5 Systeme, 1 Analyse.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-inter antialiased bg-bg text-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
