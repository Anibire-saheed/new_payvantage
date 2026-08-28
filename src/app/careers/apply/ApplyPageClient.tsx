"use client";

import _ from "lodash";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { applyForJob, fetchJobById } from "@/lib/api/careers";
import {
  jobApplicationFormSchema,
  type JobApplicationFormData,
} from "./validation";

export default function ApplyPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId") || "";

  const form = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationFormSchema),
    defaultValues: { fullName: "", phone: "", email: "" },
  });

  const {
    data: jobData,
    isLoading: isJobLoading,
    isError: isJobFetchError,
  } = useQuery({
    queryKey: ["job", jobId],
    queryFn: () => fetchJobById(jobId),
    enabled: Boolean(jobId),
    staleTime: 5 * 60 * 1000,
  });

  const {
    mutate,
    isPending: isSubmitting,
    isSuccess,
    isError: isSubmitError,
  } = useMutation({
    mutationFn: (data: JobApplicationFormData) => applyForJob(jobId, data),
    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = async (data: JobApplicationFormData) => {
    if (!_.isEmpty(form.formState.errors) || !jobId) {
      return;
    }

    mutate(data);
  };

  const jobNotFound =
    !jobId ||
    isJobFetchError ||
    (!isJobLoading && jobData && jobData.title === "Job Not Found");

  return (
    <main className="min-h-screen bg-white py-12 px-6 lg:px-12">
      <div className="max-w-2xl mx-auto">
        {/* Back Link */}
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => router.push("/careers")}
          className="text-[#5153A0] font-medium text-[14px] mb-8 p-0 hover:bg-transparent"
        >
          <svg
            className="w-4 h-4 mr-1"
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
        </Button>

        {isJobLoading ? (
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="h-8 bg-gray-100 rounded animate-pulse w-2/3" />
              <div className="h-4 bg-gray-100 rounded animate-pulse w-full" />
              <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6" />
            </div>
            <div className="h-64 bg-gray-50 rounded-lg animate-pulse" />
          </div>
        ) : jobNotFound ? (
          <div className="text-center py-16 bg-[#F8F9FA] rounded-xl p-8 border border-gray-100">
            <div className="w-14 h-14 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-[22px] font-extrabold text-[#1a1a1a] mb-2">
              Job Not Found
            </h2>
            <p className="text-gray-500 text-[14px] mb-6 max-w-md mx-auto">
              We couldn&apos;t find the job role you&apos;re looking for. It may
              have expired or been removed.
            </p>
            <Button
              type="button"
              onClick={() => router.push("/careers")}
              variant="default"
              size="lg"
            >
              Browse Open Roles
            </Button>
          </div>
        ) : isSuccess ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
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
            <p className="text-gray-500 text-[14px] mb-8 max-w-md">
              Thanks for applying for the <strong>{jobData?.title}</strong>{" "}
              position. We&apos;ll review your application and be in touch soon.
            </p>
            <Button
              type="button"
              onClick={() => router.push("/careers")}
              variant="default"
              size="lg"
            >
              Back to Careers
            </Button>
          </div>
        ) : (
          <>
            {/* Job Header & Description */}
            <div className="mb-10">
              <h1 className="text-[28px] lg:text-[32px] font-black text-brand-primary mb-4">
                {jobData?.title}
              </h1>
              {jobData?.type && (
                <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {jobData.type}
                </span>
              )}
              <div
                className="text-[#1a1a1a] text-[15px] font-medium leading-[1.6] opacity-90 prose prose-sm max-w-none mt-2"
                dangerouslySetInnerHTML={{
                  __html: jobData?.description ?? "",
                }}
              />
            </div>

            <h2 className="text-[20px] font-extrabold text-[#000000] mb-6">
              Apply for this role
            </h2>

            {isSubmitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-[13px] font-medium">
                Something went wrong submitting your application. Please try
                again.
              </div>
            )}

            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+234 1235 4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Email address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* CV Upload */}
                <FormField
                  control={form.control}
                  name="cv"
                  render={({ field: { value, onChange, ref, ...rest } }) => (
                    <FormItem>
                      <FormLabel className="mb-3 block">
                        Upload your CV/Resume{" "}
                        <span className="text-gray-400 font-normal ml-1">
                          (PDF)
                        </span>
                      </FormLabel>
                      <div className="relative group">
                        <FormControl>
                          <input
                            type="file"
                            accept=".pdf"
                            ref={ref}
                            onChange={(e) => onChange(e.target.files?.[0])}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            {...rest}
                          />
                        </FormControl>
                        <div className="flex items-center justify-between w-full border border-gray-200 rounded-lg py-3.5 px-4 bg-white text-[14px] group-hover:border-brand-primary transition-all">
                          <span className="font-bold text-gray-700">
                            {value?.name ?? "Choose file"}
                          </span>
                          {!value && (
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
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="default"
                    size="lg"
                    className="w-full"
                  >
                    {isSubmitting ? "Submitting…" : "Submit Application"}
                  </Button>
                </div>
              </form>
            </Form>
          </>
        )}
      </div>
    </main>
  );
}
