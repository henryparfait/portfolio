import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CoffeeChat from "./components/CoffeeChat"; // Import it

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <CoffeeChat /> {/* The Bot lives here, outside the flow */}
    </div>
  );
}

export default App;