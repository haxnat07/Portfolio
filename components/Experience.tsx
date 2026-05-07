"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

type ColorKey = "cyan" | "violet" | "sky";

const experiences: {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  color: ColorKey;
  bullets: string[];
  tech: string[];
}[] = [
  {
    role: "Backend Developer",
    company: "DineroHero",
    location: "United Kingdom · Remote",
    period: "Oct 2024 – Present",
    current: true,
    color: "cyan",
    bullets: [
      "Developed backend infrastructure for a UK-based financial platform.",
      "Implemented wallet services, secure transaction flows, and crypto gateway integration.",
      "Designed structured database models and financial record schemas.",
    ],
    tech: ["Python", "Django", "PostgreSQL", "Crypto APIs", "REST"],
  },
  {
    role: "Technical Project Manager",
    company: "FalconXoft",
    location: "Lahore, Pakistan",
    period: "Oct 2024 – Sept 2025",
    color: "violet",
    bullets: [
      "Led agile engineering teams across multiple web-based SaaS platforms.",
      "Owned the full project lifecycle from requirement gathering through to deployment.",
      "Oversaw scalable backend architecture decisions and API development standards.",
      "Coordinated UI, backend, and DevOps collaboration across cross-functional teams.",
    ],
    tech: ["Agile", "Scrum", "Jira", "Architecture", "API Design"],
  },
  {
    role: "Full Stack Developer",
    company: "FalconXoft",
    location: "Lahore, Pakistan",
    period: "Jan 2023 – Sept 2024",
    color: "sky",
    bullets: [
      "Built responsive web applications using Django and React.",
      "Designed secure REST APIs and optimised database query performance.",
      "Integrated third-party services including payment gateways.",
      "Improved overall system reliability, uptime, and page performance.",
    ],
    tech: ["Django", "React", "PostgreSQL", "Docker", "Selenium", "Postman"],
  },
];

const colorMap: Record<
  ColorKey,
  {
    dot: string;
    company: string;
    tag: string;
    pill: string;
    cardHover: string;
    bullet: string;
  }
> = {
  cyan: {
    dot: "bg-cyan-400 shadow-cyan-400/50",
    company: "text-cyan-400",
    tag: "bg-cyan-500/8 text-cyan-300 border-cyan-500/20",
    pill: "border-cyan-500/30 text-cyan-400",
    cardHover: "hover:border-cyan-500/25",
    bullet: "bg-cyan-400",
  },
  violet: {
    dot: "bg-violet-400 shadow-violet-400/50",
    company: "text-violet-400",
    tag: "bg-violet-500/8 text-violet-300 border-violet-500/20",
    pill: "border-violet-500/30 text-violet-400",
    cardHover: "hover:border-violet-500/25",
    bullet: "bg-violet-400",
  },
  sky: {
    dot: "bg-sky-400 shadow-sky-400/50",
    company: "text-sky-400",
    tag: "bg-sky-500/8 text-sky-300 border-sky-500/20",
    pill: "border-sky-500/30 text-sky-400",
    cardHover: "hover:border-sky-500/25",
    bullet: "bg-sky-400",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
            Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 text-slate-50">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-sky-500/30" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color];
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.55 }}
                  className="relative pl-14"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-[14px] top-7 w-4 h-4 rounded-full shadow-md -translate-x-1/2 ${c.dot}`}
                  />

                  {/* Card */}
                  <div
                    className={`p-6 bg-slate-900/50 border border-slate-800 rounded-2xl transition-all duration-300 ${c.cardHover}`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                      <div>
                        <h3 className="text-slate-50 font-bold text-lg leading-snug">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className={`font-semibold text-sm ${c.company}`}>
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500 text-xs">
                            <MapPin size={11} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                          <Calendar size={11} />
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span
                            className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full border ${c.pill}`}
                          >
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed"
                        >
                          <span
                            className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bullet}`}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-0.5 text-xs rounded-md border ${c.tag}`}
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

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.55 }}
          className="mt-8 flex items-start gap-5 p-6 bg-slate-900/30 border border-slate-800 rounded-2xl"
        >
          <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl">
            🎓
          </div>
          <div>
            <h3 className="text-slate-100 font-bold">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-emerald-400 text-sm font-medium mt-0.5">
              National College of Business Administration &amp; Economics
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Lahore, Pakistan &nbsp;·&nbsp; Sept 2018 – June 2022
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
