import { useState, useEffect } from 'react';
import axios from 'axios';

const URI = 'http://localhost:8000/events';

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [event_date, setEventDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [editingEventId, setEditingEventId] = useState(null); // ID del evento en edición

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const res = await axios.get(URI);
    setEvents(res.data);
  };

  const handleDelete = async (eventId) => {
    try {
      await axios.delete(`${URI}/${eventId}`);
      setEvents(events.filter(event => event.event_id !== eventId));
      alert("Evento eliminado con éxito");
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
    }
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    
    const newEvent = {
      title,
      description,
      event_date,
      type,
      image_url: imageUrl,
    };

    try {
      await axios.post(URI, newEvent);
      alert('Evento creado correctamente');
      resetForm();
      getEvents();
    } catch (error) {
      console.error('Error al crear el evento:', error);
      alert('Hubo un error al crear el evento');
    }
  };

  const handleEdit = (event) => {
    // Rellena los campos con la información del evento seleccionado
    setTitle(event.title);
    setDescription(event.description);
    setEventDate(event.event_date);
    setType(event.type);
    setImageUrl(event.image_url);
    setEditingEventId(event.event_id); // Guarda el ID del evento en edición
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();

    const updatedEvent = {
      title,
      description,
      event_date,
      type,
      image_url: imageUrl,
    };

    try {
      await axios.put(`${URI}/${editingEventId}`, updatedEvent);
      alert('Evento actualizado correctamente');
      resetForm();
      getEvents();
    } catch (error) {
      console.error('Error al actualizar el evento:', error);
      alert('Hubo un error al actualizar el evento');
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setEventDate('');
    setType('');
    setImageUrl('');
    setEditingEventId(null); // Resetea el ID del evento en edición
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Administrar Eventos</h1>

      {/* Formulario para Crear/Actualizar Evento */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {editingEventId ? 'Actualizar Evento' : 'Crear Evento'}
        </h2>
        <form onSubmit={editingEventId ? handleUpdateEvent : handleCreateEvent} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Nombre del Evento</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ingresa el nombre del evento"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ingresa una descripción del evento"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Tipo de Evento</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ingresa el Tipo de evento"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Fecha del Evento</label>
            <input
              type="date"
              value={event_date}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">URL de la Imagen</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ingresa la URL de la imagen"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {editingEventId ? 'Actualizar Evento' : 'Crear Evento'}
          </button>
        </form>
      </div>

      {/* Mostrar Eventos */}
      <h2 className="text-2xl font-semibold mb-4">Lista de Eventos</h2>
      {events.map((evento) => (
        <div key={evento.event_id} className="p-4 mb-4 border rounded-lg flex items-center space-x-4">
          <img
            src={evento.image_url}
            alt={evento.title}
            className="w-24 h-24 object-cover rounded-md"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{evento.title}</h3>
            <p className="text-sm text-gray-500">{evento.event_date}</p>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(evento)}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Editar
            </button>
            <button
              onClick={() => handleDelete(evento.event_id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Admin;
