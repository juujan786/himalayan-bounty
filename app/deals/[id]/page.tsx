'use client';
import { useParams } from 'next/navigation';
import { useData } from '../../components/DataContext';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../cartSlice';

export default function DealDetailsPage() {
  const { id } = useParams();
  const { deals } = useData();
  const deal = deals.find(d => d.id === id);
  const dispatch = useDispatch();
  const [idx, setIdx] = useState(0);
  if (!deal) return <div className="p-8 text-center">Deal not found.</div>;
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-full max-w-xs h-64 flex items-center justify-center">
            <img src={deal.images[idx]} alt={deal.name} className="object-contain h-64 w-full rounded" />
            {deal.images.length > 1 && (
              <>
                <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-2" onClick={() => setIdx(idx === 0 ? deal.images.length - 1 : idx - 1)}>&lt;</button>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-2" onClick={() => setIdx(idx === deal.images.length - 1 ? 0 : idx + 1)}>&gt;</button>
              </>
            )}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {deal.images.map((_, i) => (
                <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === idx ? 'bg-green-900' : 'bg-gray-300'}`}></span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-2">{deal.name}</h1>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-green-900 font-bold text-2xl">{deal.price}</span>
            {deal.oldPrice && <span className="text-gray-400 line-through text-lg">{deal.oldPrice}</span>}
            {deal.weight && <span className="text-sm text-gray-500 ml-2">({deal.weight})</span>}
          </div>
          <div className="text-gray-700 mb-4">{deal.description}</div>
          <button onClick={() => dispatch(addToCart({ id: deal.id, name: deal.name, price: parseFloat(deal.price.replace(/[^\d.]/g, "")), image: deal.images[0] || '', quantity: 1 }))} className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition w-fit">Add to Cart</button>
        </div>
      </div>
    </div>
  );
} 