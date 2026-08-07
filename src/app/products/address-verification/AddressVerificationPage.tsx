"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CtaImage from "@/components/ui/ctaImage";
import { Button } from "@/components/ui/button";

export default function AddressVerificationPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      {/* Back Button */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto w-full pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="text-gray-600 font-medium hover:text-[#5153A0] hover:bg-transparent p-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pt-8 md:pt-12 lg:pt-16 pb-10 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center xl:justify-center gap-8 mb-8 md:mb-12 lg:mb-16">
        <ScrollReveal from="left" className="w-full lg:w-1/2 text-left">
          <span className="inline-block bg-[#5153A0] text-white px-6 py-3 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-4">
            Address Verification
          </span>
          <h1 className="text-3xl md:text-[40px] lg:text-[40px] font-extrabold text-brand-primary leading-10 md:leading-13 mb-4">
            Confirm Customer Addresses Quickly & Accurately
          </h1>
          <p className="text-gray-600 font-medium text-[15px] mb-6 max-w-130 leading-relaxed">
            Confirm customer addresses quickly and accurately to reduce fraud
            and streamline onboarding.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              variant="default"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/book-demo?product=Address%20Verification">
                Book A Demo
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-center"
            >
              <a href="mailto:info@payvantage.com.ng?subject=Contact%20Sales">
                Contact Sales
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal
          from="right"
          delay={150}
          className="w-full lg:w-1/2 mt-4 lg:mt-5"
        >
          <div className="rounded-xl w-full h-55 sm:h-70 md:h-87.5 relative overflow-hidden mix-blend-multiply">
            <Image
              src="/image/products/product_1.svg"
              alt="Address Verification"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Details Section */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full py-8">
        <ScrollReveal className="mb-6">
          <h2 className="max-w-xl text-2xl md:text-[28px] lg:text-[40px] font-extrabold text-brand-primary mb-3">
            How It Works
          </h2>
          <p className="text-gray-600 font-medium text-[15px] max-w-xl">
            Discover how Address Verification can transform your business
            operations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              number: "01",
              title: "Location Geotagging",
              description:
                "Precisely verify customer locations using geotagging technology.",
              icon: "/icons/address verification/Location Geotagging.svg",
            },
            {
              number: "02",
              title: "Utility Bill Geomatching",
              description:
                "Cross-reference utility bills with geographic data for accurate verification.",
              icon: "/icons/address verification/Utility Bill Geomatching.svg",
            },
            {
              number: "03",
              title: "Self-Scheduled Verification",
              description:
                "Allow customers to schedule verifications at their convenience.",
              icon: "/icons/address verification/Self-Scheduled Verification.svg",
            },
            {
              number: "04",
              title: "Not-at-Home Reminders",
              description:
                "Send smart reminders when customers aren't available for verification.",
              icon: "/icons/address verification/Not-at-Home Reminders.svg",
            },
            {
              number: "05",
              title: "Fraud-Proof Metadata",
              description:
                "Analyze metadata to detect and prevent fraudulent address claims.",
              icon: "/icons/address verification/Fraud-Proof Metadata.svg",
            },
            {
              number: "06",
              title: "Digital Footprint Mapping",
              description:
                "Map digital footprints to confirm physical address authenticity.",
              icon: "/icons/address verification/Digital Footprint Mapping.svg",
            },
          ].map((item, index) => (
            <ScrollReveal
              key={item.number}
              from={index % 2 === 0 ? "left" : "right"}
              delay={index * 100}
              className="flex"
            >
              <div className="bg-[#EFF0F6] p-8 rounded-2xl border-b-4 border-gray-200 flex flex-col items-start text-left relative overflow-hidden flex-1 mb-">
                {/* Top section with icon and number */}
                <div className="flex justify-between items-center w-full mb-6 relative z-10">
                  <div className="w-16 h-16 bg-gray-300 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain [filter:invert(32%)_sepia(35%)_saturate(1175%)_hue-rotate(203deg)_brightness(94%)_contrast(91%)]"
                    />
                  </div>

                  {/* Number badge (top right) */}
                  <span className="text-[64px] font-extrabold text-gray-300 leading-none">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-[#5153A0] font-bold text-lg mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[14px] font-medium leading-relaxed relative z-10 flex-1">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-22">
        <div className="relative pt-22 px-6 lg:pb-0 bg-linear-to-b from-[#3E409533] to-white overflow-hidden">
          <div className="max-w-7xl mx-auto text-center ">
            <ScrollReveal>
              <div className="mb-4">
                <span className="inline-block bg-[#5153A0] text-white px-6 py-3 border-b-5 border-gray-300 rounded-full text-[12px] font-bold">
                  Get Started
                </span>
              </div>

              <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-extrabold text-brand-primary mb-3 md:mb-4">
                Know exactly where your customers are.
              </h2>

              <p className="text-black text-[13px] md:text-[14px] max-w-2xl mx-auto mb-6 font-bold px-4 md:px-0">
                Lets get your business connected to every mobile network in
                Nigeria
                <br />
                with zero carrier delays.
              </p>

              <Button asChild variant="default" size="lg" className="mb-8">
                <Link href="/book-demo?product=Address%20Verification">
                  Book Your Demo
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
        <CtaImage />
      </section>
    </main>
  );
}
