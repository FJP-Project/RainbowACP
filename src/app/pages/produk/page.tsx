'use client'

import Image from 'next/image'
import Head from 'next/head'
import { CheckCircle, Layers, Shield, Zap } from 'lucide-react'

export default function ProductPage() {
  const specifications = [
    {
      id: 1,
      title: "Material Premium",
      description: "Terbuat dari bahan aluminium berkualitas tinggi dengan lapisan protective yang tahan terhadap cuaca ekstrem.",
      position: "top-left",
      color: "bg-blue-500"
    },
    {
      id: 2, 
      title: "Ketebalan Variatif",
      description: "Tersedia dalam berbagai ketebalan mulai dari 3mm hingga 6mm sesuai kebutuhan konstruksi.",
      position: "left",
      color: "bg-teal-500"
    },
    {
      id: 3,
      title: "Finishing Sempurna", 
      description: "Surface halus dengan teknologi coating advanced yang memberikan hasil akhir premium.",
      position: "top-right",
      color: "bg-pink-500"
    },
    {
      id: 4,
      title: "Daya Tahan Tinggi",
      description: "Tahan rayap, anti jamur, tahan api, dan memiliki daya tahan hingga 20+ tahun.",
      position: "bottom-right", 
      color: "bg-orange-500"
    }
  ];

    const features = [
      {
        number: "1",
        icon: "/assets/images/randomAssets/map.png",
        title: "100+ Warna dan Ukuran",
        description: "Solusi Aluminium Composite Panel (ACP) terlengkap dengan berbagai pilihan."
      },
      {
        number: "2",
        icon: "/assets/images/randomAssets/colorfilter.png",
        title: "Desain Fleksibel",
        description: "Pilihan desain yang dapat disesuaikan dengan kebutuhan arsitektur modern."
      },
      {
        number: "3",
        icon: "/assets/images/randomAssets/shield-tick.png",
        title: "Kualitas Terjamin",
        description: "Produk yang sudah melalui uji standar internasional."
      }
  ];

  return (
    <>
      <Head>
        <title>Produk Rainbow ACP - Aluminium Composite Panel Berkualitas Tinggi</title>
        <meta name="description" content="Discover Rainbow ACP premium aluminium composite panel dengan 100+ pilihan warna dan spesifikasi terlengkap untuk kebutuhan arsitektur modern Anda." />
        <meta name="keywords" content="Rainbow ACP, Aluminium Composite Panel, ACP Indonesia, Panel Aluminium, Fasad Bangunan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Produk Rainbow ACP - Aluminium Composite Panel Berkualitas Tinggi" />
        <meta property="og:description" content="Premium aluminium composite panel dengan 100+ pilihan warna dan spesifikasi terlengkap." />
        <meta property="og:type" content="product" />
        <link rel="canonical" href="https://yoursite.com/produk" />
      </Head>

      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/produk/produkHero.png')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Produk Kami
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90">
            Premium Aluminium Composite Panel
          </p>
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-left mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Spesifikasi
              <br />
              <span className="text-blue-600">Rainbow ACP</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
              Teknologi terdepan dengan material berkualitas tinggi untuk hasil maksimal
            </p>
          </div>
          <div className="relative">
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="relative w-full max-w-lg md:max-w-2xl">
                <Image
                  src="/assets/images/produk/RainbowACP-Simulation.png"
                  alt="Rainbow ACP Colorful Panels Specification"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 600px"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {specifications.map((spec, index) => (
                <div
                  key={spec.id}
                  className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-fit">
                  <div className="flex items-start">
                    <div className={`${spec.color} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0`}>
                      {spec.id}
                    </div>
                    <div className="relative mx-3 sm:mx-4 flex-shrink-0 flex justify-center">
                      <div className={`${spec.color} w-1 h-20 rounded-full`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {spec.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Keunggulan
              <br />
              <span className="text-blue-600">Rainbow ACP</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Berbagai keunggulan yang membuat Rainbow ACP menjadi pilihan terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full flex flex-col">
                <div className="flex items-center justify-start mb-4 sm:mb-6">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {feature.number}
                  </div>
                </div>
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={68}
                    height={68}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-17 md:h-17 object-contain"
                    quality={100}
                    sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 68px"
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                  Aplikasi
                  <br />
                  <span className="text-blue-600">Rainbow ACP</span>
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                  Solusi terdepan untuk berbagai kebutuhan arsitektur modern
                </p>
              </div>
              {[
                {
                  title: "Fasad Bangunan",
                  description: "Memberikan tampilan modern dan elegan pada eksterior bangunan komersial, perkantoran, dan residensial dengan daya tahan maksimal."
                },
                {
                  title: "Interior Design", 
                  description: "Cocok untuk aplikasi interior seperti wall cladding, ceiling, dan partisi dengan berbagai pilihan finishing premium."
                },
                {
                  title: "Signage & Branding",
                  description: "Ideal untuk papan nama, signage komersial, dan branding dengan hasil cetak yang tajam dan tahan lama."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="bg-green-500 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/produk/produkImage-assets1.png"
                  alt="Modern Building with Rainbow ACP Facade"
                  fill
                  className="object-cover"
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 md:p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-xs md:text-sm text-gray-600">Proyek Selesai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/produk/produkImage-assets2.png')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
                
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Bangunan
                <br />
                Kamu Belum
                <br />
                <span className="text-yellow-400">Estetik??</span>
              </h2>
              <p className="text-sm md:text-xl opacity-90 leading-relaxed max-w-lg">
                Wujudkan impian arsitektur modern Anda dengan Rainbow ACP.
                Konsultasi gratis untuk solusi terbaik!
              </p>
            </div>
                
            <div className="flex justify-center lg:justify-end">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-sm md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
    </section>

    </>
  )
} 