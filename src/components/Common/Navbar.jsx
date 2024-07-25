import React from 'react';
import Logo from '../../assets/Logo/BookAndExplorelogo.png'
function Navbar() {
  return (
    <nav className="bg-white text-black shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-white">
            <img src={Logo} className='h-20'/>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-blue-800">Home</a>
          <a href="/" className="hover:text-blue-800">Take Guide</a>
          <a href="/" className="hover:text-blue-800">Upcoming Events</a>
          <a href="/" className="hover:text-blue-800">Reader's Corner</a>
        </div>
        <button className="bg-white hover:bg-blue-700 text-blue font-medium rounded-md px-4 py-2">Chat Now!</button>
      </div>
    </nav>
  );
}

export default Navbar;