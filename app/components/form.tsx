import Link from "next/link";
export default function Form() {
  return (
    <div className="w-auto h-auto px-4 sm:px-6 md:px-8 lg:px-10 ">
      <div className="container mx-auto flex flex-col md:flex-row px-5 lg:px-0 gap-8 lg:gap-29 max-w-6xl  ">
        
        {/* LEFT TEXT */}
        <div className="flex flex-col mt-6 gap-0">
          <h1 className="text-3xl lg:text-[40px] font-extrabold uppercase leading-13">Register Your Interest</h1>
          <p className="text-[#111111]/80 text-base ">
            Please register your details below to submit your interest.
          </p>
        </div>

        {/* FORM */}
        <div className="w-full lg:w-138.5 border border-[#EEEEEE] rounded-xl p-5 bg-white flex flex-col gap-4">
          
          <form
            action="/api/form"   // where data will go
            method="POST"
            className="flex flex-col w-full max-w-2xl gap-4"
          >

            {/* First + Last Name */}
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label className="mb-1 text-base font-medium text-black">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input name="firstName" placeholder="Jhon" type="text" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full placeholder:text-gray-400 focus:outline-none focus:border-gray-300"/>
              </div>

              <div className="flex flex-col w-1/2">
                <label className="mb-1 text-base font-medium text-black">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input name="lastName" placeholder="Doe" type="text" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full placeholder:text-gray-400 focus:outline-none focus:border-gray-300"/>
              </div>
            </div>

            {/* Email + Phone */}
          
              < div className="flex flex-col gap-2 ">
                <label className="mb-1 text-base font-medium text-black">
                  Email <span className="text-red-500">*</span>
                </label>
                <input name="email" placeholder="you@example.com" type="email" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full placeholder:text-gray-400 focus:outline-none focus:border-gray-300"/>
              <div/>

              <div className="flex flex-col ">
                <label className="mb-1 text-base font-medium text-black">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input name="phone" placeholder="50 123 4567" type="text" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full placeholder:text-gray-400 focus:outline-none focus:border-gray-300"/>
              </div>
            </div>

            {/* Country
            <div className="flex flex-col">
              <label className="mb-1 text-base font-medium text-black">
                Country <span className="text-red-500">*</span>
              </label>
              <input name="country" placeholder="Country" type="text" required className="border border-gray-300 rounded-md px-4 py-2 w-full"/>
            </div> */}

            {/* Project */}
            <div className="flex flex-col">
              <label className="mb-1 text-base font-medium text-black">
                Project of Interest <span className="text-red-500">*</span>
              </label>
              <input name="project" placeholder="Artistry One Residences" type="text" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full placeholder:text-gray-400 focus:outline-none focus:border-gray-300"/>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-1 text-base font-medium text-black">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea name="message" placeholder="How can we help?" required className="border border-gray-300 rounded-[10px] pl-4 pr-4 py-4 text-[14px] w-full h-30 resize-none placeholder:text-gray-400 focus:outline-none focus:border-gray-300 "></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mb-2">
              <input name="agree" type="checkbox" required className="w-4 h-4" />
            <label className="text-sm text-black">
              I agree to{" "}
              <Link href="/terms" className="underline ">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
            </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="text-white bg-[#4B2417] px-6 py-3  h-15 rounded-md font-medium text-[16px] w-full h-12 flex items-center justify-center">
              Submit
            </button>

          </form>
        </div>
        </div>
        </div>
  );
}