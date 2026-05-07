"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/70 py-8 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="text-slate-500 text-sm">
          © {year}{" "}
          <span className="text-slate-300 font-medium">Hasnat Ahmad</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-600 text-xs mr-1">Crafted in Lahore, Pakistan</span>
          <a
            href="mailto:haxnat07@gmail.com"
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-800 text-slate-500 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
          >
            <Mail size={14} />
          </a>
          <a
            href="https://linkedin.com/in/hasnat-ahmad"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-800 text-slate-500 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
          >
            <Linkedin size={14} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
