"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Linkedin, ChevronDown } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "Technical Lead",
  "Django Specialist",
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "2", label: "Global Companies" },
  { value: "150+", label: "Countries Served" },
];

const techPills = [
  { label: "Python", color: "text-yellow-400 border-yellow-500/25 bg-yellow-500/8" },
  { label: "Django", color: "text-green-400 border-green-500/25 bg-green-500/8" },
  { label: "React", color: "text-cyan-400 border-cyan-500/25 bg-cyan-500/8" },
  { label: "PostgreSQL", color: "text-blue-400 border-blue-500/25 bg-blue-500/8" },
  { label: "Docker", color: "text-sky-400 border-sky-500/25 bg-sky-500/8" },
  { label: "REST APIs", color: "text-violet-400 border-violet-500/25 bg-violet-500/8" },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90);
    } else if (!deleting && displayed.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb-1 absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="orb-2 absolute bottom-[15%] right-[10%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="orb-3 absolute top-[55%] left-[55%] w-[300px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col gap-7">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-cyan-500/25 bg-cyan-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-cyan-400 text-sm font-medium">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]"
          >
            <span className="text-slate-50">Hasnat </span>
            <span className="gradient-text">Ahmad</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-1 h-10"
          >
            <span className="text-2xl sm:text-3xl text-slate-300 font-light">
              {displayed}
            </span>
            <span className="cursor-blink text-cyan-400 text-3xl font-light leading-none">
              |
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-slate-400 text-lg max-w-2xl leading-relaxed"
          >
            Full stack engineer specializing in{" "}
            <span className="text-slate-200">scalable web platforms</span> and{" "}
            <span className="text-slate-200">backend systems</span>. Expert in fintech
            and SaaS — turning complex requirements into clean, production-ready software.
          </motion.p>

          {/* Tech pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {techPills.map((pill) => (
              <span
                key={pill.label}
                className={`px-3 py-1 text-xs font-medium rounded-full border ${pill.color}`}
              >
                {pill.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-cyan-500 text-gray-950 font-bold rounded-xl hover:bg-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
            >
              View My Work
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
            >
              <Download size={16} />
              Get In Touch
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <a
              href="mailto:haxnat07@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-800 text-slate-500 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
            >
              <Mail size={17} />
            </a>
            <a
              href="https://linkedin.com/in/hasnat-ahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-800 text-slate-500 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
            >
              <Linkedin size={17} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-slate-800/80"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-cyan-400">{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
