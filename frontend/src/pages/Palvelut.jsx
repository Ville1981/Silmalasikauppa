import React from 'react';
import './Palvelut.css';

function Palvelut() {
  return (
    <div className="palvelut-container">
      <h1>Palvelumme</h1>

      <div className="palvelut-lista">
        <div className="palvelu">
          <h3>Silmälasit</h3>
          <p>Laaja valikoima tyylikkäitä ja laadukkaita silmälaseja.</p>
        </div>
        <div className="palvelu">
          <h3>Näöntarkastus</h3>
          <p>Varaa aika optikon tekemään näöntarkastukseen helposti verkosta.</p>
        </div>
        <div className="palvelu">
          <h3>Silmälääkärit</h3>
          <p>Tarjoamme silmälääkäripalveluita, myös jatkotutkimuksiin.</p>
        </div>
        <div className="palvelu">
          <h3>Piilolinssit</h3>
          <p>Suuri valikoima piilolinssejä päivittäiseen käyttöön ja erityistarpeisiin.</p>
        </div>
        <div className="palvelu">
          <h3>All Inclusive</h3>
          <p>Kaikki näkemiseen liittyvät palvelut ja tuotteet yhdellä kuukausimaksulla.</p>
        </div>
      </div>
    </div>
  );
}

export default Palvelut;
