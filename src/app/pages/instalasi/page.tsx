'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { CheckCircle } from 'lucide-react'

export default function InstalasiPage() {
  const installasiSteps = [
    {
      id: 1,
      step: "1",
      title: "Beyond Ordinary Panels",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/assets/images/instalasi/instalasi-assets2.webp"
    },
    {
      id: 2,
      step: "2", 
      title: "Beyond Ordinary Panels",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/assets/images/instalasi/instalasi-assets2.webp"
    },
    {
      id: 3,
      step: "3",
      title: "Beyond Ordinary Panels", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/assets/images/instalasi/instalasi-assets2.webp"
    }
  ];

  return (
    <>
      <Head>
        <title>Instalasi Rainbow ACP - Panduan Lengkap Pemasangan Aluminium Composite Panel</title>
        <meta name="description" content="Pelajari cara instalasi Rainbow ACP yang tepat. Panduan lengkap pemasangan Aluminium Composite Panel untuk hasil berkualitas tinggi dan tahan lama." />
        <meta name="keywords" content="Instalasi Rainbow ACP, Cara Pasang ACP, Pemasangan Aluminium Composite Panel, Panduan Instalasi ACP, Tutorial ACP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Instalasi Rainbow ACP - Panduan Lengkap Pemasangan" />
        <meta property="og:description" content="Panduan lengkap instalasi Rainbow ACP untuk hasil pemasangan yang berkualitas tinggi dan profesional." />
        <meta property="og:type" content="website" />
      </Head>

      <section 
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/assets/images/instalasi/instalasi-hero.webp')"
        }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Instalasi
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                <Image
                  src="/assets/images/instalasi/instalasi-assets1.webp"
                  alt="Rainbow ACP Installation Mascot Character"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
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
                <Link href="" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {installasiSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="relative mb-8 md:mb-12">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={step.image}
                      alt={`Instalasi Step ${step.step} - ${step.title}`}
                      fill
                      className="object-cover"
                      quality={100}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 896px"
                    />
                  </div>
                  <div className="absolute -left-2 sm:-left-4 md:-left-6 top-6 md:top-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  {index < installasiSteps.length - 1 && (
                    <div className="absolute -left-1 sm:-left-3 md:-left-5 top-16 sm:top-20 md:top-24 w-0.5 h-16 md:h-20 bg-gray-300 hidden sm:block"></div>
                  )}
                </div>
                <div className="pl-8 sm:pl-12 md:pl-16">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 leading-tight">
            Butuh bantuan instalasi<br />
            <span className="block">Rainbow ACP?</span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            Tim ahli kami siap membantu Anda dalam proses instalasi Rainbow ACP 
            untuk memastikan hasil yang sempurna dan berkualitas tinggi.
          </p>
          
          <div className="pt-4">
            <Link href="" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 md:py-5 md:px-12 rounded-lg text-sm md:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}