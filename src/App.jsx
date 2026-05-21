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
import { Sparkles } from "lucide-react";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#/";
      setCurrentPath(hash);

      // Smooth scroll handling for standard home page anchors
      if (hash && hash !== "#/projects" && hash !== "#/") {
        // Strip out hash routing prefix if navigating back to home section
        const sectionId = hash.startsWith("#/") ? hash.replace("#/", "#") : hash;
        if (sectionId && sectionId !== "#") {
          try {
            const targetEl = document.querySelector(sectionId);
            if (targetEl) {
              setTimeout(() => {
                targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 150);
            }
          } catch (e) {
            console.error("Failed to query selector:", sectionId, e);
          }
        }
      } else if (hash === "#/projects" || hash === "#/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Trigger on initial mount to catch direct links (e.g. user opens portfolio/#/projects)
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isProjectsPage = currentPath === "#/projects";

  return (
    <div className="relative min-h-screen bg-obsidian text-slate-100 font-sans selection:bg-neonViolet/30 selection:text-white overflow-hidden">
      {/* Decorative ambient neon background mesh glow blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-neonViolet/5 glow-blob" />
        <div className="absolute top-[30%] right-20 w-[600px] h-[600px] bg-neonBlue/5 glow-blob" style={{ animationDelay: "-5s" }} />
        <div className="absolute bottom-[20%] left-10 w-[550px] h-[550px] bg-neonCyan/5 glow-blob" style={{ animationDelay: "-10s" }} />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-neonViolet/5 glow-blob" style={{ animationDelay: "-15s" }} />
      </div>

      {/* Floating Header Navbar */}
      <Navbar currentPath={currentPath} />

      {/* Conditional Layout Routing */}
      {isProjectsPage ? (
        // Dedicated Project Showroom Page
        <main className="relative z-10 pt-20">
          <Projects />
        </main>
      ) : (
        // Main Biography and Inquiry Landing Page
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />

          {/* Premium Digital Showroom Teaser Card */}
          <section className="py-24 px-6 md:px-12 bg-transparent relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.04)_0%,transparent_60%)] pointer-events-none" />
            <div className="max-w-4xl mx-auto border border-white/5 bg-[#09090c]/85 rounded-[2.5rem] p-10 md:p-16 shadow-premium relative z-10 overflow-hidden">
              {/* Dynamic top gradient accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonViolet to-neonBlue" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neonViolet/10 border border-neonViolet/20 text-neonViolet text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Featured Engineering Work</span>
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tight leading-tight">
                Enter The Interactive <span className="gradient-text font-black">Digital Showroom</span>
              </h3>
              
              <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8 font-light">
                Explore real responsive previews, realistic browser mockups, floating iPhone overlays, custom 3D tilt coordinates, and live performance stats in my dedicated full-screen projects showroom.
              </p>

              <a
                href="#/projects"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-neonViolet to-neonBlue text-white font-bold text-sm tracking-wide rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Enter Projects Showroom</span>
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </section>

          <Skills />
          <Testimonials />
          <Contact />
        </main>
      )}

      {/* Sleek Footer Brand */}
      <Footer currentPath={currentPath} />
    </div>
  );
}
