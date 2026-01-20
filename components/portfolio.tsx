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

const dashboardCaptions = [
  "SAR 38,000+ Monthly Revenue - KSA Wholesale",
  "AED 54,000+ Sales Milestone - UAE Marketplace",
  "AED 19,000+ Rapid Scale - UAE Private Label",
  "Account Health: 100% Healthy - KSA Market Launch"
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
    <section id="portfolio" className="scroll-mt-24 px-6 md:px-12 py-20 md:py-28 max-w-7xl mx-auto bg-white overflow-hidden">
      
      {/* Section Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-orange-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Our Results</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900 leading-tight">
          Real Stores. <span className="text-orange-500">Real Numbers.</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          We help brands scale from scratch to consistent profits across Amazon, 
          eBay, and Shopify — backed by real dashboards and proven ROI.
        </p>
      </motion.div>

      {/* Portfolio Grid: Stacked on Mobile */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24"
      >
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-orange-500/30 transition-all duration-500 relative group flex flex-col"
          >
            <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-orange-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              {item.description}
            </p>

            <ul className="space-y-4 mb-10">
              {item.stats.map((stat, i) => (
                <li key={i} className="flex items-start text-slate-700 font-semibold text-sm">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-1.5 shrink-0" />
                  {stat}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-100 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-200 transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Live Screenshots Grid: Optimized for Touch */}
      <div className="mt-20 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Live Performance Dashboards
          </h3>
          <p className="text-slate-500 text-sm mt-3 italic">Hover or tap to reveal verified store revenue snapshots</p>
        </motion.div>

        <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-0">
          {[1, 2, 4, 6].map((num, idx) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotate: idx % 2 === 0 ? 1.5 : -1.5,
                zIndex: 30 
              }}
              whileTap={{ scale: 0.95 }}
              className="relative aspect-video sm:aspect-square overflow-hidden rounded-2xl md:rounded-[2rem] border border-slate-200 shadow-xl cursor-pointer group bg-slate-100"
            >
              <img
                src={`/portfolio/ss${num}.png`}
                alt={`Verified Result ${num}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1">Live Proof</p>
                <p className="text-white text-[13px] font-bold leading-tight">{dashboardCaptions[idx]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-center text-slate-400 text-[10px] md:text-xs mt-16 md:mt-20 font-medium italic">
        *Client names and sensitive data are protected under strict NDA.
      </p>
    </section>
  );
}