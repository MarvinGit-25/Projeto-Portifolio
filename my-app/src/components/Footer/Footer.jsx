import React from "react";

function Footer() {
  const estiloFooter = {
    padding: "2rem",
    textAlign: "center",
    background: "rgba(17, 24, 39, 0.8)",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
    color: "var(--text-secundario)",
    marginTop: "2rem",
  };

  const pStyle = {
    fontSize: "1.1rem",
    margin: 0,
  };

  return (
    <footer style={estiloFooter}>
      <p style={pStyle}>Copyright &copy; 2024 by <span>&lt;/buenas&gt;</span>. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
