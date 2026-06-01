"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const stats = [
  { value: "10+", label: "Digital Health Projects" },
  { value: "500+", label: "Patients Supported" },
  { value: "3", label: "Countries Lived In" },
  { value: "2", label: "Startups Built" },
];

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F7F5FF]">
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 animate-blob"
        style={{ filter: "blur(60px)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-secondary/25 animate-blob"
        style={{ filter: "blur(50px)", animationDelay: "3s" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 animate-blob"
        style={{ filter: "blur(70px)", animationDelay: "1.5s" }}
      />

      <div className="relative max-w-content mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block text-badgeText bg-badgeBg text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                Biomedical Engineer · Digital Health · Builder
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-display text-6xl md:text-7xl font-bold text-ink leading-[1.05]"
            >
              Madalena
              <br />
              <span className="gradient-text">Nunes.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="mt-8 space-y-4 text-muted text-base max-w-lg"
            >
              <p>
                Born and raised in Lisbon, Portugal, I discovered early on a passion for solving
                complex problems. Growing up in a family of doctors and engineers led me to Biomedical
                Engineering — where I combine mathematics, physics, and healthcare.
              </p>
              <p>
                I work at the intersection of healthcare, technology, and operations — driven by the
                belief that <em className="text-ink font-medium">&ldquo;the things we do, do things to us.&rdquo;</em>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#portfolio"
                className="bg-ink text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary transition-colors"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="border border-ink/20 text-ink px-6 py-3 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 translate-x-4 translate-y-4 -z-10" />
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-badgeBg to-[#DBEAFE] flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src="/images/profilepic.jpeg"
                    alt="Madalena Nunes"
                    fill
                    className="object-cover"
                    onError={() => setImgError(true)}
                    priority
                    style={{ position: "absolute" }}
                  />
                ) : (
                  <span className="font-display text-7xl text-primary font-bold">MN</span>
                )}
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-6 bg-white shadow-lg rounded-2xl px-4 py-3 text-sm font-medium text-ink"
              >
                🏥 Digital Health
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-6 bg-white shadow-lg rounded-2xl px-4 py-3 text-sm font-medium text-ink"
              >
                🌍 Lisbon & London
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-10"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="font-display text-4xl font-bold gradient-text">{s.value}</p>
              <p className="text-muted text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-muted/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
