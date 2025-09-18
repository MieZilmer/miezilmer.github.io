import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import AnimatedWelcome from "../components/AnimatedWelcome";

function Home() {
  return (
    <div>
      <Navigation />
      <AnimatedWelcome />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
