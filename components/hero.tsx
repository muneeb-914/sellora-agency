"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Added Variants import

export default function Hero() {
  // Explicitly typing the variants to fix the error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    // Find this line in hero.tsx and update the padding:
<section className="scroll-mt-24 relative px-6 md:px-12 pt-10 pb-20 max-w-7xl mx-auto bg-white overflow-hidden">
      
      {/* Soft Background Glow - Animated */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 bg-orange-400/20 blur-3xl rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-orange-500 font-bold tracking-wide mb-4">
            Amazon & E-Commerce Growth Agency
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
            We Scale <span className="text-orange-500">Amazon</span> Stores <br />
            While You Focus on Profits
          </motion.h1>

          <motion.p variants={itemVariants} className="text-slate-600 text-lg mb-8 max-w-xl leading-relaxed">
            Sellora helps investors and brands build, manage, and scale profitable
            Amazon and e-commerce businesses — end to end.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(249, 115, 22, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="bg-orange-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-sm"
            >
              Start Free Session
            </motion.a>

            <motion.a
              whileHover={{ borderColor: "#f97316", color: "#f97316" }}
              href="https://wa.me/+923106239168"
              target="_blank"
              className="border border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-xl transition"
            >
              WhatsApp Us
            </motion.a>
          </motion.div>
        </motion.div>
{/* RIGHT VISUAL - No Hover Effect */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="relative"
>
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  >
    <Image
      src="/poster/sellora-cover.png"
      alt="Sellora Dashboard"
      width={600}
      height={400}
      className="rounded-3xl shadow-2xl border border-slate-100" // Image stays static on hover now
      priority
    />
  </motion.div>
  
  {/* Accent decoration */}
  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-100 rounded-full -z-10 blur-2xl opacity-60" />
</motion.div>
      </div>
    </section>
  );
}