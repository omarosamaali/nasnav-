import React, { useEffect } from "react";
import "./FourNavbar.css";
import { initFlowbite } from "flowbite";
const FourNavbar = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return <div>




    <nav class="bg-white border-b border-[#575756] dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div> */}
        <div class=" items-center justify-between md:flex md:order-1" id="navbar-language">
          <ul class="font-bold w-full justify-between flex flex-col md:p-0 rtl:space-x-reverse 
          md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 mr-[-25px] " aria-current="page">
              <span className="underline">Men</span> / <span className="underline">Clothing</span> / <span className="underline">Tops</span> / <span className="underline">Adidas</span> / Adidas Black T-Shirt</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>


  </div>;
};

export default FourNavbar;
