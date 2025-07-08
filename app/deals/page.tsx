'use client';
import { useData } from '../components/DataContext';
import { useState } from 'react';
import { FaGift, FaLeaf, FaAppleAlt, FaSeedling } from "react-icons/fa";

export default function DealsPage() {
  const { deals } = useData();
  const activeDeals = deals.filter(d => d.active);
  return (
    <div className="flex flex-col gap-12">
      {/* Heading */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2">Special Deals & Offers</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">Limited time offers on our premium natural products. Save big on wellness bundles and exclusive combos.</p>
      </section>
      {/* Filters */}
      <section className="flex flex-wrap gap-2 items-center justify-center mb-4">
        {[
          {label: 'All', icon: <FaGift />},
          {label: 'Bundles', icon: <FaLeaf />},
          {label: 'Combos', icon: <FaAppleAlt />},
          {label: 'Wellness', icon: <FaSeedling />},
          {label: 'Seasonal', icon: <FaSeedling />},
        ].map(f => (
          <button key={f.label} className="px-4 py-1 rounded-full border border-green-900 text-green-900 bg-white hover:bg-green-100 text-sm flex items-center gap-2">
            {f.icon} {f.label}
          </button>
        ))}
        <span className="ml-4 text-xs text-gray-500">{activeDeals.length} deals available</span>
      </section>
      {/* Deals Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {activeDeals.map((d, i) => (
          <div key={d.id} className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 relative">
            {d.discount && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{d.discount}</span>}
            <div className="flex-1 flex items-center justify-center h-32 bg-gray-100 rounded mb-2">
              <DealImageCarousel images={d.images} name={d.name} />
            </div>
            <div className="text-xs text-gray-500 mb-1">{d.category}</div>
            <div className="font-semibold mb-1">{d.name}</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-900 font-bold text-lg">{d.price}</span>
              {d.oldPrice && <span className="text-gray-400 line-through text-xs">{d.oldPrice}</span>}
              {d.weight && <span className="text-xs text-gray-500 ml-2">({d.weight})</span>}
            </div>
            <div className="text-xs text-gray-500 mb-2">{d.description}</div>
            {/* Add to Cart button here if needed */}
          </div>
        ))}
      </section>
      {/* Newsletter Section */}
      <section className="text-center py-8">
        <h2 className="text-xl font-bold mb-2">Never Miss a Deal</h2>
        <p className="mb-4">Subscribe to get notified about exclusive deals and limited-time offers before anyone else.</p>
        <div className="flex justify-center gap-2">
          <input className="px-4 py-2 rounded border focus:outline-none" placeholder="Enter your email" />
          <button className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800 transition">Subscribe</button>
        </div>
      </section>
    </div>
  );
}

function DealImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) return <div>No Image</div>;
  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      <img src={images[idx]} alt={name} className="object-contain h-32 w-full rounded" />
      {images.length > 1 && (
        <>
          <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-2" onClick={() => setIdx(idx === 0 ? images.length - 1 : idx - 1)}>&lt;</button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-2" onClick={() => setIdx(idx === images.length - 1 ? 0 : idx + 1)}>&gt;</button>
        </>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === idx ? 'bg-green-900' : 'bg-gray-300'}`}></span>
        ))}
      </div>
    </div>
  );
} 