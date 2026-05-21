import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ currentPath }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const isProjectsPage = currentPath === "#/projects";

  const navItems = [
    { name: "Home", href: isProjectsPage ? "#/" : "#home" },
    { name: "About", href: isProjectsPage ? "#/about" : "#about" },
    { name: "Services", href: isProjectsPage ? "#/services" : "#services" },
    { name: "Projects", href: "#/projects" },
    { name: "Skills", href: isProjectsPage ? "#/skills" : "#skills" },
    { name: "Testimonials", href: isProjectsPage ? "#/testimonials" : "#testimonials" },
    { name: "Contact", href: isProjectsPage ? "#/contact" : "#contact" },
  ];

  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScrollState);
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  useEffect(() => {
    if (isProjectsPage) {
      setActiveSection("Projects");
      return;
    }

    const handleScroll = () => {
      const sections = navItems
        .filter((item) => item.name !== "Projects")
        .map((item) => {
          const el = document.querySelector(item.href);
          if (el) {
            const rect = el.getBoundingClientRect();
            return {
              name: item.name,
              top: rect.top + window.scrollY - 180,
              bottom: rect.bottom + window.scrollY - 180,
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

    // Run initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath, isProjectsPage]);

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
          <a href={isProjectsPage ? "#/" : "#home"} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-black flex items-center justify-center border border-white/10 shadow-glowBlue transition-transform duration-300 group-hover:scale-105 select-none">
              <img
                src="/logo.jpg"
                alt="Abhi Logo"
                className="w-full h-full object-cover"
                style={{ filter: "invert(1) hue-rotate(180deg)" }}
              />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
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
                  href={item.href}
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
              href="#contact"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-neonViolet to-neonBlue hover:shadow-glowIndigo hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-premium transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Project
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
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
                  href={item.href}
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
                href="#contact"
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
