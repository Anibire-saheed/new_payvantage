import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section>
      <div className="relative pt-6 pb-0 px-6 lg:px-12 bg-linear-to-b from-[#3E409533] to-white overflow-hidden">
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

            <Button asChild variant="default" size="lg" className="mb-10">
              <Link href="/book-demo">Book A Demo</Link>
            </Button>
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
