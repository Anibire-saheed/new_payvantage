"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fetchProducts } from "@/lib/api/product";
import { submitDemoRequest } from "@/lib/api/demoRequest";
import { validateBookDemoForm, type BookDemoFormData } from "./validation";

interface ProductOption {
  id: string;
  name: string;
}

function matchProduct(param: string | null, options: ProductOption[]): string {
  if (!param) return "";
  const normalizedParam = param.toLowerCase().trim();
  const matched = options.find(
    (opt) =>
      opt.id.toLowerCase().trim() === normalizedParam ||
      opt.name.toLowerCase().trim() === normalizedParam ||
      opt.name.toLowerCase().includes(normalizedParam) ||
      normalizedParam.includes(opt.name.toLowerCase()),
  );
  return matched ? matched.id : param;
}

export default function BookDemoClient() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");

  const [productOptions, setProductOptions] = useState<ProductOption[]>([]);

  const [formData, setFormData] = useState<BookDemoFormData>({
    name: "",
    email: "",
    product: "",
    comment: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof BookDemoFormData, string>>
  >({});

  const [touched, setTouched] = useState<
    Partial<Record<keyof BookDemoFormData, boolean>>
  >({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitApiError, setSubmitApiError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadProducts() {
      try {
        const products = await fetchProducts();
        if (isMounted && Array.isArray(products) && products.length > 0) {
          const formatted: ProductOption[] = products
            .map((p) => ({
              id: String(p.id),
              name: (p.title ||
                (p as unknown as { name?: string }).name ||
                p.id) as string,
            }))
            .filter((p) => Boolean(p.name));

          if (formatted.length > 0) {
            setProductOptions(formatted);
            if (productParam) {
              const matchedId = matchProduct(productParam, formatted);
              setFormData((prev) => ({
                ...prev,
                product: matchedId || formatted[0].id,
              }));
            } else {
              setFormData((prev) => ({
                ...prev,
                product: prev.product || formatted[0].id,
              }));
            }
          }
        }
      } catch (error) {
        console.error("Failed to load products dynamically:", error);
      }
    }
    loadProducts();
    return () => {
      isMounted = false;
    };
  }, [productParam]);

  const validate = (data: BookDemoFormData) => validateBookDemoForm(data);

  const handleBlur = (field: keyof typeof formData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
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
    setTouched({ name: true, email: true, product: true, comment: true });
    setSubmitApiError(null);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await submitDemoRequest(formData);
      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error("Failed to submit demo request:", err);
      let errorMsg =
        "Failed to submit demo request. Please check your information or network connection and try again.";
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
      product: "",
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
            Book A Demo
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#2C2E6A] tracking-tight">
            Everything Your Business Needs to Grow. All in One Platform.
          </h1>
          <p className="text-[12px] md:text-[16px] text-gray-600 max-w-2xl mx-auto">
            Book a personalized demo to explore PayVantage’s payment,
            verification, and business solutions tailored to your business
            needs.
          </p>
        </ScrollReveal>

        {/* Card Form Container */}
        <ScrollReveal delay={150} className="w-full">
          <div className="bg-white rounded-2xl  p-6 md:p-10 relative overflow-hidden">
            {/* Top decorative accent bar */}

            {isSubmitted ? (
              <div className="py-8 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold shadow-inner">
                  ✓
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    Demo Request Submitted!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you,{" "}
                    <span className="font-semibold text-[#2C2E6A]">
                      {formData.name}
                    </span>
                    . We received your request for{" "}
                    <span className="font-semibold text-[#2C2E6A]">
                      {productOptions.find((p) => p.id === formData.product)
                        ?.name ||
                        formData.product ||
                        "our products"}
                    </span>
                    . Our team will contact you at{" "}
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
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    placeholder="name@company.com"
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

                {/* Select product field */}
                <div>
                  <label
                    htmlFor="product"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Select Product <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    onBlur={() => handleBlur("product")}
                    className={`w-full px-4 py-3 rounded-lg border text-gray-900 text-sm outline-none transition-all bg-white ${
                      touched.product && errors.product
                        ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-[#5153A0] focus:border-transparent"
                    }`}
                  >
                    <option value="">Select a product...</option>
                    {productOptions.map((prod) => (
                      <option key={prod.id} value={prod.id}>
                        {prod.name}
                      </option>
                    ))}
                  </select>
                  {touched.product && errors.product && (
                    <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1">
                      <span>⚠</span> {errors.product}
                    </p>
                  )}
                </div>

                {/* Comment field */}
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
                      "Submit Demo Request"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
