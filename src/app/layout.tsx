import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/Providers";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "Payvantage - %s ",
    default: "Payvantage - Home",
  },
  description:
    "Payvantage is a leading tech-driven payment solutions provider in Africa. We aim to connect the continent with digital payment solutions, creating value for everyday operations.",
  keywords:
    "Payvantage, Payments, Africa, Digital Payments, Mobile Payments, USSD Platform, Value Added Services, SoftPOS, Vantage Recharge, Virtual Accounts",
  icons: {
    icon: "/image/Metalogo.png",
    shortcut: "/image/Metalogo.png",
    apple: "/image/Metalogo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${schibstedGrotesk.variable} h-full antialiased overflow-x-hidden`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col text-foreground bg-background">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
