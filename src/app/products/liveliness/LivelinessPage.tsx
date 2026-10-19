"use client";

import ProductHero from "@/components/products/ProductHero";

import ProductFeatures from "@/components/products/ProductFeatures";
import ProductDemo from "@/components/products/ProductDemo";
import ProductBackButton from "@/components/products/ProductBackButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LivelinessPage({
  embedded = false,
}: { embedded?: boolean } = {}) {
  const Container = embedded ? "div" : "main";

  return (
    <Container className="flex min-h-screen flex-col bg-white overflow-hidden">
      {!embedded && <ProductBackButton />}

      {/* Hero Section */}
      <ProductHero largeImage
        label={<>Liveliness</>}
        title={
          <>
            99.9% Accurate.
            <br />
            Zero Extra Effort.
          </>
        }
        image="/image/landing/liveliness.svg"
        imageAlt="Identity verification with a 92% live match and facial movement checks."
        featuresId="liveliness-features"
        demoHref="/book-demo?product=Liveliness"
        className="pt-4 md:pt-6 lg:pt-8 pb-10 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center xl:justify-center gap-8 mb-8 md:mb-12 lg:mb-16"
        descriptionClassName="text-gray-600 mb-6 max-w-130 text-[14px] font-medium leading-6"
      >
        A facial verification engine with active anti-spoofing and dynamic
        action prompts, delivering instant, 99.9% accurate identity verification
        across any device or lighting condition.
      </ProductHero>

      {/* Details Section */}
      <section
        id="liveliness-features"
        className="scroll-mt-6 px-6 lg:px-12 max-w-7xl mx-auto w-full"
      >
        <ScrollReveal className="mb-6">
          <h2 className="max-w-xl text-2xl md:text-[28px] lg:text-[26px] font-bold text-brand-primary mb-3">
            Fraud-Proof Identity.
            <br />
            Frictionless Experience.
          </h2>
          <p className="text-gray-600 max-w-xl text-[14px] font-medium leading-6">
            Discover how Liveliness can transform your business operations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <ProductFeatures
            items={[
              {
                number: "01",
                title: "Cross-Platform Consistency",
                description:
                  "Available on both iOS and Android, bringing secure biometric verification to customers regardless of their device.",
                icon: "/icons/liveliness/Cross-Platform Consistency.svg",
              },
              {
                number: "02",
                title: "Ultra-Light",
                description:
                  "Verification runs entirely within the app with no external redirects and no impact on app size or performance.",
                icon: "/icons/liveliness/Ultra-Light.svg",
              },
              {
                number: "03",
                title: "Interactive Text & Audio Guidance",
                description:
                  "Synchronised visual prompts and audio cues guide users through each gesture challenge step by step.",
                icon: "/icons/liveliness/Interactive Text & Audio Guidance.svg",
              },
              {
                number: "04",
                title: "Adaptive Low-Light Warnings",
                description:
                  "Real-time feedback alerts users when lighting conditions are insufficient for a clean capture.",
                icon: "/icons/liveliness/Adaptive Low-Light Warnings.svg",
              },
              {
                number: "05",
                title: "Instant Success Feedback",
                description:
                  "Immediate audio and visual confirmation the moment each required gesture is completed correctly.",
                icon: "/icons/liveliness/Instant Success Feedback.svg",
              },
              {
                number: "06",
                title: "Dynamic Action Randomisation",
                description:
                  "Randomised gesture challenges to ensure genuine user interaction.",
                icon: "/icons/liveliness/Dynamic Action Randomisation.svg",
              },
              {
                number: "07",
                title: "Anti-Spoofing AI (Passive Liveness)",
                description:
                  "AI-powered anti-spoofing to detect and prevent fake attempts.",
                icon: "/icons/liveliness/Anti-Spoofing AI (Passive Liveness).svg",
              },
              {
                number: "08",
                title: "99.9% Match Accuracy",
                description:
                  "Every verification produces a confident, real-time match for reliable identity confirmation.",
                icon: "/icons/liveliness/99.svg",
              },
            ]}
          />
        </div>
      </section>

      <ProductDemo
        title={<>Stop fraud before it starts</>}
        demoHref="/book-demo?product=Liveliness"
        descriptionClassName="text-black max-w-[500px] mx-auto mb-6 px-4 md:px-0 text-[14px] font-medium leading-6"
      >
        Integrate Payvantage Liveness into your onboarding flow and protect your
        platform with AI-grade verification.
      </ProductDemo>
    </Container>
  );
}
