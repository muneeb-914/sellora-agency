"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
      >
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
              Sellora<span className="text-orange-500">.</span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Your growth partner for Amazon & global e-commerce scaling. 
              We build brands that dominate marketplaces.
            </p>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-[10px] tracking-[0.3em]">Expertise</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              {["Amazon Management", "PPC Scaling", "Shopify Design", "China Sourcing"].map((link) => (
                <li key={link}>
                  <a href="#services" className="hover:text-orange-500 transition-all flex items-center justify-center sm:justify-start group">
                    <span className="w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-3 group-hover:mr-2 hidden sm:block" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-[10px] tracking-[0.3em]">Connect</h4>
            <ul className="space-y-5 text-sm text-slate-600">
              <li className="flex flex-col items-center sm:items-start gap-1">
                <span className="text-orange-500 text-lg">📞</span>
                <a href="https://wa.me/+923106239168" className="font-black text-slate-900 text-base">+92 310 6239168</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 text-xs text-slate-400 font-bold uppercase tracking-widest">
                <span className="text-orange-500 text-lg">🌍</span>
                UAE • KSA • UK • US
              </li>
            </ul>
          </motion.div>

          {/* CTA Column */}
          <motion.div variants={itemVariants} className="flex flex-col items-center sm:items-start">
            <h4 className="font-black text-slate-900 mb-8 uppercase text-[10px] tracking-[0.3em]">Ready?</h4>
            <a 
              href="#schedule" 
              className="bg-slate-900 text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl shadow-slate-200 hover:shadow-orange-200"
            >
              Book Strategy Call
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-slate-200 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400"
        >
          <p>© {currentYear} Sellora Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-orange-500 transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-orange-500 transition-colors cursor-pointer">Terms</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}