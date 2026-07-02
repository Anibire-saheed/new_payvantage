// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useQuery } from "@tanstack/react-query";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { openCVModal, closeCVModal, setDepartment } from "@/store/careersSlice";
// import CVModal from "@/components/CVModal";
// import ScrollReveal from "@/components/ScrollReveal";
// import { fetchJobs, type Job } from "@/lib/api/careers";

// export type { Job };

// export default function CareersPageClient() {
//   const dispatch = useAppDispatch();
//   const router = useRouter();
//   const { isCVModalOpen, selectedDepartment } = useAppSelector(
//     (state) => state.careers,
//   );

//   const { data: jobs = [], isLoading } = useQuery<Job[]>({
//     queryKey: ["careers"],
//     queryFn: fetchJobs,
//   });

//   const departments = [
//     "All Departments",
//     ...Array.from(
//       new Set(
//         jobs
//           .map((j) => j.department)
//           .filter((d): d is string => Boolean(d) && d !== "All Departments"),
//       ),
//     ),
//   ];

//   const filteredJobs =
//     selectedDepartment === "All Departments"
//       ? jobs
//       : jobs.filter((job) => job.department === selectedDepartment);

//   return (
//     <main className="flex min-h-screen flex-col bg-white">
//       {/* Hero Section */}
//       <section className="pt-14 pb-16 px-6 lg:px-12 max-w-4xl mx-auto text-center">
//         <span className="inline-block bg-[#5153A0] text-white px-8 py-4 border-b-[5px] border-gray-300 rounded-full text-[12px] font-bold mb-6 animate-fade-in anim-delay-0">
//           Careers At Payvantage
//         </span>

//         <h1 className="text-[24px] lg:text-[40px] font-black text-brand-primary leading-[1.2] mb-6 animate-fade-up anim-delay-150">
//           Join The Team Behind <br className="hidden md:block" /> The Future Of
//           Seamless Payments
//         </h1>

//         <p className="text-black font-bold max-w-150 mx-auto mb-10 text-[14px] md:text-[16px] leading-relaxed animate-fade-up anim-delay-300">
//           We offer flexible and value-driven payment platforms to reach both the{" "}
//           <br className="hidden md:block" />
//           banked and unbanked through mobile channels.
//         </p>

//         {/* Filters */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-up anim-delay-450">
//           <div className="relative">
//             <select
//               className="appearance-none border border-gray-200 text-gray-800 py-3.5 pl-6 pr-14 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5153A0] font-semibold text-sm w-65"
//               aria-label="Filter by department"
//               value={selectedDepartment}
//               onChange={(e) => dispatch(setDepartment(e.target.value))}
//             >
//               {departments.map((dept) => (
//                 <option key={dept} value={dept}>
//                   {dept}
//                 </option>
//               ))}
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-gray-500">
//               <svg
//                 className="fill-current h-4 w-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Available Roles Section */}
//       <section className="py-5 px-6 lg:px-12 w-full max-w-250 mx-auto">
//         <ScrollReveal>
//           <h3 className="text-brand-primary font-bold mb-2 text-[16px]">
//             Available roles ({isLoading ? "…" : filteredJobs.length})
//           </h3>
//         </ScrollReveal>

//         <div className="flex flex-col space-y-3">
//           {isLoading
//             ? Array.from({ length: 10 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-20 rounded-lg bg-gray-100 animate-pulse"
//                 />
//               ))
//             : filteredJobs.map((job, index) => (
//                 <ScrollReveal
//                   key={
//                     job.id != null && job.id !== ""
//                       ? String(job.id)
//                       : String(index)
//                   }
//                   delay={index * 80}
//                   className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#F8F9FA] p-8 lg:px-10 lg:py-6 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow"
//                 >
//                   <div className="w-full md:w-[40%] font-bold text-[#1a1a1a] mb-2 md:mb-0 text-[16px]">
//                     {job.title}
//                   </div>
//                   <div className="w-full md:w-[25%] font-medium text-gray-700 mb-2 md:mb-0 text-[16px]">
//                     {job.department}
//                   </div>
//                   <div className="w-full md:w-[25%] font-medium text-gray-700 mb-4 md:mb-0 text-[16px]">
//                     {job.type}
//                   </div>
//                   <div className="w-full md:w-[10%] flex justify-start md:justify-end">
//                     <button
//                       type="button"
//                       onClick={() => router.push(`/careers/apply/${job.id}`)}
//                       className="bg-[#E5E6FA] text-[#5153A0] font-bold text-[14px] py-2 px-8 rounded-md hover:bg-[#d5d7f5] transition-colors"
//                     >
//                       Apply
//                     </button>
//                   </div>
//                 </ScrollReveal>
//               ))}
//         </div>
//       </section>

//       {/* Talent Pool Section */}
//       <section className="relative pt-24 pb-0 px-6 lg:px-12 overflow-hidden">
//         <div className="max-w-7xl mx-auto text-center">
//           <ScrollReveal>
//             <h2 className="text-[28px] lg:text-[32px] font-black text-brand-primary mb-4 md:mb-6">
//               Join Our Talent Pool!
//             </h2>

//             <p className="text-brand-primary text-[13px] md:text-[14px] max-w-200 mx-auto mb-10 font-bold px-4 md:px-0">
//               Ready to take your career to the next level? Do you thrive in a
//               dynamic and innovative work environment and ready to make an
//               impact, we want to hear from you! Apply now and join our
//               incredible pool of talents.
//             </p>

//             <button
//               type="button"
//               onClick={() => dispatch(openCVModal())}
//               className="bg-brand-primary text-white px-10 py-4 rounded-lg font-bold hover:scale-105 transition-all shadow-xl mb-16"
//             >
//               Submit CV
//             </button>
//           </ScrollReveal>

//           <ScrollReveal
//             from="none"
//             delay={200}
//             className="relative w-full max-w-360 mx-auto aspect-4/1 md:aspect-[4.2/1] overflow-hidden mt-10"
//           >
//             <Image
//               src="/image/Group_Pic.svg"
//               alt="Payvantage Team"
//               fill
//               className="object-cover object-top mix-blend-multiply scale-[1.03]"
//             />
//           </ScrollReveal>
//         </div>
//       </section>

//       <CVModal
//         isOpen={isCVModalOpen}
//         onClose={() => dispatch(closeCVModal())}
//       />
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openCVModal, closeCVModal, setDepartment } from "@/store/careersSlice";
import CVModal from "@/components/CVModal";
import ScrollReveal from "@/components/ScrollReveal";
import { fetchJobs } from "@/lib/api/careers";
import type { Job } from "@/lib/api/types";
import { useState } from "react";

export type { Job };

const JOBS_PER_PAGE = 10;

export default function CareersPageClient() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isCVModalOpen, selectedDepartment } = useAppSelector(
    (state) => state.careers,
  );

  const [currentPage, setCurrentPage] = useState(1);

  const { data: jobs = [], isLoading } = useQuery<Job[]>({
    queryKey: ["careers"],
    queryFn: fetchJobs,
  });

  const departments = [
    "All Departments",
    ...Array.from(
      new Set(
        jobs
          .map((j) => j.department)
          .filter((d): d is string => Boolean(d) && d !== "All Departments"),
      ),
    ),
  ];

  const filteredJobs =
    selectedDepartment === "All Departments"
      ? jobs
      : jobs.filter((job) => job.department === selectedDepartment);

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const activePage = Math.min(currentPage, Math.max(totalPages, 1));
  const paginatedJobs = filteredJobs.slice(
    (activePage - 1) * JOBS_PER_PAGE,
    activePage * JOBS_PER_PAGE,
  );

  const handleDepartmentChange = (department: string) => {
    setCurrentPage(1);
    dispatch(setDepartment(department));
  };

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
      <section className="pt-14 pb-16 px-6 lg:px-12 max-w-4xl mx-auto text-center">
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

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-up anim-delay-450">
          <div className="relative">
            <select
              className="appearance-none border border-gray-200 text-gray-800 py-3.5 pl-6 pr-14 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5153A0] font-semibold text-sm w-65"
              aria-label="Filter by department"
              value={selectedDepartment}
              onChange={(e) => handleDepartmentChange(e.target.value)}
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-gray-500">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Available Roles Section */}
      <section className="py-5 px-6 lg:px-12 w-full max-w-250 mx-auto">
        <ScrollReveal>
          <h3 className="text-brand-primary font-bold mb-2 text-[16px]">
            Available roles ({isLoading ? "…" : filteredJobs.length})
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

                    <button
                      type="button"
                      onClick={() => router.push(`/careers/apply/${job.id}`)}
                      className="bg-[#E5E6FA] text-[#5153A0] font-bold text-[14px] py-2 px-8 rounded-md hover:bg-[#d5d7f5] transition-colors"
                    >
                      Apply
                    </button>
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
      <section className="relative pt-24 pb-0 px-6 lg:px-12 overflow-hidden">
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

            <button
              type="button"
              onClick={() => dispatch(openCVModal())}
              className="bg-brand-primary text-white px-10 py-4 rounded-lg font-bold hover:scale-105 transition-all shadow-xl mb-16"
            >
              Submit CV
            </button>
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
