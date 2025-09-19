'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { CheckCircle, Building2, Monitor, Store } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

export default function InstalasiPage() {
  const installasiExamples = [
    {
      id: 1,
      title: "Gedung",
      description: "Memberikan tampilan profesional dan perlindungan optimal untuk bangunan komersial.",
      image: "/assets/images/instalasi/instalasi-assets4.webp",
      icon: Building2,
    },
    {
      id: 2,
      title: "Videotron",
      description: "Struktur khusus yang mampu menopang beban elektronik dengan sistem ventilasi yang baik.",
      image: "/assets/images/instalasi/instalasi-assets3.webp",
      icon: Monitor,
    },
    {
      id: 3,
      title: "Perkantoran",
      description: "Transformasi tampilan modern yang menarik pelanggan dan meningkatkan brand identity.",
      image: "/assets/images/instalasi/instalasi-assets5.webp",
      icon: Store,
    }
  ];

  const allApplications = [
    "Hotel & Resort", "Rumah Sakit", "Sekolah & Universitas", "Mall & Shopping Center",
    "Bandara & Terminal", "Pabrik & Industri", "Perumahan", "Stadion & Arena",
    "Bank & Keuangan", "Restaurant & Cafe", "Showroom", "Warehouse"
  ];

  return (
    <>
      <Head>
        <title>Instalasi Rainbow ACP - Gedung, Videotron, Ruko & Toko | Aluminium Composite Panel Terbaik</title>
        <meta name="description" content="Layanan instalasi Rainbow ACP profesional untuk gedung, videotron, ruko dan toko. Aluminium Composite Panel berkualitas tinggi dengan garansi hingga 15 tahun. Hubungi kami sekarang!" />
        <meta name="keywords" content="Instalasi Rainbow ACP, ACP Gedung, ACP Videotron, ACP Ruko, ACP Toko, Aluminium Composite Panel, Pemasangan ACP Profesional, Rainbow ACP Indonesia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Instalasi Rainbow ACP - Gedung, Videotron, Ruko & Toko" />
        <meta property="og:description" content="Layanan instalasi Rainbow ACP profesional dengan garansi hingga 15 tahun. Cocok untuk gedung, videotron, ruko dan toko." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/instalasi/instalasi-hero.webp" />
        <meta name="author" content="Rainbow ACP" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/instalasi" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Instalasi Rainbow ACP",
            "description": "Layanan instalasi profesional Rainbow ACP untuk gedung, videotron, ruko dan toko",
            "provider": {
              "@type": "Organization",
              "name": "Rainbow ACP"
            },
            "serviceType": "Instalasi Aluminium Composite Panel",
            "areaServed": "Indonesia",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Head>

      <section 
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('/assets/images/instalasi/instalasi-hero.webp')"
        }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Instalasi Rainbow ACP
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
                <Image
                  src="/assets/images/instalasi/instalasi-assets1.webp"
                  alt="Rainbow ACP Installation Professional Service Mascot"
                  fill
                  className="object-contain drop-shadow-2xl"
                  quality={100}
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 512px"
                  priority
                />
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Kualitas Premium<br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Hasil Maksimal
                  </span>
                </h2>
                
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
                  Rainbow ACP menghadirkan solusi instalasi Aluminium Composite Panel 
                  terbaik dengan teknologi terdepan dan tim profesional berpengalaman 
                  puluhan tahun di industri konstruksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contoh Aplikasi Rainbow ACP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Rainbow ACP dapat diaplikasikan di berbagai jenis bangunan dan konstruksi. 
              Berikut beberapa contoh penggunaan yang populer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {installasiExamples.map((example, index) => {
              const IconComponent = example.icon;
              
              return (
                <div key={example.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={example.image}
                      alt={`${example.title} - Rainbow ACP Installation`}
                      fill
                      className="object-cover"
                      quality={95}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{example.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{example.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Dan Banyak Aplikasi Lainnya!
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              <strong>Rainbow ACP cocok untuk semua jenis bangunan:</strong> Hotel, Rumah Sakit, Sekolah, Mall, 
              Bandara, Pabrik, Perumahan, Bank, Restaurant, Showroom, dan masih banyak lagi. 
              Tidak ada batasan untuk kreativitas desain Anda!
            </p>
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
            <Link 
              href="https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20ACP"
              target="_blank" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 md:py-5 md:px-12 rounded-lg text-sm md:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        @media (max-width: 640px) {
          .bg-fixed {
            background-attachment: scroll;
          }
        }
      `}</style>
    </>
  )
}