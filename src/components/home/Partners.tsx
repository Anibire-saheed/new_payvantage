import Image from "next/image";
import { asset } from "./landingShared";

const partners = [
  { name: "Creditswitch", src: asset("creditswitch"), width: 145 },
  { name: "Habaripay", src: asset("habaripay"), width: 145 },
  { name: "AWS", src: asset("aws"), width: 68 },
  { name: "Ethica Microfinance Bank", src: asset("ethica"), width: 131 },
  { name: "Jamb", src: asset("jamb"), width: 125 },
  { name: "T2", src: "/image/partners/t2.svg", width: 80 },
  { name: "Jaiz Bank", src: "/image/partners/Jaiz.png", width: 85 },
  { name: "Glo", src: "/image/partners/glo.svg", width: 65 },
  { name: "WAEC", src: "/image/partners/waec.svg", width: 60 },
  { name: "ZippyWorld", src: "/image/partners/zippylogo.svg", width: 65 },
  { name: "MTN", src: "/image/partners/mtn.png", width: 100 },
];

export default function Partners() {
  return (
    <section className="mx-auto w-[min(1240px,calc(100%-48px))] py-[100px] text-center max-md:py-[60px]" aria-labelledby="partners-heading">
      <h2 className="text-[26px] font-bold leading-9 text-[#3e4095] max-md:text-[24px] max-md:leading-8" id="partners-heading">
        Partners Who Trust Us
      </h2>
      <div className="mt-[30px] h-24 overflow-hidden motion-reduce:overflow-x-auto">
        <div className="flex w-max animate-[partners-scroll-logos_30s_linear_infinite] motion-reduce:animate-none">
          {[false, true].map(duplicate => (
            <ul key={String(duplicate)} className="m-0 flex shrink-0 list-none items-center gap-10 py-0 pl-0 pr-10 max-md:gap-6 max-md:pr-6 motion-reduce:aria-hidden:hidden" aria-hidden={duplicate || undefined}>
              {partners.map(partner => (
                <li key={partner.name} className="flex h-24 shrink-0 items-center justify-center px-3">
                  <Image src={partner.src} alt={duplicate ? "" : partner.name} width={partner.width} height={60} className="h-[60px] max-w-full object-contain grayscale" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes partners-scroll-logos {
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
