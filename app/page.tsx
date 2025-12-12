import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main >
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}