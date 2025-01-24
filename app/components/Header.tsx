export const Header = () => {
  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        padding: "10px 20px",
        background: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 10,
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem", color: "#333" }}>
        Éléments 3D
      </h1>
    </header>
  );
};
