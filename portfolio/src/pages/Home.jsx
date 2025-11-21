import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

export default Home;