import Image from "next/image";

const socialIcons = [
  { name: "facebook", label: "Facebook" },
  { name: "linkedin", label: "LinkedIn" },
  { name: "pintrest", label: "Pinterest" },
  { name: "instagram", label: "Instagram" },
  { name: "twitter", label: "Twitter" },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full flex flex-col md:flex-row items-center justify-center bg-[#171B1A] min-h-screen md:h-[calc(100vh-80px)] py-12 md:py-0 px-4 md:px-0 gap-8 md:gap-0">

      {/* Left Section - Profile Image */}
      <div className="relative w-full md:w-[370px] flex-shrink-0">
        {/* Image box */}
        <div className="bg-black w-full md:w-[370px] h-[300px] md:h-[470px] overflow-hidden rounded-lg md:rounded-none">
          <Image
            src="/images/Hero.png"
            alt="Daryl Smith - Profile Photo"
            width={370}
            height={460}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        {/* Icons bar  */}
        <div
          className="
           w-full h-[60px]
            bg-black
            flex items-center justify-center gap-4
            rounded-b-lg md:rounded-none
          "
          role="navigation"
          aria-label="Social media links"
        >
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              href="#"
              aria-label={`Follow on ${icon.label}`}
              className="w-8 h-8 rounded-full bg-[#1f1f1f]
                         flex items-center justify-center 
                         hover:bg-[#F5BD4D] transition focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
            >
              <Image
                src={`/icons/${icon.name}.png`}
                alt=""
                width={14}
                height={14}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Middle Content */}
      <div className="flex-1 flex flex-col justify-center max-w-full md:max-w-[640px] md:ml-16">
        <p className="gradient-text font-bold mb-4 tracking-widest text-xs md:text-sm">
          INTRODUCTION
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
          I&apos;m a Creative Developer &amp; <br className="hidden md:block" />
          UI/UX Design Expert
        </h1>

        <p className="text-white font-bold mb-5 text-sm md:text-base">
          24 years / Robert Smith / UK London
        </p>

        <p className="max-w-2xl font-medium text-sm md:text-base leading-relaxed tracking-normal text-gray-300 mb-8">
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
             text-sm md:text-[16px] font-bold text-white
             px-4 md:px-6 py-2 md:py-3 rounded-full
             gradient-bg focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
            aria-label="Download CV"
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
              aria-hidden="true"
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
      
      {/* Right Vertical Bar - Hidden on Mobile */}
      <div className="hidden md:flex absolute right-0 bottom-0 h-[433px] w-[92px] z-10 flex-col items-center">
        {/* Vertical line image */}
        <div className="relative w-full h-full">
          <Image
            src="/images/vertical-line.png"
            alt=""
            aria-hidden="true"
            fill
            className="object-contain object-bottom scale-x-[-1]"
          />
        </div>
        <p
          className="text-center justify-center items-center absolute right-2 top-1/2 -translate-y-1/2 
                rotate-90 origin-right
                text-[#A5A5A5] text-[10px] tracking-widest whitespace-nowrap mt-15 mr-8"
        >
          © design by themeshifter developed by gethugothemes
        </p>
        {/* Language Switch - Overlay */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
          <button
            className="w-[32px] h-[32px] rounded-full bg-[#2A2A2A] text-white flex items-center justify-center text-sm cursor-pointer hover:bg-[#3a3a3a] focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
            aria-label="Switch to French"
          >
            Fr
          </button>
          <button
            className="w-[32px] h-[32px] rounded-full bg-[#F5BD4D] text-black flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-[#f59e0b] focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
            aria-label="Switch to English"
          >
            En
          </button>
        </div>
      </div>
    </section>
  );
}
