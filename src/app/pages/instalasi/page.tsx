'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { CheckCircle, Settings, Ruler, Layout, Wrench, Layers, Shield, ClipboardCheck } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

export default function InstalasiPage() {
  const installationSteps = [
    {
      id: 1,
      title: "Persiapan Alat & Bahan",
      description: "Menyiapkan semua peralatan yang diperlukan seperti pita pengukur, gergaji listrik, bor twist, sekrup, perekat adhesive, dan perlengkapan keselamatan.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Persiapan Permukaan",
      description: "Membersihkan permukaan dinding dari debu, kotoran dan partikel lain. Memastikan permukaan rata, kering dan kuat untuk pemasangan optimal.",
      icon: ClipboardCheck,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Pengukuran Panel",
      description: "Melakukan pengukuran vertikal dan horizontal secara akurat menggunakan pita pengukur. Menandai panel sesuai ukuran yang tepat.",
      icon: Ruler,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Perencanaan Tata Letak",
      description: "Merencanakan pola dan susunan ACP sesuai dengan desain arsitektur dan mempertimbangkan aspek fungsional seperti pencahayaan dan ventilasi.",
      icon: Layout,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Fabrikasi Panel",
      description: "Melakukan pemotongan dan pengaluran panel menggunakan gergaji listrik dan mesin router untuk menyesuaikan dengan desain yang diinginkan.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "Fabrikasi presisi untuk fitting yang sempurna"
    },
    {
      id: 6,
      title: "Pemasangan ACP",
      description: "Memasang ACP pada rangka menggunakan teknik riveting dengan paku keling atau sekrup khusus ACP. Memastikan pemasangan lurus dan rata.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Aplikasi Sealant",
      description: "Menutup rongga antara panel menggunakan sealant untuk mencegah kebocoran air dan memperpanjang umur ACP serta menjaga keindahan jangka panjang.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  const qualityFeatures = [
    "Garansi hingga 15 tahun",
    "Tim teknisi berpengalaman",
    "Peralatan modern & lengkap",
    "Hasil terjamin berkualitas"
  ];

  return (
    <>
      <Head>
        <title>Instalasi Rainbow ACP - Langkah Profesional Pemasangan Aluminium Composite Panel</title>
        <meta name="description" content="Panduan lengkap langkah-langkah instalasi Rainbow ACP profesional. Tim ahli dengan pengalaman puluhan tahun, garansi hingga 15 tahun. Hubungi kami sekarang!" />
        <meta name="keywords" content="Instalasi Rainbow ACP, Langkah Pemasangan ACP, Cara Pasang ACP, Aluminium Composite Panel Installation, Rainbow ACP Indonesia, Pemasangan ACP Profesional" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Instalasi Rainbow ACP - Langkah Profesional Pemasangan ACP" />
        <meta property="og:description" content="Panduan lengkap instalasi Rainbow ACP dengan langkah profesional. Tim ahli berpengalaman dengan garansi hingga 15 tahun." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/instalasi/instalasi-hero.webp" />
        <meta name="author" content="Rainbow ACP" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/instalasi" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Langkah-Langkah Instalasi Rainbow ACP",
            "description": "Panduan lengkap langkah pemasangan Rainbow ACP profesional",
            "step": installationSteps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.title,
              "text": step.description
            }))
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
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Langkah Profesional untuk Hasil Berkualitas Tinggi
          </p>
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
                  <span className="bg-blue-500 bg-clip-text text-transparent">
                    Hasil Maksimal
                  </span>
                </h2>
                
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                  Rainbow ACP menghadirkan solusi instalasi Aluminium Composite Panel 
                  terbaik dengan teknologi terdepan dan tim profesional berpengalaman 
                  puluhan tahun di industri konstruksi.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {qualityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Langkah Instalasi Rainbow ACP
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Proses instalasi ACP yang tepat memerlukan perencanaan yang matang dan pelaksanaan yang cermat untuk memastikan hasil optimal dan tahan lama.
              Berikut adalah langkah-langkah profesional yang kami terapkan.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {installationSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={step.image}
                        alt={`${step.title} - Rainbow ACP Installation Step ${step.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {step.id}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center bg-blue-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Mengapa Memilih Jasa Instalasi Kami?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg">Berpengalaman</h4>
                <p className="text-white/90 text-sm">Puluhan tahun pengalaman di industri ACP</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg">Peralatan Modern</h4>
                <p className="text-white/90 text-sm">Menggunakan teknologi dan alat terkini</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg">Tim Ahli</h4>
                <p className="text-white/90 text-sm">Teknisi terlatih dan bersertifikat profesional</p>
              </div>
            </div>
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

        /* Custom gradient animations */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </>
  )
}