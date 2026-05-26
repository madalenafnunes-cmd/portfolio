"use client";
import SectionWrapper from "./SectionWrapper";
import CardGrid from "./CardGrid";
import Card from "./Card";
import {
  HeartIcon,
  CpuChipIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  SparklesIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Portfolio() {
  return (
    <SectionWrapper
      id="portfolio"
      title="My Portfolio"
      subtitle="Where I developed my creative and technical skills."
    >
      <CardGrid cols={3}>
        <Card
          image="/images/portfolio/carevisits.png"
          imageAlt="CareVisits"
          fallbackIcon={<HeartIcon className="w-16 h-16" />}
          eyebrow="01"
          title="CareVisits"
          subtitle="Bringing Hospitals Home"
          description="Built an MVP mobile app for routing and scheduling home hospitalisation visits, so medical teams can focus on patient treatment rather than logistics."
          badges={["🏆 Top 10 Finalist — Santander X Awards 2024"]}
          link={{
            href: "https://www.linkedin.com/posts/innovation-entrepreneurship-santanderx-share-7260969984581894144-wSiL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgPwsUBKSo3ZNr8CLqPAdu1ohItvrXizas",
            label: "View Award Post",
          }}
        />
        <Card
          image="/images/portfolio/posture 2.jpeg"
          imageAlt="Posture Alignment Device"
          fallbackIcon={<CpuChipIcon className="w-16 h-16" />}
          eyebrow="02"
          title="Posture Alignment Device"
          subtitle="Real-time corrective wearable"
          description="Designed and prototyped a wearable device using a Seeeduino XIAO and accelerometer to detect incorrect posture and provide real-time corrective feedback."
          tags={["Hardware", "Python", "Embedded Systems"]}
        />
        <Card
          fallbackIcon={<ChartBarIcon className="w-16 h-16" />}
          eyebrow="03"
          title="Disease Prediction Algorithm"
          subtitle="Bayesian Network Classifier"
          description="Built a Bayesian network classifier in Java using maximum spanning tree algorithms to predict lung cancer (82%), diabetes (76%), and hepatitis (81%) from real-world datasets."
          tags={["Java", "Machine Learning", "Bayesian Networks"]}
        />
        <Card
          image="/images/portfolio/Hackathon.jpeg"
          imageAlt="SLI Space Hackathon"
          fallbackIcon={<RocketLaunchIcon className="w-16 h-16" />}
          eyebrow="04"
          title="SLI Space Hackathon"
          subtitle="CEiiA Space Innovation Hackathon 2024"
          description="Worked on the MH-X mission project using space technologies and Earth Observation to promote sustainability. Awarded 3rd place."
          badges={["🥉 3rd Place Award"]}
        />
        <Card
          fallbackIcon={<SparklesIcon className="w-16 h-16" />}
          eyebrow="05"
          title="AI-Powered Tools at Medtronic"
          subtitle="Internal automation tools"
          description="Built two internal AI tools using n8n and Claude: one to automatically match public tender opportunities, another to track patient adherence to a remote monitoring app — enabling proactive clinical follow-up."
          tags={["AI", "n8n", "Healthcare", "Claude"]}
        />
        <Card
          image="/images/portfolio/wheretowork.png"
          imageAlt="Where to Work"
          fallbackIcon={<MapPinIcon className="w-16 h-16" />}
          eyebrow="06"
          title="Where to Work"
          subtitle="Remote-working spot finder"
          description="Built a collaborative website to discover the best places for remote working in your neighbourhood."
          tags={["Web", "Community"]}
          link={{ href: "https://where-to-work-blue.vercel.app/", label: "Visit Site" }}
        />
      </CardGrid>
    </SectionWrapper>
  );
}
