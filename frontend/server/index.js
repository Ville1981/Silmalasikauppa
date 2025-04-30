import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // Käytetään Gmailia (voit muuttaa jos tarvitset esim. Outlook tms.)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Reitit

// 📩 Yhteydenottolomake
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `Yhteydenotto: ${name}`,
      text: `Lähettäjä: ${name} (${email})\n\nViesti:\n${message}`,
    });

    res.status(200).json({ message: 'Viesti lähetetty onnistuneesti' });
  } catch (error) {
    console.error('Virhe lähetettäessä viestiä', error);
    res.status(500).json({ message: 'Viestin lähetys epäonnistui' });
  }
});

// 🕑 Ajanvarauslomake
app.post('/api/appointment', async (req, res) => {
  const { name, email, phone, date, time } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `Uusi ajanvaraus: ${name}`,
      text: `Nimi: ${name}\nSähköposti: ${email}\nPuhelin: ${phone}\nPäivämäärä: ${date}\nAika: ${time}`,
    });

    res.status(200).json({ message: 'Ajanvaraus lähetetty onnistuneesti' });
  } catch (error) {
    console.error('Virhe lähetettäessä ajanvarausta', error);
    res.status(500).json({ message: 'Ajanvaraus epäonnistui' });
  }
});

// Startataan serveri
app.listen(PORT, () => {
  console.log(`Serveri käynnissä portissa ${PORT}`);
});
