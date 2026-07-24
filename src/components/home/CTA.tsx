import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
  return (
    <section>
      <div className="relative pt-12 pb-0 px-6 lg:px-12 bg-linear-to-b from-[#3E409533] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center ">
          <ScrollReveal>
            <div className="mb-8 mt-10">
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
              className="inline-block bg-brand-primary text-white px-10 py-4 rounded-lg font-bold hover:scale-105 transition-all shadow-xl mb-10"
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
  );
}
