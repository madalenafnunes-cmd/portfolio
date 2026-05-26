"use client";
import SectionWrapper from "./SectionWrapper";
import CardGrid from "./CardGrid";
import Card from "./Card";
import { BriefcaseIcon, BuildingOffice2Icon, BuildingLibraryIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export default function WorkExperience() {
  return (
    <SectionWrapper
      id="work"
      title="Where I Created Value"
      subtitle="Building solutions at the intersection of technology and healthcare."
    >
      <CardGrid cols={2}>
        <Card
          fallbackIcon={<BriefcaseIcon className="w-16 h-16" />}
          eyebrow="May 2025 – Present"
          title="Medtronic"
          subtitle="Digital Health Consultant"
          description="Implemented 10+ digital transformation projects across hospitals nationwide — including a remote monitoring app connected to wearables, database management for waiting lists, value-based healthcare analysis, and a patient referral platform. Supported 500+ patients and increased programme retention by 15%."
          link={{ href: "https://www.medtronic.com/", label: "Visit" }}
          accentColor="#A78BFA"
        />
        <Card
          fallbackIcon={<BuildingOffice2Icon className="w-16 h-16" />}
          eyebrow="Dec 2024 – May 2025"
          title="National Innovation Agency (ANI)"
          subtitle="European Programme Manager"
          description="Advised companies, SMEs, and start-ups on funding opportunities in Digital and Industry fields for Horizon Europe — the EU's key research and innovation programme for 2021–2027."
          accentColor="#93C5FD"
        />
        <Card
          image="/images/cml.jpg"
          imageAlt="Câmara Municipal de Lisboa"
          fallbackIcon={<BuildingLibraryIcon className="w-16 h-16" />}
          eyebrow="Feb – Jul 2022"
          title="Câmara Municipal de Lisboa"
          subtitle="Occupational Health Intern"
          description="Analysed service workflows and built data-driven BI proposals to accelerate digital transformation. Developed a scheduling platform and an automated email generator for patient notifications and invoices."
          accentColor="#A78BFA"
        />
        <Card
          fallbackIcon={<BookOpenIcon className="w-16 h-16" />}
          eyebrow="Feb – Jul 2022"
          title="Freelance"
          subtitle="Maths Tutor"
          description="Delivered personalised learning plans to 10+ students aged 7–16. Organised weekly group sessions to address learning gaps and grew the business through referrals."
          accentColor="#93C5FD"
        />
      </CardGrid>
    </SectionWrapper>
  );
}
