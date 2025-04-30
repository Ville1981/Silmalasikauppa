import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Tilaukset.css';

function Tilaukset() {
  const [tilaukset, setTilaukset] = useState([]);

  useEffect(() => {
    const haeTilaukset = async () => {
      try {
        const { data } = await axios.get('/api/orders/myorders');
        setTilaukset(data);
      } catch (error) {
        console.error(error);
        alert('Tilausten lataus epäonnistui.');
      }
    };
    haeTilaukset();
  }, []);

  return (
    <div className="container">
      <h2>Omat tilaukset</h2>
      {tilaukset.length === 0 ? (
        <p>Sinulla ei ole vielä tilauksia.</p>
      ) : (
        <div className="tilaukset-lista">
          {tilaukset.map((tilaus) => (
            <div key={tilaus._id} className="tilauskortti">
              <p><strong>Tilausnumero:</strong> {tilaus._id}</p>
              <p><strong>Päivämäärä:</strong> {new Date(tilaus.createdAt).toLocaleDateString()}</p>
              <p><strong>Kokonaissumma:</strong> {tilaus.totalPrice} €</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tilaukset;
