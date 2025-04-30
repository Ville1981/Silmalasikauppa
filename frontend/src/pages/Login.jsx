import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [salasana, setSalasana] = useState('');
  const [virhe, setVirhe] = useState('');
  const navigate = useNavigate();
  const { kirjauduSisaan } = useAuth(); // ✅ Contextin kautta kirjautuminen

  const kirjaudu = async (e) => {
    e.preventDefault();
    try {
      const vastaus = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, salasana }),
      });

      const data = await vastaus.json();

      if (!vastaus.ok) {
        throw new Error(data.viesti || 'Kirjautuminen epäonnistui');
      }

      kirjauduSisaan(data.token); // 🔁 Context päivittää navbarin
      navigate('/');
    } catch (err) {
      setVirhe(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Kirjaudu sisään</h2>
      {virhe && <p className="virhe">{virhe}</p>}
      <form onSubmit={kirjaudu} className="kirjautumis-formi">
        <label>Sähköposti:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Salasana:</label>
        <input
          type="password"
          value={salasana}
          onChange={(e) => setSalasana(e.target.value)}
          required
        />
        <button type="submit" className="btn">Kirjaudu</button>
      </form>
    </div>
  );
}

export default Login;
