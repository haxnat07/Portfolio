"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";

type ColorKey = "cyan" | "violet" | "sky";

const contactItems: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  color: ColorKey;
}[] = [
  {
    Icon: Mail,
    label: "Email",
    value: "haxnat07@gmail.com",
    href: "mailto:haxnat07@gmail.com",
    color: "cyan",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+92 306 5458407",
    href: "tel:+923065458407",
    color: "violet",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hasnat-ahmad",
    href: "https://linkedin.com/in/hasnat-ahmad",
    color: "sky",
  },
];

const colorMap: Record<
  ColorKey,
  { iconBg: string; icon: string; border: string; hover: string; arrow: string }
> = {
  cyan: {
    iconBg: "bg-cyan-500/10",
    icon: "text-cyan-400",
    border: "border-cyan-500/15",
    hover: "hover:border-cyan-500/40 hover:bg-cyan-500/4",
    arrow: "group-hover:text-cyan-400",
  },
  violet: {
    iconBg: "bg-violet-500/10",
    icon: "text-violet-400",
    border: "border-violet-500/15",
    hover: "hover:border-violet-500/40 hover:bg-violet-500/4",
    arrow: "group-hover:text-violet-400",
  },
  sky: {
    iconBg: "bg-sky-500/10",
    icon: "text-sky-400",
    border: "border-sky-500/15",
    hover: "hover:border-sky-500/40 hover:bg-sky-500/4",
    arrow: "group-hover:text-sky-400",
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 text-slate-50">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto leading-relaxed">
            I&apos;m open to full-time roles, freelance projects, and
            interesting collaborations. Whether you have an opportunity or just
            want to say hello — my inbox is open.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid gap-4 mb-10">
          {contactItems.map((item, i) => {
            const { Icon } = item;
            const c = colorMap[item.color];
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group flex items-center gap-4 p-5 bg-slate-900/40 border rounded-xl transition-all duration-300 ${c.border} ${c.hover}`}
              >
                <div
                  className={`w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={20} className={c.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-slate-200 font-medium text-sm truncate">
                    {item.value}
                  </div>
                </div>
                <ArrowRight
                  size={17}
                  className={`text-slate-600 transition-all duration-200 ${c.arrow} group-hover:translate-x-1`}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-center"
        >
          <a
            href="mailto:haxnat07@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-gray-950 font-bold rounded-xl text-lg hover:bg-cyan-400 transition-all duration-200 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30"
          >
            Start a Conversation
            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
