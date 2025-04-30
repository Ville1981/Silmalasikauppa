import React from 'react';
import './AdminPanel.css';

function AdminPanel() {
  return (
    <div className="container">
      <h2>Admin Paneeli</h2>
      <p>Tervetuloa hallinnoimaan tuotteita ja käyttäjiä.</p>
      <div className="admin-painikkeet">
        {/* Tänne voidaan myöhemmin lisätä painikkeita tuotteiden ja tilausten hallintaan */}
        <button className="btn">Lisää uusi tuote</button>
        <button className="btn">Näytä tilaukset</button>
        <button className="btn">Käyttäjähallinta</button>
      </div>
    </div>
  );
}

export default AdminPanel;
