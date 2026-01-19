"use client";

import { motion, Variants } from "framer-motion";

export default function Contact() {
  const cardVariants: Variants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="scroll-mt-24 px-6 md:px-12 py-28 max-w-7xl mx-auto bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Let’s Build Your E-Commerce Business
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you want to launch, scale, or learn — our team is ready 
            to guide you with proven systems and real results.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
          {/* WhatsApp Card */}
          <motion.div 
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex flex-col justify-between bg-white border border-slate-200 rounded-3xl p-8 hover:border-green-500 hover:shadow-2xl hover:shadow-green-100 transition-all duration-300 shadow-sm"
          >
            <div>
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 text-2xl">
                💬
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Chat on WhatsApp</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                Get instant answers, pricing details, or course enrollment support 
                directly from our team.
              </p>
            </div>

            <motion.a
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/+923106239168"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center w-full px-6 py-4 rounded-2xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-200"
            >
              Message Us on WhatsApp
            </motion.a>
          </motion.div>

          {/* Google Meet Scheduling Card */}
          <motion.div 
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex flex-col justify-between bg-white border border-slate-200 rounded-3xl p-8 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-300 shadow-sm"
          >
            <div>
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-500 text-2xl">
                📅
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Schedule a Google Meet</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                Book a free strategy session to discuss your goals, budget, 
                and growth roadmap — conducted via Google Meet.
              </p>
            </div>

            <motion.a
              whileTap={{ scale: 0.95 }}
              href="#schedule"
              className="inline-flex justify-center items-center w-full px-6 py-4 rounded-2xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
            >
              Schedule Free Strategy Session
            </motion.a>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-400 text-sm mt-14 font-medium"
        >
          ✨ 100% free consultation • Google Meet • No obligation
        </motion.p>
      </section>

      {/* ================= SCHEDULING SECTION ================= */}
      <section id="schedule" className="scroll-mt-24 px-6 md:px-12 py-28 max-w-7xl mx-auto bg-slate-50 rounded-[3rem] my-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Book Your Free Strategy Session
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">
            Choose a time that works for you. The meeting will be held via Google Meet.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white"
        >
          <iframe
            src="https://calendly.com/selloraprime/30min"
            className="w-full h-[700px]"
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </>
  );
}