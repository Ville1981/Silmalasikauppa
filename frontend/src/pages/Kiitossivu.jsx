import React from "react";
import { Link } from "react-router-dom";
import "./Kiitossivu.css";

function Kiitossivu() {
  return (
    <div className="kiitossivu-container">
      <h2>🎉 Kiitos tilauksestasi!</h2>
      <p>Olemme vastaanottaneet tilauksesi ja käsittelemme sen pian.</p>
      <Link to="/" className="kiitos-linkki">Palaa etusivulle</Link>
    </div>
  );
}

export default Kiitossivu;
