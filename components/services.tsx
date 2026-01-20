"use client";

import { motion, Variants } from "framer-motion";

const services = [
  { title: "Amazon Store Management (Middle East)", desc: "Complete Amazon account management including listings, inventory, operations, compliance, and performance optimization." },
  { title: "Amazon PPC & Brand Scaling", desc: "Data-driven PPC strategies focused on lowering ACoS, increasing conversions, and scaling profitable SKUs." },
  { title: "Shopify Store Setup & Optimization", desc: "High-converting Shopify stores built from scratch or optimized for speed, branding, CRO, and seamless customer experience." },
  { title: "Amazon Account Reinstatement", desc: "Expert handling of Amazon suspensions, policy violations, appeals, and account recovery with proven strategies." },
  { title: "Amazon Brand Approvals", desc: "Assistance with gated category approvals and brand authorizations to unlock high-potential selling opportunities." },
  { title: "eBay Dropshipping (UK & US)", desc: "Fully managed eBay dropshipping operations for UK and US markets, including product research, listings, and order fulfillment." },
  { title: "China Sourcing Expert", desc: "Reliable product sourcing from China, supplier negotiations, quality checks, and logistics coordination." },
];

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="scroll-mt-24 px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto bg-white">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 md:mb-24"
      >
        <p className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">What We Do</p>
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
          E-Commerce Services Built to <span className="text-orange-500">Scale</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          From account setup to global sourcing, Sellora delivers end-to-end solutions for serious investors.
        </p>
      </motion.div>

      {/* Services Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:border-orange-500/20 hover:shadow-2xl hover:shadow-orange-100"
          >
            <div className="mb-8 flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 text-slate-900 font-black group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-inner">
              {index + 1}
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-orange-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              {service.desc}
            </p>
            
            <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-orange-500 rounded-b-3xl transition-all duration-700 group-hover:w-full" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}