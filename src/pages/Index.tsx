import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RealityHook from "@/components/RealityHook";
import WhatItIs from "@/components/WhatItIs";
import Evidence from "@/components/Evidence";
import DemoSnapshot from "@/components/DemoSnapshot";
import Recognition from "@/components/Recognition";
import VisionClose from "@/components/VisionClose";
import CentrosSalud from "@/components/CentrosSalud";

const Index = () => {
  return (
    <div className="relative min-h-screen noise-bg bg-blue-950">
      <Navbar />
      <HeroSection />
      <RealityHook />
      <WhatItIs />
      <Evidence />
      <DemoSnapshot />
      <Recognition />
      <CentrosSalud />
      <VisionClose />
    </div>
  );
};

export default Index;
