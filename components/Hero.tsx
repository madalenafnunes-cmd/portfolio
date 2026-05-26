"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative bg-hero-gradient pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-content mx-auto grid md:grid-cols-[auto_1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
            {!imgError ? (
              <Image
                src="/images/profilepic.jpeg"
                alt="Madalena Nunes"
                fill
                className="object-cover"
                onError={() => setImgError(true)}
                priority
              />
            ) : (
              <span className="font-display text-5xl text-primary font-bold">MN</span>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight">
            Madalena Nunes
          </h1>
          <p className="mt-4 text-lg md:text-xl text-badgeText font-medium">
            Biomedical Engineer · Digital Health · Builder
          </p>
          <div className="mt-6 space-y-4 text-ink/80 max-w-2xl">
            <p>
              Born and raised in Lisbon, Portugal, I discovered early on a passion for solving
              complex problems. Growing up in a family of doctors and engineers led me to Biomedical
              Engineering, where I combine mathematics, physics, and healthcare. I hold a BSc & MSc
              from Instituto Superior Técnico and spent a semester at Politecnico di Milano,
              experiences that broadened both my technical perspective and world view.
            </p>
            <p>
              I have worked at the intersection of healthcare, technology, and operations — from
              optimising hospital logistics for my Master&apos;s thesis, to launching a health-tech
              startup, to building AI-powered tools at Medtronic. I am driven by the belief that
              &ldquo;the things we do, do things to us&rdquo; — which pushes me to pursue work that
              gives me a sense of purpose.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
