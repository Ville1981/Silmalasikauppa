import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Rekisteroidy.css';

function Rekisteroidy() {
  const [nimi, setNimi] = useState('');
  const [email, setEmail] = useState('');
  const [salasana, setSalasana] = useState('');
  const navigate = useNavigate();

  const rekisteroidyKayttajaksi = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { nimi, email, salasana });
      alert('Rekisteröityminen onnistui!');
      navigate('/profiili');
    } catch (error) {
      console.error(error);
      alert('Rekisteröityminen epäonnistui.');
    }
  };

  return (
    <div className="container">
      <h2>Rekisteröidy</h2>
      <form onSubmit={rekisteroidyKayttajaksi} className="rekisterointi-formi">
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
          type="password"
          placeholder="Salasana"
          value={salasana}
          onChange={(e) => setSalasana(e.target.value)}
          required
        />
        <button type="submit" className="btn">Rekisteröidy</button>
      </form>
    </div>
  );
}

export default Rekisteroidy;
