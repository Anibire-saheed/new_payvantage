"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProductsClick = () => {
    setIsMobileMenuOpen(false);
    if (window.location.pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document
          .getElementById("products")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 lg:px-12 bg-[#232555] border-b-2 border-gray-500 w-full h-[65px] md:h-[90px] z-50 relative">
      {/* Mobile Hamburger (Left on mobile) */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-white p-2 -ml-2 focus:outline-none hover:text-gray-300 transition-colors"
          aria-label="Open mobile menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Logo (Centered on mobile, left-aligned on desktop) */}
      <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center">
        <Link href="/">
          <Image
            src="/image/logos/logo.svg"
            alt="Payvantage Logo"
            width={150}
            height={40}
            priority
            loading="eager"
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center space-x-10">
        <button
          onClick={handleProductsClick}
          className="text-white text-sm font-semibold hover:text-[#B6B8FF] transition-colors"
        >
          Products
        </button>
        <a
          href="https://payvantage.gitbook.io/payvantage.gitbook.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm font-semibold hover:text-[#B6B8FF] transition-colors"
        >
          Developers
        </a>
        <Link
          href="/about"
          className="text-white text-sm font-semibold hover:text-[#B6B8FF] transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/careers"
          className="text-white text-sm font-semibold hover:text-[#B6B8FF] transition-colors"
        >
          Careers
        </Link>
      </div>

      {/* Desktop Action Buttons */}
      <div className="hidden lg:flex items-center space-x-4">
        <Button asChild variant="outline" size="sm">
          <Link
            href="https://payvantage.gitbook.io/payvantage.gitbook.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            View API Docs
          </Link>
        </Button>
        <Button asChild variant="white" size="sm">
          <Link href="/book-demo">
            Book A Demo
          </Link>
        </Button>
      </div>

      {/* Mobile Right Spacer for balance */}
      <div className="lg:hidden w-7" aria-hidden="true" />

      {/* Overlay Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer (opens from left) */}
      <div
        className={`fixed inset-y-0 left-0 w-[280px] bg-[#2C2E6A] shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-white p-2 focus:outline-none hover:text-gray-300 transition-colors z-10"
          aria-label="Close mobile menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Drawer Links */}
        <div className="flex flex-col px-6 py-16 space-y-6 overflow-y-auto">
          <button
            onClick={handleProductsClick}
            className="text-white text-lg font-semibold hover:text-[#B6B8FF] transition-colors text-left"
          >
            Products
          </button>
          <Link
            href="https://payvantage.gitbook.io/payvantage.gitbook.io"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-lg font-semibold hover:text-[#B6B8FF] transition-colors"
          >
            Developers
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-lg font-semibold hover:text-[#B6B8FF] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/careers"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-lg font-semibold hover:text-[#B6B8FF] transition-colors"
          >
            Careers
          </Link>

          <div className="flex flex-col space-y-4 pt-6 border-t border-slate-500/50">
            <Button asChild variant="outline" size="default" className="w-full">
              <Link
                href="https://payvantage.gitbook.io/payvantage.gitbook.io"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View API Docs
              </Link>
            </Button>
            <Button asChild variant="white" size="default" className="w-full">
              <Link
                href="/book-demo"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book A Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
