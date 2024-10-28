// routes/eventRouter.js
import express from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  updateEvent,
} from "../controllers/EventController.js";

const router = express.Router();

router.get('/', getAllEvents);          // Obtener todos los eventos
router.get('/:id', getEvent);           // Obtener un evento por ID
router.post('/', createEvent);          // Crear un nuevo evento
router.put('/:id', updateEvent);        // Actualizar un evento existente
router.delete('/:id', deleteEvent);     // Eliminar un evento

export default router;
