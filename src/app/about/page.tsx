import Image from "next/image";
import Stats from "@/components/Stats";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AboutUs",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 lg:pt-28 pb-10 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center xl:justify-center gap-8 mb-16 md:mb-24 lg:mb-32">
        <ScrollReveal from="left" className="w-full lg:w-1/2 text-left">
          <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6">
            Our Story
          </span>
          <h1 className="text-3xl md:text-[40px] lg:text-[40px] font-extrabold text-brand-primary leading-13 mb-6">
            Enabling Payments For A <br className="hidden lg:block" /> Digital
            Africa
          </h1>
          <p className="text-gray-600 font-medium text-[15px] mb-10 max-w-130 leading-relaxed">
            We are a leading tech-driven payment solutions provider in Africa.
            We aim to connect the continent with digital payment solutions,
            creating value for everyday operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              className="w-full sm:w-auto bg-brand-primary text-white px-8 py-5 rounded-md font-bold hover:bg-brand-logo shadow-md transition-all text-sm flex items-center justify-center gap-2"
            >
              Read Our Story
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <a
              href="mailto:info@payvantage.com.ng?subject=Book%20A%20Demo"
              className="w-full sm:w-auto bg-[#5153A01A] text-[#5153A0] px-8 py-5 rounded-md font-bold hover:bg-[#F4F5F9] transition-all text-sm text-center"
            >
              Book A Demo
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal
          from="right"
          delay={150}
          className="w-full lg:w-1/2 mt-8 lg:mt-10"
        >
          <div className="rounded-xl w-full h-55 sm:h-70 md:h-87.5 relative overflow-hidden mix-blend-multiply">
            <Image
              src="/image/Group_Pic.svg"
              alt="Payvantage Team"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Built To Solve A Real Problem */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 items-start mt-6">
        <ScrollReveal from="left" className="w-full lg:w-[45%]">
          <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-brand-primary mb-8 leading-12">
            Built To Solve A Real <br className="hidden md:block" /> Problem
          </h2>
          <div className="space-y-6 text-black font-medium text-[16px] leading-relaxed">
            <p className="font-semibold text-[#000000] border-l-4 border-brand-logo text-[16px] pl-4 py-1 italic">
              We set out to provide and enable payment for emerging customers —
              addressing their pain points head-on.
            </p>
            <p>
              We understand that to deliver value continuously, we must address
              what job the customer needs to get done. With this question in
              mind, we set out to provide and enable payment for emerging
              customers and address their pain points.
            </p>
            <p>
              We envision a world where we can be confident in helping customers
              provide value through disruptive strategy — reaching both the
              banked and unbanked through mobile-first channels.
            </p>
            <p>
              We are passionate about enabling payments for merchants and
              customers by leveraging emerging technologies and strategic
              partnerships with all the stakeholders in the value networks.
            </p>
          </div>
        </ScrollReveal>

        <div className="w-full lg:w-[55%] flex flex-col space-y-4">
          {[
            {
              icon: "/image/Built_icon1.svg",
              title: "What We Do",
              body: "We enable payments for merchants and customers by leveraging emerging technologies and strategic partnerships across Nigeria's financial value network.",
            },
            {
              icon: "/image/Built_icon2.svg",
              title: "How We Do It",
              body: "Millions of Nigerians remain underserved by traditional financial systems. We believe every person deserves access to fast, secure, and affordable digital payments.",
            },
            {
              icon: "/image/Built_icon3.svg",
              title: "Social Impact",
              body: "Through USSD platforms, virtual accounts, SoftPOS, and value-added services — all underpinned by developer-friendly APIs and robust cloud infrastructure.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} from="right" delay={i * 100}>
              <div className="bg-[#5153A01A] p-8 rounded-xl border-b-5 border-gray-300 flex flex-col items-start text-left">
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
                <h3 className="text-[#5153A0] font-bold text-[14px] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
                  {item.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="pt-22 pb-8 px-6 lg:px-12 w-full mt-6 border-t border-gray-100">
        <ScrollReveal className="max-w-7xl mx-auto text-center mb-10">
          <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-brand-primary mb-5">
            Our Guiding Principles
          </h2>
          <p className="text-[#1a1a1a] font-bold text-[15px]">
            Everything we build and every decision we make flows from three core
            commitments.
          </p>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "/image/mission_icon.svg",
              tag: "Our Mission",
              title: "Deliver And Create Value",
              body: "To be the best digital technology and business insights services provider whilst adding value to all stakeholders across the payment ecosystem.",
              extra: "",
            },
            {
              icon: "/image/vission_icon.svg",
              tag: "Our Vision",
              title: "Lead Across Africa",
              body: "To be the preferred payment enabler in Sub-Saharan Africa — making seamless digital payments accessible to every person and business on the continent.",
              extra: "",
            },
            {
              icon: "/image/value_icon.svg",
              tag: "Our Values",
              title: "Values We Live By",
              body: "These four values drive us toward delivering customer-centric platforms that truly make a difference.",
              extra:
                "md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto lg:col-span-1 lg:w-full lg:mx-0",
            },
          ].map((card, i) => (
            <ScrollReveal
              key={card.tag}
              delay={i * 100}
              className={`bg-[#EEEEF5] p-7 rounded-2xl border-b-5 border-gray-300 flex flex-col items-start text-left shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] ${card.extra}`}
            >
              <div className="w-full flex justify-end h-36 relative">
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
              <h4 className="text-[#5153A0] text-[14px] font-extrabold mb-2 uppercase">
                {card.tag}
              </h4>
              <h3 className="text-brand-logo font-extrabold text-[20px] mb-3">
                {card.title}
              </h3>
              <p className="text-[#5153A0] font-medium text-[14px] leading-relaxed">
                {card.body}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="pt-2 pb-16 bg-white">
        <Stats />
      </div>

      {/* Milestones */}
      <section className="py-16 px-6 lg:px-12 w-full bg-[#F5F6FA]">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6">
            Our Journey
          </span>
          <h2 className="text-2xl md:text-[40px] font-extrabold text-brand-primary mb-5">
            Milestones That Shaped Us
          </h2>
          <p className="text-[#1a1a1a] font-bold text-[15px]">
            From an idea to a trusted payment infrastructure — here&apos;s how
            Payvantage grew.
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative pl-1 md:pl-0 mt-4">
          <div className="absolute left-7.5 md:left-1/2 top-0 bottom-0 w-1 bg-white md:-ml-0.5 -ml-7.5" />

          {/* Milestone 1 */}
          <ScrollReveal
            from="left"
            className="relative mb-6 w-full flex flex-col md:flex-row items-center justify-between"
          >
            <div className="w-[calc(100%-0.5rem)] md:w-[45%] bg-white p-6 rounded-lg shadow-sm text-left relative z-10 ml-5 md:ml-0 md:text-left">
              <div className="hidden md:block absolute top-[50%] -translate-y-1/2 -right-2.5 w-5.5 h-5.5 bg-white rotate-45 rounded-[2px] -z-10" />
              <div className="block md:hidden absolute top-[50%] -translate-y-1/2 -left-[10px] w-5.5 h-5.5 bg-white rotate-45 rounded-[2px] -z-10" />
              <span className="text-brand-primary font-bold text-[14px] md:text-[15px] mb-2 block">
                25th January, 1960
              </span>
              <h3 className="text-[#1a1a1a] font-extrabold text-[16px] mb-1">
                Payvantage was born
              </h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
                Founded with a clear mission: To bridge the payment gap for
                Nigeria&apos;s emerging digital economy and reach the unbanked
                through mobile channels.
              </p>
            </div>
            <div className="absolute top-[50%] -translate-y-1/2 left-[30px] md:left-1/2 w-5.5 h-5.5 bg-[#F5F6FA] rounded-full border-[5px] border-white -ml-6 md:-ml-[11px] z-20" />
            <div className="hidden md:block w-[45%]" />
          </ScrollReveal>

          {/* Milestone 2 */}
          <ScrollReveal
            from="right"
            delay={100}
            className="relative mb-6 w-full flex flex-col md:flex-row items-center justify-between"
          >
            <div className="hidden md:block w-[45%]" />
            <div className="absolute top-[50%] -translate-y-1/2 left-7.5 md:left-1/2 w-5.5 h-5.5 bg-[#F5F6FA] rounded-full border-[5px] border-white -ml-6 md:-ml-2.75 z-20" />
            <div className="w-[calc(100%-0.5rem)] md:w-[45%] bg-white p-6 rounded-lg shadow-sm text-left relative z-10 ml-5 md:ml-0">
              <div className="absolute top-[50%] -translate-y-1/2 -left-2.5 w-5.5 h-5.5 bg-white rotate-45 rounded-xs -z-10" />
              <span className="text-brand-primary font-bold text-[14px] md:text-[15px] mb-2 block">
                25th January, 1960
              </span>
              <h3 className="text-[#1a1a1a] font-extrabold text-[16px] mb-1">
                USSD platform launched
              </h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
                Deployed our robust, scalable USSD platform enabling interactive
                payment experiences for millions of feature-phone users across
                Nigeria.
              </p>
            </div>
          </ScrollReveal>

          {/* Milestone 3 */}
          <ScrollReveal
            from="left"
            delay={100}
            className="relative w-full flex flex-col md:flex-row items-center justify-between mb-6"
          >
            <div className="w-[calc(100%-0.5rem)] md:w-[45%] bg-white p-6 rounded-lg shadow-sm text-left relative z-10 ml-5 md:ml-0 md:text-left">
              <div className="hidden md:block absolute top-[50%] -translate-y-1/2 -right-2.5 w-5.5 h-5.5 bg-white rotate-45 rounded-xs -z-10" />
              <div className="block md:hidden absolute top-[50%] -translate-y-1/2 -left-2.5 w-5.5 h-5.5 bg-white rotate-45 rounded-xs -z-10" />
              <span className="text-brand-primary font-bold text-[14px] md:text-[15px] mb-2 block">
                25th January, 1960
              </span>
              <h3 className="text-[#1a1a1a] font-extrabold text-[16px] mb-1">
                Strategic partnerships secured
              </h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
                Forged partnerships with MTN, Globacom, 9Mobile, Jaiz Bank,
                WAEC, and AWS - building one of Nigeria&apos;s most connected
                ecosystems.
              </p>
            </div>
            <div className="absolute top-[50%] -translate-y-1/2 left-7.5 md:left-1/2 w-5.5 h-5.5 bg-[#F5F6FA] rounded-full border-[5px] border-white -ml-6 md:-ml-2.75 z-20" />
            <div className="hidden md:block w-[45%]" />
          </ScrollReveal>

          {/* Milestone 4 */}
          <ScrollReveal
            from="right"
            delay={100}
            className="relative mb-6 w-full flex flex-col md:flex-row items-center justify-between"
          >
            <div className="hidden md:block w-[45%]" />
            <div className="absolute top-[50%] -translate-y-1/2 left-7.5 md:left-1/2 w-5.5 h-5.5 bg-[#F5F6FA] rounded-full border-[5px] border-white -ml-6 md:-ml-2.75 z-20" />
            <div className="w-[calc(100%-0.5rem)] md:w-[45%] bg-white p-6 rounded-lg shadow-sm text-left relative z-10 ml-5 md:ml-0">
              <div className="absolute top-[50%] -translate-y-1/2 -left-2.5 w-5.5 h-5.5 bg-white rotate-45 rounded-xs -z-10" />
              <span className="text-brand-primary font-bold text-[14px] md:text-[15px] mb-2 block">
                25th January, 1960
              </span>
              <h3 className="text-[#1a1a1a] font-extrabold text-[16px] mb-1">
                ₦1 Trillion+ processed and growing
              </h3>
              <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
                Processing over ₦1 Trillion in transactions, 1.7 billion
                transaction counts, and serving 33.6 million unique customer
                interactions - with eyes firmly on Sub-Saharan Africa.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="relative pt-20 pb-0 px-6 lg:px-12 bg-linear-to-b from-[#3E409533] to-white overflow-hidden">
          <div className="max-w-7xl mx-auto text-center ">
            <ScrollReveal>
              <div className="mb-8">
                <span className="inline-block bg-[#5153A0] text-white px-8 py-3 md:py-5 border-b-5 border-gray-300 rounded-full text-[12px] font-bold">
                  Get Started
                </span>
              </div>

              <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-extrabold text-brand-primary mb-4 md:mb-6">
                Book A Demo Now
              </h2>

              <p className="text-black text-[13px] md:text-[14px] max-w-2xl mx-auto mb-10 font-bold px-4 md:px-0">
                Lets demonstrate how we can add value to your company with our{" "}
                <br className="hidden md:block" /> suite of payment solutions.
              </p>

              <a
                href="mailto:info@payvantage.com.ng?subject=Book%20A%20Demo"
                className="inline-block bg-brand-primary text-white px-10 py-4 rounded-lg font-bold hover:scale-105 transition-all shadow-xl mb-16"
              >
                BOOK A DEMO
              </a>
            </ScrollReveal>
          </div>
        </div>
        <ScrollReveal
          from="none"
          delay={200}
          className="relative w-full max-w-360 mx-auto aspect-4/1 md:aspect-[4.2/1] overflow-hidden mt-10"
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
