import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Partners() {
  const topRow = [
    { name: "Habari", src: "/image/habaripay.svg", w: 250, h: 75, mobileMaxH: "max-h-[60px]", desktopMaxH: "lg:max-h-[85px]" },
    { name: "MTN", src: "/image/mtn.png", w: 230, h: 110, mobileMaxH: "max-h-[70px]", desktopMaxH: "lg:max-h-[110px]" },
    { name: "AWS", src: "/image/aws.png", w: 190, h: 100, mobileMaxH: "max-h-[70px]", desktopMaxH: "lg:max-h-[105px]" },
    { name: "Jaiz", src: "/image/Jaiz.png", w: 210, h: 110, mobileMaxH: "max-h-[70px]", desktopMaxH: "lg:max-h-[115px]" },
    { name: "CreditSwitch", src: "/image/creditswitch.png", w: 320, h: 90, mobileMaxH: "max-h-[60px]", desktopMaxH: "lg:max-h-[90px]" },
  ];

  const bottomRow = [
    { name: "Waec", src: "/image/waec.svg", w: 140, h: 140, mobileMaxH: "max-h-[90px]", desktopMaxH: "lg:max-h-[140px]" },
    { name: "Jamb", src: "/image/jamb.svg", w: 145, h: 145, mobileMaxH: "max-h-[90px]", desktopMaxH: "lg:max-h-[145px]" },
    { name: "T2", src: "/image/t2.svg", w: 100, h: 75, mobileMaxH: "max-h-[60px]", desktopMaxH: "lg:max-h-[75px]" },
    { name: "Glo", src: "/image/glo.svg", w: 130, h: 130, mobileMaxH: "max-h-[90px]", desktopMaxH: "lg:max-h-[130px]" },
  ];

  const allPartners = [...topRow, ...bottomRow];

  return (
    <section className="pt-0 md:pt-13 pb-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <h3 className="text-[#374151] font-black mb-16 text-[18px]">Our Trusted Partners</h3>
        </ScrollReveal>

        <div className="opacity-80 max-w-5xl mx-auto">
          {/* Mobile Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 place-items-center lg:hidden w-full">
            {allPartners.map((partner, index) => (
              <ScrollReveal key={index} delay={index * 60} className={`flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer ${index === allPartners.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}>
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.w}
                  height={partner.h}
                  className={`w-auto h-auto object-contain ${partner.mobileMaxH}`}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-col gap-y-16 w-full">
            <div className="flex flex-nowrap items-center justify-between gap-4 w-full">
              {topRow.map((partner, index) => (
                <ScrollReveal key={index} delay={index * 80} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.w}
                    height={partner.h}
                    className={`w-auto h-auto object-contain ${partner.desktopMaxH}`}
                  />
                </ScrollReveal>
              ))}
            </div>

            <div className="flex flex-nowrap items-center justify-between gap-4 w-full px-[10%]">
              {bottomRow.map((partner, index) => (
                <ScrollReveal key={index} delay={index * 80} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.w}
                    height={partner.h}
                    className={`w-auto h-auto object-contain ${partner.desktopMaxH}`}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
