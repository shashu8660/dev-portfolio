export default function Projects() {
    const projects = [
        {
            title: "DevSync - Open Source Collaboration ",
            description:
            "A live, AI-powered workspace for open-source contributors. Built with Next.js, Node.js (Websocket + Express), Tailwind, MongoDB, OpenAI's API, Web3.js.",
            image: "/porject1.png",
            link: "https://github.com/shashu8660",
        },
        {
            title: "ChainView -Blockchain Transaction Visualizer",
            description:
            "A beautiful, real-time blockchain dashboard for tracking Ethereum transactions visually. Built Next.js, Ethers.js, D3.js, OpenAI API, TailwindCSS.",
            image: "/project2.png",
            link: "https://github.com/shashu8660",
        },
        {
            title: "SmartDesk - AI Developer Dashboard",
            description:
            "Your persojnal developer assistant dashboard - all your tools in one AI-powered workspace. Built with Next.js, OpenAI API, Supabase, TailwindCSS, Framer Motion.",
            image: "/project3.png",
            link: "https://github.com/shashu8660",
        },
    ];

    return (
        <section id="projects" className="py-20 px-10 md:px-20 bg-black text-white">
            <h2 className="text-4x1 md:text-5x1 font-bold mb-12">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    projects.map((projects, index) =>(<a
                        key={index}
                        href={projects.link}
                        target="_blank"
                        className="group block bg-natural-900 rounded-x1 overflow-hidden border border-neutral-800 hover:border-neutral-700 trasition"
                        >
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={projects.image}
                                    alt={projects.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2x1 font-semibold">{projects.title}</h3>

                                <p className="text-gray-400 mt-2">{projects.description}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    );
    
}