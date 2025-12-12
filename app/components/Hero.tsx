"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-10 w-72 h-72 bg-blue-500/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/30 blur-[120px] rounded-full" />
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 text-center"
      >
        {/* Typewriter Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight 
                       bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          <Typewriter
            words={[
              "Hi, I'm Shashank",
              "Full-Stack Developer",
              "Android & iOS Dev",
              "Blockchain Enthusiast",
              "Building Clean, Modern Experiences"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl text-gray-300 leading-relaxed">
          A passionate developer building high-end digital experiences  
          with clean code, strong UI, and modern tech.
        </p>

        {/* CTA Button */}
        <a
          href="#projects"
          className="inline-block mt-8 px-8 py-3 text-lg font-semibold
                     rounded-full border border-transparent
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     text-white shadow-[0_0_12px_rgba(59,130,246,0.6)]
                     hover:shadow-[0_0_22px_rgba(139,92,246,0.9)]
                     transition-all"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}