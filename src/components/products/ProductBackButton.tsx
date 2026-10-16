"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductBackButton() {
  const router=useRouter();
  return (
    <div className="px-6 lg:px-12 max-w-7xl mx-auto w-full pt-4">
      <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-gray-600 font-medium hover:text-[#5153A0] hover:bg-transparent p-0">
        <ChevronLeft width={20} height={20} />Back
      </Button>
    </div>
  );
}
