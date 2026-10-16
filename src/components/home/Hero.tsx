import Link from "next/link";
import LandingHeader from "./LandingHeader";
import { Badge } from "./landingShared";

export default function Hero() {
  return (
    <div className="h-auto bg-[#3e4095] bg-[url('/image/landing/hero-background.webp')] bg-cover bg-top bg-no-repeat text-white lg:h-[652px] max-md:bg-size-[auto_100%]">
      <LandingHeader />
      <section
        className="px-6 pt-[65px] text-center [&>span]:h-[45px] [&>span]:px-5 [&>span_span]:text-[17px] [&>h1]:mx-auto [&>h1]:mt-9 [&>h1]:text-[40px] [&>h1]:font-semibold [&>h1]:leading-[42px] [&>h1]:text-white [&>p]:mx-auto [&>p]:mt-5 [&>p]:text-[16px] [&>p]:leading-6 [&>p]:text-[#d2d3e6] max-lg:pb-[100px] max-md:pt-[52px] max-md:pb-20 max-md:[&>h1]:max-w-[560px] max-md:[&>h1]:mt-8 max-md:[&>h1]:leading-10 max-md:[&>p]:max-w-[480px] max-md:[&>p]:mt-6 max-[23.75rem]:[&>span]:px-3 max-[23.75rem]:[&>span]:text-[11px]"
        aria-labelledby="hero-heading"
      >
        <Badge>
          <span aria-hidden="true">✦</span> Trusted Payment Infrastructure{" "}
          <span aria-hidden="true">✦</span>
        </Badge>
        <h1 id="hero-heading">
          Secure And Simple Payments <br className="max-md:hidden" /> For
          Everyone
        </h1>
        <p>
          We offer flexible and value-driven payment platforms to reach both the
          <br className="max-md:hidden" /> banked and unbanked through mobile
          channels.
        </p>
        <div className="mt-[38px] flex justify-center gap-2.5 max-md:mt-8">
          <Link
            href="/book-demo"
            className="inline-flex min-h-[50px] items-center justify-center rounded-[5px] border border-transparent bg-white px-5 text-[14px] font-semibold leading-5 whitespace-nowrap text-[#3e4095]"
          >
            Book A Demo
          </Link>
          <Link
            href="/contact-sales"
            className="inline-flex min-h-[50px] items-center justify-center rounded-[5px] border border-transparent bg-[#5153a0] px-5 text-[14px] font-semibold leading-5 whitespace-nowrap text-white"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
