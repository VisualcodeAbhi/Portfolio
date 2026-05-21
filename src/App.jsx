import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Sleek Landing Page Projects Preview Banner Section
const ProjectsPreviewSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent text-center overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-neonViolet px-3 py-1 rounded-full bg-neonViolet/10 border border-neonViolet/20 select-none">
          Interactive Showroom
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white">
          Enter the <span className="gradient-text font-black">Digital Showroom</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          Experience real-world applications (Luxe Jewelers, Buyroute, ShopWay) rendered inside macOS browser mockups and floating iPhone screens with interactive 3D physics.
        </p>
        <div className="pt-4">
          <a
            href="#/projects"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-neonViolet to-neonBlue text-white font-bold text-sm tracking-wide shadow-glowBlue hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Explore Dedicated Projects Page</span>
            <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [hash, setHash] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || "#/");
      // Instantly scroll to top when toggling pages
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isProjectsPage = hash === "#/projects";

  return (
    <div className="relative min-h-screen bg-obsidian text-slate-100 font-sans selection:bg-neonViolet/30 selection:text-white overflow-hidden">
      {/* Decorative ambient neon background mesh glow blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-neonViolet/5 glow-blob" />
        <div className="absolute top-[30%] right-20 w-[600px] h-[600px] bg-neonBlue/5 glow-blob" style={{ animationDelay: "-5s" }} />
        <div className="absolute bottom-[20%] left-10 w-[550px] h-[550px] bg-neonCyan/5 glow-blob" style={{ animationDelay: "-10s" }} />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-neonViolet/5 glow-blob" style={{ animationDelay: "-15s" }} />
      </div>

      {/* Floating Header Navbar (knows active path) */}
      <Navbar currentPath={hash} />

      {/* Main Orchestration Routing */}
      {isProjectsPage ? (
        <main className="relative z-10 pt-16">
          <Projects />
        </main>
      ) : (
        <main className="relative z-10">
          <div id="home"><Hero /></div>
          <div id="about"><About /></div>
          <div id="services"><Services /></div>
          <ProjectsPreviewSection />
          <div id="skills"><Skills /></div>
          <div id="testimonials"><Testimonials /></div>
          <div id="contact"><Contact /></div>
        </main>
      )}

      {/* Sleek Footer Brand */}
      <Footer isProjectsPage={isProjectsPage} />
    </div>
  );
}
