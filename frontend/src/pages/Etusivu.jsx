import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Etusivu.css';

function Etusivu() {
  const { addToCart } = useCart();
  const [maarat, setMaarat] = useState({});

  const tuotteet = [
    { id: 1, nimi: 'Silmälasit Basic', hinta: 129 },
    { id: 2, nimi: 'Aurinkolasit Premium', hinta: 159 },
    { id: 3, nimi: 'Piilolinssit Comfort', hinta: 69 },
  ];

  const muutaMaara = (tuoteId, määrä) => {
    setMaarat((prev) => ({ ...prev, [tuoteId]: määrä }));
  };

  const lisaaOstoskoriin = (tuote) => {
    const maara = maarat[tuote.id] ? parseInt(maarat[tuote.id]) : 1;
    for (let i = 0; i < maara; i++) {
      addToCart(tuote);
    }
    alert(`${tuote.nimi} lisätty ostoskoriin (${maara} kpl)!`);
  };

  return (
    <div className="container">
      {/* Hero-banneri */}
      <section className="hero">
        <img src="/hero-banner.png" alt="Hero Banner" className="hero-banner" />
        <h2>2 LASIT 1 HINNALLA</h2>
        <Link to="/varaus" className="btn">Varaa aika</Link>
      </section>

      {/* Kategoriat */}
      <section className="kategoriat">
        <h3>Kategoriat</h3>
        <div className="kategoriat-grid">
          <Link to="/silmalasit" className="kategoria">
            <img src="/silmälasit1.png" alt="Silmälasit" />
            <p>Silmälasit</p>
          </Link>
          <Link to="/aurinkolasit" className="kategoria">
            <img src="/aurinkolasit1.png" alt="Aurinkolasit" />
            <p>Aurinkolasit</p>
          </Link>
          <Link to="/piilolinssit" className="kategoria">
            <img src="/piilolinssit1.png" alt="Piilolinssit" />
            <p>Piilolinssit</p>
          </Link>
        </div>
      </section>

      {/* Ajankohtaista */}
      <section className="ajankohtaista">
        <h3>Ajankohtaista</h3>
        <div className="ajankohtaista-grid">
          <Link to="/ajankohtaista1" className="ajankohtaista-item">
            <img src="/ajankohtaista1.png" alt="Ajankohtaista 1" />
          </Link>
          <Link to="/ajankohtaista2" className="ajankohtaista-item">
            <img src="/ajankohtaista2.png" alt="Ajankohtaista 2" />
          </Link>
          <Link to="/ajankohtaista3" className="ajankohtaista-item">
            <img src="/ajankohtaista3.png" alt="Ajankohtaista 3" />
          </Link>
        </div>
      </section>

      {/* Markkinointi */}
      <section className="etusivu-markkinointi">
        <h2>Miksi valita Silmälasikauppa?</h2>
        <ul>
          <li>✅ Laajin valikoima silmälaseja ja aurinkolaseja</li>
          <li>✅ Ammattitaitoinen asiakaspalvelu ja optikot</li>
          <li>✅ Varaa aika näöntarkastukseen helposti verkossa</li>
          <li>✅ Edulliset hinnat ja nopeat toimitukset</li>
          <li>✅ Kotimainen yritys – luotettava valinta</li>
        </ul>
      </section>

      {/* Uutuudet */}
      <section className="uutuudet">
        <h3>Uutuudet</h3>
        <div className="tuotteet">
          {tuotteet.map((tuote) => (
            <div key={tuote.id} className="tuote-kortti">
              <h4>{tuote.nimi}</h4>
              <p>Hinta: {tuote.hinta} €</p>
              <label>
                Määrä:
                <select
                  value={maarat[tuote.id] || 1}
                  onChange={(e) => muutaMaara(tuote.id, e.target.value)}
                >
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>{n + 1}</option>
                  ))}
                </select>
              </label>
              <button onClick={() => lisaaOstoskoriin(tuote)}>Lisää ostoskoriin</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Etusivu;
