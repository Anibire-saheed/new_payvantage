import { Suspense } from "react";
import type { Metadata } from "next";
import BookDemoClient from "./BookDemoClient";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Schedule a live product demo with Payvantage. Discover how our payment solutions can transform your business.",
};

export default function BookDemoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#5153A0]"></div>
        </div>
      }
    >
      <BookDemoClient />
    </Suspense>
  );
}
