"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Shield } from "lucide-react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type ColorKey = "cyan" | "violet" | "emerald";

const projects: {
  title: string;
  subtitle: string;
  description: string;
  Icon: LucideIcon;
  color: ColorKey;
  highlights: string[];
  tech: string[];
  image?: string;
  imageAlt?: string;
  url?: string;
  imageType?: "web" | "mobile";
}[] = [
  {
    title: "eLoad",
    subtitle: "Global Mobile Recharge Platform",
    description:
      "A worldwide top-up platform supporting 750+ operators across 150 countries. Features zero-fee transactions, a 'Green Credit' in-app currency system, and end-to-end encrypted payment security.",
    Icon: Globe,
    color: "cyan",
    highlights: ["750+ operators", "150 countries", "Zero-fee transactions"],
    tech: ["Django", "React", "PostgreSQL", "Payment APIs", "Encryption"],
    image: "/eload-preview.png",
    imageAlt: "eLoad mobile app — dashboard showing GCR balance, top-up and transactions",
    imageType: "mobile",
  },
  {
    title: "SignalTrace",
    subtitle: "AI Sales Intelligence System",
    description:
      "An AI-powered sales intelligence platform with automated lead tracking workflows, behavioural analytics dashboards, and real-time pipeline insights for revenue teams.",
    Icon: Zap,
    color: "violet",
    highlights: ["AI-powered", "Automated workflows", "Behavioural analytics"],
    tech: ["Python", "Django", "AI/ML", "React", "PostgreSQL"],
    image: "/signaltrace-preview.png",
    imageAlt: "SignalTrace — How It Works section showing the 4-step prospect workflow",
    url: "signaltrace.app",
  },
  {
    title: "Safe Bill",
    subtitle: "Secure Billing & Transactions",
    description:
      "A compliance-ready billing and transaction management system with financial transparency at its core. Includes role-based access control, full audit logging, and hardened backend security.",
    Icon: Shield,
    color: "emerald",
    highlights: ["RBAC", "Audit logging", "Compliance-ready"],
    tech: ["Django", "PostgreSQL", "REST APIs", "Security", "Docker"],
    image: "/safebill-preview.png",
    imageAlt: "Safe Bill — homepage showing the professional finder platform with secure payments",
    url: "safebill.app",
  },
];

const colorMap: Record<
  ColorKey,
  {
    gradient: string;
    border: string;
    hoverBorder: string;
    iconBg: string;
    icon: string;
    tag: string;
    chip: string;
    glow: string;
    browserBar: string;
    dot: string;
  }
> = {
  cyan: {
    gradient: "from-cyan-500/10 to-blue-500/5",
    border: "border-cyan-500/15",
    hoverBorder: "hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    icon: "text-cyan-400",
    tag: "bg-cyan-500/8 text-cyan-300 border-cyan-500/20",
    chip: "bg-slate-800/70 text-slate-300",
    glow: "group-hover:shadow-cyan-500/10",
    browserBar: "bg-slate-800/80",
    dot: "bg-cyan-500/40",
  },
  violet: {
    gradient: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/15",
    hoverBorder: "hover:border-violet-500/40",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    icon: "text-violet-400",
    tag: "bg-violet-500/8 text-violet-300 border-violet-500/20",
    chip: "bg-slate-800/70 text-slate-300",
    glow: "group-hover:shadow-violet-500/10",
    browserBar: "bg-slate-800/80",
    dot: "bg-violet-500/40",
  },
  emerald: {
    gradient: "from-emerald-500/10 to-green-500/5",
    border: "border-emerald-500/15",
    hoverBorder: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    icon: "text-emerald-400",
    tag: "bg-emerald-500/8 text-emerald-300 border-emerald-500/20",
    chip: "bg-slate-800/70 text-slate-300",
    glow: "group-hover:shadow-emerald-500/10",
    browserBar: "bg-slate-800/80",
    dot: "bg-emerald-500/40",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative bg-slate-950/60">
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 text-slate-50">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-4 max-w-md mx-auto text-sm">
            Production systems I&apos;ve built across fintech and SaaS domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {projects.map((proj, i) => {
            const c = colorMap[proj.color];
            const { Icon } = proj;
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.13, duration: 0.55 }}
                className={`group relative flex flex-col bg-gradient-to-br ${c.gradient} border ${c.border} ${c.hoverBorder} rounded-2xl transition-all duration-300 shadow-lg ${c.glow} hover:scale-[1.02] hover:-translate-y-1 overflow-hidden`}
              >
                {/* Screenshot preview — web (browser frame) or mobile (phone frame) */}
                {proj.image && proj.imageType !== "mobile" && (
                  <div className="relative w-full">
                    {/* Browser chrome */}
                    <div className={`flex items-center gap-1.5 px-3 py-2.5 ${c.browserBar} border-b border-white/5`}>
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                      <div className="ml-2 flex-1 h-4 rounded bg-slate-700/50 flex items-center px-2">
                        <span className="text-[9px] text-slate-500 truncate">
                          {proj.url ?? proj.title.toLowerCase().replace(/\s/g, "") + ".app"}
                        </span>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <Image
                        src={proj.image}
                        alt={proj.imageAlt ?? proj.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div
                        className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                        style={{ background: "linear-gradient(to bottom, transparent, rgba(15,10,30,0.7))" }}
                      />
                    </div>
                  </div>
                )}

                {/* Mobile phone frame */}
                {proj.image && proj.imageType === "mobile" && (
                  <div className={`flex justify-center items-end pt-5 pb-0 px-6 ${c.browserBar} border-b border-white/5`}>
                    {/* Phone shell */}
                    <div className="relative w-28 rounded-t-2xl overflow-hidden border-2 border-slate-600/60 shadow-xl shadow-black/40"
                      style={{ aspectRatio: "9/16" }}>
                      {/* Status bar notch */}
                      <div className="absolute top-0 inset-x-0 h-4 bg-black/40 z-10 flex items-center justify-center">
                        <div className="w-8 h-1.5 rounded-full bg-slate-700" />
                      </div>
                      <Image
                        src={proj.image}
                        alt={proj.imageAlt ?? proj.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="112px"
                      />
                      {/* Bottom fade */}
                      <div
                        className="absolute inset-x-0 bottom-0 h-10 pointer-events-none z-10"
                        style={{ background: "linear-gradient(to bottom, transparent, rgba(15,10,30,0.85))" }}
                      />
                    </div>
                  </div>
                )}

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Icon + title row */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${c.iconBg}`}
                    >
                      <Icon size={18} className={c.icon} />
                    </div>
                    <div>
                      <h3 className="text-slate-50 font-bold text-lg leading-snug">
                        {proj.title}
                      </h3>
                      <p className={`text-xs font-medium ${c.icon}`}>
                        {proj.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {proj.description}
                  </p>

                  {/* Highlight chips */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.highlights.map((h) => (
                      <span
                        key={h}
                        className={`px-2.5 py-1 text-xs rounded-lg font-medium ${c.chip}`}
                      >
                        ✦ {h}
                      </span>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 text-[11px] rounded border ${c.tag}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
