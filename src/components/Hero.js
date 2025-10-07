export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-white text-center px-6">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-4">
        Hi, I’m Shashank
      </h1>
      <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-xl">
        Full-stack Developer | Mobile & Blockchain | I build modern web apps and contribute to open-source projects.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          See My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}