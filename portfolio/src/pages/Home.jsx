import About from "../sections/About";
import Hero from "../sections/Hero";

function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <Hero />
      <About />
    </main>
  );
}

export default Home;