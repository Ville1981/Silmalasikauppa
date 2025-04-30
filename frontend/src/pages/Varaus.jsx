import React, { useState } from 'react';
import './Varaus.css';

function Varaus() {
  const [nimi, setNimi] = useState('');
  const [email, setEmail] = useState('');
  const [paiva, setPaiva] = useState('');

  const lahetaVaraus = (e) => {
    e.preventDefault();
    alert(`Varaus lähetetty!\nNimi: ${nimi}\nPäivä: ${paiva}`);
    // Myöhemmin API-kutsu varauksen tallentamiseen
  };

  return (
    <div className="container">
      <h2>Varaa aika</h2>
      <form onSubmit={lahetaVaraus} className="varaus-formi">
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
        <input
          type="date"
          value={paiva}
          onChange={(e) => setPaiva(e.target.value)}
          required
        />
        <button type="submit" className="btn">Varaa</button>
      </form>
    </div>
  );
}

export default Varaus;
