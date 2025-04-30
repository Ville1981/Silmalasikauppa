import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Tuotesivu() {
  const { id } = useParams();
  const [tuote, setTuote] = useState(null);

  useEffect(() => {
    const haeTuote = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setTuote(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    haeTuote();
  }, [id]);

  if (!tuote) return <div className="container">Ladataan...</div>;

  return (
    <div className="container">
      <h2>{tuote.nimi}</h2>
      <img src={tuote.kuva} alt={tuote.nimi} />
      <p>Hinta: {tuote.hinta} €</p>
      <button className="btn">Lisää ostoskoriin</button>
    </div>
  );
}

export default Tuotesivu;
