import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Portfolio from "@/components/Portfolio";
import WorkExperience from "@/components/WorkExperience";
import Beyond from "@/components/Beyond";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Education />
      <Portfolio />
      <WorkExperience />
      <Beyond />
      <Footer />
    </main>
  );
}
