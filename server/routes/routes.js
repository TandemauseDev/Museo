// routes/routes.js
import express from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  updateEvent,
} from "../controllers/EventController.js";
import { registerUser, loginUser } from "../controllers/AuthControllers.js";

const router = express.Router();

// Rutas de eventos
router.get('/', getAllEvents);          // Obtener todos los eventos
router.get('/:id', getEvent);           // Obtener un evento por ID
router.post('/', createEvent);          // Crear un nuevo evento
router.put('/:id', updateEvent);        // Actualizar un evento existente
router.delete('/:id', deleteEvent);     // Eliminar un evento

// Rutas de autenticación
router.post('/register', registerUser);  // Registrar usuario
router.post('/login', loginUser);        // Iniciar sesión

export default router;
