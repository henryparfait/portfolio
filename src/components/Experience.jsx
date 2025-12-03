import { Briefcase, GraduationCap, HeartHandshake } from "lucide-react";

const Experience = () => {
  const events = [
    {
      year: "Jun 2025 - Jul 2025",
      title: "Software Developer Intern",
      org: "Algorithm Inc. (Ishyiga Software)",
      desc: "Engineered a high-performance React frontend, reducing page load times and ensuring accessibility compliance for diverse local user groups. Collaborated in an Agile team to ship features 20% faster.",      icon: <Briefcase size={20} />,
      type: "work"
    },
    {
      year: "2024 - Present",
      title: "BSc Software Engineering",
      org: "African Leadership University",
      desc: "Specializing in Web Engineering & AI. Leadership Core facilitator. Mission: Building accessible healthcare infrastructure for Africa.",
      icon: <GraduationCap size={20} />,
      type: "edu"
    },
    {
      year: "2023",
      title: "Volunteer Coach",
      org: "iDebate Rwanda",
      desc: "Mentored 20+ students in critical thinking and public speaking. Organized tournaments and fostered youth leadership.",
      icon: <HeartHandshake size={20} />,
      type: "vol"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-dark text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center text-primary">
          My Journey
        </h2>
        
        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-6 space-y-12">
          {events.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* The Timeline Dot */}
              <div className="absolute -left-[11px] top-0 h-6 w-6 rounded-full bg-slate-900 border-2 border-primary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <div className="scale-75">
                    {item.icon}
                </div>
              </div>

              {/* Date */}
              <span className="text-sm text-primary font-mono mb-1 block">
                {item.year}
              </span>

              {/* Content Card */}
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-slate-600 transition">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <h4 className="text-slate-400 text-sm font-semibold mb-3">
                  {item.org}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;