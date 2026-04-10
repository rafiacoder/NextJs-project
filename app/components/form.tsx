"use client";
import Link from "next/link";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";


export default function Form() {
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [loading, setLoading] = useState(false);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 10000);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      project: formData.get("project")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        showToast("Your interest has been registered successfully!", "success");
        e.target.reset();
      } else {
        showToast(result.message || "Something went wrong.", "error");
      }
    } catch (error) {
      showToast("Network error. Please try again.", "error");
    }

    setLoading(false);
  };

  return (
    <div className="w-auto h-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="container mx-auto flex flex-col md:flex-row px-5 lg:px-0 gap-8 lg:gap-29 max-w-6xl">
        {/* LEFT TEXT */}
        <div className="flex flex-col mt-6 gap-0">
          <h1 className="text-3xl lg:text-[40px] font-extrabold uppercase leading-13">
            Register Your Interest
          </h1>
          <p className="text-[#111111]/80 text-base">
            Please register your details below to submit your interest.
          </p>
        </div>

        {/* FORM */}
        <div className="w-full lg:w-138.5 border border-[#EEEEEE] rounded-xl p-5 bg-white flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-2xl gap-4">

            {/* First + Last Name */}
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label className="mb-1 text-base font-medium text-black">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input name="firstName" placeholder="Jhon" type="text" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full placeholder:text-gray-400 focus:outline-none focus:border-gray-300" />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="mb-1 text-base font-medium text-black">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input name="lastName" placeholder="Doe" type="text" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full placeholder:text-gray-400 focus:outline-none focus:border-gray-300" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="mb-1 text-base font-medium text-black">
                Email <span className="text-red-500">*</span>
              </label>
              <input name="email" placeholder="you@example.com" type="email" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full placeholder:text-gray-400 focus:outline-none focus:border-gray-300" />
            </div> {/* ✅ Fixed: was <div/> before */}

            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-1 text-base font-medium text-black">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input name="phone" placeholder="50 123 4567" type="text" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full placeholder:text-gray-400 focus:outline-none focus:border-gray-300" />
            </div>

            {/* Project */}
            <div className="flex flex-col">
              <label className="mb-1 text-base font-medium text-black">
                Project of Interest <span className="text-red-500">*</span>
              </label>
              <input name="project" placeholder="Artistry One Residences" type="text" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full placeholder:text-gray-400 focus:outline-none focus:border-gray-300" />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-1 text-base font-medium text-black">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea name="message" placeholder="How can we help?" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full h-30 resize-none placeholder:text-gray-400 focus:outline-none focus:border-gray-300" />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mb-2">
              <input name="agree" type="checkbox" required className="w-4 h-4" />
              <label className="text-sm text-black">
                I agree to{" "}
                <Link href="/terms" className="underline">Terms & Conditions</Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline">Privacy Policy</Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`text-white px-6 py-3 rounded-md font-medium w-full h-12 flex items-center justify-center ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#4B2417] hover:bg-[#3a1b12]"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-0 right-6 z-80 rounded-md flex items-start gap-3 px-5 py-4 shadow-lg border transition-all duration-500 ${
            toast.type === "success"
              ? "bg-[#4B2417]/95 text-white"
              : "bg-white text-black "
          }`}
          style={{ minWidth: "300px" }}
        >
          <div className="mt-0.5 text-lg">{toast.type === "success" ? "✓" : "✕"}</div>
          <div className="flex flex-col gap-0.5">
            <p className="font-semibold tracking-wide text-sm uppercase">
              {toast.type === "success" ? "Success" : "Error"}
            </p>
            <p className="text-sm opacity-80">{toast.message}</p>
          </div>
          <button onClick={() => setToast(null)} className="flex justify-center items-center ml-auto opacity-60 hover:opacity-100 text-lg leading-none">
             <RxCrossCircled className="w-6 h-6 " />
          </button>
        </div>
      )}
    </div>
  );
}