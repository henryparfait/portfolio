import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-primary">
          Get In Touch
        </h2>
        
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          I am currently looking for new opportunities in <span className="font-bold">Software Engineering</span> and <span className="font-bold">AI Innovation</span>. 
          Whether you have a question, a project idea, or just want to discuss the future of HealthTech in Africa, my inbox is always open!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            {/* Email Box */}
            <div className="flex items-center gap-3 text-slate-300">
                <Mail className="text-primary" />
                <span>henrychrisp23@gmail.com</span>
            </div>
            
            {/* Location Box */}
            <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="text-primary" />
                <span>Kigali, Rwanda</span>
            </div>
        </div>

        <a 
          href="mailto:henrychrisp23@gmail.com"
          className="inline-block bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Say Hello 👋
        </a>
      </div>
    </section>
  );
};

export default Contact;