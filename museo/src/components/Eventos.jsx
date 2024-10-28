import { useState, useEffect } from 'react';
import axios from 'axios';

const URI = 'http://localhost:8000/events';

// Componente para un evento
const Evento = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    const res = await axios.get(URI);
    setEvent(res.data);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {event.map((evento, index) => ( 
        <div key={evento.event_id} className="p-20 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
  
            <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
              <img
                src={evento.image_url}  
                alt={evento.title}       
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className={index % 2 === 0 ? 'order-2' : 'order-1 flex flex-col justify-start p-4'}>
              <h2 className="text-4xl font-bold text-center py-10">{evento.title}</h2> 
              <p className="mt-2 px-4 text-gray-600 text-justify text-lg">{evento.description}</p>
            </div>
          </div>
          {/* Fila de fecha */}
          <div className="text-center flex justify-center my-20">
            <div className="border text-md w-3/4 h-20 bg-gray-300 p-2 flex items-center justify-between rounded-md">
              <h2 className="text-center w-1/2 font-bold">Tipo:{evento.type}</h2> 
              <span className="text-center w-1/2">{evento.event_date}</span> 
            </div>
          </div>
          <hr className='border-t-2' />
        </div>
      ))}
    </div>
  );
};

export default Evento;
