'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

export default function DistributorPage() {
  const distributors = [
    {   
      id: 1,
      city: "Sidoarjo",
      address: "Jl. Raya Bypass Krian No. 123, Krian, Sidoarjo, Jawa Timur 61262",
      LinkText: "Hubungi Kami",
      LinkColor: "bg-orange-500 hover:bg-orange-600"
    },
    {
      id: 2,
      city: "Surabaya", 
      address: "Jl. Ahmad Yani No. 456, Gayungan, Surabaya, Jawa Timur 60235",
      LinkText: "Hubungi Kami",
      LinkColor: "bg-orange-500 hover:bg-orange-600"
    },
    {
      id: 3,
      city: "Jakarta",
      address: "Jl. TB Simatupang No. 789, Cilandak, Jakarta Selatan, DKI Jakarta 12430",
      LinkText: "Hubungi Kami", 
      LinkColor: "bg-orange-500 hover:bg-orange-600"
    }
  ];

  const mascotImages = [
    {
      src: "/assets/images/mascot/mascot1-main.webp",
      label: "Main",
      bgColor: "bg-blue-500"
    },
    {
      src: "/assets/images/mascot/mascot2-contractor.webp",
      label: "Contractor",
      bgColor: "bg-pink-500"
    },
    {
      src: "/assets/images/mascot/mascot3-arsitek.webp",
      label: "Architect",
      bgColor: "bg-green-500"
    },
    {
      src: "/assets/images/mascot/mascot4-pengirim.webp",
      label: "Delivery",
      bgColor: "bg-purple-500"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === mascotImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [mascotImages.length]);

  return (
    <>
      <Head>
        <title>Distributor Rainbow ACP - Jaringan Nasional Aluminium Composite Panel</title>
        <meta name="description" content="Temukan distributor resmi Rainbow ACP terdekat di seluruh Indonesia. Jaringan distribusi terpercaya untuk kebutuhan Aluminium Composite Panel Anda." />
        <meta name="keywords" content="Distributor Rainbow ACP, ACP Indonesia, Distributor Aluminium Composite Panel, Rainbow ACP Jakarta, Rainbow ACP Surabaya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Distributor Rainbow ACP - Jaringan Nasional" />
        <meta property="og:description" content="Jaringan distributor resmi Rainbow ACP di seluruh Indonesia untuk kebutuhan Aluminium Composite Panel berkualitas tinggi." />
        <meta property="og:type" content="website" />
      </Head>

      <section 
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('/assets/images/distributor/distributor-hero.webp')"
        }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Distributor
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
              <h2 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl font-bold text-gray-900">
                Tersedia di
              </h2>
              <div className="hidden md:block text-3xl lg:text-4xl text-gray-400">
                →
              </div>
              <h2 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl font-bold text-gray-900">
                Seluruh Indonesia
              </h2>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto mb-16 md:mb-20">
            <div className="relative rounded-2xl p-8 md:p-12">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem]">
                <Image
                  src="/assets/images/distributor/indonesia.webp"
                  alt="Peta Indonesia"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1000px"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Distributor Resmi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {distributors.map((distributor, index) => (
              <div
                key={distributor.id}
                className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  {distributor.city}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8 px-2 min-h-[4rem] flex items-center justify-center">
                  {distributor.address}
                </p>
                <Link 
                  href="https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20ACP"
                  target="_blank" className={`${distributor.LinkColor} text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}>
                  {distributor.LinkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Beyond Ordinary<br />
                <span className="block">Panels</span>
              </h2>
              
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nam volutpat lorem ut velit molestie, ut aliquet orci 
                mattis. Class aptent taciti sociosqu ad litora torquent per 
                conubia nostra, per inceptos himenaeos.
              </p>
              
              <div className="pt-2">
                <Link 
                  href="https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20ACP"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Hubungi Kami
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                <Image
                  src={mascotImages[currentImageIndex].src}
                  alt={`Rainbow ACP ${mascotImages[currentImageIndex].label} Character`}
                  fill
                  className="object-contain transition-opacity duration-500 ease-in-out"
                  quality={100}
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                />

                {/* Label/Badge untuk karakter */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className={`${mascotImages[currentImageIndex].bgColor} text-white text-xs sm:text-sm md:text-base font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg`}>
                    {mascotImages[currentImageIndex].label}
                  </span>
                </div>

                {/* Navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {mascotImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-blue-600 scale-110' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation arrows for mobile */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? mascotImages.length - 1 : currentImageIndex - 1)}
                    className="bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg ml-2 transition-all duration-200 hover:scale-110 md:opacity-0 md:hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={() => setCurrentImageIndex(currentImageIndex === mascotImages.length - 1 ? 0 : currentImageIndex + 1)}
                    className="bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg mr-2 transition-all duration-200 hover:scale-110 md:opacity-0 md:hover:opacity-100"
                    aria-label="Next image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 leading-tight">
            Jadilah bagian distribusi<br />
            <span className="block">Rainbow ACP</span>
          </h2>
          
          <div className="pt-4">
            <Link 
              href="https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20ACP"
              target="_blank" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 md:py-5 md:px-12 rounded-lg text-sm md:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}