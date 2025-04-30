import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [nimi, setNimi] = useState('');
  const [email, setEmail] = useState('');
  const [salasana, setSalasana] = useState('');
  const [virhe, setVirhe] = useState('');
  const navigate = useNavigate();

  const rekisteroi = async (e) => {
    e.preventDefault();
    try {
      const vastaus = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nimi, email, salasana }),
      });

      const data = await vastaus.json();

      if (!vastaus.ok) {
        throw new Error(data.viesti || 'Rekisteröinti epäonnistui');
      }

      alert('Rekisteröinti onnistui! Kirjaudu nyt sisään.');
      navigate('/login');
    } catch (err) {
      setVirhe(err.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Luo käyttäjätunnus</h2>
      {virhe && <p className="virhe">{virhe}</p>}
      <form onSubmit={rekisteroi}>
        <label>Nimi:</label>
        <input type="text" value={nimi} onChange={(e) => setNimi(e.target.value)} required />
        <label>Sähköposti:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Salasana:</label>
        <input type="password" value={salasana} onChange={(e) => setSalasana(e.target.value)} required />
        <button type="submit">Rekisteröidy</button>
      </form>
    </div>
  );
}

export default Register;
