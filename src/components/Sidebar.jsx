"use client";

import Image from "next/image";

const menu = [
  { id: 1, icon: "/icons/home.png", section: "home", label: "Home" },
  { id: 2, icon: "/icons/profile-about.png", section: "skills", label: "Skills" },
  { id: 3, icon: "/icons/portfolio.png", section: "portfolio", label: "Portfolio" },
  { id: 4, icon: "/icons/blog.png", section: "blog", label: "Blog" },
  { id: 5, icon: "/icons/contact.png", section: "contact", label: "Contact" },
];

export default function Sidebar() {
  const handleNavigation = (section) => {
  const target = document.getElementById(section);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};


  return (
    <aside
      className="sticky top-0 hidden md:flex w-[72px] h-screen border-r border-[#1f2a25] flex-col py-6 bg-no-repeat bg-cover overflow-y-auto z-30"
      style={{
        backgroundImage: "url('/images/vertical-line.png')",
        backgroundSize: "92px 400px",
      }}
    >
      {/* Icons container */}
      <div className="flex flex-col gap-4 mt-20 items-center">
        {menu.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.section)}
              className="w-8 h-8 flex items-center justify-center rounded-md cursor-pointer transition hover:bg-[#1f2a25] focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
              aria-label={item.label}
              title={item.label}
            >
              <Image
                src={item.icon}
                width={18}
                height={18}
                alt={item.label}
                className="opacity-80 hover:opacity-100"
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
}
