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
    { name: 'Produk', href: '/pages/produk' },
    { name: 'Distributor', href: '/pages/distributor' },
    { name: 'Informasi', href: '/pages/informasi' }
  ];

  return (
    <nav className="bg-white shadow-md z-50 fixed w-full">
      <div className="max-w-7xl mx-auto px-1 xs:px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between px-4 items-center h-14 xs:h-16 sm:h-18 md:h-20 lg:h-24">
          <div className="flex-shrink-0">
            <Image 
              src="/assets/images/mainLogo-RIJA.png"
              alt='mainLogo-RIJA'
              width={200}
              height={200}
              className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain"
              priority
              quality={100}
              unoptimized={true}
              sizes="(max-width: 480px) 112px, (max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 160px"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-4 lg:ml-10 flex items-center space-x-2 lg:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-gray-900 px-1 lg:px-3 py-1 lg:py-2 text-xs sm:text-sm lg:text-base font-medium transition-colors duration-200 whitespace-nowrap group">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              href="/hubungi-kami"
              className="bg-orange-500 hover:bg-orange-600 text-white px-2 lg:px-4 py-1 lg:py-2 rounded text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap">
              Hubungi Kami
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-0.5 xs:p-1 sm:p-2"
              aria-label="Toggle menu">
              {isMenuOpen ? 
                <X size={16} className="w-6 h-6" /> : 
                <Menu size={16} className="w-6 h-6" />
              }
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div className={`md:hidden fixed top-0 right-0 h-full w-64 xs:w-72 sm:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-3 xs:p-4 sm:p-6 border-b border-gray-200">
            <Image 
              src="/assets/images/mainLogo-RIJA.png"
              alt='mainLogo-RIJA'
              width={120}
              height={120}
              className="w-24 h-24 xs:w-18 xs:h-18 sm:w-20 sm:h-20 object-contain"
              priority
              quality={100}
              unoptimized={true}
              sizes="(max-width: 480px) 64px, (max-width: 640px) 72px, 80px"
            />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none p-1 xs:p-1.5 sm:p-2"
              aria-label="Close menu">
              <X size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          
          <div className="px-3 xs:px-4 sm:px-6 pt-4 xs:pt-6 pb-3 xs:pb-4 space-y-1 xs:space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative block px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md xs:rounded-lg transition-all duration-200 group"
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
                <span className="absolute bottom-1 left-3 xs:left-4 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-[calc(100%-1.5rem)] xs:group-hover:w-[calc(100%-2rem)]"></span>
              </Link>
            ))}
          </div>
          
          <div className="px-3 xs:px-4 sm:px-6 pt-2 xs:pt-4">
            <Link
              href="/hubungi-kami"
              className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-4 xs:px-6 py-2 xs:py-3 rounded-md xs:rounded-lg text-sm xs:text-sm font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}>
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;