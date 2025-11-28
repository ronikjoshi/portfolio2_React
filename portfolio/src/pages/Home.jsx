import About from "../sections/About";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";
import Hero from "../sections/Hero";
import Projects from "./Projects";

function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;