import { Suspense } from "react";
import VASPage from "./VASPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Value Added Services | Payvantage",
};

export default function Page() {
  return (
    <Suspense fallback={<main className="min-h-screen" aria-busy="true" aria-label="Loading value added services" />} >
      <VASPage />
    </Suspense>
  );
}
