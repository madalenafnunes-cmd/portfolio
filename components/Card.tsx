"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, ReactNode } from "react";

type Props = {
  image?: string;
  images?: string[];
  imageAlt?: string;
  fallbackIcon?: ReactNode;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  meta?: string;
  description: string;
  tags?: string[];
  badges?: string[];
  link?: { href: string; label: string };
  accentColor?: string;
  dark?: boolean;
};

export default function Card({
  image,
  images,
  imageAlt,
  fallbackIcon,
  eyebrow,
  title,
  subtitle,
  meta,
  description,
  tags,
  badges,
  link,
  accentColor,
  dark,
}: Props) {
  const [imgError, setImgError] = useState(false);
  const showImage = image && !imgError;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`group relative rounded-2xl overflow-hidden h-full flex flex-col shadow-sm border transition-shadow duration-300 hover:shadow-xl ${
        dark
          ? "bg-white/5 border-white/10 text-white"
          : "bg-white border-border"
      }`}
      style={accentColor ? { borderTop: `3px solid ${accentColor}` } : undefined}
    >
      {/* Image slot */}
      <div className="relative w-full h-52 bg-gradient-to-br from-badgeBg to-[#DBEAFE] flex items-center justify-center overflow-hidden">
        {images && images.length > 1 ? (
          <div className="flex w-full h-full">
            {images.map((src, i) => (
              <div key={i} className="relative flex-1 h-full">
                <Image
                  src={src}
                  alt={`${imageAlt || title} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            ))}
          </div>
        ) : showImage ? (
          <Image
            src={image!}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="text-primary/60">{fallbackIcon}</div>
        )}
        {/* Gradient overlay at bottom of image */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {eyebrow && (
          <p className="text-badgeText text-[10px] font-bold tracking-widest uppercase mb-2">{eyebrow}</p>
        )}
        <h3 className={`font-sans font-semibold text-base leading-snug ${dark ? "text-white" : "text-ink"}`}>
          {title}
        </h3>
        {subtitle && (
          <p className={`text-xs mt-1 italic ${dark ? "text-white/50" : "text-muted"}`}>{subtitle}</p>
        )}
        {meta && <p className={`text-xs mt-1 ${dark ? "text-white/40" : "text-muted"}`}>{meta}</p>}
        <p className={`text-xs mt-3 leading-relaxed flex-1 ${dark ? "text-white/70" : "text-ink/75"}`}>
          {description}
        </p>

        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {badges.map((b) => (
              <span key={b} className="text-[10px] bg-badgeBg text-badgeText px-2.5 py-1 rounded-full font-semibold">
                {b}
              </span>
            ))}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {tags.map((t) => (
              <span
                key={t}
                className={`text-[10px] border px-2.5 py-1 rounded-full ${
                  dark ? "border-white/20 text-white/60" : "border-border text-muted"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-badgeText font-semibold text-xs hover:gap-2 transition-all"
          >
            {link.label}
            <span>→</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
