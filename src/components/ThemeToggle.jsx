import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button type="button" className="icon-btn" onClick={onToggle} aria-label={label} title={label}>
      {isDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
    </button>
  );
}
