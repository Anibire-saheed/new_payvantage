import { Suspense } from "react";
import type { Metadata } from "next";
import ContactSalesClient from "./ContactSalesClient";

export const metadata: Metadata = {
  title: "Contact Sales | Payvantage",
  description:
    "Get in touch with Payvantage sales specialists. Discuss custom enterprise pricing, high-volume payment solutions, API integrations, and dedicated support.",
};

export default function ContactSalesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#5153A0]"></div>
        </div>
      }
    >
      <ContactSalesClient />
    </Suspense>
  );
}
