"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "@/components/home/LandingFooter";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const isLandingPage = usePathname() === "/";
  return (
    <>
      {!isLandingPage && <Navbar />}
      {children}
      {!isLandingPage && <Footer />}
    </>
  );
}
