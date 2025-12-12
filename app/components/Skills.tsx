"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiAndroid,
  SiApple,
  SiSolidity,
  SiPython,
  SiC,
  SiCplusplus,
  SiRust
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git/GitHub", icon: SiGithub },
  { name: "Android Dev", icon: SiAndroid },
  { name: "iOS (SwiftUI)", icon: SiApple },
  { name: "Blockchain (Solidity)", icon: SiSolidity },
  { name: "Python", icon: SiPython },

  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Rust", icon: SiRust },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center 
                       hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all"
          >
            <skill.icon className="text-5xl mb-4 group-hover:scale-110 transition-transform text-blue-300" />
            <p className="text-lg font-semibold text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}