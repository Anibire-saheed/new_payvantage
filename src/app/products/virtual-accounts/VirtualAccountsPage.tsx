"use client";

import ProductHero from "@/components/products/ProductHero";

import ProductFeatures from "@/components/products/ProductFeatures";
import ProductDemo from "@/components/products/ProductDemo";
import ProductBackButton from "@/components/products/ProductBackButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VirtualAccountsPage() {

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      <ProductBackButton />

      {/* Hero Section */}
      <ProductHero label={<>Virtual Account</>} title={<>Banking-as-a-Service,
        <br />
        Plug and Play</>}
        image="/image/landing/virtual-account.svg" imageAlt="Virtual account showing a received payment and settled invoices." featuresId="virtual-accounts-features" demoHref="/book-demo?product=Virtual%20Accounts"
        className="pt-4 md:pt-6 lg:pt-8 pb-10 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center xl:justify-center gap-8 mb-8 md:mb-12 lg:mb-16" descriptionClassName="text-gray-600 mb-6 max-w-230 text-[14px] font-medium leading-6">
        A plug-and-play Bank-as-a-Service solution that powers automated
        payment collections, real-time webhooks, auto-split settlements, and
        exact-amount payment protection.
      </ProductHero>

      {/* Details Section */}
      <section id="virtual-accounts-features" className="scroll-mt-6 px-6 lg:px-12 max-w-7xl mx-auto w-full ">
        <ScrollReveal className="mb-6">
          <h2 className="max-w-xl text-2xl md:text-[28px] lg:text-[26px] font-bold text-brand-primary mb-3">
            Automated Collections,
            <br />
            Zero Manual Effort
          </h2>
          <p className="text-gray-600 max-w-xl text-[14px] font-medium leading-6">
            Every feature built to eliminate reconciliation headaches and let
            your business scale without friction.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <ProductFeatures items={[
            {
              number: "01",
              title: "Instant Webhook Notifications",
              description:
                "Real-time push notifications sent directly to the merchant's system the micro-second a payment is received.",
              icon: "/icons/virtual account/Instant Webhook Notifications.svg",
            },
            {
              number: "02",
              title: "Auto-Split Settlements",
              description:
                "Automatically split incoming customer payments into different wallets e.g., sending 95% to business revenue and 5% to tax/savings wallets instantly.",
              icon: "/icons/virtual account/Auto-Split Settlements.svg",
            },
            {
              number: "03",
              title: "Overpayment & Underpayment Safeguards",
              description:
                "Smart systems that automatically flag or reject transfers that do not match the expected invoice amount to prevent.",
              icon: "/icons/virtual account/Overpayment & Underpayment Safeguards.svg",
            },
          ]} />
        </div>
      </section>

      <ProductDemo title={<>Start collecting payments smarter</>} demoHref="/book-demo?product=Virtual%20Accounts" descriptionClassName="text-black max-w-[490px] mx-auto mb-6 px-4 md:px-0 text-[14px] font-medium leading-6">
        Connect your system to Payvantage Virtual Accounts and automate
        your entire payment collection pipeline.
      </ProductDemo>
    </main>
  );
}
