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

  return (
    <>
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/home-Hero.png')" }}>
        <div className="relative z-10 text-center text-white px-2 xs:px-4 sm:px-6 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto">
          <div className="mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Image
                src="/assets/images/whiteLogo-RIJA.png"
                alt="Logo RIJA"
                width={160}
                height={160}
                className="xs:w-20 xs:h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-15"
                priority
                quality={100}
                unoptimized={false}
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 144px, 160px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 xs:py-8 sm:py-10 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 xs:gap-6 sm:gap-8">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">
                Bertaraf
                <br />
                Internasional
              </h2>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 items-center justify-items-center">
                <Image
                  src="/assets/images/CTA-Taraf/tarafInternational1.png"
                  alt="TKDN Tertinggi"
                  width={112}
                  height={112}
                  className="xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
                  quality={100}
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                />
                <Image
                  src="/assets/images/CTA-Taraf/tarafInternational2.png"
                  alt="ISO 9001:2015"
                  width={112}
                  height={112}
                  className="xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
                  quality={100}
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                />
                <Image
                  src="/assets/images/CTA-Taraf/tarafInternational3.png"
                  alt="ISO 14001:2015"
                  width={112}
                  height={112}
                  className="xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
                  quality={100}
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                />
                <Image
                  src="/assets/images/CTA-Taraf/tarafInternational4.png"
                  alt="Green Label Indonesia"
                  width={112}
                  height={112}
                  className="xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
                  quality={100}
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 xs:py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight">
                Beyond Ordinary
                <br />
                Panels
              </h2>
              <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed mb-4 xs:mb-6 sm:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>

            <div className="relative w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-lg overflow-hidden">
              <Image
                src="/assets/images/home-About.png"
                alt="Modern Architecture"
                fill
                className="object-cover"
                priority
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 xs:py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 xs:p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4 xs:mb-5 sm:mb-6">
                  <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs xs:text-sm font-bold mr-2 xs:mr-3">
                    {feature.number}
                  </div>
                </div>
                <div className="mb-4 xs:mb-5 sm:mb-6 flex justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={68}
                    height={68}
                    className="xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-17 md:h-17 object-contain"
                    quality={100}
                    sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 68px"
                  />
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-xs xs:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="w-full mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="relative py-24 xs:py-28 sm:py-32 md:py-36 lg:py-40 xl:py-48">
            <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] rounded-xl xs:rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/home-Katalog.png"
                alt="Color Selection Background"
                fill
                className="object-cover"
                quality={100}
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-2 xs:px-4">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 xs:mb-8 sm:mb-10 md:mb-12">
                <span className="text-blue-400">1</span>
                <span className="text-green-400">0</span>
                <span className="text-yellow-400">0</span>
                <span className="text-white">+ Pilihan Warna</span>
              </h2>

              <div className="flex gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
                <div className="w-12 h-8 xs:w-16 xs:h-10 sm:w-20 sm:h-14 md:w-32 md:h-20 lg:w-48 lg:h-32 xl:w-80 xl:h-72 bg-blue-500 rounded-md xs:rounded-lg shadow-lg border-2 xs:border-4 border-white"></div>
                <div className="w-12 h-8 xs:w-16 xs:h-10 sm:w-20 sm:h-14 md:w-32 md:h-20 lg:w-48 lg:h-32 xl:w-80 xl:h-72 bg-green-500 rounded-md xs:rounded-lg shadow-lg border-2 xs:border-4 border-white"></div>
                <div className="w-12 h-8 xs:w-16 xs:h-10 sm:w-20 sm:h-14 md:w-32 md:h-20 lg:w-48 lg:h-32 xl:w-80 xl:h-72 bg-yellow-400 rounded-md xs:rounded-lg shadow-lg border-2 xs:border-4 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 bg-white">
        <div className="w-full mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 xs:mb-8 sm:mb-10 md:mb-12 flex justify-center">
            <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <Image
                src="/assets/images/indonesia.png"
                alt="Indonesia Distribution Map"
                width={800}
                height={400}
                className="w-full h-auto object-contain"
                quality={100}
                sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, (max-width: 1280px) 576px, 672px"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 xs:gap-6 sm:gap-8 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            <span className="text-gray-700 font-medium text-xs xs:text-sm sm:text-base">Bisa kirim ke</span>
            <div className="flex-1 h-px bg-gray-300 max-w-24 xs:max-w-32 sm:max-w-48 md:max-w-xs"></div>
            <span className="text-gray-700 font-medium text-xs xs:text-sm sm:text-base">Seluruh Indonesia</span>
          </div>
        </div>
      </section>

      <section className="py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 bg-white">
        <div className="w-full mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 xs:mb-6 sm:mb-8 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-tight">
            Jadilah bagian distribusi
            <br />
            Rainbow ACP
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 xs:py-3 sm:py-4 px-4 xs:px-6 sm:px-8 rounded-md xs:rounded-lg text-xs xs:text-sm sm:text-base md:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Hubungi Kami
          </button>
        </div>
      </section>
    </>
  )
}