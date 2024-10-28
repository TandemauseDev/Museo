import EventModel from "../models/EventModel.js"; // Asegúrate de que la ruta sea correcta

// Mostrar todos los registros
export const getAllEvents = async (req, res) => {
    try {
        const events = await EventModel.findAll();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mostrar un registro
export const getEvent = async (req, res) => {
    try {
        const event = await EventModel.findOne({
            where: {
                event_id: req.params.id,
            },
        });
        if (event) {
            res.json(event);
        } else {
            res.status(404).json({ message: "Evento no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un registro
export const createEvent = async (req, res) => {
    try {
        const newEvent = await EventModel.create(req.body);
        res.status(201).json({
            message: "¡Registro creado correctamente!",
            event: newEvent,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un registro
export const updateEvent = async (req, res) => {
    try {
        const [updated] = await EventModel.update(req.body, {
            where: { event_id: req.params.id },
        });
        if (updated) {
            const updatedEvent = await EventModel.findOne({ where: { event_id: req.params.id } });
            res.json({
                message: "¡Registro actualizado correctamente!",
                event: updatedEvent,
            });
        } else {
            res.status(404).json({ message: "Evento no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un registro
export const deleteEvent = async (req, res) => {
    try {
        const deleted = await EventModel.destroy({
            where: { event_id: req.params.id },
        });
        if (deleted) {
            res.json({ message: "¡Registro eliminado correctamente!" });
        } else {
            res.status(404).json({ message: "Evento no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
