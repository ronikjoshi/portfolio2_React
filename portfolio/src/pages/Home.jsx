import About from "../sections/About";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";

function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

export default Home;