"use client";

import Image from "next/image";
import Link from "@/components/layout/NavigationLink";
import MobileNavigation from "@/components/layout/MobileNavigation";
import { useRef, useState } from "react";
import { asset, docsUrl } from "./landingShared";
import ProductsDropdown from "@/components/layout/ProductsDropdown";

export default function LandingHeader() {
  const [productsOpen, setProductsOpen] = useState(false);
  const productsTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="relative z-50 h-auto border-b border-[rgba(255,255,255,0.3)] bg-[rgba(15,15,20,0.5)] text-white text-[14px] font-semibold leading-6 [font-family:var(--font-schibsted-grotesk),Arial,sans-serif] lg:h-[94px]">
      <div className="mx-auto flex h-full w-[min(1240px,calc(100%-48px))] items-center justify-between py-5 max-md:py-[18px]">
        <Link
          href="/"
          aria-label="Payvantage home"
          className="block h-[42px] w-[163px] shrink-0 [&_img]:block [&_img]:h-[42px] [&_img]:w-[163px] [&_img]:shrink-0 max-md:h-auto max-md:w-32 max-md:[&_img]:h-auto max-md:[&_img]:w-32"
        >
          <Image
            src={asset("logo")}
            alt="Payvantage"
            width={163}
            height={42}
            priority
          />
        </Link>
        <MobileNavigation />
        <div className="hidden lg:contents">
          <nav
            aria-label="Main navigation"
            className="ml-[100px] flex items-center gap-11 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-[15px] [&_a]:font-semibold [&_a]:text-white max-[75rem]:ml-0 max-[75rem]:gap-6 max-lg:flex-col max-lg:items-stretch max-lg:gap-0 max-lg:p-6 max-md:text-[12px] max-md:[&_a]:gap-1.5"
          >
            {/* Desktop Products Trigger */}
            <div className="hidden lg:block">
              <button
                ref={productsTriggerRef}
                type="button"
                onClick={() => setProductsOpen((prev) => !prev)}
                className="inline-flex items-center gap-[6px] font-semibold text-white hover:text-[#B6B8FF] transition-colors focus:outline-none cursor-pointer"
                aria-expanded={productsOpen}
                aria-haspopup="dialog"
                aria-controls="products-dropdown"
              >
                <span>Products</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="m3 5 4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>

            <a href={docsUrl}>Developers</a>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
          </nav>
          <div className="flex gap-3.5 [&>a]:min-h-[42px] [&>a]:px-5 [&>a]:text-[12px] [&>a]:font-semibold max-lg:flex-col max-lg:gap-3 max-lg:px-6 max-lg:pb-6 max-md:gap-2 max-md:[&>a]:min-h-9 max-md:[&>a]:px-2.5 max-md:[&>a]:text-[10px]">
            <a
              className="inline-flex min-h-[50px] items-center justify-center rounded-[5px] border border-white bg-[rgba(255,255,255,0.05)] px-5 text-[14px] font-semibold leading-5 whitespace-nowrap text-white"
              href={docsUrl}
            >
              View API Docs
            </a>
            <Link
              className="inline-flex min-h-[50px] items-center justify-center rounded-[5px] border border-transparent bg-white px-5 text-[14px] font-semibold leading-5 whitespace-nowrap text-[#3e4095]"
              href="/contact-sales"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Mega Dropdown */}
      <ProductsDropdown
        isOpen={productsOpen}
        onClose={() => setProductsOpen(false)}
        triggerRef={productsTriggerRef}
      />
    </header>
  );
}
