import bed1 from "../../public/bed1.png";
import bed2 from "../../public/bed2.png";
import bed3 from "../../public/bed3.png";
import bed4 from "../../public/bed4.png";
import PropertyCard from "./propertycard";
import Button from "./button";

export default function Property() {
  const cards = [
    { title: "1 Bedroom Apartments", living: "764 sq ft", price: "AED 2.2M", image: bed1, alt: "Floor plan 1 bedroom apartment" },
    { title: "2 Bedroom Apartments", living: "909 sq ft", price: "AED 2.7M", image: bed2, alt: "Floor plan 2 bedroom apartment" },
    { title: "3 Bedroom Apartments", living: "1,988 sq ft", price: "AED 6M", image: bed3, alt: "Floor plan 3 bedroom apartment" },
    { title: "4 Bedroom Penthouse", living: "7,755 sq ft", price: "AED 17M", image: bed4, alt: "Floor plan 4 bedroom penthouse" },
  ];

  return (
   <section className="px-4 sm:px-6 md:px-10 lg:px-8 xl:px-14">
  <div className="mx-auto w-full">
    
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <h1 className="text-3xl sm:text-3xl tracking-wide font-semibold">PROPERTY TYPES</h1>
        <p className="text-[#252525]/80 font-body text-[13.5px] text-balance sm:text-base">
          227 residences with 1-3BR apartments & 4BR duplex penthouses,
          featuring open-plan living, floor-to-ceiling windows, and iconic city views.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-10 w-full md:w-auto">
        <Button
          text="Request Availability"
          href="/resources"
          className="whitespace-nowrap bg-[#4B2417] text-white border-0 w-full sm:w-auto px-12 h-9"
        />
        <Button
          text="Download All Floor Plans"
          href="/contact"
          className="whitespace-nowrap w-full sm:w-auto px-8"
        />
      </div>
    </div>

    {/* Cards Grid */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <PropertyCard key={card.title} {...card} />
      ))}
    </div>
  </div>
</section>);}