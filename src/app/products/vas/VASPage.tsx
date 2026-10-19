"use client";

import Image from "next/image";
import { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LivelinessPage from "../liveliness/LivelinessPage";
import AddressVerificationPage from "../address-verification/AddressVerificationPage";
import GamificationPage from "../gamification/GamificationPage";

const services = [
  { name: "Liveliness", slug: "liveliness", component: LivelinessPage },
  {
    name: "Address Verification",
    slug: "address-verification",
    component: AddressVerificationPage,
  },
  { name: "Gamification", slug: "gamification", component: GamificationPage },
];

export default function VASPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeIndex = Math.max(
    0,
    services.findIndex(
      (service) => service.slug === searchParams.get("service"),
    ),
  );
  const setActiveIndex = (index: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("service", services[index].slug);
    router.replace(`/products/vas?${params.toString()}`, { scroll: false });
  };
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const service = services[activeIndex];
  const ServicePage = service.component;

  return (
    <main className="overflow-hidden bg-white font-sans text-[14px] leading-6 text-black">
      <section
        className="relative mx-1 mt-1 flex min-h-[360px] items-center justify-center overflow-hidden rounded-lg px-4 py-10 text-center text-white sm:px-6 sm:py-12 lg:aspect-[1430/500] lg:py-16"
        aria-labelledby="vas-heading"
      >
        <Image
          src="/image/products/vas-banner.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[640px] flex-col items-center break-words">
          <span className="max-w-full rounded-full bg-[#5153a0] border-b-[5px] border-[#00000026] px-4 py-2.5 text-xs font-medium sm:px-5 sm:py-3">
            Value Added Services
          </span>
          <h1
            id="vas-heading"
            className="mt-4 w-full max-w-[500px] text-[clamp(1.25rem,6vw,1.5rem)] font-bold leading-snug sm:mt-5 sm:text-[28px] sm:leading-9"
          >
            Build Trust. Verify Customers. Drive Engagement.
          </h1>
          <p className="mt-4 w-full text-sm leading-6 sm:mt-6">
            From liveliness checks and address verification to gamification, our
            value-added services help you verify customers and create more
            engaging experiences.
          </p>
        </div>
      </section>

      <section className="pt-8" aria-label="Value Added Services">
        <div className="mx-auto w-[min(1240px,calc(100%-48px))]">
          <div
            role="tablist"
            aria-label="Value added services"
            className="inline-flex max-w-full flex-nowrap gap-1 overflow-x-auto rounded-md bg-[#f7f7fb] p-1 max-sm:flex max-sm:w-full max-sm:gap-0.5"
          >
            {services.map((item, index) => (
              <button
                key={item.slug}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                id={`vas-tab-${item.slug}`}
                role="tab"
                type="button"
                aria-selected={activeIndex === index}
                aria-controls={`vas-panel-${item.slug}`}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  let next = index;
                  if (event.key === "ArrowRight")
                    next = (index + 1) % services.length;
                  else if (event.key === "ArrowLeft")
                    next = (index + services.length - 1) % services.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = services.length - 1;
                  else return;
                  event.preventDefault();
                  setActiveIndex(next);
                  tabRefs.current[next]?.focus();
                }}
                className={`shrink-0 whitespace-nowrap rounded px-4 py-3 text-[14px] font-medium max-sm:flex-1 max-sm:px-1.5 max-sm:text-[11px] max-[360px]:px-1 max-[360px]:text-[10px] text-[#5153a0] transition-colors focus-visible:outline-2 focus-visible:outline-[#5153a0] ${activeIndex === index ? "bg-[#eeeef5]" : "hover:bg-[#eeeef5]/60"}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div
          key={service.slug}
          role="tabpanel"
          id={`vas-panel-${service.slug}`}
          aria-labelledby={`vas-tab-${service.slug}`}
          tabIndex={0}
          className="mt-8 focus-visible:outline-2 focus-visible:outline-[#5153a0]"
        >
          <ServicePage embedded />
        </div>
      </section>
    </main>
  );
}
