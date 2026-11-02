import { FaBookOpen, FaHammer, FaChartLine, FaRocket } from "react-icons/fa";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const STEPS = [
  {
    title: "Learning",
    text: "Studying web fundamentals, the MERN stack, and how modern applications are structured.",
    icon: FaBookOpen,
  },
  {
    title: "Building",
    text: "Turning what I learn into practical projects, from React interfaces to Express APIs.",
    icon: FaHammer,
  },
  {
    title: "Improving",
    text: "Refactoring, fixing bugs, and adopting cleaner, more maintainable patterns.",
    icon: FaChartLine,
  },
  {
    title: "Developing Professionally",
    text: "Working towards internships, junior roles, and freelance projects.",
    icon: FaRocket,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section section--alt" aria-labelledby="journey-title">
      <div className="container">
        <SectionHeading
          id="journey-title"
          title="My Developer Journey"
          subtitle="I keep improving my skills by building practical projects and learning modern technologies."
        />

        <Reveal>
          <ol className="journey">
            {STEPS.map(({ title, text, icon: Icon }) => (
              <li className="journey__step" key={title}>
                <span className="journey__icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
