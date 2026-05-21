import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#/projects" },
  { name: "Skills", href: "#skills" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ currentPath }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const isProjectsRoute = currentPath === "#/projects";

  useEffect(() => {
    // If we are on the projects showroom route, fix navigation indicator to "Projects"
    if (isProjectsRoute) {
      setActiveSection("Projects");
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section tracker for home page anchors
      const sections = navItems
        .map((item) => {
          if (item.href.includes("/")) return null; // Skip non-local anchors
          const el = document.querySelector(item.href);
          if (el) {
            const rect = el.getBoundingClientRect();
            return {
              name: item.name,
              top: rect.top + window.scrollY - 150,
              bottom: rect.bottom + window.scrollY - 150,
            };
          }
          return null;
        })
        .filter(Boolean);

      const scrollPos = window.scrollY;
      const current = sections.find(
        (sec) => scrollPos >= sec.top && scrollPos < sec.bottom
      );
      if (current) {
        setActiveSection(current.name);
      }
    };

    // Trigger handleScroll once on mount to capture direct hash entries (e.g. /#about)
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath, isProjectsRoute]);

  const resolveHref = (item) => {
    if (item.href === "#/projects") return "#/projects";
    if (isProjectsRoute) {
      return `/${item.href}`; // returns e.g. /#about
    }
    return item.href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-[#050507]/80 backdrop-blur-lg border-b border-white/5 shadow-premium"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Brand */}
          <a href={isProjectsRoute ? "/#home" : "#home"} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-neonViolet to-neonBlue flex items-center justify-center shadow-glowBlue transition-transform duration-300 group-hover:scale-105">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white select-none">
              Abhi <span className="text-neonBlue">Web</span>
              <span className="text-neonViolet">Dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            <div className="flex items-center gap-1 bg-white/[0.02] border border-white/[0.04] p-1.5 rounded-full backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={resolveHref(item)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                    activeSection === item.name
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {activeSection === item.name && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-neonViolet/20 to-neonBlue/20 border border-neonViolet/30 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              ))}
            </div>
            
            <a
              href={isProjectsRoute ? "/#contact" : "#contact"}
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-neonViolet to-neonBlue hover:shadow-glowIndigo hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-premium transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Project
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation System */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[70px] z-40 bg-[#050507]/98 backdrop-blur-2xl border-t border-white/5 lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-[70vh] gap-6 px-6">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                  href={resolveHref(item)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-display font-medium tracking-wide transition-colors ${
                    activeSection === item.name
                      ? "text-neonBlue"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                href={isProjectsRoute ? "/#contact" : "#contact"}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-xs mt-4 py-3 text-center bg-gradient-to-r from-neonViolet to-neonBlue hover:shadow-glowIndigo hover:brightness-110 text-white font-bold rounded-xl transition-all duration-300"
              >
                Start Project
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
