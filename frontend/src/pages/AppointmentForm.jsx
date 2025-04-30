import React, { useState } from 'react';
import './AppointmentForm.css';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Ajanvaraus lähetetty onnistuneesti!');
        setFormData({ name: '', email: '', phone: '', date: '', time: '' });
      } else {
        alert('Virhe lähetyksessä.');
      }
    } catch (error) {
      console.error(error);
      alert('Virhe lähetyksessä.');
    }
  };
  

  return (
    <div className="appointment-form-container">
      <h1>Varaa aika näöntarkastukseen</h1>
      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="text"
          name="name"
          placeholder="Nimi"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Sähköposti"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Puhelinnumero"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <button type="submit">Varaa aika</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
