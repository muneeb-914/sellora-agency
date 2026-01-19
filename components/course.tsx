"use client";

import { motion, Variants } from "framer-motion";

const courses = [
  {
    title: "Amazon Business Mastery",
    desc: "Learn how to build, manage, and scale Amazon wholesale and dropshipping businesses using proven systems.",
    features: ["Wholesale & Dropshipping", "Product Research & Sourcing", "Amazon PPC & Scaling", "Account Health & Reinstatement"],
    badge: "Most Popular"
  },
  {
    title: "Shopify Store Growth",
    desc: "Step-by-step training to build high-converting Shopify stores and scale them with branding and CRO strategies.",
    features: ["Store Setup & Design", "Product Selection", "Conversion Optimization", "Scaling & Automation"],
    badge: "Hot"
  },
  {
    title: "eBay Dropshipping (UK & US)",
    desc: "Learn how to launch and scale eBay dropshipping businesses in UK and US markets with automation.",
    features: ["UK & US Market Setup", "Winning Product Research", "Order Fulfillment", "Account Health & Scaling"],
    badge: "Automation"
  }
];

export default function Course() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="courses" className="scroll-mt-24 px-6 md:px-12 py-28 max-w-7xl mx-auto bg-white">
      {/* Section Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Training Programs</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">
          Learn. Launch. <span className="text-orange-500">Scale.</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Practical, results-driven training programs designed to help you 
          build and scale profitable e-commerce businesses.
        </p>
      </motion.div>

      {/* Courses Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -12 }}
            className="relative bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:border-orange-500/20 transition-all duration-500 group"
          >
            {/* Animated Badge */}
            <motion.span 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-3 right-8 bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-orange-200"
            >
              {course.badge}
            </motion.span>

            <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-orange-600 transition-colors">
              {course.title}
            </h3>

            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              {course.desc}
            </p>

            <ul className="space-y-4 mb-10">
              {course.features.map((feature, fIndex) => (
                <motion.li 
                  key={fIndex} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (fIndex * 0.1) }}
                  className="flex items-start text-slate-700 font-semibold text-sm"
                >
                  <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px] mr-3 mt-0.5">
                    ✓
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="flex justify-center items-center w-full px-6 py-4 rounded-2xl bg-slate-900 text-white font-bold group-hover:bg-orange-500 transition-all duration-300 shadow-xl shadow-slate-200 group-hover:shadow-orange-200"
            >
              Enroll & Contact Us
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      {/* Note with subtle fade */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-slate-400 text-sm mt-16 font-medium max-w-xl mx-auto"
      >
        *After enrollment, our team will contact you and provide training 
        access via Google Drive or your preferred platform.
      </motion.p>
    </section>
  );
}