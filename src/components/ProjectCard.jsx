import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectLink({ href, icon: Icon, label, projectTitle, primary }) {
  const className = `btn btn--small ${primary ? "btn--primary" : "btn--ghost"}`;

  if (!href) {
    return (
      <button
        type="button"
        className={className}
        disabled
        title="Add this link in src/data/projects.js"
        aria-label={`${label} link for ${projectTitle} is not available yet`}
      >
        <Icon aria-hidden="true" /> {label}
      </button>
    );
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} for ${projectTitle} (opens in a new tab)`}
    >
      <Icon aria-hidden="true" /> {label}
    </a>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img
          src={project.image}
          alt={project.alt}
          width="800"
          height="500"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
        <div className="project-card__actions">
          <ProjectLink href={project.github} icon={FaGithub} label="GitHub" projectTitle={project.title} />
          <ProjectLink
            href={project.demo}
            icon={FaExternalLinkAlt}
            label="Live Demo"
            projectTitle={project.title}
            primary
          />
        </div>
      </div>
    </article>
  );
}
