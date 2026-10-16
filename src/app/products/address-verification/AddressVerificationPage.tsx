"use client";

import ProductHero from "@/components/products/ProductHero";

import ProductFeatures from "@/components/products/ProductFeatures";
import ProductDemo from "@/components/products/ProductDemo";
import ProductBackButton from "@/components/products/ProductBackButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AddressVerificationPage({ embedded=false }: { embedded?: boolean; }={}) {
  const Container=embedded? "div":"main";

  return (
    <Container className="flex min-h-screen flex-col bg-white overflow-hidden">
      {!embedded&&<ProductBackButton />}

      {/* Hero Section */}
      <ProductHero label={<>Address Verification</>} title={<>Confirm Customer Addresses Quickly & Accurately</>}
        image="/image/products/product_1.svg" imageAlt="Address Verification" featuresId="address-verification-features" demoHref="/book-demo?product=Address%20Verification"
        className="pt-4 md:pt-6 lg:pt-8 pb-10 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center xl:justify-center gap-8 mb-8 md:mb-12 lg:mb-16" descriptionClassName="text-gray-600 mb-6 max-w-130 text-[14px] font-medium leading-6">
        Confirm customer addresses quickly and accurately to reduce fraud
        and streamline onboarding.
      </ProductHero>

      {/* Details Section */}
      <section id="address-verification-features" className="scroll-mt-6 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <ScrollReveal className="mb-6">
          <h2 className="max-w-xl text-2xl md:text-[28px] lg:text-[26px] font-bold text-brand-primary mb-3">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-xl text-[14px] font-medium leading-6">
            Discover how Address Verification can transform your business
            operations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProductFeatures items={[
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
          ]} />
        </div>
      </section>

      <ProductDemo title={<>Know exactly where your customers are.</>} demoHref="/book-demo?product=Address%20Verification" descriptionClassName="text-black max-w-2xl mx-auto mb-6 px-4 md:px-0 text-[14px] font-medium leading-6">
        Lets get your business connected to every mobile network in
        Nigeria
        <br />
        with zero carrier delays.
      </ProductDemo>
    </Container>
  );
}
