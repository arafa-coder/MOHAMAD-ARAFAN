import { FaCheckCircle, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Counter from "./Counter.jsx";
import { profile } from "../data/profile.js";
import { projects } from "../data/projects.js";
import { skillGroups } from "../data/skills.js";

const MERN = [
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Express.js", Icon: SiExpress },
  { name: "React.js", Icon: FaReact },
  { name: "Node.js", Icon: FaNodeJs },
];

const stats = [
  { label: "Projects Completed", value: projects.length },
  {
    label: "Technologies Learned",
    value: skillGroups.reduce((total, group) => total + group.skills.length, 0),
  },
  { label: "Years Learning", value: profile.stats.yearsLearning },
  { label: "GitHub Projects", value: profile.stats.githubProjects },
];

export default function About() {
  return (
    <section id="about" className="section section--alt" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" title="About Me" />

        <div className="about">
          <Reveal className="about__media">
            <div className="about__frame">
              <img
                src={profile.profileImage}
                alt={`Profile picture of ${profile.name}`}
                width="400"
                height="400"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal className="about__content" delay={0.1}>
            <p className="lead">{profile.aboutText}</p>
            <p>{profile.intro}</p>

            <h3 className="about__subtitle">My core stack</h3>
            <ul className="mern-list">
              {MERN.map(({ name, Icon }) => (
                <li key={name}>
                  <Icon aria-hidden="true" /> {name}
                </li>
              ))}
            </ul>

            <h3 className="about__subtitle">What I enjoy</h3>
            <ul className="check-list">
              {profile.enjoy.map((item) => (
                <li key={item}>
                  <FaCheckCircle aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <dl className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <dt className="stat__label">{stat.label}</dt>
                <dd className="stat__value">
                  <Counter value={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
