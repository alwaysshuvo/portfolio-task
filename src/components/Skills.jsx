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
    <section className="w-full bg-[#171B1A] py-24">
      {/* Section Title */}
      <h2 className="text-center text-[48px] font-bold text-white mb-20">
        Skills
      </h2>

      {/* Main Layout (like Resume) */}
      <div className="flex">
        {/* Left empty space = hero image width */}
        <div className="w-[525px]"></div>

        {/* Right content */}
        <div className="flex-1 pr-16">
          <div className="max-w-3xl">
            {skillsData.map((skill, index) => (
              <div key={index} className="mb-12">
                {/* Skill Name and Percentage */}
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-semibold text-lg">
                    {skill.name}
                  </h3>
                  <span className="gradient-text font-bold text-lg">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-[#2a2f2e] rounded-full overflow-hidden">
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
