"use client";
import { useState } from "react";

export default function PortfolioFilter({ onChange }) {
  const categories = [
    "All",
    "Graphic Design",
    "Mobile App",
    "Photography",
    "UI/UX Design",
  ];

  const [active, setActive] = useState("All");

  const handleClick = (cat) => {
    setActive(cat);
    onChange(cat);
  };

  return (
    <div className="flex justify-center mb-8"> {/* margin কমানো */}
      {/* Outer pill */}
      <div className="bg-gradient-to-b from-[#0c0c0c] to-[#000000] 
                      rounded-2xl px-10 py-4 
                      flex gap-12 
                      border border-[#1f1f1f]
                      max-w-3xl w-full justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={`relative text-base font-medium transition-colors
              ${
                active === cat
                  ? "text-[#F5BD4D]"
                  : "text-gray-300 hover:text-white"
              }`}
          >
            {cat}

            {/* underline */}
            {active === cat && (
              <span className="absolute left-0 -bottom-[8px] w-full h-[3px] bg-[#F5BD4D] rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
