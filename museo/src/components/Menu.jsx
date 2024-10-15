import { useEffect, useState } from 'react';
import logo from '../assets/Logo.png';
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`bg-white py-4 px-20 ${isScrolled ? 'fixed top-0 left-0 w-full z-50 shadow-md' : 'relative'}`}>
        <div className="container mx-auto flex items-center relative">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 px-4" />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">telecomunicaciones</Link>
            <Link to="/" className="text-gray-700 hover:text-gray-900">Anatomia</Link>
            <Link to="/" className="text-gray-700 hover:text-gray-900">Plastico</Link>
            <Link to="/" className="text-gray-700 hover:text-gray-900">Contactanos</Link>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="text-white h-[15rem] bg-gray-800">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-10 container mx-auto'>
          <div className="flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-64" /> 
          </div>

          <div className='flex flex-col items-center text-sm'>
            <p>Universidad Militar Nueva Granada</p>
            <p>Carrera 11 101 80 | Bogotá - Colombia</p>
            <p>Cajicá Km 2 vía Zipaquirá - Cajicá</p>
          </div>
          
          <div className='flex flex-col items-center text-sm'>
            <p>Horario de atención: Lunes a viernes, de 8:00 a. m. a 5:00 p. m.</p>
            <p>Tel: (57+1) 650 0000 - 634 3200, Ext 3246</p>
          </div>

          <div className='flex flex-col items-center text-sm'>
            <p>Otros contactos:</p>
            <p>Tel: (57+1) 650 0000 - 634 3200, Ext 3246</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Menu;
