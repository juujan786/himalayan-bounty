import Image from "next/image";
import { FaLeaf, FaBolt, FaShieldAlt } from "react-icons/fa";
import FeaturedProductsCarousel from "./components/FeaturedProductsCarousel";
import SpecialDealsCarousel from "./components/SpecialDealsCarousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 py-8 items-center justify-between">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Pure & Natural <br /> Shilajit and <br /> Dry Fruits
          </h1>
          <button className="bg-green-900 text-white px-6 py-2 rounded-md w-fit mt-2 hover:bg-green-800 transition">Shop Now</button>
        </div>
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 min-w-[320px] max-w-[420px]">
          <div className="bg-gray-100 rounded-xl flex items-center justify-center h-32">
            <Image src="/file.svg" alt="Premium Shilajit" width={64} height={64} />
          </div>
          <div className="bg-gray-100 rounded-xl flex items-center justify-center h-32">
            <Image src="/window.svg" alt="Raw Almonds" width={64} height={64} />
          </div>
          <div className="bg-gray-100 rounded-xl flex items-center justify-center h-32">
            <Image src="/globe.svg" alt="Bowl of Cashews" width={64} height={64} />
          </div>
          <div className="bg-gray-100 rounded-xl flex items-center justify-center h-32">
            <Image src="/next.svg" alt="Mixed Nuts" width={64} height={64} />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProductsCarousel />
      {/* Special Deals */}
      <SpecialDealsCarousel />
      {/* Deals & Offers, Benefits, Testimonials, About Us */}
      <div className="flex flex-col md:flex-row gap-8 my-8">
        {/* Deals & Offers */}
        <section className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Deals & Offers</h2>
          <div className="bg-gray-100 rounded-xl p-8 flex flex-col gap-4 min-h-[220px] max-w-md">
            <span className="text-green-900 font-semibold">Special offer on cashews</span>
            <div className="flex items-center gap-2">
              <span className="bg-green-200 text-green-900 px-3 py-1 rounded-full text-xs font-bold">Up to 20% off</span>
            </div>
            <p className="text-gray-700 text-sm">Get the best deals on premium cashews. Limited time offer!</p>
          </div>
        </section>
        {/* Benefits, Testimonials, About Us */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Benefits */}
          <section>
            <div className="flex gap-8 justify-center">
              {[
                {icon: <FaBolt className="text-green-900 text-2xl" />, title: "Resolve", desc: "Energy"},
                {icon: <FaLeaf className="text-green-900 text-2xl" />, title: "Mojin", desc: "Nutrients"},
                {icon: <FaShieldAlt className="text-green-900 text-2xl" />, title: "Enhances", desc: "Stamina"},
              ].map((b, idx) => (
                <div key={b.title} className="flex flex-col items-center gap-2">
                  <div className="bg-green-100 rounded-full p-4 flex items-center justify-center mb-2">{b.icon}</div>
                  <span className="font-semibold text-green-900">{b.title}</span>
                  <span className="text-xs text-gray-500">{b.desc}</span>
                </div>
              ))}
            </div>
          </section>
          {/* Testimonials */}
          <section className="max-w-md">
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col gap-2">
              <p className="text-gray-700 text-sm">"Reselle contact us acceel aabeb ecred gellen. Lorem facer adipisieviet."</p>
              <span className="font-semibold text-green-900 mt-2">— Sarah</span>
            </div>
          </section>
          {/* About Us */}
          <section className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 text-sm">Lorem ipsum dolor text outside Contact information here</p>
          </section>
        </div>
      </div>
    </div>
  );
}
