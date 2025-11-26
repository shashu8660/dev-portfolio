export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-10 md:px-20 bg-black text-white border-t border-white/10"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side — Description */}
        <div>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m <span className="text-blue-400 font-semibold">Shashank</span>, a
            full-stack developer passionate about building high-performance
            digital experiences. I specialize in modern JavaScript frameworks,
            AI-integrated apps, blockchain systems, and mobile applications.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-6">
            I love creating clean, scalable, and impactful software solutions.
            Currently focused on mastering advanced frontend and backend
            architecture, while building next-level portfolio projects that
            stand out from average developers.
          </p>
        </div>

        {/* Right Side — Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Skills & Technologies</h3>

          <ul className="grid grid-cols-2 gap-4 text-gray-300">
            <li className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
              Next.js
            </li>
            <li className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
              React
            </li>
            <li className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
              Tailwind CSS
            </li>
            <li className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
              Node.js
            </li>
            <li className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
              MongoDB
            </li>
            <li className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
              PostgreSQL
            </li>
            <li className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
              Blockchain (Solidity, Web3)
            </li>
            <li className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
              Android & iOS (React Native)
            </li>
            <li className="bg-neutral-900 p-3 rounded-lg border border-neutral-800">
              C / C++ / Java
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}