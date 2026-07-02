// "use client";

// import React, { useState, useEffect } from "react";

// interface CVModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function CVModal({ isOpen, onClose }: CVModalProps) {
//   const [mounted, setMounted] = useState(false);
//   const [visible, setVisible] = useState(false);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     role: "",
//     department: "",
//     phone: "",
//     email: "",
//     cv: null as File | null,
//   });

//   const [errors, setErrors] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     if (isOpen) {
//       const t1 = setTimeout(() => setMounted(true), 0);
//       const t2 = setTimeout(() => setVisible(true), 16);
//       return () => {
//         clearTimeout(t1);
//         clearTimeout(t2);
//       };
//     } else {
//       const t1 = setTimeout(() => setVisible(false), 0);
//       const t2 = setTimeout(() => setMounted(false), 316);
//       return () => {
//         clearTimeout(t1);
//         clearTimeout(t2);
//       };
//     }
//   }, [isOpen]);

//   if (!mounted) return null;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const isValidPhone = (phone: string) =>
//       phone.replace(/\D/g, "").length >= 11;
//     const isValidEmail = (email: string) => email.includes("@");

//     const newErrors: Record<string, boolean> = {
//       fullName: !formData.fullName,
//       role: !formData.role,
//       department: !formData.department,
//       phone: !formData.phone || !isValidPhone(formData.phone),
//       email: !formData.email || !isValidEmail(formData.email),
//       cv: !formData.cv,
//     };

//     setErrors(newErrors);

//     if (Object.values(newErrors).some(Boolean)) return;
//     onClose();
//   };

//   const handleInputChange = (field: string, value: string | File | null) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
//   };

//   const fieldStyle = (i: number): React.CSSProperties => ({
//     transitionDelay: visible ? `${i * 55}ms` : "0ms",
//     transitionDuration: "380ms",
//   });

//   const fieldClass = `transition-all ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div
//         className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div
//         className={`relative bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto transition-all duration-300 ease-out ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.97]"}`}
//       >
//         <div className="p-4 sm:p-8 lg:p-12">
//           {/* Header */}
//           <div className={`mb-8 ${fieldClass}`} style={fieldStyle(0)}>
//             <h2 className="text-xl font-extrabold text-[#111827] mb-2">
//               Join Us
//             </h2>
//             <p className="text-[#5B799A] text-[14px] font-medium max-w-2xl leading-relaxed">
//               Share your resume to our recruiters to be added to our talent pool
//               and to receive emails regarding career opportunities at
//               Payvantage.
//             </p>
//           </div>

//           <form className="space-y-8" onSubmit={handleSubmit} noValidate>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 items-start">
//               {/* Full Name */}
//               <div
//                 className={`flex flex-col ${fieldClass}`}
//                 style={fieldStyle(1)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.fullName ? "text-[#E11D48]" : "text-[#374151]"}`}
//                 >
//                   Full Name <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter full name"
//                   value={formData.fullName}
//                   onChange={(e) =>
//                     handleInputChange("fullName", e.target.value)
//                   }
//                   className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all bg-[#F8FAFC] ${errors.fullName ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
//                 />
//                 {errors.fullName && (
//                   <span className="text-[12px] font-bold text-[#E11D48] mt-2">
//                     Required
//                   </span>
//                 )}
//               </div>

//               {/* Role */}
//               <div
//                 className={`flex flex-col ${fieldClass}`}
//                 style={fieldStyle(2)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.role ? "text-[#E11D48]" : "text-[#374151]"}`}
//                 >
//                   Role <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter role"
//                   value={formData.role}
//                   onChange={(e) => handleInputChange("role", e.target.value)}
//                   className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all bg-[#F8FAFC] ${errors.role ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
//                 />
//                 {errors.role && (
//                   <span className="text-[12px] font-bold text-[#E11D48] mt-2">
//                     Required
//                   </span>
//                 )}
//               </div>

//               {/* Department */}
//               <div
//                 className={`flex flex-col ${fieldClass}`}
//                 style={fieldStyle(3)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.department ? "text-[#E11D48]" : "text-[#374151]"}`}
//                 >
//                   Department <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter department"
//                   value={formData.department}
//                   onChange={(e) =>
//                     handleInputChange("department", e.target.value)
//                   }
//                   className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all bg-[#F8FAFC] ${errors.department ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
//                 />
//                 {errors.department && (
//                   <span className="text-[12px] font-bold text-[#E11D48] mt-2">
//                     Required
//                   </span>
//                 )}
//               </div>

//               {/* Phone */}
//               <div
//                 className={`flex flex-col ${fieldClass}`}
//                 style={fieldStyle(4)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.phone ? "text-[#E11D48]" : "text-[#374151]"}`}
//                 >
//                   Phone Number <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="Enter phone number"
//                   value={formData.phone}
//                   onChange={(e) => handleInputChange("phone", e.target.value)}
//                   className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all bg-[#F8FAFC] ${errors.phone ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
//                 />
//                 {errors.phone && (
//                   <span className="text-[12px] font-bold text-[#E11D48] mt-2">
//                     {!formData.phone
//                       ? "Required"
//                       : "Phone number must be at least 11 digits"}
//                   </span>
//                 )}
//               </div>

//               {/* Email — full width */}
//               <div
//                 className={`flex flex-col md:col-span-2 ${fieldClass}`}
//                 style={fieldStyle(5)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.email ? "text-[#E11D48]" : "text-[#374151]"}`}
//                 >
//                   Email <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter email address"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all bg-[#F8FAFC] ${errors.email ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
//                 />
//                 {errors.email && (
//                   <span className="text-[12px] font-bold text-[#E11D48] mt-2">
//                     Required
//                   </span>
//                 )}
//               </div>

//               {/* Document Upload — full width */}
//               <div
//                 className={`flex flex-col md:col-span-2 relative ${fieldClass}`}
//                 style={fieldStyle(6)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.cv ? "text-[#E11D48]" : "text-black"}`}
//                 >
//                   Document Upload <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <div className="relative group">
//                   <input
//                     placeholder="Upload CV"
//                     type="file"
//                     accept=".pdf"
//                     onChange={(e) =>
//                       handleInputChange("cv", e.target.files?.[0] || null)
//                     }
//                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                   />
//                   {formData.cv ? (
//                     <div
//                       className={`w-full border rounded-lg p-6 bg-linear-to-br from-[#F8FAFC] to-white transition-all ${errors.cv ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200 border-2"}`}
//                     >
//                       <div className="flex items-center gap-4">
//                         <div className="shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
//                           <svg
//                             className="w-6 h-6"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M3.9985 2C3.44749 2 3 2.44405 3 2.9918V21.0082C3 21.5447 3.44476 22 3.9934 22H20.0066C20.5551 22 21 21.5489 21 20.9925L20.9997 7L16 2H3.9985ZM10.5 7.5H12.5C12.5 9.98994 14.6436 12.6604 17.3162 13.5513L16.8586 15.49C13.7234 15.0421 10.4821 16.3804 7.5547 18.3321L6.3753 16.7191C7.46149 15.8502 8.50293 14.3757 9.27499 12.6534C10.0443 10.9373 10.5 9.07749 10.5 7.5ZM11.1 13.4716C11.3673 12.8752 11.6043 12.2563 11.8037 11.6285C12.2754 12.3531 12.8553 13.0182 13.5102 13.5953C12.5284 13.7711 11.5666 14.0596 10.6353 14.4276C10.8 14.1143 10.9551 13.7948 11.1 13.4716Z" />
//                           </svg>
//                         </div>
//                         <div className="grow min-w-0">
//                           <p className="font-semibold text-[#111827] truncate">
//                             {formData.cv.name}
//                           </p>
//                           <p className="text-[#94A3B8] text-xs mt-1">
//                             {(formData.cv.size / 1024).toFixed(2)} KB •{" "}
//                             {formData.cv.type}
//                           </p>
//                         </div>
//                         <button
//                           title="button"
//                           type="button"
//                           onClick={() => handleInputChange("cv", null)}
//                           className="shrink-0 text-gray-400 hover:text-red-600 transition-colors p-1"
//                         >
//                           <svg
//                             className="w-5 h-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M6 18L18 6M6 6l12 12"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <div
//                       className={`flex flex-col items-center justify-center w-full border-2 rounded-lg py-16 px-8 bg-white text-sm group-hover:border-brand-primary group-hover:scale-[1.01] transition-all border-dashed border-gray-200`}
//                     >
//                       <span className="text-[#94A3B8] size-6 mb-3 group-hover:scale-110 transition-transform duration-200">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                         >
//                           <path d="M12 12.5858L16.2426 16.8284L14.8284 18.2426L13 16.415V22H11V16.413L9.17157 18.2426L7.75736 16.8284L12 12.5858ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
//                         </svg>
//                       </span>
//                       <span className="font-bold text-[#111827] text-center">
//                         Choose File
//                       </span>
//                     </div>
//                   )}
//                 </div>
//                 <span
//                   className={`text-[12px] mt-2 font-medium ${errors.cv ? "text-[#E11D48]" : "text-[#94A3B8]"}`}
//                 >
//                   {errors.cv ? "Required" : "File should be in pdf"}
//                 </span>
//               </div>
//             </div>

//             {/* Submit */}
//             <div className={`${fieldClass}`} style={fieldStyle(7)}>
//               <button
//                 type="submit"
//                 className="w-full py-4 bg-brand-primary text-white rounded-lg font-bold text-[15px] shadow-lg hover:opacity-90 hover:shadow-xl hover:-translate-y-px transition-all duration-200 active:scale-[0.98]"
//               >
//                 Submit CV/Resume
//               </button>
//             </div>
//           </form>

//           {/* Close Button */}
//           <button
//             title="button"
//             onClick={onClose}
//             className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-200 p-2"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";
// import { useQuery, useMutation } from "@tanstack/react-query";
// import { toast } from "sonner";
// import {
//   allDepartments,
//   submitApplication,
//   Department,
// } from "@/lib/talentPoolApi";

// interface CVModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function CVModal({ isOpen, onClose }: CVModalProps) {
//   const [mounted, setMounted] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const [roles, setRoles] = useState<{ id: string; title: string }[]>([]);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     role: "",
//     department: "",
//     phone: "",
//     email: "",
//     cv: null as File | null,
//   });

//   const [errors, setErrors] = useState<Record<string, boolean>>({});

//   // ─── Get all departments and roles ───────────────────────────
//   const { data: departments = [], isLoading: isDepartmentsLoading } = useQuery<
//     Department[]
//   >({
//     queryKey: ["departments"],
//     queryFn: allDepartments,
//     enabled: isOpen, // only fetch when modal is open
//   });

//   // ─── Submit mutation ─────────────────────────────
//   const {
//     mutate: submit,
//     isPending: isSubmitting,
//     isSuccess,
//   } = useMutation({
//     mutationFn: submitApplication,
//     onSuccess: () => {
//       toast.success("Application submitted successfully!");
//       setFormData({
//         fullName: "",
//         role: "",
//         department: "",
//         phone: "",
//         email: "",
//         cv: null,
//       });
//       setRoles([]);
//       onClose();
//     },
//     onError: () => {
//       toast.error("Submission failed. Please try again.");
//     },
//   });

//   // ─── Modal animation ─────────────────────────────
//   useEffect(() => {
//     if (isOpen) {
//       const t1 = setTimeout(() => setMounted(true), 0);
//       const t2 = setTimeout(() => setVisible(true), 16);
//       return () => {
//         clearTimeout(t1);
//         clearTimeout(t2);
//       };
//     } else {
//       const t1 = setTimeout(() => setVisible(false), 0);
//       const t2 = setTimeout(() => setMounted(false), 316);
//       return () => {
//         clearTimeout(t1);
//         clearTimeout(t2);
//       };
//     }
//   }, [isOpen]);

//   if (!mounted) return null;

//   // ─── Handle department change ─────────────────────
//   const handleDepartmentChange = (departmentId: string) => {
//     setFormData((prev) => ({ ...prev, department: departmentId, role: "" }));
//     const selected = departments.find((d) => d.id === departmentId);
//     setRoles(selected?.roles ?? []);
//     if (errors.department)
//       setErrors((prev) => ({ ...prev, department: false }));
//   };

//   // ─── Handle input change ──────────────────────────
//   const handleInputChange = (field: string, value: string | File | null) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
//   };

//   // ─── Handle submit ────────────────────────────────
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const isValidPhone = (phone: string) =>
//       phone.replace(/\D/g, "").length >= 11;
//     const isValidEmail = (email: string) => email.includes("@");

//     const newErrors: Record<string, boolean> = {
//       fullName: !formData.fullName,
//       role: !formData.role,
//       department: !formData.department,
//       phone: !formData.phone || !isValidPhone(formData.phone),
//       email: !formData.email || !isValidEmail(formData.email),
//       cv: !formData.cv,
//     };

//     setErrors(newErrors);
//     if (Object.values(newErrors).some(Boolean)) return;

//     submit({
//       fullName: formData.fullName,
//       phone: formData.phone,
//       email: formData.email,
//       departmentId: formData.department,
//       roleId: formData.role,
//       cv: formData.cv,
//     });
//   };

//   // ─── Animation helpers ────────────────────────────
//   const fieldStyle = (i: number): React.CSSProperties => ({
//     transitionDelay: visible ? `${i * 55}ms` : "0ms",
//     transitionDuration: "380ms",
//   });

//   const fieldClass = `transition-all ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div
//         className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div
//         className={`relative bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto transition-all duration-300 ease-out ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.97]"}`}
//       >
//         <div className="p-4 sm:p-8 lg:p-12">
//           {/* Header */}
//           <div className={`mb-8 ${fieldClass}`} style={fieldStyle(0)}>
//             <h2 className="text-xl font-extrabold text-[#111827] mb-2">
//               Join Us
//             </h2>
//             <p className="text-[#5B799A] text-[14px] font-medium max-w-2xl leading-relaxed">
//               Share your resume to our recruiters to be added to our talent pool
//               and to receive emails regarding career opportunities at
//               Payvantage.
//             </p>
//           </div>

//           <form className="space-y-8" onSubmit={handleSubmit} noValidate>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 items-start">
//               {/* Full Name */}
//               <div
//                 className={`flex flex-col ${fieldClass}`}
//                 style={fieldStyle(1)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.fullName ? "text-[#E11D48]" : "text-[#374151]"}`}
//                 >
//                   Full Name <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter full name"
//                   value={formData.fullName}
//                   onChange={(e) =>
//                     handleInputChange("fullName", e.target.value)
//                   }
//                   className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all bg-[#F8FAFC] ${errors.fullName ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
//                 />
//                 {errors.fullName && (
//                   <span className="text-[12px] font-bold text-[#E11D48] mt-2">
//                     Required
//                   </span>
//                 )}
//               </div>

//               {/* Department dropdown */}
//               <div
//                 className={`flex flex-col ${fieldClass}`}
//                 style={fieldStyle(2)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.department ? "text-[#E11D48]" : "text-[#374151]"}`}
//                 >
//                   Department <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <select
//                   value={formData.department}
//                   title="department"
//                   onChange={(e) => handleDepartmentChange(e.target.value)}
//                   className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all bg-[#F8FAFC] ${errors.department ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
//                 >
//                   <option value="">
//                     {isDepartmentsLoading ? "Loading..." : "Select Department"}
//                   </option>
//                   {departments.map((dept) => (
//                     <option key={dept.id} value={dept.id}>
//                       {dept.name}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.department && (
//                   <span className="text-[12px] font-bold text-[#E11D48] mt-2">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               {/* Role dropdown */}
//               <div
//                 className={`flex flex-col ${fieldClass}`}
//                 style={fieldStyle(3)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.role ? "text-[#E11D48]" : "text-[#374151]"}`}
//                 >
//                   Role <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <select
//                   value={formData.role}
//                   title="role"
//                   onChange={(e) => handleInputChange("role", e.target.value)}
//                   disabled={roles.length === 0}
//                   className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all bg-[#F8FAFC] disabled:opacity-50 disabled:cursor-not-allowed ${errors.role ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
//                 >
//                   <option value="">
//                     {roles.length === 0
//                       ? "Select department first"
//                       : "Select Role"}
//                   </option>
//                   {roles.map((role) => (
//                     <option key={role.id} value={role.id}>
//                       {role.title}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.role && (
//                   <span className="text-[12px] font-bold text-[#E11D48] mt-2">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               {/* Phone */}
//               <div
//                 className={`flex flex-col ${fieldClass}`}
//                 style={fieldStyle(4)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.phone ? "text-[#E11D48]" : "text-[#374151]"}`}
//                 >
//                   Phone Number <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="Enter phone number"
//                   value={formData.phone}
//                   onChange={(e) => handleInputChange("phone", e.target.value)}
//                   className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all bg-[#F8FAFC] ${errors.phone ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
//                 />
//                 {errors.phone && (
//                   <span className="text-[12px] font-bold text-[#E11D48] mt-2">
//                     {!formData.phone
//                       ? "Required"
//                       : "Phone number must be at least 11 digits"}
//                   </span>
//                 )}
//               </div>

//               {/* Email */}
//               <div
//                 className={`flex flex-col md:col-span-2 ${fieldClass}`}
//                 style={fieldStyle(5)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.email ? "text-[#E11D48]" : "text-[#374151]"}`}
//                 >
//                   Email <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter email address"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all bg-[#F8FAFC] ${errors.email ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
//                 />
//                 {errors.email && (
//                   <span className="text-[12px] font-bold text-[#E11D48] mt-2">
//                     Required
//                   </span>
//                 )}
//               </div>

//               {/* Document Upload */}
//               <div
//                 className={`flex flex-col md:col-span-2 relative ${fieldClass}`}
//                 style={fieldStyle(6)}
//               >
//                 <label
//                   className={`text-[14px] font-bold mb-2 transition-colors ${errors.cv ? "text-[#E11D48]" : "text-black"}`}
//                 >
//                   Document Upload <span className="text-[#E11D48]">*</span>
//                 </label>
//                 <div className="relative group">
//                   <input
//                     placeholder="Upload CV"
//                     type="file"
//                     accept=".pdf"
//                     onChange={(e) =>
//                       handleInputChange("cv", e.target.files?.[0] || null)
//                     }
//                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                   />
//                   {formData.cv ? (
//                     <div
//                       className={`w-full border rounded-lg p-6 bg-linear-to-br from-[#F8FAFC] to-white transition-all ${errors.cv ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200 border-2"}`}
//                     >
//                       <div className="flex items-center gap-4">
//                         <div className="shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
//                           <svg
//                             className="w-6 h-6"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M3.9985 2C3.44749 2 3 2.44405 3 2.9918V21.0082C3 21.5447 3.44476 22 3.9934 22H20.0066C20.5551 22 21 21.5489 21 20.9925L20.9997 7L16 2H3.9985ZM10.5 7.5H12.5C12.5 9.98994 14.6436 12.6604 17.3162 13.5513L16.8586 15.49C13.7234 15.0421 10.4821 16.3804 7.5547 18.3321L6.3753 16.7191C7.46149 15.8502 8.50293 14.3757 9.27499 12.6534C10.0443 10.9373 10.5 9.07749 10.5 7.5ZM11.1 13.4716C11.3673 12.8752 11.6043 12.2563 11.8037 11.6285C12.2754 12.3531 12.8553 13.0182 13.5102 13.5953C12.5284 13.7711 11.5666 14.0596 10.6353 14.4276C10.8 14.1143 10.9551 13.7948 11.1 13.4716Z" />
//                           </svg>
//                         </div>
//                         <div className="grow min-w-0">
//                           <p className="font-semibold text-[#111827] truncate">
//                             {formData.cv.name}
//                           </p>
//                           <p className="text-[#94A3B8] text-xs mt-1">
//                             {(formData.cv.size / 1024).toFixed(2)} KB •{" "}
//                             {formData.cv.type}
//                           </p>
//                         </div>
//                         <button
//                           title="remove"
//                           type="button"
//                           onClick={() => handleInputChange("cv", null)}
//                           className="shrink-0 text-gray-400 hover:text-red-600 transition-colors p-1"
//                         >
//                           <svg
//                             className="w-5 h-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M6 18L18 6M6 6l12 12"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="flex flex-col items-center justify-center w-full border-2 rounded-lg py-16 px-8 bg-white text-sm group-hover:border-brand-primary group-hover:scale-[1.01] transition-all border-dashed border-gray-200">
//                       <span className="text-[#94A3B8] size-6 mb-3 group-hover:scale-110 transition-transform duration-200">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                         >
//                           <path d="M12 12.5858L16.2426 16.8284L14.8284 18.2426L13 16.415V22H11V16.413L9.17157 18.2426L7.75736 16.8284L12 12.5858ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
//                         </svg>
//                       </span>
//                       <span className="font-bold text-[#111827] text-center">
//                         Choose File
//                       </span>
//                     </div>
//                   )}
//                 </div>
//                 <span
//                   className={`text-[12px] mt-2 font-medium ${errors.cv ? "text-[#E11D48]" : "text-[#94A3B8]"}`}
//                 >
//                   {errors.cv ? "Required" : "File should be in pdf"}
//                 </span>
//               </div>
//             </div>

//             {/* Submit */}
//             <div className={`${fieldClass}`} style={fieldStyle(7)}>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full py-4 bg-brand-primary text-white rounded-lg font-bold text-[15px] shadow-lg hover:opacity-90 hover:shadow-xl hover:-translate-y-px transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit CV/Resume"}
//               </button>
//             </div>
//           </form>

//           {/* Close Button */}
//           <button
//             title="close"
//             onClick={onClose}
//             className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-200 p-2"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

//
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  allDepartments,
  submitApplication,
  Department,
} from "@/lib/talentPoolApi";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Reusable portal dropdown ─────────────────────────────────
interface DropdownPortalProps {
  anchorRect: DOMRect | null;
  children: React.ReactNode;
  onClose: () => void;
}

function DropdownPortal({
  anchorRect,
  children,
  onClose,
}: DropdownPortalProps) {
  const style: React.CSSProperties = anchorRect
    ? {
        position: "fixed",
        top: anchorRect.bottom + 4,
        left: anchorRect.left,
        width: anchorRect.width,
        zIndex: 9999,
      }
    : {};

  return createPortal(
    <>
      <div
        className="fixed inset-0"
        style={{ zIndex: 9998 }}
        onClick={onClose}
      />
      <div
        style={style}
        className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="py-1 max-h-48 overflow-y-auto">{children}</div>
      </div>
    </>,
    document.body,
  );
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [roles, setRoles] = useState<{ id: string; title: string }[]>([]);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const [departmentRect, setDepartmentRect] = useState<DOMRect | null>(null);
  const [roleRect, setRoleRect] = useState<DOMRect | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    department: "",
    phone: "",
    email: "",
    cv: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  // ─── Get all departments and roles ───────────────────────────
  const { data: departments = [], isLoading: isDepartmentsLoading } = useQuery<
    Department[]
  >({
    queryKey: ["departments"],
    queryFn: allDepartments,
    enabled: isOpen,
  });

  // ─── Submit mutation ─────────────────────────────
  const {
    mutate: submit,
    isPending: isSubmitting,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: submitApplication,
    onSuccess: () => {
      toast.success("Application submitted successfully!");
      setFormData({
        fullName: "",
        role: "",
        department: "",
        phone: "",
        email: "",
        cv: null,
      });
      setRoles([]);
    },
    onError: () => {
      toast.error("Submission failed. Please try again.");
    },
  });

  const handleClose = useCallback(() => {
    setDepartmentOpen(false);
    setRoleOpen(false);
    onClose();
  }, [onClose]);

  // ─── Modal animation ─────────────────────────────
  useEffect(() => {
    if (isOpen) {
      reset();
      const t1 = setTimeout(() => setMounted(true), 0);
      const t2 = setTimeout(() => setVisible(true), 16);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      const t1 = setTimeout(() => setVisible(false), 0);
      const t2 = setTimeout(() => setMounted(false), 316);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isOpen, reset]);

  if (!mounted) return null;

  // ─── Handle department change ─────────────────────
  const handleDepartmentChange = (departmentId: string) => {
    setFormData((prev) => ({ ...prev, department: departmentId, role: "" }));
    const selected = departments.find((d) => d.id === departmentId);
    setRoles(selected?.roles ?? []);
    setDepartmentOpen(false);
    setRoleOpen(false);
    if (errors.department)
      setErrors((prev) => ({ ...prev, department: false }));
  };

  const toggleDepartmentOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDepartmentRect(event.currentTarget.getBoundingClientRect());
    setDepartmentOpen((open) => !open);
    setRoleOpen(false);
  };

  const toggleRoleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setRoleRect(event.currentTarget.getBoundingClientRect());
    setRoleOpen((open) => !open);
    setDepartmentOpen(false);
  };

  // ─── Handle input change ──────────────────────────
  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
  };

  // ─── Handle submit ────────────────────────────────
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValidPhone = (phone: string) =>
      phone.replace(/\D/g, "").length >= 11;
    const isValidEmail = (email: string) => email.includes("@");
    const newErrors: Record<string, boolean> = {
      fullName: !formData.fullName,
      role: !formData.role,
      department: !formData.department,
      phone: !formData.phone || !isValidPhone(formData.phone),
      email: !formData.email || !isValidEmail(formData.email),
      cv: !formData.cv,
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;
    submit({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      departmentId: formData.department,
      roleId: formData.role,
      cv: formData.cv,
    });
  };

  // ─── Animation helpers ────────────────────────────
  const fieldStyle = (i: number): React.CSSProperties => ({
    transitionDelay: visible ? `${i * 55}ms` : "0ms",
    transitionDuration: "380ms",
  });
  const fieldClass = `transition-all ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-white rounded-2xl w-full max-w-4xl shadow-2xl transition-all duration-300 ease-out ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.97]"}`}
      >
        <div className="p-4 sm:p-8 lg:p-12 max-h-[90vh] overflow-y-auto">
          {/* Success State */}
          {isSuccess ? (
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
                Thanks for joining our Talent Pool. We&apos;ll keep your profile
                on file and be in touch when relevant opportunities become
                available at Payvantage.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="bg-brand-primary text-white py-3 px-10 rounded-lg font-bold text-[14px] hover:opacity-90 transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className={`mb-8 ${fieldClass}`} style={fieldStyle(0)}>
                <h2 className="text-xl font-extrabold text-[#111827] mb-2">
                  Join Us
                </h2>
                <p className="text-[#5B799A] text-[14px] font-medium max-w-2xl leading-relaxed">
                  Share your resume to our recruiters to be added to our talent
                  pool and to receive emails regarding career opportunities at
                  Payvantage.
                </p>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 items-start">
                  {/* Full Name */}
                  <div
                    className={`flex flex-col ${fieldClass}`}
                    style={fieldStyle(1)}
                  >
                    <label
                      className={`text-[14px] font-bold mb-2 transition-colors ${errors.fullName ? "text-[#E11D48]" : "text-[#374151]"}`}
                    >
                      Full Name <span className="text-[#E11D48]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-0 transition-all bg-[#F8FAFC] ${errors.fullName ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
                    />
                    {errors.fullName && (
                      <span className="text-[12px] font-bold text-[#E11D48] mt-2">
                        Required
                      </span>
                    )}
                  </div>

                  {/* Department custom dropdown */}
                  <div
                    className={`flex flex-col ${fieldClass}`}
                    style={fieldStyle(2)}
                  >
                    <label
                      className={`text-[14px] font-bold mb-2 transition-colors ${errors.department ? "text-[#E11D48]" : "text-[#374151]"}`}
                    >
                      Department <span className="text-[#E11D48]">*</span>
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={toggleDepartmentOpen}
                        className={`w-full border rounded-lg py-3 px-4 text-sm text-left flex items-center justify-between transition-all bg-[#F8FAFC] ${
                          errors.department
                            ? "border-[#E11D48] ring-1 ring-[#E11D48]"
                            : departmentOpen
                              ? "border-brand-primary"
                              : "border-gray-200"
                        }`}
                      >
                        <span
                          className={
                            formData.department
                              ? "text-gray-900"
                              : "text-gray-400"
                          }
                        >
                          {isDepartmentsLoading
                            ? "Loading..."
                            : formData.department
                              ? departments.find(
                                  (d) => d.id === formData.department,
                                )?.name
                              : "Select Department"}
                        </span>
                        <svg
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${departmentOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {departmentOpen && !isDepartmentsLoading && (
                        <DropdownPortal
                          anchorRect={departmentRect}
                          onClose={() => setDepartmentOpen(false)}
                        >
                          {departments.map((dept) => (
                            <button
                              key={dept.id}
                              type="button"
                              onClick={() => handleDepartmentChange(dept.id)}
                              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                                formData.department === dept.id
                                  ? "bg-[#EEF2FF] text-brand-primary font-bold"
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              {dept.name}
                            </button>
                          ))}
                        </DropdownPortal>
                      )}
                    </div>
                    {errors.department && (
                      <span className="text-[12px] font-bold text-[#E11D48] mt-2">
                        This field is required
                      </span>
                    )}
                  </div>

                  {/* Role custom dropdown */}
                  <div
                    className={`flex flex-col ${fieldClass}`}
                    style={fieldStyle(3)}
                  >
                    <label
                      className={`text-[14px] font-bold mb-2 transition-colors ${errors.role ? "text-[#E11D48]" : "text-[#374151]"}`}
                    >
                      Role <span className="text-[#E11D48]">*</span>
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        disabled={roles.length === 0}
                        onClick={toggleRoleOpen}
                        className={`w-full border rounded-lg py-3 px-4 text-sm text-left flex items-center justify-between transition-all bg-[#F8FAFC] disabled:opacity-50 disabled:cursor-not-allowed ${
                          errors.role
                            ? "border-[#E11D48] ring-1 ring-[#E11D48]"
                            : roleOpen
                              ? "border-brand-primary"
                              : "border-gray-200"
                        }`}
                      >
                        <span
                          className={
                            formData.role ? "text-gray-900" : "text-gray-400"
                          }
                        >
                          {formData.role
                            ? roles.find((r) => r.id === formData.role)?.title
                            : roles.length === 0
                              ? "Select department first"
                              : "Select Role"}
                        </span>
                        <svg
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${roleOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {roleOpen && roles.length > 0 && (
                        <DropdownPortal
                          anchorRect={roleRect}
                          onClose={() => setRoleOpen(false)}
                        >
                          {roles.map((role) => (
                            <button
                              key={role.id}
                              type="button"
                              onClick={() => {
                                handleInputChange("role", role.id);
                                setRoleOpen(false);
                                if (errors.role)
                                  setErrors((prev) => ({
                                    ...prev,
                                    role: false,
                                  }));
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                                formData.role === role.id
                                  ? "bg-[#EEF2FF] text-brand-primary font-bold"
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              {role.title}
                            </button>
                          ))}
                        </DropdownPortal>
                      )}
                    </div>
                    {errors.role && (
                      <span className="text-[12px] font-bold text-[#E11D48] mt-2">
                        This field is required
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div
                    className={`flex flex-col ${fieldClass}`}
                    style={fieldStyle(4)}
                  >
                    <label
                      className={`text-[14px] font-bold mb-2 transition-colors ${errors.phone ? "text-[#E11D48]" : "text-[#374151]"}`}
                    >
                      Phone Number <span className="text-[#E11D48]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-0 transition-all bg-[#F8FAFC] ${errors.phone ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
                    />
                    {errors.phone && (
                      <span className="text-[12px] font-bold text-[#E11D48] mt-2">
                        {!formData.phone
                          ? "Required"
                          : "Phone number must be at least 11 digits"}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div
                    className={`flex flex-col md:col-span-2 ${fieldClass}`}
                    style={fieldStyle(5)}
                  >
                    <label
                      className={`text-[14px] font-bold mb-2 transition-colors ${errors.email ? "text-[#E11D48]" : "text-[#374151]"}`}
                    >
                      Email <span className="text-[#E11D48]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`w-full border rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-0 transition-all bg-[#F8FAFC] ${errors.email ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200"}`}
                    />
                    {errors.email && (
                      <span className="text-[12px] font-bold text-[#E11D48] mt-2">
                        Required
                      </span>
                    )}
                  </div>

                  {/* Document Upload */}
                  <div
                    className={`flex flex-col md:col-span-2 relative ${fieldClass}`}
                    style={fieldStyle(6)}
                  >
                    <label
                      className={`text-[14px] font-bold mb-2 transition-colors ${errors.cv ? "text-[#E11D48]" : "text-black"}`}
                    >
                      Document Upload <span className="text-[#E11D48]">*</span>
                    </label>
                    <div className="relative group">
                      <input
                        placeholder="Upload CV"
                        type="file"
                        accept=".pdf"
                        onChange={(e) =>
                          handleInputChange("cv", e.target.files?.[0] || null)
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      {formData.cv ? (
                        <div
                          className={`w-full border rounded-lg p-6 bg-linear-to-br from-[#F8FAFC] to-white transition-all ${errors.cv ? "border-[#E11D48] ring-1 ring-[#E11D48]" : "border-gray-200 border-2"}`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                              <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M3.9985 2C3.44749 2 3 2.44405 3 2.9918V21.0082C3 21.5447 3.44476 22 3.9934 22H20.0066C20.5551 22 21 21.5489 21 20.9925L20.9997 7L16 2H3.9985ZM10.5 7.5H12.5C12.5 9.98994 14.6436 12.6604 17.3162 13.5513L16.8586 15.49C13.7234 15.0421 10.4821 16.3804 7.5547 18.3321L6.3753 16.7191C7.46149 15.8502 8.50293 14.3757 9.27499 12.6534C10.0443 10.9373 10.5 9.07749 10.5 7.5ZM11.1 13.4716C11.3673 12.8752 11.6043 12.2563 11.8037 11.6285C12.2754 12.3531 12.8553 13.0182 13.5102 13.5953C12.5284 13.7711 11.5666 14.0596 10.6353 14.4276C10.8 14.1143 10.9551 13.7948 11.1 13.4716Z" />
                              </svg>
                            </div>
                            <div className="grow min-w-0">
                              <p className="font-semibold text-[#111827] truncate">
                                {formData.cv.name}
                              </p>
                              <p className="text-[#94A3B8] text-xs mt-1">
                                {(formData.cv.size / 1024).toFixed(2)} KB •{" "}
                                {formData.cv.type}
                              </p>
                            </div>
                            <button
                              title="remove"
                              type="button"
                              onClick={() => handleInputChange("cv", null)}
                              className="shrink-0 text-gray-400 hover:text-red-600 transition-colors p-1"
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
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center w-full border-2 rounded-lg py-16 px-8 bg-white text-sm group-hover:border-brand-primary group-hover:scale-[1.01] transition-all border-dashed border-gray-200">
                          <span className="text-[#94A3B8] size-6 mb-3 group-hover:scale-110 transition-transform duration-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 12.5858L16.2426 16.8284L14.8284 18.2426L13 16.415V22H11V16.413L9.17157 18.2426L7.75736 16.8284L12 12.5858ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z" />
                            </svg>
                          </span>
                          <span className="font-bold text-[#111827] text-center">
                            Choose File
                          </span>
                        </div>
                      )}
                    </div>
                    <span
                      className={`text-[12px] mt-2 font-medium ${errors.cv ? "text-[#E11D48]" : "text-[#94A3B8]"}`}
                    >
                      {errors.cv ? "Required" : "File should be in pdf"}
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <div className={`${fieldClass}`} style={fieldStyle(7)}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-primary text-white rounded-lg font-bold text-[15px] shadow-lg hover:opacity-90 hover:shadow-xl hover:-translate-y-px transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit CV/Resume"}
                  </button>
                </div>
              </form>
            </>
          )}

          {/* Close Button */}
          <button
            title="close"
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-200 p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
