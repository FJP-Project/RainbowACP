'use client'

import Image from 'next/image'
import { CheckCircle, Palette, Building } from 'lucide-react'

export default function HomePage() {
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

  const colors = [
    { id: 1, name: 'Ocean Blue', bg: 'bg-blue-500' },
    { id: 2, name: 'Forest Green', bg: 'bg-green-500' },
    { id: 3, name: 'Sunset Yellow', bg: 'bg-yellow-400' },
    { id: 4, name: 'Ruby Red', bg: 'bg-red-500' },
    { id: 5, name: 'Royal Purple', bg: 'bg-purple-500' },
    { id: 6, name: 'Silver Gray', bg: 'bg-gray-400' },
    { id: 7, name: 'Emerald', bg: 'bg-emerald-500' },
    { id: 8, name: 'Rose Gold', bg: 'bg-rose-400' },
    { id: 9, name: 'Midnight Black', bg: 'bg-gray-900' },
    { id: 10, name: 'Pure White', bg: 'bg-white' },
  ];

  return (
    <>
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/home-Hero.png')" }}>
        <div className="relative z-10 text-center text-white px-4 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/whiteLogo-RIJA.png"
                alt="Logo RIJA"
                width={160}
                height={160}
                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                priority
                quality={100}
                sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Bertaraf
                <br />
                Internasional
              </h2>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex justify-center items-center">
                    <Image
                      src={`/assets/images/CTA-Taraf/tarafInternational_${num}.png`}
                      alt={`Certification ${num}`}
                      width={112}
                      height={112}
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                      quality={100}
                      sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Beyond Ordinary
                <br />
                Panels
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>

            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-lg overflow-hidden mx-auto">
              <Image
                src="/assets/images/home-About.png"
                alt="Modern Architecture"
                fill
                className="object-cover"
                priority
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
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
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="relative py-20 sm:py-24 md:py-32 lg:py-40">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
            <Image
              src="/assets/images/home-Katalog.png"
              alt="Color Selection Background"
              fill
              className="object-cover"
              quality={100}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 lg:mb-16">
              <span className="text-blue-400">1</span>
              <span className="text-green-400">0</span>
              <span className="text-yellow-400">0</span>
              <span className="text-white">+ Pilihan Warna</span>
            </h2>
            
            <div className="w-full max-w-full overflow-hidden">
              <div className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 scrollbar-hide justify-center">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className="flex-shrink-0 group cursor-pointer flex flex-col items-center">
                    <div className={`
                      ${color.bg} 
                      ${color.bg === 'bg-white' ? 'border-4 border-gray-300' : 'border-1 border-white'} 
                      rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-300
                      w-16 h-10 sm:w-24 sm:h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 xl:w-48 xl:h-32`}>
                    </div>
                    <p className="text-white text-xs sm:text-sm md:text-base font-medium mt-2 sm:mt-3 text-center opacity-80 group-hover:opacity-100 transition-opacity">
                      {color.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
              <Image
                src="/assets/images/indonesia.png"
                alt="Indonesia Distribution Map"
                width={800}
                height={400}
                className="w-full h-auto object-contain mx-auto"
                quality={100}
                sizes="(max-width: 640px) 384px, (max-width: 768px) 448px, (max-width: 1024px) 512px, (max-width: 1280px) 672px, 800px"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
            <span className="text-gray-700 font-medium text-sm sm:text-base">Bisa kirim ke</span>
            <div className="flex-1 h-px bg-gray-300 max-w-32 sm:max-w-48 md:max-w-xs"></div>
            <span className="text-gray-700 font-medium text-sm sm:text-base">Seluruh Indonesia</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-tight">
            Jadilah bagian distribusi
            <br />
            Rainbow ACP
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Hubungi Kami
          </button>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}