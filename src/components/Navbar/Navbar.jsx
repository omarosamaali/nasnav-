import React, { useEffect } from "react";
import "./Navbar.css";
import { initFlowbite } from 'flowbite';

const Navbar = () => {
    useEffect(() => {
        initFlowbite();
      }, []);
    
    return (
        <nav className="bg-primary border-gray-200 h-[48px]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-[0.6rem]">
                <div to="/" className="flex items-center space-x-7 rtl:space-x-reverse">
                    <img
                        src="../../images/Group 770.svg"
                        className="widthheight w-[24px] h-[18px] left-[376px] top-[15px] cursor-pointer"
                        alt="Flowbite Logo"
                    />
                    <img
                        src="../../images/images/Group 769.svg"
                        className="widthheighttwo t-[9px] left-[432px] w-[116px] h-[30px] "
                        alt="Flowbite Logo"
                    />
                </div>
       
                <div>
                    <ul
                        className="font-medium flex flex-col md:p-0
            md:flex-row  md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  "
                    >
                        <li>
                            <li
                                className="font-size cursor-pointer py-2 px-3 md:p-0 
                   text-black md:dark:hover:bg-transparent flex items-center"
                            >
                                <svg
                                    className="margin-right w-4 h-4 mr-5 text-gray-800 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m15 19-7-7 7-7"
                                    />
                                </svg>
                                Valentine’s Day Offers! Buy Two Get One Free &nbsp;
                                <span className="font-bold underline cursor-pointer">
                                    {" "}
                                    Shop Now
                                </span>
                                <svg
                                    className="margin-left cursor-pointer w-4 h-4 ml-5 text-gray-800 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m9 5 7 7-7 7"
                                    />
                                </svg>
                            </li>
                        </li>
                    </ul>
                </div>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden bg-white md:bg-transparent z-50 w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        className="fontsizetwo font-medium flex flex-col p-4 md:p-0 mt-4  border cursor-pointer border-gray-100 rounded-lg
                         text-black md:flex-row space-x-8 rtl:space-x-reverse 
          md:mt-0 md:border-0"
                    >
                        <li
                            to="/services"
                            className="fontsizetwo py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-800 md:p-0 md:dark:hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent flex items-center"
                        >
                            {" "}
                            <img
                                src="../../images/images/Group 756.svg"
                                className="icons mr-1.5 w-[24px] h-[18px] left-[376px] top-[15px] cursor-pointer"
                                alt="Flowbite Logo"
                            />
                            Contact Us
                        </li>

                        <li
                            to="/services"
                            className="fontsizetwo py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-800 md:p-0 md:dark:hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent flex items-center"
                        >
                            {" "}
                            <img
                                src="../../images/images/Group 758.svg"
                                className="icons mr-1.5 w-[24px] h-[18px] left-[376px] top-[15px] cursor-pointer"
                                alt="Flowbite Logo"
                            />
                            Track Order
                        </li>
                        <li
                            to="/services"
                            className="fontsizetwo py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-800 md:p-0 md:dark:hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent flex items-center"
                        >
                            {" "}
                            <img
                                src="../../images/images/Group 753.svg"
                                className="icons mr-1.5 w-[24px] h-[18px] left-[376px] top-[15px] cursor-pointer"
                                alt="Flowbite Logo"
                            />
                            Find A Store
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
