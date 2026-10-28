"use client";

import Image from "next/image";
import Link from "@/components/layout/NavigationLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export interface ProductItem {
  name: string;
  description: string;
  href: string;
}

export const PRODUCTS_LIST: ProductItem[] = [
  {
    name: "USSD Platform",
    description: "Reach customers on any phone, even without internet.",
    href: "/products/ussd",
  },
  {
    name: "Virtual Accounts",
    description: "Reach customers on any phone, even without internet.",
    href: "/products/virtual-accounts",
  },
  // {
  //   name: "Value Added Services (VAS)",
  //   description: "Add services that keep customers using your product.",
  //   href: "/products/vas",
  // },
  {
    name: "Liveliness",
    description: "Confirm every user is a real person and stop spoofing.",
    href: "/products/vas?service=liveliness",
  },
  {
    name: "Address Verification",
    description: "Confirm customer addresses quickly and accurately.",
    href: "/products/vas?service=address-verification",
  },
  {
    name: "Gamification",
    description:
      "Increase engagement and retention with rewards, challenges, badges, and leaderboards.",
    href: "/products/vas?service=gamification",
  },
];

interface ProductsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
  className?: string;
}

export default function ProductsDropdown({
  isOpen,
  onClose,
  triggerRef,
  className = "",
}: ProductsDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [highlightedProduct, setHighlightedProduct] = useState(
    PRODUCTS_LIST[0].href,
  );

  // Close dropdown on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Handle outside click and Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        (!triggerRef?.current || !triggerRef.current.contains(target))
      ) {
        onClose();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        triggerRef?.current?.focus();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  useEffect(() => {
    if (!isOpen) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (!desktop.matches) onClose();
    };
    desktop.addEventListener("change", handleResize);
    return () => desktop.removeEventListener("change", handleResize);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="products-dropdown"
      ref={dropdownRef}
      role="dialog"
      aria-label="Products and Services Menu"
      className={`absolute top-full left-1/2 -translate-x-1/2 w-[min(1200px,calc(100vw-48px))] z-50 hidden max-h-[calc(100dvh-100px)] overflow-y-auto overscroll-contain rounded-b-[10px] lg:block text-[#3e4095] [font-family:var(--font-schibsted-grotesk),Arial,sans-serif]  ${className}`}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_378px] max-[75rem]:grid-cols-[minmax(0,1fr)_320px] bg-[#D8D9EA] rounded-b-[10px] overflow-hidden border-b-[3px] border-[#FFA500]">
        {/* Left Section: Products & Services Grid + Code of Practice */}
        <div className="min-w-0 px-[30px] pt-[30px] pb-[33px] flex flex-col">
          <div>
            <h3 className="m-0 text-[#3E4095] font-bold text-[14px] leading-5">
              Products and Services
            </h3>

            <div className="mt-[7px] grid grid-cols-3 gap-[5px]">
              {PRODUCTS_LIST.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  onClick={onClose}
                  onMouseEnter={() => setHighlightedProduct(product.href)}
                  onFocus={() => setHighlightedProduct(product.href)}
                  aria-current={pathname === product.href ? "page" : undefined}
                  className={`block min-h-[100px] rounded-[10px] px-5 pt-6 pb-1 transition-colors max-[75rem]:px-3 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#5153a0] ${highlightedProduct === product.href ? "bg-white/30" : "bg-white/5"}`}
                >
                  <div className="text-[#3e4095] font-semibold text-[12px] leading-[18px]">
                    {product.name}
                  </div>
                  <p className="mt-2 mb-0 text-[#7d7d7d] text-[12px] font-normal leading-[15px]">
                    {product.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Bar: Code of Practice */}
          <div className="mt-5">
            <h4 className="m-0 text-[#3e4095] font-bold text-[14px] leading-5">
              Code of practice
            </h4>
            <div className="mt-[10px] flex flex-wrap items-center gap-x-[30px] gap-y-2 text-[12px] leading-[18px]">
              <span className="text-[#3e4095] font-medium">
                How we protect your customers and your business.
              </span>
              <a
                href="/image/code-of-practice.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3e4095] text-[12px] font-bold underline! underline-offset-2 hover:text-[#5153A0]"
              >
                Read the code
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Core Banking Solution */}
        <div className="bg-white p-[30px] mt-[5px] mr-[5px] mb-[6px] rounded-br-[5px]">
          <div>
            <div className="flex justify-start">
              <Image
                src="/image/landing/prodNavbarImg.svg"
                alt="Core Banking Infrastructure"
                width={200}
                height={134}
                className="block h-[134px] w-[200px] object-contain"
              />
            </div>
            <h3 className="mt-5 mb-0 text-[#3E4095] font-bold text-[18px] leading-6">
              Core Banking Solution
            </h3>
            <p className="mt-[7px] mb-0 text-[#3E4095] text-[12px] leading-5 font-medium">
              Power your financial institution with secure, scalable banking
              infrastructure built for modern operations.
            </p>
          </div>

          <div>
            <Button
              type="button"
              onClick={onClose}
              variant="default"
              size="default"
              className="mt-[19px] inline-flex  items-center justify-center  bg-[#5153A0] hover:bg-[#3E4095] text-white text-[12px] leading-[18px] font-normal transition-colors"
            >
              <Link href="/contact-sales">Book a call</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
