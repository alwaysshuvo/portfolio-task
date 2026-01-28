import Image from "next/image";

export default function Resume() {
  return (
    <section className="w-full bg-[#171B1A] py-24">
      <h2 className="text-center text-[48px] font-bold text-white mb-20">
        Resume
      </h2>

      {/* Left Empty Content */}
      <div className="flex">
        {/* Left empty space = hero image width */}
        <div className="w-[525px]"></div>

        {/* Right content */}
        <div className="flex-1 pr-16">
          {/*Education */}
          <div className="mb-24 relative pl-16">
            {/* Stick */}
            <div className="absolute left-6 top-12 h-[85%] w-[2px] bg-[#2a2f2e]"></div>

            {/* Title */}
            <div className="flex items-center gap-3 mb-10">
              <Image
                src="/icons/education.png"
                alt="edu"
                width={32}
                height={32}
              />
              <h3 className="text-white font-semibold text-[24px]">
                Education
              </h3>
            </div>

            {/* Item 1 */}
            <div className="relative mb-12">
              <span className="absolute left-[-28px] top-2 w-3 h-3 bg-[#F5BD4D] rounded-full"></span>

              <span className="inline-block mb-3 px-3 py-1 text-[14px] rounded-[16px] border border-white text-text">
                2016–2020
              </span>

              <div className="bg-[#1a1e1d] rounded-xl p-6 border border-[#2a2f2e]">
                <h4 className="text-[18px] gradient-text font-bold">
                  Harvard University
                </h4>
                <p className="text-sm text-[##8F8F8F] mb-3">
                  B.A. and M.S. in Computer Science
                </p>
                <div className="w-full border-b border-[1px] border-[#222222] mb-3"></div>

                <p className="text-[16px] text-white leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut commodi earum eligendi ipsum, laborum maiores mollitia,
                  optio quam quis rerum totam voluptas.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative">
              <span className="absolute left-[-28px] top-2 w-3 h-3 gradient-bg rounded-full"></span>

              <span className="inline-block mb-3 px-3 py-1 text-[14px] rounded-[16px] border border-white text-text">
                2014–2016
              </span>

              <div className="bg-[#1a1e1d] rounded-xl p-6 border border-[#2a2f2e]">
                <h4 className="text-[18px] gradient-text font-bold">
                  Helwan University
                </h4>
                <p className="text-sm text-[##8F8F8F] mb-3">Bachelor Degree</p>

                <div className="w-full border-b border-[1px] border-[#222222] mb-3"></div>

                <p className="text-[16px] text-white leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut commodi earum eligendi ipsum, laborum maiores mollitia,
                  optio quam quis rerum totam voluptas.
                </p>
              </div>
            </div>
          </div>

          {/*  Work History */}
          <div className="relative pl-16">
            {/* Stick */}
            <div className="absolute left-6 top-12 h-[85%] w-[2px] bg-[#2a2f2e]"></div>

            {/* Title */}
            <div className="flex items-center gap-3 mb-10">
              <Image
                src="/icons/work-history.png"
                alt="work"
                width={32}
                height={32}
              />
              <h3 className="text-white font-semibold text-[24px]">
                Work History
              </h3>
            </div>

            {/* Item 1 */}
            <div className="relative mb-12">
              <span className="absolute left-[-28px] top-2 w-3 h-3 gradient-bg rounded-full"></span>

              <span className="inline-block mb-3 px-3 py-1 text-[14px] rounded-[16px] border border-white text-text">
                2019–2023
              </span>

              <div className="bg-[#1a1e1d] rounded-xl p-6 border border-[#2a2f2e]">
                <h4 className="text-[18px] gradient-text font-bold">UI/UX Design</h4>
                <p className="text-sm text-[##8F8F8F] mb-3">Web Site Design</p>
                <div className="w-full border-b border-[1px] border-[#222222] mb-3"></div>
                <p className="text-[16px] text-white leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab
                  aut commodi earum eligendi ipsum, laborum maiores mollitia,
                  optio quam quis rerum totam voluptas.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative">
              <span className="absolute left-[-28px] top-2 w-3 h-3 gradient-bg rounded-full"></span>

              <span className="inline-block mb-3 px-3 py-1 text-[14px] rounded-[16px] border border-white text-text">
                2017–2019
              </span>

              <div className="bg-[#1a1e1d] rounded-xl p-6 border border-[#2a2f2e]">
                <h4 className="text-[18px] gradient-text font-bold">
                  Junior Web Designer
                </h4>
                <p className="text-[##8F8F8F] mb-3">Product Design</p>
                <div className="w-full border-b border-[1px] border-[#222222] mb-3"></div>
                <p className="text-[16px] text-white leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab
                  aut commodi earum eligendi ipsum, laborum maiores mollitia,
                  optio quam quis rerum totam voluptas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
