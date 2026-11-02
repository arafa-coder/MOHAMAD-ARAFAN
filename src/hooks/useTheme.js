import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function readStoredTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* localStorage can be blocked (private mode) — fall back to dark */
  }
  return "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    []
  );

  return { theme, toggleTheme };
}
