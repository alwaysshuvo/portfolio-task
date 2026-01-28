export default function Skills() {
  const skillsData = [
    {
      name: "UI/UX Design",
      percentage: 95,
    },
    {
      name: "Photography",
      percentage: 90,
    },
    {
      name: "Creativity",
      percentage: 80,
    },
    {
      name: "Team Work",
      percentage: 95,
    },
    {
      name: "Web Design",
      percentage: 95,
    },
  ];

  return (
    <section id="skills" className="w-full bg-[#171B1A] py-12 md:py-24">
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-[48px] font-bold text-white mb-12 md:mb-20 px-4">
        Skills
      </h2>

      {/* Main Layout (like Resume) */}
      <div className="flex flex-col md:flex-row">
        {/* Left empty space = hero image width */}
        <div className="hidden md:block md:w-[525px]"></div>

        {/* Right content */}
        <div className="flex-1 md:pr-16 px-4 md:px-0">
          <div className="max-w-3xl">
            {skillsData.map((skill, index) => (
              <div key={index} className="mb-8 md:mb-12">
                {/* Skill Name and Percentage */}
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <h3 className="text-white font-semibold text-base md:text-lg">
                    {skill.name}
                  </h3>
                  <span className="gradient-text font-bold text-base md:text-lg">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 md:h-3 bg-[#2a2f2e] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#F5BD4D] to-[#F89222] rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
