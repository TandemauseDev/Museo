import React from 'react';
import bannerImage from '../assets/Casona.png'; // Asegúrate de que esta ruta sea correcta
import Evento from '../components/Eventos';

const Inicio = () => {
  return (
    <>
    <div 
      className="relative w-full h-[40rem] bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Contenido del banner */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-[-3.5rem]">
        <button className="bg-blue-900 font-bold text-white p-5 px-10 rounded-lg hover:bg-blue-800">
            <p>DESCUBRE NUESTRAS </p>
           
           <p>PIEZAS DIGITALES</p>
        </button>
      </div>
    </div>
    <div className='flex justify-center py-24'>
    <h1 className='text-5xl'>
        Conoce más de nosotros
    </h1>

    </div>
    <article className='px-20'>
    <Evento/>



    </article>



    </>
    
  );
};

export default Inicio;
