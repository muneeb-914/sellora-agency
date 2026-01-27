"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Hero() {
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
    <section className="scroll-mt-24 relative px-6 md:px-12 pt-6 pb-20 max-w-7xl mx-auto bg-white overflow-hidden">
      
      {/* Soft Background Glow - Optimized for all screens */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] md:h-[420px] md:w-[420px] -translate-x-1/2 -translate-y-1/2 bg-orange-400/20 blur-3xl rounded-full" />
      </motion.div>

      {/* Grid: Stacks on mobile, side-by-side on md+ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT CONTENT: Centered on mobile, left-aligned on desktop */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.p variants={itemVariants} className="text-orange-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
            Amazon & E-Commerce Growth Agency
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-slate-900">
            We Scale <span className="text-orange-500">Amazon</span> Stores <br className="hidden md:block" />
            While You Focus on Profits
          </motion.h1>

          <motion.p variants={itemVariants} className="text-slate-600 text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Sellora helps investors and brands build, manage, and scale profitable
            Amazon and e-commerce businesses — end to end.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: "0 20px 30px rgba(249, 115, 22, 0.15)" }}
              whileTap={{ scale: 0.97 }}
              href="#services"
              className="bg-orange-500 text-white font-black uppercase tracking-widest text-xs px-10 py-5 rounded-2xl transition shadow-lg shadow-orange-200"
            >
              View Services
            </motion.a>

            <motion.a
              whileHover={{ borderColor: "#f97316", color: "#f97316" }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/+923106239168"
              target="_blank"
              className="border-2 border-slate-200 text-slate-700 font-bold uppercase tracking-widest text-xs px-10 py-5 rounded-2xl transition bg-white"
            >
              WhatsApp Us
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL: Order-1 on mobile to show image first */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative order-1 lg:order-2 px-4 md:px-0"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Image
              src="/poster/sellora-cover.png"
              alt="Sellora Dashboard"
              width={600}
              height={400}
              className="rounded-[2rem] shadow-2xl border border-slate-100 w-full h-auto"
              priority
            />
          </motion.div>
          
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-100 rounded-full -z-10 blur-3xl opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}