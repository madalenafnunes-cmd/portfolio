"use client";
import SectionWrapper from "./SectionWrapper";
import CardGrid from "./CardGrid";
import Card from "./Card";
import { AcademicCapIcon, BuildingLibraryIcon, BeakerIcon } from "@heroicons/react/24/outline";

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      number="1"
      title="My Education"
      subtitle="The academic foundation that developed my fast learning and problem-solving skills."
    >
      <CardGrid cols={3}>
        <Card
          image="/images/education/ist.jpg"
          imageAlt="Instituto Superior Técnico"
          fallbackIcon={<AcademicCapIcon className="w-16 h-16" />}
          eyebrow="2019 – 2024 · Lisbon, Portugal"
          title="Instituto Superior Técnico"
          subtitle="BSc & MSc in Biomedical Engineering"
          description="A rigorous technical curriculum bridging mathematics, computational programming, physics, chemistry, and medicine courses taught at Lisbon Faculty of Medicine."
          link={{ href: "https://tecnico.ulisboa.pt/", label: "Visit" }}
          accentColor="#A78BFA"
        />
        <Card
          image="/images/education/polimi.png"
          imageAlt="Politecnico di Milano"
          fallbackIcon={<BuildingLibraryIcon className="w-16 h-16" />}
          eyebrow="Feb – Jul 2023 · Milan, Italy"
          title="Politecnico di Milano"
          subtitle="ERASMUS+ Exchange"
          description="International exchange semester at one of the Top 10 EU technical universities, focused on cutting-edge medical informatics and computer-aided surgical techniques."
          link={{ href: "https://www.polimi.it/", label: "Visit" }}
          accentColor="#93C5FD"
        />
        <Card
          image="/images/education/cuf-logo.png"
          imageAlt="CUF Hospital"
          fallbackIcon={<BeakerIcon className="w-16 h-16" />}
          eyebrow="Feb – Oct 2024 · Lisbon, Portugal"
          title="CUF Hospital"
          subtitle="Master's Thesis Research"
          description="Developed a multi-objective optimisation model in Python to improve routing, scheduling, and resource allocation for CUF's Home Hospitalisation Unit."
          badges={["–24% travel time", "+77% workload balance", "20s plan generation"]}
          link={{ href: "https://www.cuf.pt/", label: "Visit" }}
          accentColor="#A78BFA"
        />
      </CardGrid>
    </SectionWrapper>
  );
}
