import type { Metadata } from "next";
import CareersPageClient from "@/components/CareersPageClient";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the team behind the future of seamless payments at Payvantage.",
};

export default function CareersPage() {
  return <CareersPageClient />;
}
