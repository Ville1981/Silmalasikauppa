import nodemailer from 'nodemailer';

export const sendContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Yhteydenotto: ${name}`,
      text: message,
    });

    res.status(200).json({ message: 'Viestisi on lähetetty!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Viestin lähetys epäonnistui.' });
  }
};
