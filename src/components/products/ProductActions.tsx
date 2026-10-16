"use client";

import Link from "next/link";

export default function ProductActions({
  featuresId,
  demoHref,
}: {
  featuresId: string;
  demoHref: string;
}) {
  const base = "inline-flex min-h-[50px] items-center justify-center rounded-[5px] px-5 text-[14px] font-semibold leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5153a0]";

  return (
    <div className="flex flex-wrap items-center gap-3.5">
      <a
        href={`#${featuresId}`}
        onClick={event => {
          const section = document.getElementById(featuresId);
          if (!section) return;
          event.preventDefault();
          section.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
            block: "start",
          });
        }}
        className={`${base} bg-[#5153a0] text-white hover:bg-[#3e4095]`}
      >
        Explore features
      </a>
      <Link href={demoHref} className={`${base} bg-[#eeeef5] text-[#5153a0] hover:bg-[#e2e2ef]`}>
        Book A Demo
      </Link>
    </div>
  );
}
