"use client";

import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "64px",
        padding: "15px 20px",
        boxShadow: "0 1px 2px var(--foreground)",
        zIndex: 10,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Éléments 3D</h1>
      <ThemeSwitcher />
    </header>
  );
};
