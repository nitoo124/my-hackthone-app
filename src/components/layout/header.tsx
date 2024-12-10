"use client";
import { useState } from "react";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { IoCart, IoSearch } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for Hamburger Menu

  return (
    <header className="bg-white max-w-[1440px] mx-auto shadow-md py-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-xl font-bold flex ">
        <Image src={'/images/logo.png'}
    alt='blog icon'
    width={185}
    height={41}
    loading='lazy'/>
          </div>

        {/* Navigation - Hidden on small screens */}
        <nav className="hidden md:flex space-x-6 px-3">
          <Link href="/" className="text-gray-700 hover:text-yellow-600 text-[16px]">
            Home
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-yellow-600 text-[16px]">
            Shop
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-yellow-600 text-[16px]">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-yellow-600 text-[16px]">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:block ">
          <div className="flex items-center space-x-4 gap-5 pr-10 ">
          <FaUser size={20} />
          <IoSearch size={20} />
          <FaRegHeart size={20} />
         <Link href='/cart'><IoCart size={20} /></Link>
         </div>
        </div>

        {/* Hamburger Menu - Visible on small screens */}
        <button
          className="md:hidden text-gray-700 hover:text-yellow-600"
          onClick={() => setIsOpen(!isOpen)} // Toggle the menu
        >
          {isOpen ? (
            <MdCancel size={25} className="text-black" />
          ) : (
            <CiMenuFries size={25} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Navigation - Toggleable */}
      {isOpen && (
        <div className="md:hidden w-screen bg-white py-4 px-4 space-y-2 fixed top-[60px] left-0">
          <Link href="/" className="block text-gray-700 hover:text-yellow-600">
            Home
          </Link>
          <Link href="/shop" className="block text-gray-700 hover:text-yellow-600">
            Shop
          </Link>
          <Link href="/blog" className="block text-gray-700 hover:text-yellow-600">
            Blog
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-yellow-600">
            Contact
          </Link>

            {/* Icons */}
        <div className="block md:hidden  ">
          <div className="flex items-center space-x-4 gap-5  py-8 ">
          <FaUser size={20} />
          <IoSearch size={20} />
          <FaRegHeart size={20} />
         <Link href='/cart'><IoCart size={20} /></Link>
         </div>
        </div>

        </div>
        
      )}
    </header>
  );
}
