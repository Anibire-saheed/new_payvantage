"use client";

import Image from "next/image";
import { Badge } from "@/components/home/landingShared";
import Link from "next/link";
import Stats from "@/components/home/LandingStats";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ChevronDownIcon } from "@/components/about/DropIcon";
import { Button } from "@/components/ui/button";

export default function AboutPageClient() {
  const handleReadOurStory = () => {
    const element = document.getElementById("our-story");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden font-sans text-[14px] leading-6">
      {/* Hero Section */}
      <section className="pt-8 md:pt-12 lg:pt-16 pb-4 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center xl:justify-center gap-8 mb-16 md:mb-24 lg:mb-32">
        <ScrollReveal from="left" className="w-full lg:w-1/2 text-left">
          <Badge className="mb-6">Our Story</Badge>
          <h1 className="font-bold text-brand-primary mb-6 text-[24px] md:text-[26px] leading-8 md:leading-9">
            Enabling Payments For A <br className="hidden lg:block" /> Digital
            Africa
          </h1>
          <p className="text-black mb-10 max-w-130 text-[14px] font-normal leading-6">
            We are a leading tech-driven payment solutions provider in Africa.
            We aim to connect the continent with digital payment solutions,
            creating value for everyday operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              type="button"
              onClick={handleReadOurStory}
              variant="default"
              size="lg"
              className="w-full sm:w-auto text-[14px] font-medium"
            >
              Read Our Story
              <ChevronDownIcon className="w-5 h-5 ml-1 mt-2" />
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-center text-[14px] font-medium"
            >
              <Link href="/book-demo">Book A Demo</Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal
          from="right"
          delay={150}
          className="w-full lg:w-1/2 mt-8 lg:mt-10"
        >
          <div className="rounded-xl w-full h-65 sm:h-70 md:h-97.5 relative overflow-hidden mix-blend-multiply">
            <Image
              src="/image/about/AboutheroImage.svg"
              alt="Payvantage Team"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Built To Solve A Real Problem */}
      <section
        id="our-story"
        className="mx-auto grid w-[min(1240px,calc(100%-48px))] grid-cols-1 items-start gap-10 lg:grid-cols-2"
      >
        <ScrollReveal from="left" className="min-w-0 lg:pt-[50px]">
          <Badge className="mb-6">Who We Are</Badge>
          <h2 className="text-[24px] md:text-[26px] font-bold text-brand-primary mb-6 leading-8 md:leading-9">
            Built To Solve A Real Problem.
          </h2>
          <div className="space-y-6 text-black font-normal text-[14px] leading-6">
            <p className="text-[#000000] border-l-4 border-[#e5e5f0] pl-4 mb-12 italic text-[14px] font-bold leading-6">
              &ldquo;We set out to provide and enable payment for Africans —
              addressing their pain points head-on.&rdquo;
            </p>
            <p>
              We understand that to deliver value continuously, we must address
              what job the customer needs to get done. With this question in
              mind, we set out to provide and enable payment for emerging
              customers and address their pain points.
            </p>
            <p>
              We envision a world where payment can be instant, secure and
              affordable for Africans.
            </p>
            <p>
              We are passionate about enabling payments for merchants and
              customers by leveraging emerging technologies and strategic
              partnerships with all the stakeholders in the value networks.
            </p>
          </div>
        </ScrollReveal>

        <div className="min-w-0 flex flex-col gap-4">
          {[
            {
              icon: "/image/about/Built_icon1.svg",
              title: "What We Do",
              body: (
                <>
                  We enable payments for merchants and customers by leveraging
                  emerging technologies and strategic partnerships across
                  Nigeria&apos;s financial value
                  <br />
                  network.
                </>
              ),
            },
            {
              icon: "/image/about/Built_icon2.svg",
              title: "Why We Do It",
              body: "Millions of Nigerians remain underserved by traditional financial systems. We believe every person deserves access to fast, secure, and affordable digital payments.",
            },
            {
              icon: "/image/about/Built_icon3.svg",
              title: "How We Do It",
              body: "Through USSD platforms, virtual accounts, SoftPOS, and value-added services — all underpinned by developer-friendly APIs and robust cloud infrastructure.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} from="right" delay={i * 100}>
              <div className="flex flex-col items-start rounded-[16px] bg-[#eeeef5] px-6 py-5 text-left shadow-[0_5px_0_#e2e2eb] sm:px-10">
                <div className="mb-4 shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="object-contain"
                    style={{
                      mixBlendMode: "multiply" as const,
                      filter: "brightness(1.07)",
                    }}
                  />
                </div>
                <h3 className="mb-4 text-[14px] font-bold leading-5 text-[#5153A0]">
                  {item.title}
                </h3>
                <p className="text-[14px] font-normal leading-[25px] text-[#777777]">
                  {item.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="pt-22 pb-8 px-6 lg:px-12 w-full mt-6 ">
        <ScrollReveal className="max-w-7xl mx-auto text-center mb-10">
          <Badge className="mb-6">What Drives Us</Badge>
          <h2 className="text-[24px] md:text-[26px] font-bold leading-8 md:leading-9 text-brand-primary mb-5">
            Our Guiding Principles
          </h2>
          <p className="text-[#1a1a1a] text-[14px] font-normal leading-6">
            Everything we build and every decision we make flows from three core
            commitments.
          </p>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "/image/about/about_2.svg",
              tag: "Our Mission",
              title: "Deliver And Create Value",
              body: "To be the best digital technology and business insights services provider whilst adding value to all stakeholders.",
              extra: "",
            },
            {
              icon: "/image/about/about_3.svg",
              tag: "Our Vision",
              title: "Lead Across Africa",
              body: "To be the preferred payment enabler in sub-saharan Africa.",
              extra: "",
            },
            {
              icon: "/image/about/about_1.svg",
              tag: "Our Values",
              title: "Values We Live By",
              body: "Fairness, Innovation, Integrity and Excellence are values that drive us towards delivering customer centric platforms.",
              extra:
                "md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto lg:col-span-1 lg:w-full lg:mx-0",
            },
          ].map((card, i) => (
            <ScrollReveal
              key={card.tag}
              delay={i * 100}
              className={`bg-[#EEEEF5] p-7 rounded-2xl border-b-5 border-gray-300 flex flex-col items-start text-left shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] ${card.extra}`}
            >
              <div className="w-full flex justify-end h-46 relative">
                <Image
                  src={card.icon}
                  alt={card.tag}
                  fill
                  className="object-contain object-right"
                  style={{
                    mixBlendMode: "multiply" as const,
                    filter: "brightness(1.07)",
                  }}
                />
              </div>
              <h4 className="text-[#5153A0] text-[14px] font-bold leading-5 mb-2">
                {card.tag}
              </h4>
              <h3 className="text-[#5153A0] font-bold text-[20px] leading-7 mb-3">
                {card.title}
              </h3>
              <p className="text-black text-[14px] font-normal leading-5">
                {card.body}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="pt-2 pb-10 bg-white">
        <Stats />
      </div>

      {/* Book a demo */}
      <section className="py-14 px-6 lg:px-12 w-full bg-linear-to-b from-[#3E409533] to-white">
        <div className="max-w-7xl mx-auto text-center ">
          <ScrollReveal>
            <div className="mb-8">
              <Badge>Get Started</Badge>
            </div>

            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-bold text-brand-primary mb-4 md:mb-6">
              Book A Demo Now
            </h2>

            <p className="text-black max-w-2xl mx-auto mb-10 px-4 md:px-0 text-[14px] font-normal leading-6">
              Lets demonstrate how we can add value to your company with our{" "}
              <br className="hidden md:block" /> suite of payment solutions.
            </p>

            <Button asChild variant="default" size="lg" className="mb-8">
              <Link href="/book-demo">BOOK A DEMO</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section>
        <ScrollReveal
          from="none"
          delay={200}
          className="relative w-full max-w-360 mx-auto aspect-4/1 md:aspect-[4.2/1] overflow-hidden"
        >
          <Image
            src="/image/Group_Pic.svg"
            alt="Payvantage Team"
            fill
            className="object-cover object-top mix-blend-multiply scale-[1.03]"
          />
        </ScrollReveal>
      </section>
    </main>
  );
}
