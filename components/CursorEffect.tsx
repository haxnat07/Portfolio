"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorEffect() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  // Ring follows cursor with a smooth spring lag
  const ringX = useSpring(x, { stiffness: 160, damping: 20, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 160, damping: 20, mass: 0.4 });

  useEffect(() => {
    // Only enable on pointer devices (not touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      if (el.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovering(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const el = e.target as Element;
      if (el.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHovering(false);
      }
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseenter", onEnter);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    // Suppress native cursor globally
    const style = document.createElement("style");
    style.id = "cursor-none-override";
    style.textContent = "* { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.getElementById("cursor-none-override")?.remove();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!enabled) return null;

  return (
    <>
      {/* Dot — snaps exactly to cursor, hides on hover */}
      <motion.div
        style={{ left: x, top: y }}
        animate={{
          opacity: visible ? (hovering ? 0 : 1) : 0,
          scale: clicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.12, ease: "easeOut" }}
        className="fixed z-[9999] pointer-events-none w-[6px] h-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"
      />

      {/* Ring — lags behind cursor, expands on interactive hover */}
      <motion.div
        style={{ left: ringX, top: ringY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.75 : clicking ? 0.8 : 1,
          borderColor: hovering
            ? "rgba(6, 182, 212, 0.65)"
            : "rgba(6, 182, 212, 0.28)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="fixed z-[9998] pointer-events-none w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30"
      />
    </>
  );
}
