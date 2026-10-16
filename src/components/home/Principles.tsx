import Image from "next/image";
import { asset, Badge } from "./landingShared";

const principles = [
  {
    eyebrow: "Our Mission",
    title: "Deliver And Create Value",
    description:
      "To be the best digital technology and business insights services provider whilst adding value to all stakeholders across the payment ecosystem.",
    image: "mission",
  },
  {
    eyebrow: "Our Vision",
    title: "Lead Across Africa",
    description:
      "To be the preferred payment enabler in Sub-Saharan Africa, making seamless digital payments accessible to every person and business on the continent.",
    image: "vision",
  },
  {
    eyebrow: "Our Values",
    title: "Values We Live By",
    description:
      "These four values drive us toward delivering customer-centric platforms that truly make a difference.",
    image: "values",
  },
];

export default function Principles() {
  return (
    <section
      className="mx-auto mt-[159px] w-[min(1240px,calc(100%-48px))] text-center [&>h2]:mt-5 max-md:mt-20"
      aria-labelledby="principles-heading"
    >
      <Badge>What drives us</Badge>
      <h2 className="text-[26px] font-bold leading-9 text-[#3e4095] max-md:text-[24px] max-md:leading-8"
        id="principles-heading"
      >
        Our Guiding Principles
      </h2>
      <p className="mt-5 text-[14px] font-medium leading-6">
        Everything we build and every decision we make flows from three core
        <br className="max-md:hidden" /> commitments.
      </p>
      <div className="mt-5 grid grid-cols-3 gap-5 max-md:mx-auto max-md:mt-8 max-md:max-w-[500px] max-md:grid-cols-[1fr] max-md:gap-6">
        {principles.map((principle) => (
          <article
            key={principle.image}
            className="relative flex min-h-[336px] items-end rounded-[10px] bg-[#eeeef5] p-10 text-left shadow-[0_5px_0_rgb(0_0_0/0.05)] [&>img]:absolute [&>img]:top-2.5 [&>img]:right-0 [&>img]:h-[180px] [&>img]:w-[277px] [&>img]:max-w-full [&>img]:object-contain max-[75rem]:min-h-[360px] max-[75rem]:p-7 max-[75rem]:pt-[190px] max-md:min-h-[336px] max-md:p-8 max-md:pt-[200px] max-[23.75rem]:p-7 max-[23.75rem]:pt-[200px]"
          >
            <Image
              src={asset(principle.image)}
              alt=""
              width={277}
              height={180}
            />
            <div className="relative z-[1] [&>span]:block [&>span]:text-[12px] [&>span]:font-semibold [&>span]:leading-[18px] [&>span]:text-[#3e4095] [&>h3]:mt-3 [&>h3]:text-[14px] [&>h3]:font-bold [&>h3]:leading-5 [&>h3]:text-[#3e4095] [&>p]:mt-2.5 [&>p]:leading-6 [&>p]:text-[#7d7d7d]">
              <span>{principle.eyebrow}</span>
              <h3>{principle.title}</h3>
              <p className="text-[14px] font-medium leading-6">{principle.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
