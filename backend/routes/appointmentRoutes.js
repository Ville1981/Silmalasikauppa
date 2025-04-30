import express from 'express';
import { createAppointment } from '../controllers/appointmentController.js';

const router = express.Router();

// Julkinen ajanvaraus
router.post('/', createAppointment);

export default router;
