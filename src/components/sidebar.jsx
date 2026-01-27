"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const menu = [
  { id: 1, icon: "/icons/home.png", path: "/" },
  { id: 2, icon: "/icons/profile-about.png", path: "/about" },
  { id: 3, icon: "/icons/portfolio.png", path: "/portfolio" },
  { id: 4, icon: "/icons/blog.png", path: "/blog" },
  { id: 5, icon: "/icons/contact.png", path: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-[72px] min-h-screen bg-gradient-to-b from-[#1f2a24] via-[#0f1412] to-[#050807] border-r border-[#1f2a25] flex-col py-6">
      
      {/* Icons container */}
      <div className="flex flex-col gap-4 mt-20 items-center">
        {menu.map((item) => {
          const isActive = pathname === item.path;

          return (
            <div
              key={item.id}
              className={`w-8 h-8 flex items-center justify-center rounded-md cursor-pointer transition
                ${
                  isActive
                    ? "bg-[#f59e0b] shadow-md"
                    : "hover:bg-[#1f2a25]"
                }
              `}
            >
              <Image
                src={item.icon}
                width={18}
                height={18}
                alt="icon"
                className={isActive ? "brightness-0 invert" : "opacity-80"}
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
}
