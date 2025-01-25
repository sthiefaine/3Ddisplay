"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "10px 20px",
        boxShadow: "0 1px 2px var(--foreground)",
        zIndex: 10,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Éléments 3D</h1>
      <button
        className="bg-current-inv text-current-inv font-bold py-2 px-4 rounded"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌜" : "☀️"}
      </button>
    </header>
  );
};
