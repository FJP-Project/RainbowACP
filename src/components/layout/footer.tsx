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
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center items-center justify-center flex mb-12">
          <Image 
          src="/assets/images/whiteLogo-RIJA.png"
          alt='mainLogo-RIJA'
          width={220}
          height={220}
          className="object-contain"
          priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-300">Product</h3>
            <nav className="space-y-4">
              <Link href="/autocapture" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Autocapture
              </Link>
              <Link href="/data-governance" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Data Governance
              </Link>
              <Link href="/virtual-events" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Virtual Events
              </Link>
              <Link href="/virtual-users" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Virtual Users
              </Link>
              <Link href="/behavioral-analytics" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Behavioral Analytics
              </Link>
              <Link href="/connect" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Connect
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-300">Distributor</h3>
            <nav className="space-y-4">
              <Link href="/resources" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Resources
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <Link href="/documents" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Documents
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-300">Office Location</h3>
            <address className="text-gray-400 text-sm not-italic leading-relaxed">
              ABC Company, 123 East, 17th Street,<br />
              St. louis 10001
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-300">News letter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-gray-600 py-3 px-0 text-sm text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
                  required/>
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-400 transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex justify-center space-x-8 mt-16 pt-8 border-t border-gray-700">
          <Link 
            href="https://youtube.com" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="YouTube">
            <Youtube size={24} />
          </Link>
          <Link 
            href="https://facebook.com" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook">
            <Facebook size={24} />
          </Link>
          <Link 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Music">
            <Music size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;