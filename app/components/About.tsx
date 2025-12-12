"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 flex flex-col items-center"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-12
                   bg-gradient-to-r from-blue-400 to-purple-500
                   bg-clip-text text-transparent text-center"
      >
        About Me
      </motion.h2>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full p-10 rounded-3xl 
                   bg-white/5 backdrop-blur-xl border border-white/10 
                   shadow-[0_0_25px_rgba(255,255,255,0.05)]"
      >
        {/* Bio */}
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm <span className="text-blue-400 font-semibold">Shashank</span>,
          a passionate developer who builds high-performance digital
          experiences across web, mobile, and blockchain ecosystems.
          I love creating sleek UI, writing clean code, and solving
          complex logic problems.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          My focus is on building modern, scalable applications using
          cutting-edge technologies such as Next.js, Tailwind CSS,
          React Native, Solidity, and AI APIs. My mission is simple:
          <span className="text-purple-400 font-semibold"> build top-tier
          products that stand out.</span>
        </p>

        {/* Timeline */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-8">
            Timeline
          </h3>

          <div className="space-y-10 border-l border-white/20 pl-6">
            {/* 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-blue-500"></div>
              <h4 className="text-xl font-semibold text-blue-400">2023–2025</h4>
              <p className="text-gray-300 mt-1">
                Built professional-level skills in Full-Stack Web Development,
                Mobile Development, and Blockchain Engineering.
              </p>
            </motion.div>

            {/* 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-purple-500"></div>
              <h4 className="text-xl font-semibold text-purple-400">2022–2023</h4>
              <p className="text-gray-300 mt-1">
                Started learning programming fundamentals — C, C++, Java,
                Python — and built a strong foundation in software concepts.
              </p>
            </motion.div>

            {/* 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-pink-500"></div>
              <h4 className="text-xl font-semibold text-pink-400">Future Goals</h4>
              <p className="text-gray-300 mt-1">
                Build industry-quality products, contribute to open-source,
                and create AI-powered applications that solve real problems.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}