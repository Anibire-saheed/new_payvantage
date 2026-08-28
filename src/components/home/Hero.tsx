"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Suppress video autoplay rejection errors
        });
      }
    }
  }, []);

  return (
    <section className="relative w-full flex flex-col overflow-hidden h-[calc(90vh-55px)] lg:h-[calc(100vh-90px)]">
      {/* Hero Background Video */}
      <video
        ref={videoRef}
        src="/video/bg_hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-bottom
          pointer-events-none

          md:object-center
        "
      />

      {/* Hero Content */}
      <div className="w-full mt-0 sm:mt-4 md:mt-20">
        <div className="relative z-10 mt-26 sm:mt-0 md:flex-1 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto py-1 lg:py-6 lg:mb-10">
          <div
            className="mb-4 md:mb-12 inline-flex items-center space-x-2 sm:space-x-3 bg-[#5153A0] backdrop-blur-md px-8 py-5 sm:px-5 sm:py-3.75 rounded-full scale-90 sm:scale-100 animate-fade-in anim-delay-0"
            style={{
              borderBottom: "5px solid rgba(40, 42, 120, 0.60)",
            }}
          >
            <span className="text-white text-[16px] sm:text-xs">✦</span>

            <span className="text-white text-[12px] sm:text-[16px] sm:text-xs font-bold tracking-wide">
              Trusted Payment Infrastructure
            </span>

            <span className="text-white text-[16px] sm:text-xs">✦</span>
          </div>

          <h1 className="text-3xl md:text-[36px] lg:text-[40px] font-extrabold text-white leading-tight lg:leading-[1.15] mb-6 max-w-4xl px-2 sm:px-0 animate-fade-up anim-delay-150">
            Secure Payments For Everyone, Enabling Seamless Transactions{" "}
            <br className="hidden md:block" />
            Anywhere.
          </h1>

          <p className="text-gray-100 text-[15px] sm:text-base md:text-[18px] max-w-3xl mx-auto mb-10 leading-relaxed px-4 sm:px-0 font-medium animate-fade-up anim-delay-300">
            We offer flexible and value-driven payment platforms to reach both
            the <br className="hidden md:block" />
            banked and unbanked through mobile channels.
          </p>

          <div className="flex flex-row items-center justify-center space-x-3 sm:space-x-4 w-full px-2 mt-4 sm:mt-0 animate-fade-up anim-delay-450">
            <Button asChild variant="white" size="lg" className="px-3 md:px-5">
              <Link href="/book-demo">Book A Demo</Link>
            </Button>

            <Button asChild variant="brand" size="lg" className="px-3 md:px-5">
              <Link href="/contact-sales">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
