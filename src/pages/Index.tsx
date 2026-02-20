import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RealityHook from "@/components/RealityHook";
import WhatItIs from "@/components/WhatItIs";
import Evidence from "@/components/Evidence";
import DemoSnapshot from "@/components/DemoSnapshot";
import Recognition from "@/components/Recognition";
import VisionClose from "@/components/VisionClose";

const Index = () => {
  return (
    <div className="relative min-h-screen noise-bg">
      <Navbar />
      <HeroSection />
      <RealityHook />
      <WhatItIs />
      <Evidence />
      <DemoSnapshot />
      <Recognition />
      <VisionClose />
    </div>
  );
};

export default Index;
