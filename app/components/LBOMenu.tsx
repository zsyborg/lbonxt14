import { useState } from 'react';
import Link from 'next/link';
import {
  FaHome,
  FaChartLine,
  FaEnvelope,
  FaCog,
  FaUsers,
  FaCalendar,
  FaFileAlt,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { SlLogout, SlScreenDesktop } from "react-icons/sl";
import { FaBell, FaBurger, FaCreditCard, FaLink, FaNewspaper, FaTicket, FaUser, FaUserTie } from "react-icons/fa6";
import { LuMenu, LuNetwork, LuNewspaper, LuSpeech, LuWalletCards } from "react-icons/lu";
import { PiMoneyLight, PiNotification } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";


const LBOMenu = () => {
  
 const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <>
       <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex content-center items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img src="/logo.png" className='w-20' />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/">
                <p className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-900">
                  Dashboard
                </p>
              </Link>
              <div className="relative">
                <button
                  className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-900"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  My Account
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <ul>
                      <li>
                        <Link href="/dropdown/option1">
                          <p className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                            Option 1
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dropdown/option2">
                          <p className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                            Option 2
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Link href="/about">
                <p className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-900">
                  About
                </p>
              </Link>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
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
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/">
              <p className="text-gray-600 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-gray-900">
                Home
              </p>
            </Link>
            <div>
              <button
                className="text-gray-600 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-gray-900 w-full text-left"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Dropdown
              </button>
              {isDropdownOpen && (
                <div className="pl-4">
                  <ul>
                    <li>
                      <Link href="/dropdown/option1">
                        <p className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                          Option 1
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/dropdown/option2">
                        <p className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                          Option 2
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link href="/about">
              <p className="text-gray-600 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-gray-900">
                About
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
      <style jsx global>{`
        body {
          
          transition: margin-left 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default LBOMenu;
