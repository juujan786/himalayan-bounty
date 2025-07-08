import Image from "next/image";
import { FaLeaf, FaUser, FaCheckCircle, FaHeart, FaRecycle } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">About Our Story</h1>
        <p className="max-w-2xl mx-auto text-gray-700">We are passionate about bringing you the purest, most authentic natural products from the heart of the Himalayas and finest growing regions around the world.</p>
      </section>
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700 text-sm">To provide premium quality, ethically sourced natural products that enhance health and well-being. We believe in the power of nature's gifts and are committed to preserving traditional knowledge while meeting modern quality standards.<br/><br/>Every product we offer is carefully selected, tested, and verified for purity. We work directly with local farmers and harvesters to ensure fair trade practices and sustainable sourcing.</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="bg-gray-100 rounded-xl p-8 flex flex-col items-center">
            <FaLeaf className="text-green-900 text-5xl mb-2" />
            <div className="font-semibold">100% Natural & Pure</div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-center mb-2">Our Core Values</h2>
        <p className="text-center text-gray-700 mb-8">The principles that guide everything we do</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {icon: <FaCheckCircle className="text-green-900 text-2xl" />, title: 'Quality First', desc: 'We never compromise on quality, ensuring every product meets our strict standards.'},
            {icon: <FaHeart className="text-green-900 text-2xl" />, title: 'Customer Focus', desc: 'Your health and satisfaction are at the center of everything we do.'},
            {icon: <FaRecycle className="text-green-900 text-2xl" />, title: 'Sustainability', desc: 'We’re committed to sustainable practices that protect our planet.'},
            {icon: <FaLeaf className="text-green-900 text-2xl" />, title: 'Wellness', desc: 'Promoting natural health and wellness through pure, authentic products.'},
          ].map((v) => (
            <div key={v.title} className="bg-gray-50 rounded-xl p-6 flex flex-col items-center">
              <div className="mb-2">{v.icon}</div>
              <div className="font-semibold mb-1">{v.title}</div>
              <div className="text-xs text-gray-600 text-center">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-center mb-2">Meet Our Team</h2>
        <p className="text-center text-gray-700 mb-8">Passionate experts dedicated to bringing you the finest natural products</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {name: 'Sarah Johnson', role: 'Founder & CEO', desc: '20+ years in natural health products with deep knowledge of traditional remedies.', icon: <FaUser className="text-green-900 text-4xl" />},
            {name: 'Dr. Michael Chen', role: 'Quality Assurance Director', desc: 'PhD in Biochemistry, ensures all products meet the highest purity standards.', icon: <FaUser className="text-green-900 text-4xl" />},
            {name: 'Priya Sharma', role: 'Sourcing Manager', desc: 'Expert in sustainable sourcing with direct connections to Himalayan regions.', icon: <FaUser className="text-green-900 text-4xl" />},
          ].map((m) => (
            <div key={m.name} className="bg-gray-50 rounded-xl p-6 flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-2 flex items-center justify-center">{m.icon}</div>
              <div className="font-semibold">{m.name}</div>
              <div className="text-xs text-gray-500 mb-1">{m.role}</div>
              <div className="text-xs text-gray-600 text-center">{m.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="text-center py-8">
        <h2 className="text-xl font-bold mb-2">Ready to Experience Nature's Best?</h2>
        <p className="mb-4">Join thousands of satisfied customers who trust us for their natural health needs.</p>
        <button className="bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800 transition">Shop Our Products</button>
      </section>
    </div>
  );
} 