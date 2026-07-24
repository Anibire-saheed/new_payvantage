"use client";

import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { applyForJob, fetchJobById } from "@/lib/api/careers";
import {
  jobApplicationFormSchema,
  type JobApplicationFormData,
} from "./validation";

export interface JobApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string | number;
  jobTitle: string;
}

export default function JobApplyModal({
  isOpen,
  onClose,
  jobId,
  jobTitle,
}: JobApplyModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const form = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationFormSchema),
    defaultValues: { fullName: "", phone: "", email: "" },
  });

  const { data: jobData, isLoading: isJobLoading } = useQuery({
    queryKey: ["job", jobId],
    queryFn: () => fetchJobById(jobId),
    enabled: isOpen && Boolean(jobId),
    staleTime: 5 * 60 * 1000,
  });

  const {
    mutate,
    isPending,
    isSuccess,
    reset: resetMutation,
  } = useMutation({
    mutationFn: (values: JobApplicationFormData) => applyForJob(jobId, values),
    onSuccess: () => {
      form.reset();
      toast.success("Application submitted successfully!");
    },
    onError: (err: unknown) => {
      const message =
        err && typeof err === "object" && "message" in err
          ? String((err as { message: unknown }).message)
          : "Something went wrong. Please try again.";
      toast.error(message);
    },
  });

  useEffect(() => {
    if (isOpen) {
      resetMutation();
      form.reset();
      const t1 = setTimeout(() => setMounted(true), 0);
      const t2 = setTimeout(() => setVisible(true), 16);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }

    const t1 = setTimeout(() => setVisible(false), 0);
    const t2 = setTimeout(() => setMounted(false), 316);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, resetMutation]);

  if (!mounted) return null;

  const onSubmit = async (data: JobApplicationFormData) => {
    if (!_.isEmpty(form.formState.errors)) {
      return;
    }

    mutate(data);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className={`relative bg-white rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden transition-all duration-300 ease-out ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-[0.97]"
        }`}
      >
        <div className="p-8 md:p-10">
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {isSuccess ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-12 text-center">
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
              <h2 className="text-[20px] font-extrabold text-[#000000] mb-2">
                Application Submitted!
              </h2>
              <p className="text-gray-500 text-[14px] mb-8">
                Thanks for applying for the <strong>{jobTitle}</strong>{" "}
                position. We&apos;ll review your application and be in touch
                soon.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="bg-[#3E4095] text-white py-3 px-10 rounded-lg font-bold text-[14px] hover:opacity-90 transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Job Details */}
              <div className="mb-8">
                <h2 className="text-[20px] font-extrabold text-[#000000] mb-4">
                  {jobTitle}
                </h2>
                {isJobLoading ? (
                  <div className="space-y-2 mb-6">
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-full" />
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6" />
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-4/6" />
                  </div>
                ) : (
                  <p className="text-[#1a1a1a] text-[15px] font-medium leading-[1.6] mb-6 opacity-90">
                    {jobData?.description}
                  </p>
                )}
                <h3 className="text-[16px] font-extrabold text-[#000000] mb-6">
                  Apply for this role:
                </h3>
              </div>

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
                        <FormLabel>
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
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-[#3E4095] text-white py-4 rounded-lg font-bold text-[15px] shadow-lg hover:opacity-95 transition-all active:scale-[0.99] border-b-4 border-indigo-900/60 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isPending ? "Submitting…" : "Submit Application"}
                    </button>
                  </div>
                </form>
              </Form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
