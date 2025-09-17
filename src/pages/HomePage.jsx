import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Navigation />
      <section id="home">
        <img src="/data/img/hero.png" alt="" />
        <div className="hero-text">
          <div className="hero-name">Mie</div>
          <div className="hero-lastname">Zilmer</div>
        </div>
      </section>
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
