'use client'

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-purple-100 p-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-800">Layla Ashcroft</div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-purple-800 hover:text-purple-600 md:hidden focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <ul className={`flex flex-col md:flex-row space-x-0 md:space-x-4 absolute md:static bg-purple-100 md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-16' : '-top-48'} md:top-0 md:flex md:items-center`}>
          <li><Link href="/" className="block py-2 px-4 text-purple-800 hover:text-purple-600 transition">Home</Link></li>
          <li><Link href="/about" className="block py-2 px-4 text-purple-800 hover:text-purple-600 transition">About</Link></li>
          <li><Link href="/services" className="block py-2 px-4 text-purple-800 hover:text-purple-600 transition">Services</Link></li>
          <li><Link href="/testimonials" className="block py-2 px-4 text-purple-800 hover:text-purple-600 transition">Testimonials</Link></li>
          <li><Link href="/blog" className="block py-2 px-4 text-purple-800 hover:text-purple-600 transition">Blog</Link></li>
          <li><Link href="/contact" className="block py-2 px-4 text-purple-800 hover:text-purple-600 transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}