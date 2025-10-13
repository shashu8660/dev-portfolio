"use client";

import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    "React / Next.js",
    "Node.js / Express",
    "MongoDB / PostgreSQL",
    "Python / Django",
    "C++ / Rust",
    "Java / Spring",
    "Blockchain (Solidity, Web3)",
    "iOS & Android (React Native)",
  ];

  return (
  <motion.section
    id="about"
    className="py-16 px-6 bg-transparent"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
      <div className="container">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">About Me</h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
              I&apos;m a passionate <span className="font-semibold text-indigo-600">Full-Stack Developer</span> with a focus on building
              fast, accessible, and delightful experiences. I work across web, mobile, and blockchain stacks — combining product-first thinking
              with solid engineering practices.
            </p>

            <div className="flex gap-3 flex-wrap mb-5">
              <a href="#projects" className="btn btn-primary transition transform-gpu duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:ring-4 focus-visible:ring-indigo-300" aria-label="See my work">See my work</a>
              <a href="#contact" className="btn btn-ghost transition transform-gpu duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:ring-4 focus-visible:ring-indigo-300" aria-label="Contact me">Contact</a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5">
              <div className="text-center">
                <div className="text-xl font-bold text-slate-900 dark:text-white">8+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">30+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">15</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Open-source PRs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">5</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Mobile Apps</div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Key skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((s, i) => (
                  <span key={`${s}-${i}`} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="w-full max-w-sm bg-white/90 dark:bg-slate-900/80 glass rounded-2xl p-4 shadow-lg border border-transparent dark:border-slate-800">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 flex items-center justify-center text-white text-2xl font-bold shadow-md mb-3">S</div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Shashank</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Full-Stack Developer</p>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">I build beautiful, reliable software and love working on performance, UX, and developer tools.</p>

                <div className="mt-4 flex gap-3">
                  <a href="#contact" className="btn btn-primary">Hire me</a>
                  <a href="#projects" className="btn btn-ghost">Projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}