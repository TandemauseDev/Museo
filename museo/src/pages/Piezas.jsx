import React from 'react';
// Importar la imagen
import imagen from '../assets/banners/1.png';

const Piezas = () => {
  return (
    <div>
      {/* Título centrado */}
      <h1 className="text-4xl font-bold text-center mb-4">Nuestras piezas digitales</h1>
      
      {/* Imagen importada que cubre todo el ancho */}
      <img 
        src={imagen} 
        alt="Imagen descriptiva"
        className="w-full h-auto object-cover" 
      />
    </div>
  );
};

export default Piezas;
