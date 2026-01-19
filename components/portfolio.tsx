"use client";

import { motion, Variants } from "framer-motion";

const portfolioItems = [
  {
    title: "Amazon Store Scaling",
    description: "Scaled fresh Amazon stores from zero to consistent revenue using wholesale & dropshipping strategies.",
    stats: ["📈 ROI above 50%", "💰 0 → 7K SAR in 14 days", "🏢 LLC / LTD setup handled", "💳 Payoneer integration"],
    tags: ["Amazon", "Wholesale", "Dropshipping"]
  },
  {
    title: "eBay Dropshipping (UK & US)",
    description: "End-to-end eBay automation including product research, listings, order fulfillment, and account health.",
    stats: ["🌍 UK & US markets", "🚀 Scaled from scratch", "📊 Consistent monthly growth"],
    tags: ["eBay", "UK", "US"]
  },
  {
    title: "Business & Payment Setup",
    description: "Complete legal and payment infrastructure to ensure smooth scaling and compliance.",
    stats: ["🏢 LLC & LTD creation", "💳 Payoneer setup", "🛡 Account compliance"],
    tags: ["LLC", "LTD", "Payoneer"]
  }
];

export default function Portfolio() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="portfolio" className="scroll-mt-24 px-6 md:px-12 py-28 max-w-7xl mx-auto bg-white overflow-hidden">
      
      {/* Section Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Our Results</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">
          Real Stores. <span className="text-orange-500">Real Numbers.</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          We help brands scale from scratch to consistent profits across Amazon, 
          eBay, and Shopify — backed by real dashboards and proven ROI.
        </p>
      </motion.div>

      {/* Portfolio Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-24"
      >
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-orange-500/30 transition-all duration-500 relative group"
          >
            <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">{item.description}</p>

            <ul className="space-y-3 mb-8">
              {item.stats.map((stat, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium text-sm">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />
                  {stat}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-100 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-200 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Live Screenshots with Interactive Zoom */}
      <div className="mt-32">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-bold mb-12 text-center text-slate-900"
        >
          Live Performance Dashboards
        </motion.h3>

        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotate: num % 2 === 0 ? 1 : -1,
                zIndex: 20 
              }}
              className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl border border-slate-200 shadow-lg cursor-pointer group"
            >
              <img
                src={`/portfolio/ss${num}.png`}
                alt={`Result ${num}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-center text-slate-400 text-xs mt-16 font-medium italic">
        *Client names and sensitive data are protected under strict NDA.
      </p>
    </section>
  );
}