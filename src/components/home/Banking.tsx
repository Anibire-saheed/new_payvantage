import Image from "next/image";
import { asset, Badge } from "./landingShared";

export default function Banking() {
  return (
    <section
      className="bg-[linear-gradient(#fff,#d2d3e6_68%)] px-6 pt-[50px] pb-[90px] text-center [&>h2]:mt-5 [&>p]:mt-5 max-md:pb-14 max-md:[&>p]:mx-auto max-md:[&>p]:max-w-[580px]"
      aria-labelledby="banking-heading"
    >
      <Badge>Built for banking</Badge>
      <h2
        className="text-[28px] font-bold leading-[38px] text-[#3e4095] max-md:text-[24px] max-md:leading-8"
        id="banking-heading"
      >
        Powering Nigeria’s First
        <br />
        Non-Interest Digital Microfinance Bank
      </h2>
      <p className="text-[16px] font-normal leading-[26px] text-black">
        We designed and built the core banking platform powering Ethica
        Microfinance
        <br className="max-md:hidden" /> Bank - providing the technology
        foundation needed to deliver secure, seamless and
        <br className="max-md:hidden" /> fully digital banking experiences
      </p>
      <Image
        className="mx-auto mt-[51px] block h-auto w-full max-w-[1240px] rounded-[20px] max-md:mt-10 max-md:rounded-xl"
        src={asset("ethcore_image.png")}
        alt="The Ethica core banking dashboard built by Payvantage, with transaction reporting, customer statements and account management."
        width={1240}
        height={546}
      />
    </section>
  );
}
