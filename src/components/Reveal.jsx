"use client";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal — scroll-into-view fade + rise. A clean framer-motion replacement for
 * the prototype's hand-rolled IntersectionObserver. Honors reduced-motion.
 */
export function Reveal({ children, delay = 0, y = 26, style = {} }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
