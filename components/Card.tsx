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
}: Props) {
  const [imgError, setImgError] = useState(false);
  const showImage = image && !imgError;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(124, 58, 237, 0.12)" }}
      transition={{ duration: 0.3 }}
      className="bg-surface border border-border rounded-2xl overflow-hidden h-full flex flex-col shadow-sm"
      style={accentColor ? { borderLeft: `4px solid ${accentColor}` } : undefined}
    >
      <div className="relative w-full h-48 bg-hero-gradient flex items-center justify-center overflow-hidden">
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
            className="object-cover"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="text-primary opacity-70">{fallbackIcon}</div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {eyebrow && (
          <p className="text-badgeText text-xs font-semibold tracking-wider uppercase mb-2">{eyebrow}</p>
        )}
        <h3 className="font-sans font-semibold text-base text-ink">{title}</h3>
        {subtitle && <p className="text-muted text-xs mt-1 italic">{subtitle}</p>}
        {meta && <p className="text-muted text-xs mt-2">{meta}</p>}
        <p className="text-ink/80 text-xs mt-3 leading-relaxed flex-1">{description}</p>

        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {badges.map((b) => (
              <span key={b} className="text-xs bg-badgeBg text-badgeText px-2.5 py-1 rounded-full font-medium">
                {b}
              </span>
            ))}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((t) => (
              <span key={t} className="text-xs border border-border text-muted px-2.5 py-1 rounded-full">
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
            className="mt-5 inline-flex items-center text-badgeText font-medium text-sm hover:underline"
          >
            {link.label} →
          </a>
        )}
      </div>
    </motion.div>
  );
}
