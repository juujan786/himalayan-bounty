"use client";
import { useData } from '../components/DataContext';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function SpecialDealsCarousel() {
  const { deals } = useData();
  const featured = deals.filter(d => d.active && d.featured);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      '(min-width: 640px)': { slides: { perView: 2, spacing: 16 } },
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 24 } },
    },
    created(s) {
      setTimeout(() => s.moveToIdx(0), 0);
    },
    drag: true,
    renderMode: 'performance',
    mode: 'free-snap',
    autoplay: {
      delay: 2500,
      stopOnInteraction: false,
    },
  });
  if (featured.length === 0) return null;
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Special Deals</h2>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider w-full">
          {featured.map((d, i) => (
            <div key={d.id} className="keen-slider__slide bg-white rounded-xl shadow p-4 flex flex-col gap-2 relative">
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
            </div>
          ))}
        </div>
        {/* Arrows */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-3 py-2 shadow z-10"
          onClick={() => instanceRef.current?.prev()}
          aria-label="Previous"
          style={{ left: 0 }}
        >
          &#8592;
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-3 py-2 shadow z-10"
          onClick={() => instanceRef.current?.next()}
          aria-label="Next"
          style={{ right: 0 }}
        >
          &#8594;
        </button>
      </div>
    </section>
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