import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/Providers";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
    icon: "/image/logos/Metalogo.png",
    shortcut: "/image/logos/Metalogo.png",
    apple: "/image/logos/Metalogo.png",
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
      className={`${schibstedGrotesk.variable} ${montserrat.variable} h-full antialiased overflow-x-hidden`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function isEventObj(r) {
                  if (!r) return true;
                  if (typeof Event !== 'undefined' && r instanceof Event) return true;
                  if (Object.prototype.toString.call(r) === '[object Event]') return true;
                  if (typeof r === 'object' && r !== null && 'isTrusted' in r && 'type' in r) return true;
                  if (typeof r === 'object' && r !== null && typeof r.message === 'string' && r.message.indexOf('[object Event]') !== -1) return true;
                  return false;
                }
                window.addEventListener('unhandledrejection', function(e) {
                  if (isEventObj(e.reason)) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                  }
                }, true);
                window.addEventListener('error', function(e) {
                  if (isEventObj(e.error) || isEventObj(e)) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                  }
                }, true);
              })();
            `,
          }}
        />
      </head>
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
