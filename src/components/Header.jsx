import React from 'react';
import Logo from '../assets/Logo.png'; 

function Header() {
  return (
    <header className="bg-gray-800 w-full py-8 flex justify-center">
      <img src={Logo} alt="Logo" className="h-16" />
    </header>
  );
}

export default Header;

