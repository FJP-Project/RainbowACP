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
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 xs:h-14 sm:h-16">
          <div className="flex-shrink-0">
            <Image 
              src="/assets/images/mainLogo-RIJA.png"
              alt='mainLogo-RIJA'
              width={104}
              height={104}
              className="xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 object-contain"
              priority
              quality={100}
              sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 104px"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-4 lg:ml-10 flex items-center space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-2 lg:px-3 py-2 text-xs sm:text-sm font-medium transition-colors duration-200">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              href="/hubungi-kami"
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 lg:px-6 py-1.5 lg:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200">
              Hubungi Kami
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-1 xs:p-2"
              aria-label="Toggle menu">
              {isMenuOpen ? <X size={20} className="xs:w-6 xs:h-6" /> : <Menu size={20} className="xs:w-6 xs:h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Mobile menu sidebar */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-72 xs:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-4 xs:p-6 border-b border-gray-200">
            <Image 
              src="/assets/images/mainLogo-RIJA.png"
              alt='mainLogo-RIJA'
              width={80}
              height={80}
              className="xs:w-16 xs:h-16 object-contain"
              priority
              quality={100}
              sizes="(max-width: 640px) 64px, 80px"
            />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          
          <div className="px-4 xs:px-6 pt-6 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="px-4 xs:px-6 pt-4">
            <Link
              href="/hubungi-kami"
              className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}>
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-8 xs:h-10 sm:h-12">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-1 xs:space-x-2 text-xs xs:text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                    Rainbow
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mx-1 xs:mx-2">-</span>
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