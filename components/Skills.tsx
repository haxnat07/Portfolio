"use client";

import { motion } from "framer-motion";

type ColorKey = "cyan" | "violet" | "sky" | "emerald";

const skillCategories: {
  title: string;
  color: ColorKey;
  skills: string[];
}[] = [
  {
    title: "Languages & Frameworks",
    color: "cyan",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "JavaScript",
      "React",
      "TypeScript",
    ],
  },
  {
    title: "Databases",
    color: "violet",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Infrastructure",
    color: "sky",
    skills: ["Git", "Docker", "Selenium", "Postman", "Jira", "Linux"],
  },
  {
    title: "Leadership & Process",
    color: "emerald",
    skills: [
      "Agile / Scrum",
      "Project Management",
      "Team Leadership",
      "System Design",
      "API Design",
    ],
  },
];

const colorMap: Record<
  ColorKey,
  { heading: string; badge: string; dot: string; card: string }
> = {
  cyan: {
    heading: "text-cyan-400",
    badge: "bg-cyan-500/8 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/18",
    dot: "bg-cyan-500",
    card: "hover:border-cyan-500/30",
  },
  violet: {
    heading: "text-violet-400",
    badge: "bg-violet-500/8 text-violet-300 border-violet-500/20 hover:bg-violet-500/18",
    dot: "bg-violet-500",
    card: "hover:border-violet-500/30",
  },
  sky: {
    heading: "text-sky-400",
    badge: "bg-sky-500/8 text-sky-300 border-sky-500/20 hover:bg-sky-500/18",
    dot: "bg-sky-500",
    card: "hover:border-sky-500/30",
  },
  emerald: {
    heading: "text-emerald-400",
    badge: "bg-emerald-500/8 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/18",
    dot: "bg-emerald-500",
    card: "hover:border-emerald-500/30",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative bg-slate-950/60">
      {/* subtle grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 text-slate-50">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 mt-4 max-w-md mx-auto text-sm">
            Technologies and tools I use to build production-grade software.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className={`p-6 bg-slate-900/50 border border-slate-800 rounded-2xl transition-all duration-300 ${c.card}`}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <h3
                    className={`text-xs font-bold uppercase tracking-[0.15em] ${c.heading}`}
                  >
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-200 cursor-default ${c.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra certification row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.55 }}
          className="mt-6 flex items-center gap-4 p-5 bg-slate-900/30 border border-slate-800 rounded-2xl"
        >
          <span className="text-2xl flex-shrink-0">🏅</span>
          <div>
            <span className="text-slate-200 font-semibold text-sm">
              Python for Data Science, AI &amp; Development
            </span>
            <span className="text-slate-500 text-sm ml-2">— IBM Certification (2022)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
