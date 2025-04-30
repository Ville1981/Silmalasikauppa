import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Viesti lähetetty onnistuneesti!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Virhe lähetyksessä.');
      }
    } catch (error) {
      console.error(error);
      alert('Virhe lähetyksessä.');
    }
  };
  

  return (
    <div className="contact-form-container">
      <h1>Ota yhteyttä</h1>
      <form onSubmit={handleSubmit} className="contact-form">
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
        <textarea
          name="message"
          placeholder="Viesti"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Lähetä viesti</button>
      </form>
    </div>
  );
}

export default ContactForm;
