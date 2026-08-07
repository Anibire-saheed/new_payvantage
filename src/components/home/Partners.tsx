"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "motion/react";

export default function Partners() {
  const topRow = [
    {
      name: "Habari",
      src: "/image/partners/habaripay.svg",
    },
    {
      name: "MTN",
      src: "/image/partners/mtn.png",
    },
    {
      name: "AWS",
      src: "/image/partners/aws.png",
    },
    {
      name: "Jaiz",
      src: "/image/partners/Jaiz.png",
    },
    {
      name: "CreditSwitch",
      src: "/image/partners/creditswitch.png",
    },
    {
      name: "ethica",
      src: "/image/partners/EthicaLogoMFB.png",
    },
    {
      name: "ZippyWorld",
      src: "/image/partners/zippylogo.svg",
    },
    {
      name: "Waec",
      src: "/image/partners/waec.svg",
    },
    {
      name: "Jamb",
      src: "/image/partners/jamb.svg",
    },
    {
      name: "T2",
      src: "/image/partners/t2.svg",
    },
    {
      name: "Glo",
      src: "/image/partners/glo.svg",
    },
  ];

  const partnersToScroll = [...topRow, ...topRow];

  return (
    <section className="pt-3 md:pt-16 pb-16 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <h3 className="text-[#374151] font-black mb-16 text-[22px]">
            Partners who trust us
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
