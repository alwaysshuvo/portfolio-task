"use client";
import Image from "next/image";
import { useState } from "react";
import PortfolioFilter from "./portfolio-filter"; 

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Figma Mockup",
      subtitle: "Figma mockup PSD editable",
      image: "/images/portfolio-1.png",
      aspectRatio: 332 / 332,
      category: "Graphic Design",
    },
    {
      id: 2,
      title: "Phone Design",
      subtitle: "Mobile UI Design",
      image: "/images/portfolio-3.png",
      aspectRatio: 332 / 447,
      category: "Mobile App",
    },
    {
      id: 3,
      title: "Interior Design",
      subtitle: "Home Design Project",
      image: "/images/portfolio-6.png",
      aspectRatio: 332 / 204,
      category: "UI/UX Design",
    },
    {
      id: 4,
      title: "Website design",
      subtitle: "Fitness Studio Website",
      image: "/images/portfolio-8.png",
      aspectRatio: 332 / 204,
      category: "UI/UX Design",
    },
    {
      id: 5,
      title: "Portfolio Item",
      subtitle: "Design Project",
      image: "/images/portfolio-2.png",
      aspectRatio: 332 / 248,
      category: "Graphic Design",
    },
    {
      id: 6,
      title: "Watch Design",
      subtitle: "Wearable Design",
      image: "/images/portfolio-4.png",
      aspectRatio: 332 / 220,
      category: "Mobile App",
    },
    {
      id: 7,
      title: "Mug Design",
      subtitle: "Product Mockup",
      image: "/images/portfolio-5.png",
      aspectRatio: 332 / 220,
      category: "Graphic Design",
    },
    {
      id: 8,
      title: "Website design",
      subtitle: "Fitness Studio Website",
      image: "/images/portfolio-7.png",
      aspectRatio: 332 / 260,
      category: "UI/UX Design",
    },
    {
      id: 9,
      title: "Photography",
      subtitle: "Photography Project",
      image: "/images/portfolio-9.png",
      aspectRatio: 332 / 204,
      category: "Photography",
    },
  ];

  // ✅ filter logic
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  
  const leftColumn = filteredProjects.slice(0, 4);
  const rightColumn = filteredProjects.slice(4);

  return (
    <section className="w-full bg-[#171B1A] py-24 px-4">
      <h2 className="text-center text-[48px] font-bold text-white mb-8">
        Portfolio
      </h2>

      {/* ✅ filter component call */}
      <PortfolioFilter onChange={setActiveCategory} />

      {/* Two Columns */}
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {leftColumn.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {rightColumn.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}


function Card({ item }) {
  return (
    <div
      className="relative group rounded-lg overflow-hidden bg-[#1a1e1d]"
      style={{ aspectRatio: item.aspectRatio }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
        <h3 className="text-white font-bold text-lg text-center">
          {item.title}
        </h3>
        <p className="text-[#f59e0b] text-sm mt-1">
          {item.subtitle}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
        <h4 className="text-white text-sm font-semibold">
          {item.title}
        </h4>
        <p className="text-gray-400 text-xs">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}
