import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext'; // ✅ Tuodaan AuthProvider

import Etusivu from './pages/Etusivu';
import Myymalat from './pages/Myymalat';
import Footer from './components/Footer';
import ChatPopup from './components/ChatPopup';
import Navbar from './components/Navbar';
import Palvelut from './pages/Palvelut';
import ContactForm from './pages/ContactForm';
import AppointmentForm from './pages/AppointmentForm';
import Toimitusehdot from './pages/Toimitusehdot';
import Palautusohjeet from './pages/Palautusohjeet';
import AllInclusive from './pages/AllInclusive';
import Ostoskori from './pages/Ostoskori';
import Kassa from './pages/Kassa';
import Kiitossivu from './pages/Kiitossivu';
import Silmalasit from './pages/Silmalasit';
import Aurinkolasit from './pages/Aurinkolasit';
import Piilolinssit from './pages/Piilolinssit';

import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider> {/* ✅ Koko sovellus saa kirjautumistilan */}
      <CartProvider>
        <div className="app">
          <Navbar />

          <Routes>
            <Route path="/" element={<Etusivu />} />
            <Route path="/myymalat" element={<Myymalat />} />
            <Route path="/palvelut" element={<Palvelut />} />
            <Route path="/yhteydenotto" element={<ContactForm />} />
            <Route path="/ajanvaraus" element={<AppointmentForm />} />
            <Route path="/toimitusehdot" element={<Toimitusehdot />} />
            <Route path="/palautusohjeet" element={<Palautusohjeet />} />
            <Route path="/silmalasit" element={<Silmalasit />} />
            <Route path="/aurinkolasit" element={<Aurinkolasit />} />
            <Route path="/piilolinssit" element={<Piilolinssit />} />
            <Route path="/allinclusive" element={<AllInclusive />} />
            <Route path="/ostoskori" element={<Ostoskori />} />
            <Route path="/kassa" element={<ProtectedRoute><Kassa /></ProtectedRoute>} />
            <Route path="/kiitos" element={<Kiitossivu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

          <Footer />
          <ChatPopup />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
