import { FaGraduationCap, FaBookOpen } from "react-icons/fa";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data/education.js";

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" title="Education" />

        <ol className="timeline">
          <li className="timeline__item">
            <Reveal>
              <div className="timeline__card">
                <span className="timeline__icon">
                  <FaGraduationCap aria-hidden="true" />
                </span>
                <div>
                  <h3>{education.degree}</h3>
                  <p className="timeline__meta">{education.institution}</p>
                  {education.period && <p className="timeline__period">{education.period}</p>}
                </div>
              </div>
            </Reveal>
          </li>

          <li className="timeline__item">
            <Reveal delay={0.08}>
              <div className="timeline__card timeline__card--stack">
                <div className="timeline__head">
                  <span className="timeline__icon">
                    <FaBookOpen aria-hidden="true" />
                  </span>
                  <h3>Areas of study</h3>
                </div>
                <ul className="tags">
                  {education.areas.map((area) => (
                    <li key={area} className="tag tag--lg">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  );
}
