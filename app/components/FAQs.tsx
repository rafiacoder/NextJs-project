import Button from "./button";
import { IoIosAddCircle } from "react-icons/io";

const faqItems = [
  {
    question: "Where is Artistry One Residences located?",
    answer:
      "Artistry One Residences is located in Dubai Design District (d3), minutes from Downtown Dubai and DIFC.",
  },
  {
    question: "Who is the developer of Artistry One Residences?",
    answer:
      "The developer is ONE GROUP, a Dubai-based developer focused on premium residential and mixed-use projects.",
  },
  {
    question: "What types of residences are available at Artistry One Residences?",
    answer:
      "Artistry One offers studio, 1, 2 and 3 bedroom residences designed for urban living with premium finishes.",
  },
  {
    question: "What is the starting price at Artistry One Residences?",
    answer:
      "Starting prices are competitive for the Dubai Design District and vary by unit type and floor level.",
  },
  {
    question: "What payment plan does Artistry One Residences offer?",
    answer:
      "Flexible payment plans are available; please contact sales for the latest options and terms.",
  },
];

export default function FAQs() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto lg:max-w-6xl flex flex-col gap-10">
        <div className="flex flex-col items-start lg:items-center text-center gap-3">
          <h1 className="text-5xl font-semibold">FAQs</h1>
          <p className="font-body text-sm  lg:text-[16px] font-normal text-[#252525]/80 mb-10">
            Project specific frequently asked questions.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 py-6 text-left text-lg font-medium text-gray-900 ">
                <span className="avenir-bold">{item.question}</span>
                <span className="flex  items-center justify-center rounded-full bg-white ">
                  <IoIosAddCircle className="w-6 h-6 text-gray-200" />
                </span>
              </summary>
              <div className="px-5 pb-4 pt-0 text-md text-gray-600 ">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row  justify-center items-center gap-4 pt-6 ">
          <Button
            text="Register Your Interest"
            href="/resources"
            className="bg-[#4B2417] text-white border-0 px-12 "
          />
          <Button
            text="Read More FAQs"
            href="/contact"
            className="border border-black bg-white text-gray-700 px-14  "
          />
        </div>
      </div>
    </div>
  );
}