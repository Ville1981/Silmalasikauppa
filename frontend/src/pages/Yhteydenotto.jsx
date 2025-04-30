import React, { useState } from 'react';
import './Yhteydenotto.css';

function Yhteydenotto() {
  const [nimi, setNimi] = useState('');
  const [email, setEmail] = useState('');
  const [viesti, setViesti] = useState('');

  const lahetaViesti = (e) => {
    e.preventDefault();
    alert(`Viesti lähetetty!\nNimi: ${nimi}\nViesti: ${viesti}`);
    // Myöhemmin tähän API-kutsu Nodemailerilla
  };

  return (
    <div className="container">
      <h2>Ota yhteyttä</h2>
      <form onSubmit={lahetaViesti} className="yhteydenotto-formi">
        <input
          type="text"
          placeholder="Nimi"
          value={nimi}
          onChange={(e) => setNimi(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Sähköposti"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Viesti"
          value={viesti}
          onChange={(e) => setViesti(e.target.value)}
          required
          rows="5"
        ></textarea>
        <button type="submit" className="btn">Lähetä</button>
      </form>
    </div>
  );
}

export default Yhteydenotto;
