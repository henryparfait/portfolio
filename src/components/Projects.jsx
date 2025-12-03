import { FolderGit2, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Rwanda Cancer Relief",
      tech: ["React", "Node.js", "PostgreSQL"],
      desc: "Architected a full-stack telemedicine portal featuring secure user authentication (JWT) and a real-time appointment scheduling system to bridge the gap in oncology support.",      
      link: "https://rcr-one.vercel.app/", // You can add your GitHub link later
    },
    {
      title: "MediTrack Rwanda",
      tech: ["MERN Stack", "HealthTech", "API"],
      desc: "Developed a medication adherence tracker with automated SMS reminders and a provider dashboard, designed specifically for low-bandwidth mobile environments.",
      link: "https://medi-track-rwanda.vercel.app/login",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <FolderGit2 size={24} />
                </div>
                <a href={project.link} className="text-slate-400 hover:text-white transition">
                  <ExternalLink size={20} />
                </a>
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="text-xs font-medium bg-slate-900 text-primary px-3 py-1 rounded-full border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;