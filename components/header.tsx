"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Services", "Portfolio", "Courses", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20 md:h-24 flex items-center">
      <div className="flex items-center justify-between px-6 md:px-12 w-full max-w-[1440px] mx-auto">
        
        {/* Logo - Adjusted for mobile scale */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/">
            <Image
              src="/brand/sellora-logo.png"
              alt="Sellora Logo"
              width={180}
              height={50}
              className="w-auto h-8 md:h-25 object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Nav - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-12 text-[14px] font-bold text-slate-800 uppercase tracking-[0.2em]">
          {menuItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors">
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Side Action Area */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="hidden md:block bg-orange-500 text-white text-[12px] uppercase font-black px-8 py-3.5 rounded-full shadow-xl shadow-orange-200 transition-all"
          >
            Free Strategy Session
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-800 focus:outline-none"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-slate-900 rounded-full block origin-center"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-slate-900 rounded-full block"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-slate-900 rounded-full block origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 lg:hidden shadow-2xl"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {menuItems.map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-800 uppercase tracking-widest py-2 border-b border-slate-50 last:border-none"
                >
                  {item}
                </Link>
              ))}
              <Link 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-orange-500 text-white text-center py-4 rounded-xl font-black uppercase tracking-widest shadow-lg shadow-orange-100"
              >
                Free Strategy Session
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}