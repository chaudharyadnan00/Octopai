import React from "react";

const Navbar = ({ showCenter = "true" }) => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "16px 30px",
        boxSizing: "border-box",
        borderBottom: "1px solid #dfdfdf",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0MPMFapHATEVKUr6XOgvbbyBwMEBNURMFQ&s"
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />
        <div
          style={{
            fontSize: "20px",
            color: "#2020ff",
            fontWeight: "bold",
          }}
        >
          Octopai.health
        </div>
      </div>
      {showCenter && (
        <div
          style={{
            flexGrow: "1",
            textAlign: "center",
            fontSize: "20px",
            color: "#2020ff",
            fontWeight: "bold",
          }}
        >
          AROM ASSESSMENT
        </div>
      )}
      {showCenter && (
        <button
          style={{
            float: "right",
            borderRadius: "40px",
            padding: "10px 16px",
            background: "#fff",
          }}
          onClick={logout}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
