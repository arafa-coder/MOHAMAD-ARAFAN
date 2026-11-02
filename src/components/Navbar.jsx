import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle.jsx";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { profile } from "../data/profile.js";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
const SECTION_IDS = LINKS.map((link) => link.id);

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled || menuOpen ? " is-solid" : ""}`}>
      <nav className="container navbar__inner" aria-label="Primary">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          {profile.logoText}
        </a>

        <ul id="primary-menu" className={`navbar__links${menuOpen ? " is-open" : ""}`}>
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`navbar__link${activeId === id ? " is-active" : ""}`}
                aria-current={activeId === id ? "location" : undefined}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="navbar__hire-mobile">
            <a href="#contact" className="btn btn--primary" onClick={closeMenu}>
              Hire Me
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="#contact" className="btn btn--primary btn--small navbar__hire">
            Hire Me
          </a>
          <button
            type="button"
            className="icon-btn navbar__burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
