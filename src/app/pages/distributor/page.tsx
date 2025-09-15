'use client'

import Image from 'next/image'
import Head from 'next/head'
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react'

export default function DistributorPage() {
  const distributors = [
    {
      id: 1,
      city: "Sidoarjo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      buttonText: "Hubungi Kami",
      buttonColor: "bg-orange-500 hover:bg-orange-600"
    },
    {
      id: 2,
      city: "Surabaya", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      buttonText: "Hubungi Kami",
      buttonColor: "bg-orange-500 hover:bg-orange-600"
    },
    {
      id: 3,
      city: "Jakarta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      buttonText: "Hubungi Kami", 
      buttonColor: "bg-orange-500 hover:bg-orange-600"
    }
  ];

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
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/assets/images/distributor/distributor-hero.png')"
        }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            Distributor
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Tersedia di
              </h2>
              <div className="hidden md:block text-3xl lg:text-4xl text-gray-400">
                →
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Seluruh Indonesia
              </h2>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto mb-16 md:mb-20">
            <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem]">
                <Image
                  src="/assets/images/distribution/indonesia.png"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Distributor Resmi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {distributors.map((distributor, index) => (
              <div
                key={distributor.id}
                className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  {distributor.city}
                </h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 px-2">
                  {distributor.description}
                </p>
                <button className={`${distributor.buttonColor} text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}>
                  {distributor.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Beyond Ordinary<br />
                <span className="block">Panels</span>
              </h2>
              
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nam volutpat lorem ut velit molestie, ut aliquet orci 
                mattis. Class aptent taciti sociosqu ad litora torquent per 
                conubia nostra, per inceptos himenaeos.
              </p>
              
              <div className="pt-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Hubungi Kami
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                <Image
                  src="/assets/images/distributor/distributor-assets1.png"
                  alt="Rainbow ACP Construction Mascot Character"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 md:mb-12 leading-tight">
            Jadilah bagian distribusi<br />
            <span className="block">Rainbow ACP</span>
          </h2>
          
          <div className="pt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 md:py-5 md:px-12 rounded-lg text-sm md:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </>
  )
}