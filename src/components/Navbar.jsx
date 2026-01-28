"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-40 w-full h-12 md:h-16 flex items-center justify-between px-4 md:px-8 bg-[##121414] border-b border-[#1f2a25]">
      <div className="flex flex-col">
        <h1 className="text-xl md:text-[32px] leading-[100%] font-bold">
          Daryl <span className="text-[#f59e0b]">Smith</span>
        </h1>

        <p className="text-xs md:text-[18px] leading-[100%] font-normal text-[#C2C2C2]">
          UI/UX designer
        </p>
      </div>

      {/* Middle: Home */}
      <button onClick={handleHomeClick} className="hidden md:flex items-center gap-2 cursor-pointer hover:opacity-80 transition" aria-label="Scroll to top">
        <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-br from-[#F5BD4D] to-[#F89222]">
          <Image
            src="/icons/home.png"
            width={18}
            height={18}
            alt="Home icon"
            className="brightness-0 invert"
          />
        </div>

        <span className="text-[24px] leading-[100%] font-bold text-white">
          Home
        </span>
      </button>

      {/* Right: Button */}
      <div className="relative inline-block">
  {/* glow layer */}
  <div className="absolute inset-0 rounded-[24px] blur-[2px] 
    bg-gradient-to-r from-[#F5BD4D] to-[#F89222] opacity-70">
  </div>

  {/* button */}
  <button
    className="
      relative
      text-[16px] leading-[100%] font-bold
      text-[#F5BD4D]
      px-4 py-3
      rounded-[24px]
      bg-[#171B1A]
      border border-transparent
      [background:linear-gradient(#171B1A,#171B1A)_padding-box,linear-gradient(90deg,#F5BD4D,#F89222)_border-box]
    "
  >
    Talk To Me
  </button>
</div>

    </nav>
  );
}
