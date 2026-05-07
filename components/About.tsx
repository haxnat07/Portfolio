"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    emoji: "🏗️",
    title: "System Architecture",
    desc: "Designing scalable backends and RESTful APIs built for real production traffic.",
    color: "border-cyan-500/20 hover:border-cyan-500/50 group-hover:text-cyan-400",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    emoji: "💰",
    title: "Fintech Expertise",
    desc: "Wallet services, crypto gateways, secure transactions — built at DineroHero (UK).",
    color: "border-violet-500/20 hover:border-violet-500/50 group-hover:text-violet-400",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    emoji: "👥",
    title: "Technical Leadership",
    desc: "Led cross-functional agile teams across full product lifecycles end-to-end.",
    color: "border-sky-500/20 hover:border-sky-500/50 group-hover:text-sky-400",
    glow: "group-hover:shadow-sky-500/10",
  },
];

const facts = [
  { label: "Location", value: "Lahore, Pakistan" },
  { label: "Status", value: "Open to Roles" },
  { label: "Degree", value: "BS Computer Science" },
  { label: "Languages", value: "English & Urdu" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 text-slate-50">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="font-semibold text-cyan-400">
                Full Stack Engineer
              </span>{" "}
              with over{" "}
              <span className="font-semibold text-slate-100">3 years</span> of
              professional experience delivering production-ready platforms in{" "}
              <span className="font-semibold text-slate-100">
                fintech and SaaS
              </span>
              .
            </p>
            <p className="text-slate-400 leading-relaxed">
              Currently working as a Backend Developer at{" "}
              <span className="text-slate-200 font-medium">
                DineroHero (UK)
              </span>
              , where I build financial infrastructure: wallet services, secure
              transactions, and crypto gateway integrations.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I&apos;ve also served as a{" "}
              <span className="text-slate-200 font-medium">
                Technical Project Manager
              </span>{" "}
              — owning full project lifecycles, running agile teams, and
              coordinating between UI, backend, and DevOps from requirement
              gathering all the way to deployment.
            </p>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800"
                >
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-0.5">
                    {f.label}
                  </div>
                  <div className="text-slate-200 text-sm font-medium">{f.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pillar cards */}
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.55 }}
                className={`group flex gap-5 p-5 bg-slate-900/40 border rounded-2xl transition-all duration-300 cursor-default shadow-lg ${p.color} ${p.glow}`}
              >
                <span className="text-3xl mt-0.5 flex-shrink-0">{p.emoji}</span>
                <div>
                  <h3
                    className={`font-bold text-slate-100 transition-colors duration-200 ${p.color}`}
                  >
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
