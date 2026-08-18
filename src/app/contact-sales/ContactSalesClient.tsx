"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { submitContactSales } from "@/lib/api/contactSales";
import {
  validateContactSalesForm,
  type ContactSalesFormData,
} from "./validation";

export default function ContactSalesClient() {
  const [formData, setFormData] = useState<ContactSalesFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactSalesFormData, string>>
  >({});

  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactSalesFormData, boolean>>
  >({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitApiError, setSubmitApiError] = useState<string | null>(null);

  const validate = (data: ContactSalesFormData) =>
    validateContactSalesForm(data);

  const handleBlur = (field: keyof typeof formData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    if (touched[name as keyof typeof formData]) {
      setErrors(validate(updatedForm));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phoneNumber: true,
      comment: true,
    });
    setSubmitApiError(null);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await submitContactSales(formData);
      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error("Failed to submit contact sales inquiry:", err);
      let errorMsg =
        "Failed to submit your inquiry. Please check your information or network connection and try again.";
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        const msg = err.response.data.message;
        errorMsg = Array.isArray(msg) ? msg.join(", ") : String(msg);
      }
      setSubmitApiError(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      comment: "",
    });
    setErrors({});
    setTouched({});
    setSubmitApiError(null);
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header section */}
        <ScrollReveal className="text-center space-y-4">
          <span className="inline-block bg-[#5153A0] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
            Contact Sales
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#2C2E6A] tracking-tight">
            Let’s Find the Right Solution for Your Business.
          </h1>
          <p className="text-[12px] md:text-[16px] text-gray-600 max-w-2xl mx-auto">
            Speak with our sales team to explore Payvantage’s payment,
            verification, and business solutions designed to meet your specific
            needs.
          </p>
        </ScrollReveal>

        {/* Card Form Container */}
        <ScrollReveal delay={150} className="w-full">
          <div className="bg-white rounded-2xl p-6 md:p-10 relative overflow-hidden">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold shadow-inner">
                  ✓
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    Sales Inquiry Submitted!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you,{" "}
                    <span className="font-semibold text-[#2C2E6A]">
                      {formData.name}
                    </span>
                    . We have received your inquiry. Our sales team will contact
                    you at{" "}
                    <span className="font-semibold text-[#2C2E6A]">
                      {formData.email}
                    </span>{" "}
                    shortly.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-[#5153A0] text-white rounded-lg font-semibold hover:bg-[#2C2E6A] transition-colors shadow-md text-sm"
                  >
                    Submit Another Request
                  </button>
                  <Link
                    href="/"
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {submitApiError && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-center gap-2">
                    <span>⚠</span>
                    <span>{submitApiError}</span>
                  </div>
                )}

                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-lg border text-gray-900 text-sm outline-none transition-all ${
                      touched.name && errors.name
                        ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-[#5153A0] focus:border-transparent"
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                      <span>⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-lg border text-gray-900 text-sm outline-none transition-all ${
                      touched.email && errors.email
                        ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-[#5153A0] focus:border-transparent"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                      <span>⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number field */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phoneNumber")}
                    placeholder="Enter your phone number"
                    className={`w-full px-4 py-3 rounded-lg border text-gray-900 text-sm outline-none transition-all ${
                      touched.phoneNumber && errors.phoneNumber
                        ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-[#5153A0] focus:border-transparent"
                    }`}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                      <span>⚠</span> {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Comment / Special Requirements field */}
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Comment / Special Requirements{" "}
                    <span className="text-gray-400 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    value={formData.comment}
                    onChange={handleChange}
                    onBlur={() => handleBlur("comment")}
                    placeholder="Tell us more about your business needs or questions..."
                    className={`w-full px-4 py-3 rounded-lg border text-gray-900 text-sm resize-y outline-none transition-all ${
                      touched.comment && errors.comment
                        ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-[#5153A0] focus:border-transparent"
                    }`}
                  />
                  {touched.comment && errors.comment && (
                    <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                      <span>⚠</span> {errors.comment}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#5153A0] hover:bg-[#2C2E6A] text-white py-4 px-6 rounded-lg font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>

                  <h4 className="flex items-center justify-center font-medium mt-6 mb-2">
                    Or
                  </h4>
                  <div className="flex gap-2 justify-center items-center">
                    <span className="flex items-center justify-center font-bold ">
                      Send us a message on
                    </span>
                    <span className="flex gap-1">
                      <a
                        href="https://wa.me/2347037003054"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex items-center justify-center font-bold text-[#228B22]"
                      >
                        Whatsapp
                      </a>
                      <svg
                        className="w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="rgba(48,179,103,1)"
                      >
                        <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
