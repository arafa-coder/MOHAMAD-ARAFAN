import SocialLinks from "./SocialLinks.jsx";
import { profile } from "../data/profile.js";

const FOOTER_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__title">{profile.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="footer__links">
            {FOOTER_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks className="footer__social" />
      </div>

      <div className="container footer__legal">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
