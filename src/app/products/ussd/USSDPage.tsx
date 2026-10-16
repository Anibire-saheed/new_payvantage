"use client";

import ProductHero from "@/components/products/ProductHero";

import ProductFeatures from "@/components/products/ProductFeatures";
import ProductDemo from "@/components/products/ProductDemo";
import ProductBackButton from "@/components/products/ProductBackButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function USSDPage() {

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      <ProductBackButton />

      {/* Hero Section */}
      <ProductHero label={<>USSD Platform</>} title={<>Reach Every Customer,
        <br />
        Everywhere</>}
        image="/image/products/product_5.svg" imageAlt="USSD Platform" featuresId="ussd-features" demoHref="/book-demo?product=USSD%20Platform"
        className="pt-4 md:pt-6 lg:pt-8 pb-10 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center xl:justify-center gap-8 mb-8 md:mb-12 lg:mb-16" descriptionClassName="text-gray-600 mb-6 max-w-130 text-[14px] font-medium leading-6">
        A data-free, offline channel that connects your business to any
        customer on any mobile network, delivering instant transactions,
        smart session recovery, and real-time analytics.
      </ProductHero>

      {/* Details Section */}
      <section id="ussd-features" className="scroll-mt-6 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <ScrollReveal className="mb-6">
          <h2 className="max-w-xl text-2xl md:text-[28px] lg:text-[26px] font-bold text-brand-primary mb-3">
            Everything You Need To Deploy At Scale
          </h2>
          <p className="text-gray-600 max-w-xl text-[14px] font-medium leading-6">
            An end-to-end USSD infrastructure built for merchants and their
            customers
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProductFeatures items={[
            {
              number: "01",
              title: "Functionality",
              description:
                "Works flawlessly without internet data, allowing merchants to reach customers in remote or low-connectivity areas.",
              icon: "/icons/ussd/functionality.svg",
            },
            {
              number: "02",
              title: "Real-Time Analytics",
              description:
                "A visual backend showing live session volume, drop-off rates, and transaction success rates.",
              icon: "/icons/ussd/Real-Time Analytics.svg",
            },
            {
              number: "03",
              title: "Seamless Telco Connection",
              description:
                "Direct, pre-configured links to all major telecom networks, eliminating carrier negotiation delays.",
              icon: "/icons/ussd/Seamless Telco Connection.svg",
            },
            {
              number: "04",
              title: "End-to-End Setup",
              description:
                "A complete, launch-ready USSD pipeline handled entirely from backend creation to live deployment.",
              icon: "/icons/ussd/End-to-End Setup.svg",
            },
            {
              number: "05",
              title: "Simple Onboarding",
              description:
                "Sign up, configure, and launch your first interactive USSD menu in minutes.",
              icon: "/icons/ussd/rocket-2.svg",
            },
            {
              number: "06",
              title: "Network Selection Automation",
              description:
                "Intelligent routing that automatically detects the user's carrier to ensure uninterrupted session delivery.",
              icon: "/icons/ussd/Network Selection Automation.svg",
            },
            {
              number: "07",
              title: "Easy-to-Use USSD Application",
              description:
                "Intuitive administrative dashboard to monitor, manage, and scale your USSD services effortlessly.",
              icon: "/icons/ussd/Easy-to-Use USSD Application.svg",
            },
            {
              number: "08",
              title: "Easy-to-Use USSD Menu",
              description:
                "User-friendly, clean menu interface for end-customers to navigate services with zero friction.",
              icon: "/icons/ussd/Easy-to-Use USSD Menu.svg",
            },

            {
              number: "09",
              title: "Smart Session Recovery",
              description:
                "If a user's network drops mid-transaction, the system saves their progress so they can resume where they left off.",
              icon: "/icons/ussd/Smart Session Recovery.svg",
            },

            {
              number: "10",
              title: "Multi-Language Support",
              description:
                "Easily translate your USSD menus into local languages like Hausa, Yoruba, Igbo, and Pidgin.",
              icon: "/icons/ussd/Multi-Language Support.svg",
            },
          ]} />
        </div>
      </section>

      <ProductDemo title={<>Ready To Deploy Your USSD Channel?</>} demoHref="/book-demo?product=USSD%20Platform" descriptionClassName="text-black max-w-2xl mx-auto mb-6 px-4 md:px-0 text-[14px] font-medium leading-6">
        Let&apos;s get your business connected to every mobile network
        in Nigeria
        <br />
        with zero carrier delays.
      </ProductDemo>
    </main>
  );
}
