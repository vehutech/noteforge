import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import React from "react";

const page = () => {
  return (
    <main>
      <HeroHeader />
      <HeroSection />
      <Features />
      <CallToAction />
      <FooterSection />
    </main>
  );
};

export default page;
