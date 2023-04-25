import React, { useState, useEffect, useRef } from "react";

import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import ICOProgress from "./layout/ICOProgress";
import PaymentMethod from "./layout/PaymentMethod";
import About from "./layout/About";
import ProblemSolution from "./layout/ProblemSolution";
import Features from "./layout/Features";
import WorkingProcess from "./layout/WorkingProcess";
import Benefits from "./layout/Benefits";
import TokenDetails from "./layout/TokenDetails";
import TokenSale from "./layout/TokenSale";
import Roadmap from "./layout/Roadmap";
import OurTeam from "./layout/OurTeam";
import DocFaq from "./layout/DocFaq";
import CTA from "./layout/CTA";
import Partners from "./layout/Partners";
import FooterHeightEmulator from "./layout/FooterHeightEmulator";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <>
    <main className="main">
      <Navbar />
      <Hero />
      {/* <ICOProgress /> */}
      {/* <PaymentMethod /> */}
      {/* <ProblemSolution /> */}
      {/* <Features /> */}
      {/* <WorkingProcess /> */}
      <Benefits />
      <TokenDetails />
      <TokenSale />
      <About />
      <Roadmap />
      <OurTeam />
      <DocFaq />
      {/* <CTA /> */}
      <Partners />
      <FooterHeightEmulator />
      <Footer />
    </main>
    </>
  );
}
