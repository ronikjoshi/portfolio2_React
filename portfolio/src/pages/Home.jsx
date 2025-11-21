import About from "../sections/About";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";
import Hero from "../sections/Hero";
import Project from "../sections/Project";

function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
}

export default Home;