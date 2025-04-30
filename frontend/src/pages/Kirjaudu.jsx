import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Kirjaudu.css';

function Kirjaudu() {
  const [email, setEmail] = useState('');
  const [salasana, setSalasana] = useState('');
  const navigate = useNavigate();

  const kirjauduSisaan = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/login', { email, salasana });
      alert('Kirjautuminen onnistui!');
      navigate('/profiili');
    } catch (error) {
      console.error(error);
      alert('Kirjautuminen epäonnistui.');
    }
  };

  return (
    <div className="container">
      <h2>Kirjaudu sisään</h2>
      <form onSubmit={kirjauduSisaan} className="kirjautumis-formi">
        <input
          type="email"
          placeholder="Sähköposti"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Salasana"
          value={salasana}
          onChange={(e) => setSalasana(e.target.value)}
          required
        />
        <button type="submit" className="btn">Kirjaudu</button>
      </form>
    </div>
  );
}

export default Kirjaudu;
