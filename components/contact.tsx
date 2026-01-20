"use client";

import { motion, Variants } from "framer-motion";

export default function Contact() {
  const cardVariants: Variants = {
    hiddenLeft: { opacity: 0, x: -30 },
    hiddenRight: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="scroll-mt-24 px-6 md:px-12 py-20 md:py-28 max-w-7xl mx-auto bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900 leading-tight">
            Let’s Build Your <br className="md:hidden" /> E-Commerce Business
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Whether you want to launch, scale, or learn — our team is ready 
            to guide you with proven systems and real results.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto items-stretch">
          {/* WhatsApp Card */}
          <motion.div 
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col justify-between bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 shadow-sm group"
          >
            <div>
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-green-600 text-3xl group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                💬
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900">Chat on WhatsApp</h3>
              <p className="text-slate-500 text-sm mb-10 leading-relaxed">
                Get instant answers, pricing details, or course enrollment support 
                directly from our team.
              </p>
            </div>

            <motion.a
              href="https://wa.me/+923106239168"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center w-full px-6 py-5 rounded-2xl bg-green-500 text-white font-black uppercase tracking-widest text-xs hover:bg-green-600 transition-all shadow-lg shadow-green-100"
            >
              Message Us Now
            </motion.a>
          </motion.div>

          {/* Google Meet Scheduling Card */}
          <motion.div 
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col justify-between bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 shadow-sm group"
          >
            <div>
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 text-orange-500 text-3xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                📅
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900">Schedule a Call</h3>
              <p className="text-slate-500 text-sm mb-10 leading-relaxed">
                Book a free strategy session to discuss your goals, budget, 
                and growth roadmap via Google Meet.
              </p>
            </div>

            <motion.a
              href="#schedule"
              className="inline-flex justify-center items-center w-full px-6 py-5 rounded-2xl bg-orange-500 text-white font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-all shadow-lg shadow-orange-100"
            >
              Book Free Session
            </motion.a>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-400 text-[10px] md:text-sm mt-16 font-medium uppercase tracking-[0.2em]"
        >
          ✨ 100% free consultation • No obligation
        </motion.p>
      </section>

      {/* ================= SCHEDULING SECTION ================= */}
      <section id="schedule" className="scroll-mt-24 px-4 md:px-12 py-20 max-w-7xl mx-auto bg-slate-50 rounded-[2.5rem] md:rounded-[4rem] my-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
            Select Your Meeting Time
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm md:text-lg">
            Choose a slot that works for you. The meeting will be held via Google Meet.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-white h-[600px] md:h-[700px]"
        >
          <iframe
            src="https://calendly.com/selloraprime/30min"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </>
  );
}