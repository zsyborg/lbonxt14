import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import quotes from "./quotes.json";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaThreads } from "react-icons/fa6";
import {faFacebook, faInstagram, faInstagramSquare, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faUser, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {AiOutlineShoppingCart, AiOutlineUser, AiFillFacebook, AiFillInstagram, AiFillYoutube} from "react-icons/ai";

function Footer() {

  return (
    <>
     {/* xs:hidden @xs:hidden @3xs:hidden @2xs:hidden @sm:hidden */}
     <header className="w-full flex hdr  items-center justify-between px-2 sm:px-8">
        {/* Left: Menu Links */}
        <nav className="flex gap-4 sm:gap-8 navbar">
            <ul className='homemenu grid grid-cols-5 navbar-left items-center'>
                <li>
                    <a href="/" className="font-medium hover:underline">Home</a>
                </li>
                <li>
                    <a href="/shop" className="font-medium hover:underline">About Us</a>
                </li>
                <li className='dropdown'>
                    <a href="/" className="dropdown-toggle font-medium hover:underline">Products</a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="#">Nutrafit</a>
                            </li>
                            <li>
                                <a href="#">Astaxanthin</a>
                            </li>
                            <li>
                                <a href="#">LBO Packages</a>
                            </li>
                        </ul>
                </li>
                <li>
                    <a href="/shop" className="font-medium hover:underline">Achievers</a>
                </li>
                <li>
                    <a href="/lifeiseducation" className="font-medium hover:underline bg-red-600 text-white p-3">LifeisEducation</a>
                </li>
            </ul>
          
        </nav>
        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={50}
            priority
          />
        </div>
        {/* Right: Cart & User Icons */}
        <div className="flex gap-4 items-center">
          <nav className="flex gap-4 sm:gap-8 navbar">
             <ul className='homemenu grid grid-cols-5 navbar-left'>
                <li>
                    <a href="/about" className="font-medium hover:underline">Gallery</a>
                </li>
                <li>
                    <a href="/about" className="font-medium hover:underline">Contact</a>
                </li>
                <li className='dropdown'>
                    <a href="/resources" className="font-medium hover:underline">Resources</a>
                      <ul className="dropdown-menu">
                            <li>
                                <a href="#">News</a>
                            </li>
                            <li>
                                <a href="#">Legal Resource</a>
                            </li>
                            <li>
                                <a href="#">Bank Details</a>
                            </li>
                            <li>
                                <a href="#">Distributor Margin</a>
                            </li>
                        </ul>
                </li>
                <li>
                    <a href="/blog" className="font-medium hover:underline">Blog</a>
                </li>
              </ul>
            
          </nav>
        <form>

          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-1 w-35 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
        {/* <AiFillFacebook/>
        <AiFillInstagram/>
        <AiFillYoutube/> */}
          <a href="/cart" aria-label="Cart" className="hover:text-gray-500">
            {/* <i className="fa-solid fa-cart-shopping text-xl"></i> */}
            <AiOutlineShoppingCart className="text-xl" />
          </a>
          <a href="/login" aria-label="Login" className="hover:text-gray-500">
            {/* <i className="fa-solid fa-user text-xl"></i> */}
            <AiOutlineUser className="text-xl" />
          </a>
        </div>
      </header>
        
    </>
  );
}

export default Footer;