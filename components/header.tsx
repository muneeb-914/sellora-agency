"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-24 flex items-center">
      <div className="flex items-center justify-between px-6 md:px-12 w-full max-w-[1440px] mx-auto">
        
        {/* Logo - Large and Impactful */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Image
            src="/brand/sellora-logo.png"
            alt="Sellora Logo"
            width={180} // Much bigger logo
            height={50}
            className="w-auto h-25 object-contain"
            priority
          />
        </motion.div>

        {/* Nav - Spacious and Wide */}
        <nav className="hidden lg:flex items-center gap-12 text-[14px] font-bold text-slate-800 uppercase tracking-[0.2em]">
          {["Services", "Portfolio", "Courses", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors">
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA - Bold Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="hidden md:block bg-orange-500 text-white text-[12px] uppercase font-black px-8 py-3.5 rounded-full shadow-xl shadow-orange-200 transition-all"
        >
          Free Strategy Session
        </motion.a>
      </div>
    </header>
  );
}