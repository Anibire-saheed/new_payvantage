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
    <section className="relative w-full flex flex-col  overflow-hidden h-[calc(100vh-65px)] lg:h-[calc(100vh-90px)]">
      {/* Background Image/Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          ref={videoRef}
          src="/video/bg_hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        ></video>
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto py-12 lg:py-6 lg:mb-10">
        <div
          className="mb-8 md:mb-12 inline-flex items-center space-x-2 sm:space-x-3 bg-[#5153A0] backdrop-blur-md px-3 py-3 sm:px-5 sm:py-3.75 rounded-full scale-90 sm:scale-100 animate-fade-in anim-delay-0"
          style={{ borderBottom: "5px solid rgba(40, 42, 120, 0.60)" }}
        >
          <span className="text-white text-[10px] sm:text-xs opacity-75">
            ✦
          </span>
          <span className="text-white text-[10.5px] sm:text-xs font-medium tracking-wide">
            Trusted Payment Infrastructure
          </span>
          <span className="text-white text-[10px] sm:text-xs opacity-75">
            ✦
          </span>
        </div>

        <h1 className="text-3xl md:text-[36px] lg:text-[40px] font-extrabold text-white leading-tight lg:leading-[1.15] mb-6 max-w-4xl px-2 sm:px-0 animate-fade-up anim-delay-150">
          Secure Payments For Everyone, Enabling Seamless Transactions{" "}
          <br className="hidden md:block" />
          Anywhere.
        </h1>

        <p className="text-gray-100 text-[14px] sm:text-base md:text-[18px] max-w-3xl mx-auto mb-10 leading-relaxed px-4 sm:px-0 font-medium animate-fade-up anim-delay-300">
          We offer flexible and value-driven payment platforms to reach both the{" "}
          <br className="hidden md:block" />
          banked and unbanked through mobile channels.
        </p>

        <div className="flex flex-row items-center justify-center space-x-3 sm:space-x-4 w-full px-2 mt-4 sm:mt-0 animate-fade-up anim-delay-450">
          <Button asChild variant="white" size="lg" className="flex-1 sm:flex-initial">
            <Link href="/book-demo">
              Book A Demo
            </Link>
          </Button>
          <Button asChild variant="brand" size="lg" className="flex-1 sm:flex-initial">
            <a href="mailto:info@payvantage.com.ng?subject=Contact%20Sales">
              Contact Sales
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

