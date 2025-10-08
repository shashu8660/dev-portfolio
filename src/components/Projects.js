// src/components/Projects.js
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "DevSync — Open Source Collaboration Hub",
    description:
      "A live, AI-powered workspace for open-source contributors with realtime code editing, AI commit assistance, GitHub integration, and optional blockchain login.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind", "OpenAI API", "Web3.js"],
    github: "#", // replace with actual repo link
    live: "#" // replace with live demo link
  },
  {
    title: "ChainView — Blockchain Transaction Visualizer",
    description:
      "Real-time blockchain dashboard tracking Ethereum transactions, graph-based wallet visualization, AI summaries, responsive dark UI, and smooth animations.",
    tech: ["Next.js", "Ethers.js", "D3.js", "OpenAI API", "TailwindCSS"],
    github: "#",
    live: "#"
  },
  {
    title: "SmartDesk — AI Developer Dashboard",
    description:
      "Personal developer assistant dashboard: AI code chat, GitHub repo viewer, API tester, task integration with Notion API, multi-device sync, optional macOS native wrapper.",
    tech: ["Next.js", "OpenAI API", "Supabase", "TailwindCSS", "Framer Motion"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-transparent">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            A selection of my work showcasing full-stack, AI integrations, and blockchain tooling. Click through to explore each project.
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="btn btn-ghost" aria-label="View all projects">View all projects</a>
        </div>
      </div>
    </section>
  );
}