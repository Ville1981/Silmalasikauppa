import Appointment from '../models/Appointment.js';

// Luo uusi ajanvaraus
const createAppointment = async (req, res) => {
  const { nimi, pvm, aika } = req.body;

  const appointment = new Appointment({ nimi, pvm, aika });
  const createdAppointment = await appointment.save();
  
  res.status(201).json(createdAppointment);
};

export { createAppointment };
