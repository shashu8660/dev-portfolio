export default function Hero() {
    return (
        <section id="home" className="pt-20 h-screen flex flex-col justify-center items-start p-10">
            <h1 className="text-5x1 font-bold">Hi, I'm Shashank 👋 </h1>

            <p className="text-x1 mt-4 text-gray-400 max-w-x1">
                A full-Stack, Blockchain, Android, and iOS Developer.
                Crafting the best portfolio in the world.
            </p>

            <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                View My Work
            </button>
        </section>
    );
}