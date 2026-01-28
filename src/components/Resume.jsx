import Image from "next/image";

export default function Resume() {
  return (
    <section className="w-full bg-[#171B1A] py-24 px-16">
      <h2 className="text-center text-3xl font-bold text-white mb-20">
        Resume
      </h2>

      <div className="max-w-[900px] mx-auto relative pl-20">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 h-full w-[2px] bg-[#2a2f2e]"></div>

        {/* ================= Education ================= */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <Image
              src="/icons/education.png"
              alt="education"
              width={22}
              height={22}
            />
            <h3 className="text-[#F5BD4D] font-semibold text-lg">
              Education
            </h3>
          </div>

          {/* Item 1 */}
          <div className="relative mb-12">
            <span className="absolute left-[-38px] top-2 w-3 h-3 bg-[#F5BD4D] rounded-full"></span>

            <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-[#1f1f1f] text-gray-300">
              2016–2020
            </span>

            <div className="bg-[#1a1e1d] rounded-xl p-6 border border-[#2a2f2e]">
              <h4 className="text-[#F5BD4D] font-semibold">
                Harvard University
              </h4>
              <p className="text-sm text-gray-400 mb-3">
                B.A. and M.S. in Computer Science
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ab aut commodi earum eligendi ipsum, laborum maiores mollitia,
                optio quam quis rerum totam voluptas.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative">
            <span className="absolute left-[-38px] top-2 w-3 h-3 bg-[#F5BD4D] rounded-full"></span>

            <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-[#1f1f1f] text-gray-300">
              2014–2016
            </span>

            <div className="bg-[#1a1e1d] rounded-xl p-6 border border-[#2a2f2e]">
              <h4 className="text-[#F5BD4D] font-semibold">
                Helwan University
              </h4>
              <p className="text-sm text-gray-400 mb-3">
                Bachelor Degree
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ab aut commodi earum eligendi ipsum, laborum maiores mollitia,
                optio quam quis rerum totam voluptas.
              </p>
            </div>
          </div>
        </div>

        {/* ================= Work History ================= */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Image
              src="/icons/work-history.png"
              alt="work-history"
              width={22}
              height={22}
            />
            <h3 className="text-[#F5BD4D] font-semibold text-lg">
              Work History
            </h3>
          </div>

          {/* Item 1 */}
          <div className="relative mb-12">
            <span className="absolute left-[-38px] top-2 w-3 h-3 bg-[#F5BD4D] rounded-full"></span>

            <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-[#1f1f1f] text-gray-300">
              2019–2023
            </span>

            <div className="bg-[#1a1e1d] rounded-xl p-6 border border-[#2a2f2e]">
              <h4 className="text-[#F5BD4D] font-semibold">
                UI/UX Design
              </h4>
              <p className="text-sm text-gray-400 mb-3">
                Web Site Design
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ab aut commodi earum eligendi ipsum, laborum maiores mollitia,
                optio quam quis rerum totam voluptas.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative">
            <span className="absolute left-[-38px] top-2 w-3 h-3 bg-[#F5BD4D] rounded-full"></span>

            <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-[#1f1f1f] text-gray-300">
              2017–2019
            </span>

            <div className="bg-[#1a1e1d] rounded-xl p-6 border border-[#2a2f2e]">
              <h4 className="text-[#F5BD4D] font-semibold">
                Junior Web Designer
              </h4>
              <p className="text-sm text-gray-400 mb-3">
                Product Design
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ab aut commodi earum eligendi ipsum, laborum maiores mollitia,
                optio quam quis rerum totam voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
