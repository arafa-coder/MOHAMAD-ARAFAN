import { useRef } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { LEVEL_LABELS, skillGroups } from "../data/skills.js";

const SEGMENTS = [1, 2, 3, 4, 5];

function SkillCard({ skill }) {
  const { name, icon: Icon, level } = skill;
  const label = LEVEL_LABELS[level - 1];

  return (
    <li className="skill">
      <span className="skill__icon">
        <Icon aria-hidden="true" />
      </span>
      <div className="skill__info">
        <div className="skill__row">
          <span className="skill__name">{name}</span>
          <span className="skill__level">{label}</span>
        </div>
        <div className="skill__meter" role="img" aria-label={`${name}: ${label} (${level} out of 5)`}>
          {SEGMENTS.map((n) => (
            <span key={n} className={n <= level ? "is-on" : ""} style={{ "--i": n }} />
          ))}
        </div>
      </div>
    </li>
  );
}

function SkillGroup({ group, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Reveal delay={delay}>
      <div className="skill-group" ref={ref}>
        <h3>{group.title}</h3>
        <ul className={`skill-list${inView ? " is-visible" : ""}`}>
          {group.skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          title="Skills"
          subtitle="The technologies I work with, and an honest view of how comfortable I am with each."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.title} group={group} delay={(index % 2) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
