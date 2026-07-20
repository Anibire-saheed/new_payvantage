import AboutPageClient from "@/components/about/AboutPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AboutUs",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
