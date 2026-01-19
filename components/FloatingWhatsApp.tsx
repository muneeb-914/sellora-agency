"use client";

import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1.5 // Appears after the Hero animation finishes
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Outer Pulse Ring */}
      <motion.div
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.5, 0, 0.5] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 rounded-full bg-green-500 -z-10"
      />

      <motion.a
        href="https://wa.me/+923106239168"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-white shadow-2xl hover:bg-green-600 transition-colors"
      >
        <span className="font-bold tracking-tight hidden sm:inline">
          Chat with Sellora
        </span>
        <span className="text-2xl">💬</span>
      </motion.a>
    </motion.div>
  );
}