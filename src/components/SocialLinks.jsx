import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { profile } from "../data/profile.js";

const ITEMS = [
  { key: "github", label: "GitHub", Icon: FaGithub },
  { key: "linkedin", label: "LinkedIn", Icon: FaLinkedinIn },
  { key: "facebook", label: "Facebook", Icon: FaFacebookF },
  { key: "instagram", label: "Instagram", Icon: FaInstagram },
];

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`social ${className}`.trim()} aria-label="Social media profiles">
      {ITEMS.map(({ key, label, Icon }) => (
        <li key={key}>
          <a
            href={profile.social[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            title={label}
          >
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
