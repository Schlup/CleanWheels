import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { IoCalendarOutline } from 'react-icons/io5';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

function Nav() {
  return (
    <div className="bg-gray-900 text-white lg:h-screen col-span-2 hidden xl:flex xl:flex-col">
      <h1 className="font-semibold text-4xl m-2 mt-6 pl-6">Clean Wheel</h1>

      {/* Navigation Section */}
      <nav className="mt-4">
        <h2 className="font-semibold text-xl m-2 py-2 pl-6">Descobrir</h2>
        <Link to="/home" className="nav-item">
          <p className="flex bg-indigo-700 text-white items-center m-2 pl-6 py-2 rounded-md hover:bg-indigo-950">
            <GoHome className="icon mr-2" />
            Início
          </p>
        </Link>
        <Link to="/" className="nav-item">
          <p className="flex bg-indigo-700 text-white items-center m-2 pl-6 py-2 rounded-md hover:bg-indigo-950">
            <IoCalendarOutline className="icon mr-2" />
            Agenda
          </p>
        </Link>
        <Link to="/" className="nav-item">
          <p className="flex bg-indigo-700 text-white items-center m-2 pl-6 py-2 rounded-md hover:bg-indigo-950">
            <MdOutlineWorkOutline className="icon mr-2" />
            Serviços
          </p>
        </Link>
      </nav>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Profile Section */}
      <nav className="mt-4">
        <Link to="/myprofile">
          <p className="flex bg-indigo-700 text-white items-center m-2 pl-6 py-2 rounded-md hover:bg-indigo-950">
            <CgProfile className="icon mr-2" />
            Meu Perfil
          </p>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
