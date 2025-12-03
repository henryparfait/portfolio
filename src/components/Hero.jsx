import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-dark to-slate-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h2 className="text-primary font-bold text-xl md:text-2xl tracking-wide uppercase mb-4">
          Hi, I'm Henry Parfait 👋
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Infrastructure for AI</span> in Africa.
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Full-Stack Engineer & HealthTech Advocate.
          Transforming complex problems into scalable, accessible digital solutions.
        </p>

        <div className="mb-8">
            <a 
              href="/./src/assets/Henry's_IT_Resume.pdf"
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Download CV <div className="animate-bounce">↓</div>
              </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/henryparfait" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 border border-slate-700 rounded-full hover:bg-slate-800 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/henry-christian-parfait-uhiriwe-2a6340238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Update this later
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 border border-slate-700 rounded-full hover:bg-slate-800 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:henrychrisp23@gmail.com" 
            className="p-4 border border-slate-700 rounded-full hover:bg-slate-800 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;