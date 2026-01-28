import Image from "next/image";

export default function Skills() {
  const skillsData = [
    {
      title: "Frontend Development",
      description: "React, Next.js, Tailwind CSS",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
    },
    {
      title: "UI/UX Design",
      description: "Figma, Prototyping, User Research",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
    },
    {
      title: "Backend Development",
      description: "Node.js, Express, Database Design",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
    },
    {
      title: "Full Stack Development",
      description: "End-to-end Application Development",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.",
    },
  ];

  return (
    <section className="w-full bg-[#171B1A] py-24 px-16">
      <h2 className="text-center text-3xl font-bold text-white mb-20">
        Skills
      </h2>

      <div className="max-w-[900px] mx-auto relative pl-20">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 h-full w-[2px] bg-[#2a2f2e]"></div>

        {/* Skills Timeline */}
        <div>
          {skillsData.map((skill, index) => (
            <div key={index} className="relative mb-12">
              {/* Circle Node */}
              <span className="absolute left-[-38px] top-2 w-3 h-3 bg-[#F5BD4D] rounded-full"></span>

              {/* Skill Card */}
              <div className="bg-[#1a1e1d] rounded-xl p-6 border border-[#2a2f2e]">
                <h4 className="text-[#F5BD4D] font-semibold">
                  {skill.title}
                </h4>
                <p className="text-sm text-gray-400 mb-3">
                  {skill.description}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {skill.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}