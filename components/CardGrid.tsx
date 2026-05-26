"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  cols?: 2 | 3;
};

export default function CardGrid({ children, cols = 3 }: Props) {
  const colsClass = cols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
      className={`grid grid-cols-1 sm:grid-cols-2 ${colsClass} gap-6`}
    >
      {children}
    </motion.div>
  );
}
