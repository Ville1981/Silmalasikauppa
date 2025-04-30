import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  nimi: { type: String, required: true },
  pvm: { type: String, required: true },
  aika: { type: String, required: true },
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
