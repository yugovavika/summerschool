"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  a11y: boolean;
  toggleA11y: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  a11y: false,
  toggleA11y: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [a11y, setA11y] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
    const savedA11y = localStorage.getItem("a11y");
    if (savedA11y === "true") {
      setA11y(true);
      document.documentElement.classList.add("a11y");
    }
  }, []);

  useEffect(() => {
    if (!mounted.current) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!mounted.current) return;
    document.documentElement.classList.toggle("a11y", a11y);
    localStorage.setItem("a11y", String(a11y));
  }, [a11y]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleA11y = () => setA11y((a) => !a);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, a11y, toggleA11y }}>
      {children}
    </ThemeContext.Provider>
  );
}
