"use client";
import SectionWrapper from "./SectionWrapper";
import CardGrid from "./CardGrid";
import Card from "./Card";
import { GlobeAltIcon, HomeIcon, UserGroupIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Beyond() {
  return (
    <SectionWrapper
      id="beyond"
      title="Beyond the Workplace"
      subtitle="The experiences that shaped who I am today."
    >
      <CardGrid cols={2}>
        <Card
          image="/images/beyond/thailand.jpg"
          imageAlt="Teaching English in Thailand"
          fallbackIcon={<GlobeAltIcon className="w-16 h-16" />}
          eyebrow="Hua Hin, Thailand · 2 months"
          title="Teaching English to Children"
          description="Volunteered as an English teacher, contributing to local education in Hua Hin, Thailand."
        />
        <Card
          image="/images/beyond/rehabilition.jpg"
          imageAlt="House Rehabilitation — Just a Change"
          fallbackIcon={<HomeIcon className="w-16 h-16" />}
          eyebrow="Lisbon, Portugal · 2 months"
          title="House Rehabilitation — Just a Change"
          description='Participated in a community house rehabilitation project in Lisbon under the "Just a Change" initiative.'
        />
        <Card
          fallbackIcon={<UserGroupIcon className="w-16 h-16" />}
          title="University Mentor"
          description="Mentored international students joining university, supporting their academic, social, and cultural integration."
        />
        <Card
          image="/images/beyond/cml.jpg"
          imageAlt="Community Service"
          fallbackIcon={<HandRaisedIcon className="w-16 h-16" />}
          title="Community Service"
          description="Volunteered in daycare centres, schools, and community outreach, going door to door to support local families."
        />
      </CardGrid>
    </SectionWrapper>
  );
}
