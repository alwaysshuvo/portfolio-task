import Image from "next/image";

export default function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      badge: "Intro",
      price: "$29",
      features: [
        { name: "Interface Design", included: true },
        { name: "Front-end Code", included: true },
        { name: "Back-end Development", included: true },
        { name: "Search Engine Optimization", included: false },
        { name: "Awesome Support", included: false },
        { name: "Responsive site", included: false },
        { name: "Easy-to-use", included: false },
        { name: "Useful site", included: false },
        { name: "Speedy web", included: false },
      ],
    },
    {
      id: 2,
      badge: "Base",
      price: "$49",
      features: [
        { name: "Interface Design", included: true },
        { name: "Front-end Code", included: true },
        { name: "Back-end Development", included: true },
        { name: "Search Engine Optimization", included: true },
        { name: "Awesome Support", included: false },
        { name: "Responsive site", included: false },
        { name: "Easy-to-use", included: false },
        { name: "Useful site", included: false },
        { name: "Speedy web", included: false },
      ],
    },
    {
      id: 3,
      badge: "Popular",
      price: "$99",
      features: [
        { name: "Interface Design", included: true },
        { name: "Front-end Code", included: true },
        { name: "Back-end Development", included: true },
        { name: "Search Engine Optimization", included: true },
        { name: "Awesome Support", included: true },
        { name: "Responsive site", included: true },
        { name: "Easy-to-use", included: false },
        { name: "Useful site", included: false },
        { name: "Speedy web", included: false },
      ],
    },
    {
      id: 4,
      badge: "Enterprise",
      price: "$199",
      features: [
        { name: "Interface Design", included: true },
        { name: "Front-end Code", included: true },
        { name: "Back-end Development", included: true },
        { name: "Search Engine Optimization", included: true },
        { name: "Awesome Support", included: true },
        { name: "Responsive site", included: true },
        { name: "Easy-to-use", included: true },
        { name: "Useful site", included: true },
        { name: "Speedy web", included: true },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#171B1A] py-24">
      {/* Title */}
      <h2 className="text-center text-[48px] font-bold text-white mb-20">
        Pricing
      </h2>

      {/* Left empty + Right content (like Skills/Resume) */}
      <div className="flex">
        {/* Left empty space */}
        <div className="w-[525px]"></div>

        {/* Right content */}
        <div className="flex-1 pr-16">
          <div className="max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-black rounded-lg p-6 border border-[#2a2f2e] "
                >
                  {/* Badge */}
                  <div className="mb-6 text-left">
                    <span
                      className="inline-block  px-5 py-2 ml-[-22px] text-white text-[16px] font-bold rounded-r-full rounded-l-md bg-[linear-gradient(90deg,#4A300E_0%,#4A2E0D_100%)]



"
                    >
                      {plan.badge}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-white text-5xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-white text-[18px]">/month</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span
                          className={`text-[16px] ${
                            feature.included
                              ? "text-white"
                              : "text-[#979797] line-through"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    className="  py-3 px-4 rounded-lg border border-[#F5BD4D] text-[#F5BD4D] font-semibold bg-transparent hover:text-white hover:shadow-[0_0_20px_rgba(245,189,77,0.4)]
  "
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
