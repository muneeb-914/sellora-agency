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
        className="max-w-7xl mx-auto px-6 md:px-12 py-20"
      >
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              Sellora<span className="text-orange-500">.</span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Amazon & E-Commerce growth agency helping brands and investors 
              launch, scale, and dominate global marketplaces.
            </p>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Services</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {["Amazon Store Management", "Amazon PPC & Scaling", "Shopify Store Setup", "eBay Dropshipping", "China Sourcing"].map((link) => (
                <li key={link}>
                  <a href="#services" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                    <span className="w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-3 group-hover:mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Training Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Training</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {["Amazon Business Mastery", "Shopify Growth Program", "eBay Dropshipping (UK & US)"].map((link) => (
                <li key={link}>
                  <a href="#courses" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                    <span className="w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-3 group-hover:mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Connect</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <span className="text-orange-500">📞</span>
                <a 
                  href="https://wa.me/+923106239168" 
                  className="font-bold text-slate-900 hover:text-orange-600 transition-colors"
                >
                  +92 310 6239168
                </a>
              </li>
              <li className="flex items-center gap-3 italic">
                <span className="text-orange-500">📅</span>
                Free Strategy Session
              </li>
              <li className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <span className="text-orange-500 text-base">🌍</span>
                Serving UAE • KSA • UK • US
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-slate-200 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400"
        >
          <p>© {currentYear} Sellora. Built for e-commerce excellence.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-600 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-600 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}