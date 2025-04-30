// src/pages/Allinclusive.jsx
import "../styles/Allinclusive.css";

const Allinclusive = () => {
  return (
    <div className="page-container">
      <h1>All Inclusive -paketti</h1>
      <p>Eye Store All Inclusive -palvelu sisältää kaiken tarvittavan vaivattomaan näkemiseen:</p>
      <ul>
        <li>Laadukkaat silmälasit yhdellä kiinteällä kuukausihinnalla</li>
        <li>Vapaat linssivalinnat tarpeesi mukaan</li>
        <li>Säännölliset näöntarkastukset veloituksetta</li>
        <li>Mahdollisuus päivittää kehyksiä ja linssejä sopimuksen aikana</li>
        <li>Huoleton huoltopalvelu ja takuu koko sopimuskaudelle</li>
      </ul>

      <h2>Hinnat alkaen 19,90 €/kk</h2>

      <img src="/images/allinclusive.png" alt="All Inclusive" className="page-image" />

      <p>Tule liikkeeseemme tai varaa aika verkossa ja kysy lisää All Inclusive -ratkaisuistamme!</p>
    </div>
  );
};

export default Allinclusive;
