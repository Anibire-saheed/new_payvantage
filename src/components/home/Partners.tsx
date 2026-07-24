"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "motion/react";

export default function Partners() {
  const topRow = [
    {
      name: "Habari",
      src: "/image/habaripay.svg",
    },
    {
      name: "MTN",
      src: "/image/mtn.png",
    },
    {
      name: "AWS",
      src: "/image/aws.png",
    },
    {
      name: "Jaiz",
      src: "/image/Jaiz.png",
    },
    {
      name: "CreditSwitch",
      src: "/image/creditswitch.png",
    },
    {
      name: "ethica",
      src: "/image/EthicaLogo.svg",
    },
    {
      name: "ZippyWorld",
      src: "/image/zippylogo.svg",
    },
    {
      name: "Waec",
      src: "/image/waec.svg",
    },
    {
      name: "Jamb",
      src: "/image/jamb.svg",
    },
    {
      name: "T2",
      src: "/image/t2.svg",
    },
    {
      name: "Glo",
      src: "/image/glo.svg",
    },
  ];

  const partnersToScroll = [...topRow, ...topRow];

  return (
    <section className="pt-3 md:pt-16 pb-16 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <h3 className="text-[#374151] font-black mb-20 text-[18px]">
            Our Trusted Partners
          </h3>
        </ScrollReveal>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-16"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {partnersToScroll.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer min-w-fit"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={100}
                  height={100}
                  className={`w-auto h-15 object-contain`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
