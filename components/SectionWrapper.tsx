"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id: string;
  number?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  dark?: boolean;
};

export default function SectionWrapper({ id, number, title, subtitle, children, dark }: Props) {
  return (
    <section
      id={id}
      className={`relative py-28 px-6 overflow-hidden ${dark ? "bg-ink text-white" : "bg-[#F7F5FF]"}`}
    >
      {/* Background number watermark */}
      {number && (
        <div
          className={`pointer-events-none select-none absolute right-6 md:right-12 top-8 font-display font-bold text-[10rem] md:text-[16rem] leading-none ${
            dark ? "text-white/5" : "text-ink/5"
          }`}
        >
          {number}
        </div>
      )}

      <div className="relative max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          {number && (
            <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 ${dark ? "text-primary" : "text-primary"}`}>
              {number.padStart(2, "0")} —
            </p>
          )}
          <h2
            className={`font-display text-4xl md:text-5xl font-bold leading-tight ${dark ? "text-white" : "text-ink"}`}
          >
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-4 text-base max-w-2xl ${dark ? "text-white/60" : "text-muted"}`}>
              {subtitle}
            </p>
          )}
          <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
