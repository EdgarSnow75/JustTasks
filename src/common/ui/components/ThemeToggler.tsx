import { useEffect, useState } from "react";
import lightModeModeIcon from "/images/icons/theme/lightmode.png";
import darkModeIcon from "/images/icons/theme/darkmode.png";

const ThemeToggler = ({ className }: { className?: string }) => {
  // Check if 'document' is available (only on the client-side)
  const html =
    typeof document !== "undefined" ? document.documentElement : null;

  const [themeToggle, setThemeToggle] = useState(
    html?.getAttribute("data-theme") ?? localStorage?.getItem("theme")
  );

  console.log("Data theme:", themeToggle);

  const toggleTheme = () => {
    const currentTheme = html?.getAttribute("data-theme");

    if (currentTheme === "lightMode") {
      html?.setAttribute("data-theme", "darkMode");
      localStorage.setItem("theme", "darkMode");
      setThemeToggle("darkMode");
    } else {
      html?.setAttribute("data-theme", "lightMode");
      localStorage.setItem("theme", "lightMode");
      setThemeToggle("lightMode");
    }
  };

  useEffect(() => {
    const getSystemTheme = () => {
      const isdarkMode = window.matchMedia(
        "(prefers-color-scheme:darkMode)"
      ).matches;
      if (isdarkMode) {
        html?.setAttribute("data-theme", "darkMode");
        localStorage.setItem("theme", "darkMode");
        setThemeToggle("darkMode");
      } else {
        html?.setAttribute("data-theme", "lightMode");
        localStorage.setItem("theme", "lightMode");
        setThemeToggle("lightMode");
      }
    };

    getSystemTheme();
  }, [html]);

  useEffect(() => {
    if (html) {
      const themeToggleButton = document.getElementById("theme-toggle-button");
      const userTheme = localStorage.getItem("theme");

      if (userTheme) {
        html.setAttribute("data-theme", userTheme);
      }

      themeToggleButton?.addEventListener("click", toggleTheme);

      return () => {
        themeToggleButton?.removeEventListener("click", toggleTheme);
      };
    }
  }, [html]);

  return (
    <div className="min-w-8">
      <button id="theme-toggle-button">
        <img
          src={`${
            themeToggle === "lightMode" ? lightModeModeIcon : darkModeIcon
          }`}
          alt="Mode Change Icon"
          className={`w-12 ${className} transition-all ${
            themeToggle === "lightMode" ? "rotate-0" : "rotate-[360deg]"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggler;
