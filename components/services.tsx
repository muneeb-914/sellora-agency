"use client";

import { motion, Variants } from "framer-motion";

const services = [
  {
    title: "Amazon Store Management (Middle East)",
    desc: "Complete Amazon account management including listings, inventory, operations, compliance, and performance optimization.",
  },
  {
    title: "Amazon PPC & Brand Scaling",
    desc: "Data-driven PPC strategies focused on lowering ACoS, increasing conversions, and scaling profitable SKUs.",
  },
  {
    title: "Shopify Store Setup & Optimization",
    desc: "High-converting Shopify stores built from scratch or optimized for speed, branding, CRO, and seamless customer experience.",
  },
  {
    title: "Amazon Account Reinstatement",
    desc: "Expert handling of Amazon suspensions, policy violations, appeals, and account recovery with proven strategies.",
  },
  {
    title: "Amazon Brand Approvals",
    desc: "Assistance with gated category approvals and brand authorizations to unlock high-potential selling opportunities.",
  },
  {
    title: "eBay Dropshipping (UK & US)",
    desc: "Fully managed eBay dropshipping operations for UK and US markets, including product research, listings, and order fulfillment.",
  },
  {
    title: "China Sourcing Expert",
    desc: "Reliable product sourcing from China, supplier negotiations, quality checks, and logistics coordination.",
  },
];

export default function Services() {
  // Animation for the container (triggers children one by one)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation for individual cards
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="scroll-mt-24 px-6 md:px-12 py-28 max-w-7xl mx-auto bg-white">
      {/* Section Heading with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">
          What We Do
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">
          E-Commerce Services Built to <span className="text-orange-500">Scale</span>
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg">
          From account setup and reinstatement to global scaling and sourcing,
          Sellora delivers end-to-end solutions for serious sellers and investors.
        </p>
      </motion.div>

      {/* Services Grid with Staggered Entrance */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              y: -8, 
              borderColor: "#f97316",
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
            }}
            className="group relative bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-300"
          >
            {/* Subtle icon/number accent */}
            <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 font-bold group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
              {index + 1}
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-orange-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {service.desc}
            </p>
            
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 rounded-b-3xl transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}