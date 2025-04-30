import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  nimi: { type: String, required: true },
  email: { type: String, required: true },
  viesti: { type: String, required: true },
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
