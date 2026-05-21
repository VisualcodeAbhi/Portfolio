import React from "react";
import { ArrowUp, Code2, Github, Linkedin, Mail } from "lucide-react";

export default function Footer({ isProjectsPage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030305] border-t border-white/5 py-12 px-6 md:px-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-neonViolet/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        {/* Branding Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href={isProjectsPage ? "/#home" : "#home"} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neonViolet to-neonBlue flex items-center justify-center shadow-glowBlue transition-transform duration-300 group-hover:scale-105">
              <Code2 className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="font-display font-bold text-base tracking-tight text-white">
              Abhi <span className="text-neonBlue">Web</span>
              <span className="text-neonViolet">Dev</span>
            </span>
          </a>
          <p className="text-[11px] text-slate-500 font-light mt-1 text-center md:text-left">
            Crafting premium interactive digital showcases for global startups.
          </p>
        </div>

        {/* Social Icons panel */}
        <div className="flex gap-4 text-slate-400">
          <a
            href="https://github.com/VisualcodeAbhi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/[0.01] border border-white/5 rounded-full hover:text-white hover:bg-white/[0.06] hover:shadow-glowBlue transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/[0.01] border border-white/5 rounded-full hover:text-white hover:bg-white/[0.06] hover:shadow-glowBlue transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a
            href="mailto:hello@abhiwebdeveloper.com"
            className="p-2 bg-white/[0.01] border border-white/5 rounded-full hover:text-white hover:bg-white/[0.06] hover:shadow-glowBlue transition-all duration-300"
            aria-label="Send Email"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>

        {/* Back to top button & copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.01] border border-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] text-slate-600 font-light mt-1">
            © {new Date().getFullYear()} Abhi Web Developer. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
