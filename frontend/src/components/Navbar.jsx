import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { kayttaja, kirjauduUlos } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    kirjauduUlos();
    navigate('/login');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Silmälasikauppa</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/silmalasit">Silmälasit</Link></li>
        <li><Link to="/aurinkolasit">Aurinkolasit</Link></li>
        <li><Link to="/piilolinssit">Piilolinssit</Link></li>
        <li><Link to="/allinclusive">All-Inclusive</Link></li>
        <li><Link to="/myymalat">Myymälät</Link></li>
        <li><Link to="/palvelut">Palvelut</Link></li>
        <li><Link to="/yhteydenotto">Yhteydenotto</Link></li>
        <li><Link to="/ajanvaraus">Varaa aika</Link></li>
        <li><Link to="/ostoskori" className="nav-link">🛒 Ostoskori</Link></li>

        <li className="nav-login-area" onClick={toggleDropdown}>
          <span className="nav-login-icon">
            {!kayttaja ? '👤 Kirjaudu' : `Tervetuloa, ${kayttaja}!`}
          </span>

          {showDropdown && (
            <div className="nav-dropdown">
              {!kayttaja ? (
                <>
                  <Link to="/login" onClick={() => setShowDropdown(false)}>Kirjaudu sisään</Link>
                  <Link to="/register" onClick={() => setShowDropdown(false)}>Luo tili</Link>
                </>
              ) : (
                <button onClick={handleLogout}>Kirjaudu ulos</button>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
