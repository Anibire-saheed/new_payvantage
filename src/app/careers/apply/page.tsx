import { Suspense } from "react";
import ApplyPageClient from "./ApplyPageClient";

export default function ApplyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white py-12 px-6 lg:px-12">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="h-8 bg-gray-100 rounded animate-pulse w-1/3" />
            <div className="h-32 bg-gray-100 rounded animate-pulse w-full" />
          </div>
        </div>
      }
    >
      <ApplyPageClient />
    </Suspense>
  );
}
