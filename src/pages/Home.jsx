import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroV2 from "../components/home/HeroV2";
import TrustStrip from "../components/home/TrustStrip";
import Differentials from "../components/home/Differentials";
import ProblemsSolution from "../components/home/ProblemsSolution";
import ServicesGrid from "../components/home/ServicesGrid";
import ProcessSteps from "../components/home/ProcessSteps";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home-v2">
        <HeroV2 />
        <TrustStrip />
        <Differentials />
        <ProblemsSolution />
        <ServicesGrid /> 
        <ProcessSteps /> 
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}