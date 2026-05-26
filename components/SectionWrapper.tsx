"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function SectionWrapper({ id, eyebrow, title, subtitle, children }: Props) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          {eyebrow && (
            <p className="text-badgeText text-sm font-medium tracking-wide mb-2">{eyebrow}</p>
          )}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">
            <span className="text-primary">// </span>
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-muted text-lg max-w-2xl">{subtitle}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
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
