export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-start px-10 md:px-20 bg-black text-white"
    >
      <h1 className="text-5xl md:text-7xl font-bold">
        Hi, I’m <span className="text-blue-400">Shashank</span> 👋
      </h1>

      <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mt-6">
        A full-Stack, Blockchain, Android, and iOS Developer. Crafting the best portfolio in the world.
      </p>

      <button className="mt-8 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition">
        View My Work
      </button>
    </section>
  );
}