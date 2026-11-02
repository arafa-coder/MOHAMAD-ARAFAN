import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";
import { projectFilters, projects } from "../data/projects.js";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const reduceMotion = useReducedMotion();

  const visible = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  // Motion here answers a click on a filter, so cards animate in/out and reflow smoothly.
  const cardMotion = reduceMotion
    ? {}
    : {
        layout: true,
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.96 },
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section id="projects" className="section section--alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          title="My Projects"
          subtitle="Some of the projects I have built while developing my skills in web and software development."
        />

        <Reveal>
          <div className="filters" role="group" aria-label="Filter projects by category">
            {projectFilters.map((name) => (
              <button
                key={name}
                type="button"
                className="filter"
                aria-pressed={filter === name}
                onClick={() => setFilter(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </Reveal>

        <p className="sr-only" role="status" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"} in {filter}
        </p>

        <ul className="project-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.li key={project.id} {...cardMotion}>
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
