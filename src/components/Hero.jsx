import Image from "next/image";

const socialIcons = [
  "facebook",
  "linkedin",
  "pintrest",
  "instagram",
  "twitter",
];

export default function Hero() {
  return (
    <section className="w-full flex items-center bg-[#171B1A]">
      {/* Left Section */}
      <div className="relative w-[370px]">
        {/* Image box */}
        <div className="bg-black w-[370px] h-[460px] overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="profile"
            width={370}
            height={460}
            className="object-cover"
          />
        </div>

        {/* Icons bar  */}
        <div
          className="
           bottom-0 left-0
            w-full h-[60px]
            bg-black
            flex items-center justify-center gap-4
          "
        >
          {socialIcons.map((icon) => (
            <div
              key={icon}
              className="w-8 h-8 rounded-full bg-[#1f1f1f]
                         flex items-center justify-center 
                         hover:bg-[#F5BD4D] transition"
            >
              <Image
                src={`/icons/${icon}.png`}
                alt={icon}
                width={14}
                height={14}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Middle Content */}
      <div className="flex-1 flex flex-col justify-center max-w-[640px] ml-16">
        <p className="gradient-text font-bold mb-3 tracking-widest">
          INTRODUCTION
        </p>

        <h1 className="text-[48px] font-bold mb-5 text-white leading-tight">
          I&apos;m a Creative Developer &amp; <br />
          UI/UX Design Expert
        </h1>

        <p className=" text-white font-bold mb-4">
          24 years / Robert Smith / UK London
        </p>

        <p className="w-[591px] h-[147px] font-['DM_Sans'] font-medium text-[16px] leading-[100%] tracking-[0%] text-[#C6C6C6] mb-8">
          Prolific, full stack web developer with a passion for metrics and
          beating former "best-yets. Prototyped 25 new product features per year
          for Flexor, Inc. Decreased rework by 22% and costs by 15%.
          Consistently receive high user experience scores for all web
          development projects, including a 55% increase for Flexor, Inc.
          Passionate about building world class web applications. One of my
          sites received a 2020 Webby for Best Navigation and Structure.
        </p>

        {/* Button */}
        <div className="relative inline-block w-fit">
          <div className="absolute inset-0 rounded-[24px] blur-[2px] gradient-glow opacity-70"></div>

          <button
            className="relative flex items-center gap-2 
             text-[16px] font-bold text-white
             px-6 py-3 rounded-full
             gradient-bg"
          >
            Download CV
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* ===== Right Vertical Bar (Image Based) ===== */}
      <div className="absolute right-0 top-0 h-full w-[80px] flex flex-col items-center justify-between py-10 z-20">
        {/* Vertical line image */}
        <div className="relative w-[92px] h-[433px] bottom-0">
          <Image
            src="/images/vertical-line.png"
            alt="vertical line"
            fill
            className="object-contain object-bottom scale-x-[-1]"
          />
        </div>

        {/* Language Switch */}
        <div className="absolute bottom-0 flex flex-col items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-[#2A2A2A] text-white flex items-center justify-center text-sm cursor-pointer">
            Fr
          </div>
          <div className="w-10 h-10 rounded-full bg-[#F5BD4D] text-black flex items-center justify-center text-sm font-bold cursor-pointer">
            En
          </div>
        </div>
      </div>
    </section>
  );
}
