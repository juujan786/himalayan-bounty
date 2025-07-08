'use client';
import { useData } from '../components/DataContext';
import { useState } from 'react';
import { FaSeedling, FaLeaf, FaAppleAlt, FaSearch } from "react-icons/fa";

export default function ProductsPage() {
  const { products } = useData();
  const activeProducts = products.filter(p => p.active);
  return (
    <div className="flex flex-col gap-12">
      {/* Search and Heading */}
      <section className="flex flex-col gap-4 items-center py-8">
        <div className="relative w-full max-w-md">
          <input className="w-full px-4 py-2 border rounded focus:outline-none pr-10" placeholder="shilajit" />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <h1 className="text-4xl font-bold mt-4">Our Premium Products</h1>
        <p className="text-gray-700 max-w-2xl text-center">Discover our carefully curated selection of pure shilajit and premium dry fruits, sourced from the finest regions.</p>
      </section>
      {/* Filters */}
      <section className="flex flex-wrap gap-2 items-center justify-center mb-4">
        {[
          {label: 'All', icon: <FaSeedling />},
          {label: 'Shilajit', icon: <FaLeaf />},
          {label: 'Dry Fruits', icon: <FaAppleAlt />},
          {label: 'Nuts', icon: <FaSeedling />},
          {label: 'Seeds', icon: <FaSeedling />},
        ].map(f => (
          <button key={f.label} className="px-4 py-1 rounded-full border border-green-900 text-green-900 bg-white hover:bg-green-100 text-sm flex items-center gap-2">
            {f.icon} {f.label}
          </button>
        ))}
        <span className="ml-4 text-xs text-gray-500">{activeProducts.length} products found</span>
      </section>
      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {activeProducts.map((p, i) => (
          <div key={p.id} className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
            <div className="flex-1 flex items-center justify-center h-32 bg-gray-100 rounded mb-2">
              <ProductImageCarousel images={p.images} name={p.name} />
            </div>
            <div className="text-xs text-gray-500 mb-1">{p.category}</div>
            <div className="font-semibold mb-1">{p.name}</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-900 font-bold text-lg">{p.price}</span>
              {p.oldPrice && <span className="text-gray-400 line-through text-xs">{p.oldPrice}</span>}
              {p.weight && <span className="text-xs text-gray-500 ml-2">({p.weight})</span>}
            </div>
            <div className="text-xs text-gray-500 mb-2">{p.description}</div>
            {/* Add to Cart button here if needed */}
          </div>
        ))}
      </section>
    </div>
  );
}

function ProductImageCarousel({ images, name }: { images: string[]; name: string }) {
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