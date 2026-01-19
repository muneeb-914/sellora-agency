"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import PageReveal from "@/components/PageReveal";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Course from "@/components/course";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for window.onload
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds for a premium reveal feel

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <PageReveal>
          <main className="bg-white text-slate-900 min-h-screen selection:bg-orange-100 selection:text-orange-600">
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <Course />
            <Contact />
            <Footer />
            <FloatingWhatsApp />
          </main>
        </PageReveal>
      )}
    </>
  );
}