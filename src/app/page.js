"use client";

import ChooseUs from "@/components/ChooseUs";
import Customize from "@/components/Customize";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <ChooseUs />
      <Customize />
      <Testimonials />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
}
