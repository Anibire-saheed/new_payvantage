import Image from "next/image";
import Link from "next/link";
import { asset, Badge } from "./landingShared";

export default function Demo() {
  return (
    <section aria-labelledby="demo-heading">
      <div className="h-[445px] bg-[linear-gradient(#d8d9ea,#fff)] px-6 pt-[100px] text-center [&>h2]:mt-5 [&>h2]:text-[32px] [&>h2]:font-extrabold [&>h2]:leading-[42px] [&>p]:mt-3 [&>p]:font-medium [&>a]:mt-[38px] max-md:h-auto max-md:pt-[60px] max-md:pb-16 max-md:[&>h2]:mt-7 max-md:[&>h2]:text-[30px] max-md:[&>h2]:leading-10 max-md:[&>p]:mx-auto max-md:[&>p]:mt-4 max-md:[&>p]:max-w-[480px] max-md:[&>a]:mt-9">
        <Badge>Get Started</Badge>
        <h2 className="text-[26px] font-bold leading-9 text-[#3e4095] max-md:text-[24px] max-md:leading-8"
          id="demo-heading"
        >
          Book A Demo Now
        </h2>
        <p className="text-[14px] font-medium leading-6">
          Let&apos;s demonstrate how we can add value to your company with our
          <br className="max-md:hidden" /> suite of payment solutions.
        </p>
        <Link
          className="inline-flex min-h-[50px] items-center justify-center rounded-[5px] border border-transparent bg-[#5153a0] px-5 text-[14px] font-semibold leading-5 whitespace-nowrap text-white"
          href="/book-demo"
        >
          Book Your Demo
        </Link>
      </div>
      <Image
        className="mx-auto block h-auto w-full max-w-[1240px]"
        src={asset("team")}
        alt="Four members of the Payvantage team."
        width={1240}
        height={298}
      />
    </section>
  );
}
