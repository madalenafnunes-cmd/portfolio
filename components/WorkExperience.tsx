"use client";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { BriefcaseIcon, BuildingOffice2Icon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

type Job = {
  icon: ReactNode;
  date: string;
  company: string;
  role: string;
  description: string;
  link?: { href: string; label: string };
  accent: string;
};

const jobs: Job[] = [
  {
    icon: <BriefcaseIcon className="w-6 h-6" />,
    date: "May 2025 – Present",
    company: "Medtronic",
    role: "Digital Health Consultant",
    description:
      "Implemented 10+ digital transformation projects across hospitals nationwide — including a remote monitoring app connected to wearables, database management for waiting lists, value-based healthcare analysis, and a patient referral platform. Supported 500+ patients and increased programme retention by 15%.",
    link: {
      href: "https://www.medtronic.com/en-gb/healthcare-professionals/integrated-health-solutions.html",
      label: "Visit",
    },
    accent: "#A78BFA",
  },
  {
    icon: <BuildingOffice2Icon className="w-6 h-6" />,
    date: "Dec 2024 – May 2025",
    company: "National Innovation Agency (ANI)",
    role: "European Programme Manager",
    description:
      "Advised companies, SMEs, and start-ups on funding opportunities in Digital and Industry fields for Horizon Europe — the EU's key research and innovation programme for 2021–2027.",
    link: { href: "https://ani.pt/en/", label: "Visit" },
    accent: "#93C5FD",
  },
  {
    icon: <BuildingLibraryIcon className="w-6 h-6" />,
    date: "Feb – Jul 2022",
    company: "Câmara Municipal de Lisboa",
    role: "Occupational Health Intern",
    description:
      "Analysed service workflows and built data-driven BI proposals to accelerate digital transformation. Developed a scheduling platform and an automated email generator for patient notifications and invoices.",
    accent: "#A78BFA",
  },
];

export default function WorkExperience() {
  return (
    <SectionWrapper
      id="work"
      number="3"
      title="Where I Created Value"
      subtitle="Building solutions at the intersection of technology and healthcare."
    >
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden sm:block" />

        <div className="space-y-10">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-6 sm:gap-10 group"
            >
              {/* Timeline dot */}
              <div
                className="hidden sm:flex relative z-10 mt-1 w-10 h-10 shrink-0 rounded-full items-center justify-center text-white shadow-md"
                style={{ background: job.accent }}
              >
                {job.icon}
              </div>

              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl border border-border p-6 shadow-sm group-hover:shadow-lg transition-shadow duration-300"
                style={{ borderLeft: `4px solid ${job.accent}` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-sans font-bold text-base text-ink">{job.company}</h3>
                    <p className="text-badgeText text-xs font-semibold mt-0.5">{job.role}</p>
                  </div>
                  <span className="text-muted text-xs whitespace-nowrap bg-[#F7F5FF] border border-border px-3 py-1 rounded-full">
                    {job.date}
                  </span>
                </div>
                <p className="text-ink/75 text-xs leading-relaxed">{job.description}</p>
                {job.link && (
                  <a
                    href={job.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-badgeText text-xs font-semibold hover:gap-2 transition-all"
                  >
                    {job.link.label} →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
