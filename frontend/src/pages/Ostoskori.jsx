import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import "../styles/Ostoskori.css";

function Ostoskori() {
  const { cart, clearCart, updateQuantity, removeFromCart } = useCart();

  const yhteishinta = cart.reduce((summa, tuote) => summa + tuote.hinta * tuote.määrä, 0);

  if (cart.length === 0) {
    return (
      <div className="ostoskori-container">
        <h2>Ostoskori</h2>
        <p>Ostoskorisi on tyhjä.</p>
        <Link to="/" className="btn">Takaisin ostoksille</Link>
      </div>
    );
  }

  return (
    <div className="ostoskori-container">
      <h2>Ostoskori</h2>

      {cart.map((tuote, index) => (
        <div key={index} className="ostoskori-tuote">
          <p><strong>{tuote.nimi}</strong></p>
          <p>Hinta: {tuote.hinta} €</p>
          <label>
            Määrä:
            <select
              value={tuote.määrä}
              onChange={(e) => updateQuantity(tuote.id, parseInt(e.target.value))}
            >
              {[...Array(10).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>{n + 1}</option>
              ))}
            </select>
          </label>
          <button onClick={() => removeFromCart(tuote.id)} className="poista-btn">Poista</button>
        </div>
      ))}

      <h3>Yhteensä: {yhteishinta.toFixed(2)} €</h3>

      <div className="ostoskori-toiminnot">
        <button onClick={clearCart} className="tyhjenna-btn">Tyhjennä ostoskori</button>
        <Link to="/kassa" className="btn">Siirry kassalle</Link>
      </div>
    </div>
  );
}

export default Ostoskori;
