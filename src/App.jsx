import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Journey from "./components/Journey.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Journey />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
