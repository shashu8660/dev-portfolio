"use client";

import { motion } from 'framer-motion';

const titleVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 6 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

export default function Hero() {
  return (
  <motion.section
    id="hero"
    className="relative min-h-screen lg:min-h-[80vh] flex items-center justify-center bg-white dark:bg-slate-900 overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
      {/* decorative background */}
      <svg className="absolute inset-0 w-full h-full -z-10" preserveAspectRatio="none" viewBox="0 0 800 600" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#c7b8ff" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#g1)" />
        <g transform="translate(50,100) rotate(-12)" fillOpacity="0.06" fill="#000">
          <ellipse cx="200" cy="50" rx="260" ry="80" />
          <ellipse cx="600" cy="200" rx="220" ry="60" />
        </g>
      </svg>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-lg border border-transparent dark:border-slate-800">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Hi, Im <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400">Shashank</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Full-stack Developer • Mobile & Blockchain — I build modern web apps, mobile experiences, and open-source tools that scale.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg transform-gpu transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                See My Work
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-200 transform-gpu transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 text-slate-500 dark:text-slate-400">
              <a href="https://github.com/" aria-label="GitHub" className="hover:text-slate-900 dark:hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.64.23 2.86.11 3.16.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.41-5.25 5.7.42.36.79 1.06.79 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="hover:text-slate-900 dark:hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.64 1.34 2.98 2.98 2.98 1.64 0 2.98-1.34 2.98-2.98C7.96 4.84 6.62 3.5 4.98 3.5zM2.4 8.98h5.17V21H2.4zM9.7 9h4.96v1.6h.07c.69-1.31 2.38-2.69 4.9-2.69 5.24 0 6.2 3.45 6.2 7.94V21h-5.17v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V21H9.7z" />
                </svg>
              </a>
            </div>

            <div className="mt-8">
              <a href="#projects" aria-label="Scroll to projects" className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 transition">
                <span>Scroll to projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  </motion.section>
  );
}