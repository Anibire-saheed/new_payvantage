"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { applyForJob, fetchJobById, type ApplyPayload } from "@/lib/careersApi";

type FormData = ApplyPayload;

export default function ApplyPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.jobId as string;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    cv: null,
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const { data: jobData, isLoading: isJobLoading } = useQuery({
    queryKey: ["job", jobId],
    queryFn: () => fetchJobById(jobId),
    enabled: Boolean(jobId),
    staleTime: 5 * 60 * 1000,
  });

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (form: FormData) => applyForJob(jobId, form),
    onSuccess: () => {
      setFormData({ fullName: "", phone: "", email: "", cv: null });
      setErrors({});
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {
      fullName: !formData.fullName,
      phone: !formData.phone,
      email: !formData.email,
      cv: !formData.cv,
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;
    mutate(formData);
  };

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const jobTitle = jobData?.title ?? "";

  return (
    <main className="min-h-screen bg-white py-12 px-6 lg:px-12">
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#5153A0] font-bold text-[14px] mb-10 hover:opacity-75 transition-opacity"
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
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Careers
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-[24px] font-extrabold text-[#000000] mb-2">
              Application Submitted!
            </h2>
            <p className="text-gray-500 text-[14px] mb-8">
              Thanks for applying for the <strong>{jobTitle}</strong> position.
              We&apos;ll review your application and be in touch soon.
            </p>
            <button
              type="button"
              onClick={() => router.push("/careers")}
              className="bg-brand-primary text-white py-3 px-10 rounded-lg font-bold text-[14px] hover:opacity-90 transition-all"
            >
              Back to Careers
            </button>
          </div>
        ) : (
          <>
            {/* Job details */}
            <div className="mb-10">
              {isJobLoading ? (
                <div className="space-y-3">
                  <div className="h-8 bg-gray-100 rounded animate-pulse w-2/3" />
                  <div className="h-4 bg-gray-100 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6" />
                </div>
              ) : (
                <>
                  <h1 className="text-[28px] lg:text-[32px] font-black text-brand-primary mb-4">
                    {jobTitle}
                  </h1>
                  <div
                    className="text-[#1a1a1a] text-[15px] font-medium leading-[1.6] opacity-90 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: jobData?.description ?? "",
                    }}
                  />
                </>
              )}
            </div>

            <h2 className="text-[20px] font-extrabold text-[#000000] mb-8">
              Apply for this role
            </h2>

            {isError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-[13px] font-medium">
                Something went wrong. Please try again.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="fullName"
                  className={`text-[14px] font-bold mb-2 transition-colors ${errors.fullName ? "text-[#E11D48]" : "text-[#000000]"}`}
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className={`w-full border rounded-lg py-3.5 px-4 text-[14px] focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all bg-white placeholder:text-gray-400 ${errors.fullName ? "border-[#E11D48]" : "border-gray-200"}`}
                />
              </div>

              {/* Phone + Email */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="phone"
                    className={`text-[14px] font-bold mb-2 transition-colors ${errors.phone ? "text-[#E11D48]" : "text-[#000000]"}`}
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="+234 1235 4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full border rounded-lg py-3.5 px-4 text-[14px] focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all bg-white placeholder:text-gray-400 ${errors.phone ? "border-[#E11D48]" : "border-gray-200"}`}
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className={`text-[14px] font-bold mb-2 transition-colors ${errors.email ? "text-[#E11D48]" : "text-[#000000]"}`}
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full border rounded-lg py-3.5 px-4 text-[14px] focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all bg-white placeholder:text-gray-400 ${errors.email ? "border-[#E11D48]" : "border-gray-200"}`}
                  />
                </div>
              </div>

              {/* CV Upload */}
              <div className="flex flex-col">
                <label
                  htmlFor="cv"
                  className={`text-[14px] font-bold mb-2 transition-colors ${errors.cv ? "text-[#E11D48]" : "text-[#000000]"}`}
                >
                  Upload your CV/Resume{" "}
                  <span className="text-gray-400 font-normal ml-1">(PDF)</span>
                </label>
                <div className="relative group">
                  <input
                    id="cv"
                    type="file"
                    accept=".pdf"
                    onChange={(e) =>
                      handleInputChange("cv", e.target.files?.[0] || null)
                    }
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div
                    className={`flex items-center justify-between w-full border rounded-lg py-3.5 px-4 bg-white text-[14px] group-hover:border-brand-primary transition-all ${errors.cv ? "border-[#E11D48]" : "border-gray-200"}`}
                  >
                    <span className="font-bold text-gray-700">
                      {formData.cv ? formData.cv.name : "Choose file"}
                    </span>
                    {!formData.cv && (
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-brand-primary text-white py-4 rounded-lg font-bold text-[15px] shadow-lg hover:opacity-95 transition-all active:scale-[0.99] border-b-4 border-indigo-900/60 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isPending ? "Submitting…" : "Submit Application"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
