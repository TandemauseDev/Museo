import React from 'react';
import evento1Image from '../assets/eventos/artes.png'; // Asegúrate de que esta ruta sea correcta
import evento2Image from '../assets/eventos/vivos.png'; // Asegúrate de que esta ruta sea correcta
import evento3Image from '../assets/eventos/alma y agua.png'; // Asegúrate de que esta ruta sea correcta

// Componente para un evento
const Evento = () => {
  // Ejemplo de eventos
  const eventos = [
    {
      imagen: evento1Image,
      titulo: 'II Bienal Internacional de Artes Plásticas',
      descripcion: 'La Universidad Militar Nueva Granada a través de su Sección de Arte y Cultura - Museos, se complace en invitarles a participar en su II Bienal Internacional de Artes Plásticas, un evento de diálogo cultural y plástico de artistas profesionales de largo recorrido, con artistas noveles -nuevos talentos-, un certamen donde el arte se convierte en un puente para el diálogo, la creatividad y la inspiración. Este espacio reunirá a artistas neogranadinos, nacionales e internacionales en una celebración única de diversas expresiones plásticas.',
      fecha: '23 de septiembre al 23 de octubre',
      tipo: 'Encuentro virtual'
    },
    {
      imagen: evento2Image,
      titulo: 'Museos vivos',
      descripcion: 'La Universidad Militar Nueva Granada, a través de su Sección de Arte y Cultura - Museos, tiene el honor de invitarles a participar en el Segundo Congreso Neogranadino de Museología "MUSEOS VIVOS: Diversidad Cultural y Museos, un diálogo necesario". Este evento reunirá a profesionales del ámbito museístico, investigadores y expertos en un espacio de reflexión y debate sobre el papel de los museos en la promoción de la diversidad cultural. Una oportunidad única para intercambiar ideas, experiencias y fortalecer el rol de los museos como agentes de cambio social y cultural.',
      fecha: '23 de septiembre al 23 de octubre',
      tipo: 'Fecha de inscripción'
    },
    {
      imagen: evento3Image,
      titulo: 'Museos vivos',
      descripcion: 'El Centro Cultural Fernando Soto Aparicio se complace en invitarles a la exposición "Alma y agua" del artista Edwin Mojíca . Una muestra que invita a explorar la conexión entre el ser humano y la naturaleza a través de una narrativa visual llena de sensibilidad y fuerza. Sumérgete en un recorrido donde el arte se convierte en un reflejo del alma y el agua, elementos esenciales que dialogan en armonía.',
      fecha: 'Jueves 28 de Noviembre del 2024',
      tipo: 'Encuentro virtual'
    },
    // Agrega más eventos según sea necesario
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {eventos.map((evento, index) => (
        <div key={index} className="p-20 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Alternar columnas según el índice */}
            <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
              <img
                src={evento.imagen}
                alt={evento.titulo}
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className={index % 2 === 0 ? 'order-2' : 'order-1 flex flex-col justify-start p-4'}>
              <h2 className="text-4xl font-bold text-center py-10">{evento.titulo}</h2>
              <p className="mt-2 px-4 text-gray-600 text-justify text-lg">{evento.descripcion}</p>
            </div>
          </div>
          {/* Fila de fecha */}
          <div className="text-center flex justify-center my-20">
            <div className="border text-md w-3/4 h-20 bg-gray-300 p-2 flex items-center justify-between rounded-md">
              <h2 className="text-center w-1/2 font-bold">{evento.tipo}</h2>
              <span className="text-center w-1/2">{evento.fecha}</span>
            </div>
          </div>
          <hr className='border-t-2' />
        </div>
      ))}
    </div>
  );
};

export default Evento;
