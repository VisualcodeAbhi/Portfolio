import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, FolderGit2, Star, X, Check, Laptop, Smartphone, Gauge, Award, Terminal } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luxe Jewelers",
    tagline: "Flagship Luxury Showcase",
    desc: "An ultra-premium gold-standard jewelry eCommerce experience designed with a rich obsidian-gold palette, immersive product grids, and responsive layouts that invite immediate customer interaction.",
    longDesc: "Luxe Jewelers is a flagship digital storefront designed to capture the ultimate premium essence of luxury brands. It features dynamic custom carousels, responsive slider navigation, micro-animations, and a highly polished shopping cart module. Engineered with strict focus on performance, accessibility, and high-fidelity styling.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      "Obsidian-gold high-fashion aesthetics",
      "Dynamic interactive hero product showcases",
      "Seamless shopping bag & checkout overlays",
      "Highly responsive mobile-first layouts",
      "Optimized load times with lazy-loaded image containers"
    ],
    performance: {
      score: 99,
      ux: "Elite",
      responsive: "A+",
      status: "Production Ready"
    },
    liveUrl: "https://luxe-jewelers-five.vercel.app/",
    githubUrl: "https://github.com/VisualcodeAbhi/Portfolio",
    desktopImg: "/projects/luxe_desktop.png",
    mobileImg: "/projects/luxe_mobile.png",
    theme: "gold",
    featured: true,
  },
  {
    id: 2,
    title: "Buyroute Marketplace",
    tagline: "Robust Flask + MySQL Engine",
    desc: "A multi-layered modern eCommerce platform featuring full backend relational database structures, custom administrative panels, shopping catalogs, and dynamic transaction flows.",
    longDesc: "Buyroute is a full-featured commercial engine built with a secure Flask micro-framework and a robust relational MySQL database. It supports active session management, user credentials hashing, dynamic product catalog management, item filters, search algorithms, and custom client shopping carts.",
    tech: ["Flask", "Python", "MySQL", "Tailwind CSS", "REST APIs"],
    features: [
      "Secure user authentication & credentials hashing",
      "Relational MySQL tables mapping products to categories",
      "Robust administrator inventory control dashboard",
      "Live order cart session tracking",
      "Interactive search optimization filtering"
    ],
    performance: {
      score: 96,
      ux: "Premium",
      responsive: "A+",
      status: "Build Completed"
    },
    liveUrl: "#contact",
    githubUrl: "https://github.com/VisualcodeAbhi/Portfolio",
    desktopImg: "/projects/buyroute_desktop.png",
    mobileImg: "/projects/buyroute_mobile.png",
    theme: "blue",
    featured: false,
  },
  {
    id: 3,
    title: "ShopWay Hub",
    tagline: "High-Speed Retail Platform",
    desc: "A client-side shopping application utilizing advanced React state management pipelines to maintain high-speed routing, robust product listings, and lightning-fast search capabilities.",
    longDesc: "ShopWay is built for speed and fluid user feedback. It utilizes high-end React state management to optimize inventory updates, search filters, and layout routing. Every page loading event is carefully calibrated to occur under 200ms, making it ideal for standard consumer shopping experiences.",
    tech: ["React.js", "Tailwind CSS", "Context API", "Responsive CSS"],
    features: [
      "Zero-latency product filtering and categorization",
      "Global app state managed via React Context APIs",
      "Optimized image scaling and container loading",
      "Clean modular checkout workflows",
      "Responsive design tailored for multiple viewport widths"
    ],
    performance: {
      score: 98,
      ux: "Premium",
      responsive: "A+",
      status: "Deployed"
    },
    liveUrl: "#contact",
    githubUrl: "https://github.com/VisualcodeAbhi/Portfolio",
    desktopImg: "/projects/shopway_desktop.png",
    mobileImg: "/projects/shopway_mobile.png",
    theme: "purple",
    featured: false,
  },
  {
    id: 4,
    title: "Bible Quiz App (Telugu)",
    tagline: "Interactive Gamified Quiz",
    desc: "A mobile-first quiz experience designed specifically for the Telugu language community, incorporating dynamic progress triggers, interactive scoring panels, and high fidelity audio integrations.",
    longDesc: "A custom interactive education and trivia dashboard that features full support for localized Telugu scripts, local storage progress caching, sound triggers, and a gamified score feedback panel. Designed to operate flawlessly on lower-end mobile devices.",
    tech: ["React.js", "Tailwind CSS", "Local Storage", "Audio API"],
    features: [
      "Full localization mapping for non-Latin fonts (Telugu)",
      "Persistent state caching utilizing browser LocalStorage",
      "Gamified responsive progress meters and sound integration",
      "High performance on lower-tier mobile hardware",
      "Clean visual cards with dynamic scoring details"
    ],
    performance: {
      score: 100,
      ux: "Elite",
      responsive: "A+",
      status: "Production Ready"
    },
    liveUrl: "#contact",
    githubUrl: "https://github.com/VisualcodeAbhi/Portfolio",
    desktopImg: "/projects/quiz_desktop.png",
    mobileImg: "/projects/quiz_mobile.png",
    theme: "cyan",
    featured: false,
  }
];

// Interactive Mouse Tilt Component for Mockups
const TiltMockup = ({ children, theme }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // range: -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // range: -0.5 to 0.5
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const glowColor =
    theme === "gold" ? "rgba(235, 208, 127, 0.25)" :
    theme === "blue" ? "rgba(6, 182, 212, 0.25)" :
    theme === "purple" ? "rgba(139, 92, 246, 0.25)" :
    "rgba(6, 182, 212, 0.25)";

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateY: isHovered ? coords.x * 16 : 0,
        rotateX: isHovered ? -coords.y * 16 : 0,
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative w-full cursor-pointer"
    >
      <div 
        className="absolute inset-0 bg-transparent rounded-2xl pointer-events-none transition-shadow duration-300"
        style={{
          boxShadow: isHovered 
            ? `0 25px 50px -12px ${glowColor}, 0 0 35px 2px ${glowColor}` 
            : "0 10px 30px -15px rgba(0,0,0,0.5)"
        }}
      />
      {children}
    </motion.div>
  );
};

// Realistic HTML/CSS Browser Mockup Frame
const BrowserMockup = ({ desktopImg, title, url }) => {
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl border border-white/10 bg-[#09090c] overflow-hidden flex flex-col justify-between shadow-2xl">
      {/* Top Browser Bar */}
      <div className="h-7 bg-neutral-950 border-b border-white/5 flex items-center px-4 justify-between select-none">
        {/* macOS Window Controls */}
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        {/* Address Bar */}
        <div className="flex-1 max-w-[280px] h-4 bg-white/5 border border-white/5 rounded-md flex items-center justify-center px-2">
          <span className="text-[9px] font-mono text-slate-500 tracking-wider truncate">
            {url}
          </span>
        </div>
        <div className="w-10" />
      </div>

      {/* Screen Container */}
      <div className="flex-1 relative overflow-hidden bg-neutral-900 group">
        <img
          src={desktopImg}
          alt={`${title} Desktop`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

// Overlapping Floating iPhone Mockup Frame
const MobileMockup = ({ mobileImg, title }) => {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-4 -right-4 md:-right-6 w-[100px] md:w-[125px] aspect-[9/18] rounded-[1.8rem] border-3 border-neutral-800 bg-[#060608] shadow-[0_15px_40px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col justify-between"
      style={{ zIndex: 10, transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
    >
      {/* Speaker Grill & Dynamic Island Notch */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-neutral-900 rounded-full flex items-center justify-center z-20">
        <span className="w-0.5 h-0.5 rounded-full bg-camera-lens/50 mr-1.5" />
        <span className="w-5 h-0.5 bg-neutral-800 rounded-full" />
      </div>

      {/* Screen Container */}
      <div className="flex-1 relative overflow-hidden pt-5">
        <img
          src={mobileImg}
          alt={`${title} Mobile`}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* iPhone Home Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-white/25 rounded-full z-20" />
    </motion.div>
  );
};

// Cinematic Fullscreen Project Details Modal
const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState("desktop"); // desktop or mobile

  if (!project) return null;

  const glowColor =
    project.theme === "gold" ? "from-amber-500/10 to-transparent" :
    project.theme === "blue" ? "from-cyan-500/10 to-transparent" :
    project.theme === "purple" ? "from-violet-500/10 to-transparent" :
    "from-cyan-500/10 to-transparent";

  const borderColor =
    project.theme === "gold" ? "border-amber-500/20" :
    project.theme === "blue" ? "border-cyan-500/20" :
    project.theme === "purple" ? "border-violet-500/20" :
    "border-cyan-500/20";

  const textThemeColor =
    project.theme === "gold" ? "text-amber-400" :
    project.theme === "blue" ? "text-cyan-400" :
    project.theme === "purple" ? "text-violet-400" :
    "text-cyan-400";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-[#09090c] p-6 md:p-10 shadow-2xl overflow-hidden"
      >
        {/* Dynamic Glowing Mesh */}
        <div className={`absolute top-0 left-0 right-0 h-[220px] bg-gradient-to-b ${glowColor} blur-3xl pointer-events-none`} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all shadow-md cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 mt-4">
          {/* Left Column: Visual Swapper */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Interactive Screen */}
            <div className="relative w-full aspect-[16/10] rounded-2xl border border-white/5 bg-[#050507] overflow-hidden shadow-premium">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={activeTab === "desktop" ? project.desktopImg : project.mobileImg}
                  alt={`${project.title} Preview`}
                  initial={{ opacity: 0, x: activeTab === "desktop" ? -25 : 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: activeTab === "desktop" ? 25 : -25 }}
                  transition={{ duration: 0.25 }}
                  className={`w-full h-full ${activeTab === "desktop" ? "object-cover object-top" : "object-contain py-4 px-2"}`}
                />
              </AnimatePresence>
            </div>

            {/* Thumbnail Tabs */}
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setActiveTab("desktop")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  activeTab === "desktop"
                    ? `bg-white/5 ${borderColor} ${textThemeColor}`
                    : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                <Laptop className="w-4 h-4" />
                <span>Desktop View</span>
              </button>
              <button
                onClick={() => setActiveTab("mobile")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  activeTab === "mobile"
                    ? `bg-white/5 ${borderColor} ${textThemeColor}`
                    : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Mobile View</span>
              </button>
            </div>
          </div>

          {/* Right Column: Performance Stats and Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className={`text-[10px] font-bold uppercase tracking-widest ${textThemeColor}`}>
                  {project.tagline}
                </span>
              </div>

              <h3 className="text-3xl font-extrabold font-display text-white tracking-tight">
                {project.title}
              </h3>

              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">
                {project.longDesc}
              </p>

              {/* Performance Indicator Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block">Performance</span>
                    <span className="text-xs md:text-sm font-bold text-white">{project.performance.score}/100</span>
                  </div>
                </div>

                <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block">UI/UX Level</span>
                    <span className="text-xs md:text-sm font-bold text-white">{project.performance.ux}</span>
                  </div>
                </div>

                <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block">Responsive</span>
                    <span className="text-xs md:text-sm font-bold text-white">{project.performance.responsive}</span>
                  </div>
                </div>

                <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block">Status</span>
                    <span className="text-xs md:text-sm font-bold text-white whitespace-nowrap">{project.performance.status}</span>
                  </div>
                </div>
              </div>

              {/* Feature Checklists */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-300 block mb-2 font-display">Key Engineering Features</span>
                <ul className="space-y-1.5 text-[11px] md:text-xs text-slate-400">
                  {project.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${textThemeColor}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions Footer */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r ${
                  project.theme === "gold" ? "from-[#ebd07f] to-[#c29d3c] text-neutral-950" :
                  project.theme === "blue" ? "from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)]" :
                  project.theme === "purple" ? "from-violet-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.2)]" :
                  "from-cyan-500 to-blue-600 text-white"
                } font-bold text-xs md:text-sm tracking-wide hover:brightness-110 transition-all`}
              >
                <span>Launch App</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Low-profile elegant glassmorphic GitHub button */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.06] text-slate-300 hover:text-white font-bold text-xs md:text-sm transition-all"
                title="Browse Repository Code"
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 bg-transparent overflow-hidden">
      {/* Decorative neon ambient gradient blobs */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-neonViolet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-neonBlue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neonViolet/10 border border-neonViolet/20 text-neonViolet text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Digital Showroom</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-4 text-white"
          >
            Creative <span className="gradient-text font-black">Engineering</span> Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mb-6"
          >
            Click on any project to explore interactive detailed stats, performance metrics, and responsive screen carousels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neonViolet to-neonBlue mx-auto rounded-full"
          />
        </div>

        {/* Alternate Asymmetrical Layout Showcase */}
        <div className="space-y-24 md:space-y-36">
          {projects.map((project, index) => {
            const isGold = project.theme === "gold";
            const isBlue = project.theme === "blue";
            const isPurple = project.theme === "purple";

            const borderHoverColor = 
              isGold ? "hover:border-amber-500/30" :
              isBlue ? "hover:border-cyan-500/30" :
              isPurple ? "hover:border-violet-500/30" :
              "hover:border-cyan-500/30";

            const textThemeColor = 
              isGold ? "text-amber-400" :
              isBlue ? "text-cyan-400" :
              isPurple ? "text-violet-400" :
              "text-cyan-400";

            const badgeThemeStyle =
              isGold ? "bg-amber-950/20 border-amber-500/20 text-[#ebd07f]" :
              isBlue ? "bg-cyan-950/20 border-cyan-500/20 text-cyan-400" :
              isPurple ? "bg-violet-950/20 border-violet-500/20 text-violet-400" :
              "bg-cyan-950/20 border-cyan-500/20 text-cyan-400";

            const btnThemeStyle =
              isGold ? "bg-gradient-to-r from-[#ebd07f] to-[#c29d3c] text-neutral-950 shadow-[0_0_20px_rgba(235,208,127,0.15)] hover:shadow-[0_0_30px_rgba(235,208,127,0.3)]" :
              isBlue ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]" :
              isPurple ? "bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]" :
              "bg-gradient-to-r from-cyan-500 to-blue-600 text-white";

            // If index is odd, we swap the order on larger displays (mockup on left, text on right)
            const isOdd = index % 2 !== 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#09090c]/80 p-8 md:p-12 shadow-premium grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-500 ${borderHoverColor}`}
              >
                {/* Visual Accent flares */}
                <div className={`absolute -top-12 -left-12 w-[250px] h-[250px] rounded-full blur-3xl pointer-events-none ${
                  isGold ? "bg-amber-500/5" :
                  isBlue ? "bg-cyan-500/5" :
                  isPurple ? "bg-violet-500/5" :
                  "bg-cyan-500/5"
                }`} />

                {/* Text Column - Alternating order based on isOdd */}
                <div className={`lg:col-span-6 space-y-6 ${isOdd ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-2 select-none">
                    <Star className={`w-4 h-4 fill-current ${textThemeColor} animate-pulse`} />
                    <span className={`text-xs font-bold uppercase tracking-widest ${textThemeColor}`}>
                      {project.tagline}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                    {project.desc}
                  </p>

                  {/* Showcase statistics badges */}
                  <div className="grid grid-cols-3 gap-3 bg-white/[0.01] border border-white/5 p-3 rounded-2xl select-none text-center">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono block">Performance</span>
                      <span className="text-sm font-bold text-white">{project.performance.score}%</span>
                    </div>
                    <div className="border-x border-white/5">
                      <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono block">UI/UX</span>
                      <span className="text-sm font-bold text-white">{project.performance.ux}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono block">Responsive</span>
                      <span className="text-sm font-bold text-white">{project.performance.responsive}</span>
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-2 select-none">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-medium rounded-lg border ${badgeThemeStyle}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Call to action anchors */}
                  <div className="flex items-center gap-4 pt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`flex items-center gap-2 px-6 py-3.5 rounded-xl ${btnThemeStyle} font-bold text-sm tracking-wide hover:brightness-110 transition-all duration-300 cursor-pointer`}
                    >
                      <span>Explore Showroom</span>
                      <Sparkles className="w-4 h-4" />
                    </button>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.06] text-slate-400 hover:text-white transition-all shadow-md"
                      title="Launch Live App"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* 3D Visual Mockup Column - Alternating order based on isOdd */}
                <div className={`lg:col-span-6 flex justify-center items-center ${isOdd ? "lg:order-1" : "lg:order-2"}`}>
                  <TiltMockup theme={project.theme}>
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="relative w-full max-w-[450px] p-2"
                    >
                      {/* Browser frame mockup */}
                      <BrowserMockup
                        desktopImg={project.desktopImg}
                        title={project.title}
                        url={project.liveUrl === "#contact" ? `local-dev/${project.title.toLowerCase().replace(/ /g, "-")}` : project.liveUrl.replace("https://", "")}
                      />

                      {/* iPhone mockup overlay */}
                      <MobileMockup
                        mobileImg={project.mobileImg}
                        title={project.title}
                      />
                    </div>
                  </TiltMockup>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Cinematic Modal details overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
