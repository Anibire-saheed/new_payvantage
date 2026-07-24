"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CtaImage from "@/components/ui/ctaImage";

export default function LivelinessPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      {/* Back Button */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto w-full pt-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 font-medium hover:text-[#5153A0] transition-colors"
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
        </button>
      </div>

      {/* Hero Section */}
      <section className="pt-8 md:pt-12 lg:pt-16 pb-10 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center xl:justify-center gap-8 mb-8 md:mb-12 lg:mb-16">
        <ScrollReveal from="left" className="w-full lg:w-1/2 text-left">
          <span className="inline-block bg-[#5153A0] text-white px-6 py-3 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-4">
            Liveliness
          </span>
          <h1 className="text-3xl md:text-[40px] lg:text-[40px] font-extrabold text-brand-primary leading-10 md:leading-13 mb-4">
            99.9% Accurate.
            <br />
            Zero Extra Effort.
          </h1>
          <p className="text-gray-600 font-medium text-[15px] mb-6 max-w-130 leading-relaxed">
            An facial verification engine with active anti-spoofing and dynamic
            action prompts, delivering instant, 99.9% accurate identity
            verification across any device or lighting condition.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="mailto:info@payvantage.com.ng?subject=Book%20A%20Demo"
              className="w-full sm:w-auto bg-brand-primary text-white px-5 py-5 rounded-md font-bold hover:bg-brand-logo shadow-md transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore features
            </a>
            <a
              href="mailto:info@payvantage.com.ng?subject=Contact%20Sales"
              className="w-full sm:w-auto bg-[#5153A01A] text-[#5153A0] px-5 py-5 rounded-md font-bold hover:bg-[#F4F5F9] transition-all text-sm text-center"
            >
              Book A Demo
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal
          from="right"
          delay={150}
          className="w-full lg:w-1/2 mt-4 lg:mt-5"
        >
          <div className="rounded-xl w-full h-55 sm:h-70 md:h-87.5 relative overflow-hidden mix-blend-multiply">
            <Image
              src="/image/product_3.svg"
              alt="Liveliness"
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
          <h2 className="max-w-xl text-2xl md:text-[28px] lg:text-[40px] font-extrabold text-brand-primary mb-3 ">
            Fraud-Proof Identity.
            <br />
            Frictionless Experience.
          </h2>
          <p className="text-gray-600 font-medium text-[15px] max-w-xl">
            Discover how Liveliness can transform your business operations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
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
              icon: "/icons/liveliness/99.9% Match Accuracy.svg",
            },
          ].map((item, index) => (
            <ScrollReveal
              key={item.number}
              from={index % 2 === 0 ? "left" : "right"}
              delay={index * 100}
              className="flex"
            >
              <div className="bg-[#EFF0F6] p-8 rounded-2xl border-b-4 border-gray-200 flex flex-col items-start text-left relative overflow-hidden flex-1">
                {/* Top section with icon and number */}
                <div className="flex justify-between items-start w-full mb-6 relative z-10">
                  <div className="w-16 h-16 bg-gray-300 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
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
                Stop fraud before it starts
              </h2>

              <p className="text-black text-[13px] md:text-[14px] max-w-[500px] mx-auto mb-6 font-bold px-4 md:px-0">
                Integrate Payvantage Liveness into your onboarding flow and
                protect your platform with AI-grade verification.
              </p>

              <a
                href="mailto:info@payvantage.com.ng?subject=Book%20A%20Demo"
                className="inline-block bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:scale-105 transition-all shadow-xl mb-8"
              >
                Book Your Demo
              </a>
            </ScrollReveal>
          </div>
        </div>
        <CtaImage />
      </section>
    </main>
  );
}
