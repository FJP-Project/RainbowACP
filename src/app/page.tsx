import Footer from '../components/layout/footer'
import Navbar from '../components/layout/navbar'
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
      <Navbar />
      
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/home-Hero.png')" }}>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Image
                src="/assets/images/whiteLogoRIJA.png"
                alt="Logo RIJA"
                width={160}
                height={160}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Bertaraf
              <br />
              Internasional
            </h2>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              <Image
                src="/assets/images/CTA-Taraf/tarafInternational1.png"
                alt="TKDN Tertinggi"
                width={100}
                height={100}
                className="object-contain"
              />
              <Image
                src="/assets/images/CTA-Taraf/tarafInternational2.png"
                alt="ISO 9001:2015"
                width={100}
                height={100}
                className="object-contain"
              />
              <Image
                src="/assets/images/CTA-Taraf/tarafInternational3.png"
                alt="ISO 14001:2015"
                width={100}
                height={100}
                className="object-contain"
              />
              <Image
                src="/assets/images/CTA-Taraf/tarafInternational4.png"
                alt="Green Label Indonesia"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Beyond Ordinary
              <br />
              Panels
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>

          <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src="/assets/images/home-About.png"
              alt="Modern Architecture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {feature.number}
                </div>
              </div>
              <div className="mb-6 flex justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={68}
                  height={68}
                  className="object-contain"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>


      <Footer />
    </>
  )
}