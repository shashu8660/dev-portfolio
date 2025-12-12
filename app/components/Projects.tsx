"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const projects = [
  {
            title: "DevSync - Open Source Collaboration ",
            description:
            "A live, AI-powered workspace for open-source contributors.",
            tags: ["Next.js", "Node.js", "MongoDB", "Tailwind", "OpenAI API", "Web3.js"],
            github: "https://github.com/shashu8660",
            live:"#",
        },
        {
            title: "ChainView -Blockchain Transaction Visualizer",
            description:
            "A beautiful, real-time blockchain dashboard for tracking Ethereum transactions visually",
            tags: ["Next.js", "Ethers.js", "D3.js", "OpenAI API", "TailwindCSS"],
            github: "https://github.com/shashu8660",
            live: "#",
        },
        {
            title: "SmartDesk - AI Developer Dashboard",
            description:
            "Your persojnal developer assistant dashboard - all your tools in one AI-powered workspace.",
            tags: ["Next.js", "OpenAI API", "Supabase", "TailwindCSS", "Framer Motion"],
            github: "https://github.com/shashu8660",
            live: "#",
        },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold mb-16 
                   bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.02}
              transitionSpeed={2500}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="rounded-2xl"
            >
              <div
                className="p-[2px] rounded-2xl 
                           bg-gradient-to-r from-blue-500 to-purple-600 
                           shadow-[0_0_15px_rgba(99,102,241,0.3)]"
              >
                <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white">{proj.title}</h3>

                  <p className="mt-4 text-gray-300 text-sm">{proj.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/10 px-2 py-1 rounded-full border border-white/20 text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/10">
                    <a
                      href={proj.github}
                      className="flex items-center gap-2 text-gray-200 hover:text-blue-400 transition"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={proj.live}
                      className="flex items-center gap-2 text-gray-200 hover:text-purple-400 transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}