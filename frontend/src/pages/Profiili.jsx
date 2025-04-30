import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profiili.css';

function Profiili() {
  const [profiili, setProfiili] = useState(null);

  useEffect(() => {
    const haeProfiili = async () => {
      try {
        const { data } = await axios.get('/api/user/profile');
        setProfiili(data);
      } catch (error) {
        console.error(error);
        alert('Profiilin lataus epäonnistui.');
      }
    };
    haeProfiili();
  }, []);

  if (!profiili) {
    return <div className="container">Ladataan profiilia...</div>;
  }

  return (
    <div className="container">
      <h2>Profiili</h2>
      <p><strong>Nimi:</strong> {profiili.name}</p>
      <p><strong>Sähköposti:</strong> {profiili.email}</p>
      {/* Lisää tulevaisuudessa profiilikuvan näyttö ja muokkaus */}
    </div>
  );
}

export default Profiili;
