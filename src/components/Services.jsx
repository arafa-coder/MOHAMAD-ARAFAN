import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          title="What I Do"
          subtitle="Areas where I can help bring your web project to life."
        />

        <ul className="services-grid">
          {services.map(({ title, text, icon: Icon }, index) => (
            <li key={title}>
              <Reveal className="service" delay={(index % 3) * 0.07}>
                <span className="service__icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
