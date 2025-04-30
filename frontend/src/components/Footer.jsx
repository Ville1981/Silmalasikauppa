// src/components/Footer.jsx
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Varaa aika näöntarkastukseen</h3>
        <div className="footer-buttons">
          <button className="red-button">Varaa verkosta</button>
          <button className="red-button">Etsi lähin myymälä</button>
          <span className="footer-phone">📞 09 4241 7000</span>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h4>Tuotteet</h4>
          <ul>
            <li><Link to="/silmalasit">Silmälasit</Link></li>
            <li><Link to="/aurinkolasit">Aurinkolasit</Link></li>
            <li><Link to="/linssit">Linssit</Link></li>
            <li><Link to="/piilolinssit">Piilolinssit</Link></li>
            <li><Link to="/kuivasilmatuotteet">Kuivasilmätuotteet</Link></li>
          </ul>
        </div>
        <div>
          <h4>Palvelut</h4>
          <ul>
            <li><Link to="/allinclusive">All Inclusive</Link></li>
            <li><Link to="/naontarkastus">Näöntarkastus</Link></li>
            <li><Link to="/silmalaarit">Silmälääkärit</Link></li>
            <li><Link to="/silmasairaala">Silmäsairaala</Link></li>
            <li><Link to="/tarjoukset">Tarjoukset</Link></li>
          </ul>
        </div>
        <div>
          <h4>Eye Store</h4>
          <ul>
            <li><Link to="/myymalat">Myymälät</Link></li>
            <li><Link to="/tarinamme">Tarinamme</Link></li>
            <li><Link to="/ajankohtaista">Ajankohtaista</Link></li>
            <li><Link to="/ura">Ura meillä</Link></li>
            <li><Link to="/palaute">Anna palautetta</Link></li>
          </ul>
        </div>
        <div>
          <h4>Verkkokauppa</h4>
          <ul>
            <li><Link to="/kotiinkuljetus">Kotitoimituspalvelu</Link></li>
            <li><Link to="/asiakaspalvelu">Asiakaspalvelu</Link></li>
            <li><Link to="/toimitusehdot">Toimitusehdot</Link></li>
            <li><Link to="/palautusohjeet">Palautusohjeet</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Eye Store. Kaikki oikeudet pidätetään.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
