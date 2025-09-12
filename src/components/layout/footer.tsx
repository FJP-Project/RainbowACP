'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, Youtube, Facebook, Music } from 'lucide-react';
import Image from 'next/image'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-slate-900 text-white py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 px-2 xs:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center items-center justify-center flex mb-6">
          <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
            <Image 
              src="/assets/images/whiteLogo-RIJA.png"
              alt='RIJA Company Logo'
              fill
              className="object-contain"
              priority
              quality={100}
              sizes="(max-width: 475px) 96px, (max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 lg:gap-12">
          <div className="xs:col-span-1">
            <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-gray-300">Product</h3>
            <nav className="space-y-2 xs:space-y-3 sm:space-y-4">
              <Link href="/autocapture" className="block text-gray-400 hover:text-white transition-colors text-xs xs:text-sm">
                Autocapture
              </Link>
              <Link href="/data-governance" className="block text-gray-400 hover:text-white transition-colors text-xs xs:text-sm">
                Data Governance
              </Link>
              <Link href="/virtual-events" className="block text-gray-400 hover:text-white transition-colors text-xs xs:text-sm">
                Virtual Events
              </Link>
              <Link href="/virtual-users" className="block text-gray-400 hover:text-white transition-colors text-xs xs:text-sm">
                Virtual Users
              </Link>
              <Link href="/behavioral-analytics" className="block text-gray-400 hover:text-white transition-colors text-xs xs:text-sm">
                Behavioral Analytics
              </Link>
              <Link href="/connect" className="block text-gray-400 hover:text-white transition-colors text-xs xs:text-sm">
                Connect
              </Link>
            </nav>
          </div>

          <div className="xs:col-span-1">
            <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-gray-300">Distributor</h3>
            <nav className="space-y-2 xs:space-y-3 sm:space-y-4">
              <Link href="/resources" className="block text-gray-400 hover:text-white transition-colors text-xs xs:text-sm">
                Resources
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors text-xs xs:text-sm">
                Blog
              </Link>
              <Link href="/documents" className="block text-gray-400 hover:text-white transition-colors text-xs xs:text-sm">
                Documents
              </Link>
            </nav>
          </div>

          <div className="xs:col-span-2 lg:col-span-1">
            <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-gray-300">Office Location</h3>
            <address className="text-gray-400 text-xs xs:text-sm not-italic leading-relaxed">
              ABC Company, 123 East, 17th Street,<br />
              St. louis 10001
            </address>
          </div>

          <div className="xs:col-span-2 lg:col-span-1">
            <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-gray-300">News letter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3 xs:space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-gray-600 py-2 xs:py-3 px-0 text-xs xs:text-sm text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-400 transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send size={16} className="xs:w-5 xs:h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex justify-center space-x-4 xs:space-x-6 sm:space-x-8 mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 pt-4 xs:pt-6 sm:pt-8 border-t border-gray-700">
          <Link 
            href="https://youtube.com" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Follow us on YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={20} className="xs:w-6 xs:h-6" />
          </Link>
          <Link 
            href="https://facebook.com" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Follow us on Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={20} className="xs:w-6 xs:h-6" />
          </Link>
          <Link 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Listen to our music"
          >
            <Music size={20} className="xs:w-6 xs:h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;