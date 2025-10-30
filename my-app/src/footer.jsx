// import { text } from "@fortawesome/fontawesome-svg-core"

function footer() {
  const estiloFooter = {
    fontSize: 50,
    textAlign: "center",
    marginTop: "500px",
    color: "--text-primario",
  };
  return (
    <footer style={estiloFooter}>
      <p>copyright &copy; 2024 by &lt;/buenas&gt;. All rights reserved.</p>
    </footer>
  );
}

export default footer;
