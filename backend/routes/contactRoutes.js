import express from 'express';
import { sendContactForm } from '../controllers/contactController.js';

const router = express.Router();

// Julkinen yhteydenotto
router.post('/', sendContactForm);

export default router;
