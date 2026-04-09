import Features from "./features";
import body1 from "../../public/body1.png";
import body2 from "../../public/body2.png";
import body3 from "../../public/body3.png";

export default function Body() {
  const sections = [
    {
      title: "A LIVING COMPOSITION",
      image: body1,
      alt: "Living room",
      description: [
        "The development offers one, two and three bedroom residences, along with four-bedroom duplex penthouses, defined by purposeful lines and refined geometry that frame iconic views of the Burj Khalifa, the Downtown skyline and the Dubai Canal.",
        "A curated palette of materials, generous layouts and fluid connections between living spaces create homes that feel both expansive and grounded, supporting a lifestyle where comfort, clarity and contemporary design come together effortlessly.",
      ],
    },
    {
      title: "ELEVATION BY DESIGN",
      image: body2,
      alt: "Penthouse terrace",
      reverse: true,
      description: [
        "Located on the top levels, the duplex penthouses range from 4,638 to 7,765 sq. ft. and open onto generous terraces with private plunge pools, dual access points, and uninterrupted views across the city skyline.",
        "Among them, two signature residences elevate the experience even further, featuring exclusive rooftop terraces and private plunge pools that frame panoramic vistas.",
         "Defined by expansive volumes, seamless transitions, and a rare sense of seclusion, these residences offer an exceptional vantage point above the city, transforming daily living into an experience of clarity, presence, and distinction.",
      ],
    },
    {
      title: "RENEWAL AND CONNECTION",
      image: body3,
      alt: "Infinity pool",
      description: [
        "The amenities at Artistry One Residences are designed to enhance everyday living, bringing together wellness, leisure, and social spaces in a refined setting. From resident lounges and co-working areas to sun decks and family-friendly leisure zones, every detail supports a balanced lifestyle.",
        "At the pinnacle, a 21st-floor infinity lap pool and fully equipped fitness suite, complete with gym, training studio, sauna, steam room, and ice baths, elevate wellbeing with sweeping city views.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#E2DED2] py-4 md:py-16 px-4 sm:px-6 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-6xl xl:max-w-7xl flex-col gap-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="sticky top-24"
            style={{ zIndex: index + 1 }}
          >
            <Features {...section} />
          </div>
        ))}
      </div>
    </div>
  );
}