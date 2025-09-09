'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/produk' },
    { name: 'Distributor', href: '/distributor' },
    { name: 'Informasi', href: '/informasi' }
  ];

  return (
    <nav className="bg-white shadow-md z-50 fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image 
              src="/assets/images/mainLogo-RIJA.png"
              alt='mainLogo-RIJA'
              width={102}
              height={102}
              className="object-contain"
              priority
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              href="/hubungi-kami"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Hubungi Kami
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
              aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/hubungi-kami"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}>
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                    Rainbow
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mx-2">-</span>
                  <span className="text-gray-700 font-medium">Homepage</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;