'use client'
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const title = "Asesores";
  const [productosMenuVisible, setProductosMenuVisible] = useState(false);
  const [nosotrosMenuVisible, setNosotrosMenuVisible] = useState(false);
  
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false); // Agregamos el estado para el menú móvil

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible); // Cambiamos la visibilidad del menú móvil al hacer clic en el botón
  };

  const toggleProductosMenu = () => {
    setProductosMenuVisible(!productosMenuVisible);
  };

  const toggleNosotrosMenu = () => {
    setNosotrosMenuVisible(!nosotrosMenuVisible);
  };

  const Marca = () => {
    return (
      <a href="https://www.via-asesores.com" className="flex items-center md:flex md:justify-start md:mx-auto ml-auto ">
        <img
          src="https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg"
          className="h-12"
          alt="VIA Asesores"
        />
      </a>
    );
  };

  const InicioButton = () => {
    const inicioLabel = "Home";

    return (
      <a
        href="/"
        className=" dark:text-white text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
      >
        {inicioLabel}
      </a>
    );
  };

  const Documentacion = () => {
    const clientesLabel = "Documentacion";

    return (
      <a
        href="https://react-chartjs-2.js.org/#quickstart"
        className=" dark:text-white text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
      >
        {clientesLabel}
      </a>
    );
  };


  const Contactos = () => {
    return (
      <>
        <a
          href="mailto:guatemala@via-asesores.com"
          className="text-gray-400 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 invisible md:visible"
        >
          guatemala@via-asesores.com
        </a>
        <a
          href="telto:+502 22971267"
          className="text-gray-400 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800  invisible md:visible"
        >
          +502 2297 1267
        </a>
      </>
    );
  };

  
  const Estatico = () => {
    const accesosLabel = "Estatica";

    return (
      <a
        href="/estatico"
        className= " dark:text-white text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
      >
        {accesosLabel}
      </a>
    );
  };

  const Github = () => {
    const contactameLabel = "Github";

    return (
      <a
        href="https://github.com/Foxy20122012/Mychart"
        className="invisible md:visible text-sky-700 bg-gray-100 hover:bg-sky-300 focus:ring-4 focus:ring-sky-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800 dark:text-white"
      >
        {contactameLabel}
      </a>
    );
  };

  return (
    <nav className="bg-sky-900 border-sky-200 rounded-lg m-1 dark:bg-gray-900 shadow-md">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
      <div className="flex justify-center">
      <button
            className=" md:hidden ml-auto flex justify-end"
            onClick={toggleMobileMenu}
          >
            
           
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          </div>
          <Marca />
        <div className="flex mt-4">
        
        
         
         
          <div
            className={`${
              mobileMenuVisible ? "block" : "hidden"
            } md:block md:flex md:items-center md:w-auto my-3`}
          >
            <InicioButton />
             <Documentacion />
             <Estatico/>
             <Github />
            
          </div>
          
        </div>
        
        <div className="md:flex md:items-center ">
          <Contactos />
          
         
        </div>
        
      </div>
      
    </nav>
  );
};

export default Navbar;
