"use client";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const contacts = [
  {
    icon: <EnvelopeIcon className="w-5 h-5" />,
    label: "madalenafnunes@gmail.com",
    href: "mailto:madalenafnunes@gmail.com",
  },
  {
    icon: null,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/madalenanunes",
    external: true,
  },
  {
    icon: <PhoneIcon className="w-5 h-5" />,
    label: "+351 965 533 154",
    href: "tel:+351965533154",
  },
  {
    icon: <PhoneIcon className="w-5 h-5" />,
    label: "+44 7423 505 994",
    href: "tel:+447423505994",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-ink overflow-hidden py-24 px-6">
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary/20"
        style={{ filter: "blur(60px)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-secondary/20"
        style={{ filter: "blur(50px)" }}
      />

      <div className="relative max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Get in touch</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
            Let&apos;s build
            <br />
            <span className="gradient-text">something great.</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-sm mx-auto text-sm">
            Open to new opportunities in digital health, health-tech, and AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-white/80 hover:text-white text-sm px-5 py-3 rounded-full transition-all duration-200"
            >
              {c.icon}
              {c.label}
            </a>
          ))}
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">© 2025 Madalena Nunes</p>
        </div>
      </div>
    </footer>
  );
}
