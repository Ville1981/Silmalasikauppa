import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Kassa.css";

function Kassa() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [nimi, setNimi] = useState('');
  const [osoite, setOsoite] = useState('');
  const [sahkoposti, setSahkoposti] = useState('');
  const [puhelin, setPuhelin] = useState('');
  const [maksutapa, setMaksutapa] = useState('');

  const yhteishinta = cart.reduce(
    (summa, tuote) => summa + tuote.hinta * tuote.määrä,
    0
  );

  const kasitteleTilaus = (e) => {
    e.preventDefault();

    if (!nimi || !osoite || !sahkoposti || !puhelin || !maksutapa) {
      alert('Täytä kaikki tiedot!');
      return;
    }

    alert(`Kiitos tilauksestasi, ${nimi}!\nTilauksesi on vastaanotettu.`);
    clearCart();
    navigate('/kiitos');
  };

  if (cart.length === 0) {
    return (
      <div className="kassa-container">
        <h2>Kassa</h2>
        <p>Ostoskorisi on tyhjä. Lisää tuotteita ensin.</p>
        <Link to="/" className="takaisin-linkki">Takaisin etusivulle</Link>
      </div>
    );
  }

  return (
    <div className="kassa-container">
      <h2>Siirry kassalle</h2>

      <div className="kassa-ostoskori">
        <h3>Ostoskori:</h3>
        {cart.map((tuote, index) => (
          <div key={index} className="kassa-tuote">
            <p>
              {tuote.nimi} – {tuote.hinta} € x {tuote.määrä} kpl = {(tuote.hinta * tuote.määrä).toFixed(2)} €
            </p>
          </div>
        ))}
        <h3>Yhteensä: {yhteishinta.toFixed(2)} €</h3>
      </div>

      <form className="kassa-form" onSubmit={kasitteleTilaus}>
        <div className="form-group">
          <label>Nimi</label>
          <input type="text" value={nimi} onChange={(e) => setNimi(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Osoite</label>
          <input type="text" value={osoite} onChange={(e) => setOsoite(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Sähköposti</label>
          <input type="email" value={sahkoposti} onChange={(e) => setSahkoposti(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Puhelin</label>
          <input type="tel" value={puhelin} onChange={(e) => setPuhelin(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Maksutapa</label>
          <select value={maksutapa} onChange={(e) => setMaksutapa(e.target.value)} required>
            <option value="">Valitse maksutapa</option>
            <option value="kortti">Korttimaksu</option>
            <option value="verkkopankki">Verkkopankki</option>
            <option value="lasku">Lasku</option>
          </select>
        </div>

        <button type="submit" className="kassa-btn">Vahvista tilaus</button>
        <Link to="/" className="takaisin-linkki">Takaisin etusivulle</Link>
      </form>
    </div>
  );
}

export default Kassa;
