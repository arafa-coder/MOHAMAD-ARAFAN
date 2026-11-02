import Reveal from "./Reveal.jsx";

export default function SectionHeading({ id, title, subtitle }) {
  return (
    <Reveal className="section-heading">
      <h2 id={id}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}
