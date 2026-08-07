"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openCVModal, closeCVModal } from "@/store/careersSlice";
import CVModal from "@/components/careers/CVModal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { fetchJobs } from "@/lib/api/careers";
import type { Job } from "@/lib/api/types/career.types";
import { useState } from "react";

export type { Job };

const JOBS_PER_PAGE = 10;

export default function CareersPageClient() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isCVModalOpen } = useAppSelector((state) => state.careers);

  const [currentPage, setCurrentPage] = useState(1);

  const { data: jobs = [], isLoading } = useQuery<Job[]>({
    queryKey: ["careers"],
    queryFn: fetchJobs,
  });

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  const activePage = Math.min(currentPage, Math.max(totalPages, 1));
  const paginatedJobs = jobs.slice(
    (activePage - 1) * JOBS_PER_PAGE,
    activePage * JOBS_PER_PAGE,
  );

  // Build page numbers with ellipsis: always show first, last, current ±1
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | "...")[] = [];
    const addPage = (n: number) => {
      if (!pages.includes(n)) pages.push(n);
    };
    addPage(1);
    if (activePage > 3) pages.push("...");
    for (
      let i = Math.max(2, activePage - 1);
      i <= Math.min(totalPages - 1, activePage + 1);
      i++
    ) {
      addPage(i);
    }
    if (activePage < totalPages - 2) pages.push("...");
    addPage(totalPages);
    return pages;
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="pt-12 pb-12 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6 animate-fade-in anim-delay-0">
          Careers At Payvantage
        </span>

        <h1 className="text-[24px] lg:text-[40px] font-black text-brand-primary leading-[1.2] mb-6 animate-fade-up anim-delay-150">
          Join The Team Behind <br className="hidden md:block" /> The Future Of
          Seamless Payments
        </h1>

        <p className="text-black font-bold max-w-150 mx-auto mb-10 text-[14px] md:text-[16px] leading-relaxed animate-fade-up anim-delay-300">
          We offer flexible and value-driven payment platforms to reach both the{" "}
          <br className="hidden md:block" />
          banked and unbanked through mobile channels.
        </p>
      </section>

      {/* Available Roles Section */}
      <section className="py-4 px-6 lg:px-12 w-full max-w-250 mx-auto">
        <ScrollReveal>
          <h3 className="text-brand-primary font-bold mb-2 text-[16px]">
            Available roles ({isLoading ? "…" : jobs.length})
          </h3>
        </ScrollReveal>

        <div className="flex flex-col space-y-3">
          {isLoading
            ? Array.from({ length: JOBS_PER_PAGE }).map((_, i) => (
                <div
                  key={i}
                  className="h-20 rounded-lg bg-gray-100 animate-pulse"
                />
              ))
            : paginatedJobs.map((job, index) => (
                <ScrollReveal
                  key={
                    job.id != null && job.id !== ""
                      ? String(job.id)
                      : String(index)
                  }
                  delay={index * 80}
                  className="grid md:grid-cols-2 items-center bg-[#F8F9FA] p-8 lg:px-10 lg:py-6 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow"
                >
                  <div className="w-full font-bold text-[#1a1a1a] mb-2 md:mb-0 text-[16px]">
                    {job.title}
                  </div>

                  <div className="w-full flex justify-between items-center ">
                    <div className="w-full font-medium text-gray-700 text-[16px]">
                      {job.type}
                    </div>

                    <Button
                      type="button"
                      onClick={() => router.push(`/careers/apply/${job.id}`)}
                      variant="secondary"
                      size="sm"
                    >
                      Apply
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
        </div>

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-8">
            {/* Previous */}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={activePage === 1}
              aria-label="Previous page"
              className="flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 text-gray-500 hover:border-[#5153A0] hover:text-[#5153A0] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Page numbers */}
            {getPageNumbers().map((page, i) =>
              page === "..." ? (
                <span
                  key={`ellipsis-${i}`}
                  className="flex items-center justify-center w-9 h-9 text-gray-400 text-[14px] font-medium select-none"
                >
                  …
                </span>
              ) : (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Page ${page}`}
                  aria-current={activePage === page ? "page" : undefined}
                  className={`flex items-center justify-center w-9 h-9 rounded-md text-[14px] font-bold transition-colors ${
                    activePage === page
                      ? "bg-[#5153A0] text-white shadow-sm"
                      : "border border-gray-200 text-gray-600 hover:border-[#5153A0] hover:text-[#5153A0]"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            {/* Next */}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={activePage === totalPages}
              aria-label="Next page"
              className="flex items-center justify-center w-9 h-9 rounded-md border border-gray-200 text-gray-500 hover:border-[#5153A0] hover:text-[#5153A0] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* Talent Pool Section */}
      <section className="relative pt-16 pb-0 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-[28px] lg:text-[32px] font-black text-brand-primary mb-4 md:mb-6">
              Join Our Talent Pool!
            </h2>

            <p className="text-brand-primary text-[13px] md:text-[14px] max-w-200 mx-auto mb-10 font-bold px-4 md:px-0">
              Ready to take your career to the next level? Do you thrive in a
              dynamic and innovative work environment and ready to make an
              impact, we want to hear from you! Apply now and join our
              incredible pool of talents.
            </p>

            <Button
              type="button"
              onClick={() => dispatch(openCVModal())}
              variant="default"
              size="lg"
              className="mb-10"
            >
              Submit CV
            </Button>
          </ScrollReveal>

          <ScrollReveal
            from="none"
            delay={200}
            className="relative w-full max-w-360 mx-auto aspect-4/1 md:aspect-[4.2/1] overflow-hidden mt-10"
          >
            <Image
              src="/image/Group_Pic.svg"
              alt="Payvantage Team"
              fill
              className="object-cover object-top mix-blend-multiply scale-[1.03]"
            />
          </ScrollReveal>
        </div>
      </section>

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => dispatch(closeCVModal())}
      />
    </main>
  );
}
