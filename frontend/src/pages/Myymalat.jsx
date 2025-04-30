import React from 'react';
import './Myymalat.css';

function Myymalat() {
  return (
    <div className="myymalat-container">
      <h1>Myymälät</h1>

      <div className="myymalat-lista">
        <div className="myymala">
          <h3>Helsinki</h3>
          <p>Kaivokatu 1, 00100 Helsinki</p>
        </div>
        <div className="myymala">
          <h3>Tampere</h3>
          <p>Hämeenkatu 10, 33100 Tampere</p>
        </div>
        <div className="myymala">
          <h3>Turku</h3>
          <p>Yliopistonkatu 15, 20100 Turku</p>
        </div>
        <div className="myymala">
          <h3>Oulu</h3>
          <p>Isokatu 20, 90100 Oulu</p>
        </div>
      </div>

      <div className="kartta">
        <h2>Katso sijaintimme kartalta</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19830.6646949502!2d24.9314475!3d60.1698551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692099b7fddf7cf%3A0xb4188d08e37017fd!2sHelsinki!5e0!3m2!1sfi!2sfi!4v1714291805000!5m2!1sfi!2sfi"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '10px', marginTop: '20px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Myymalat;
