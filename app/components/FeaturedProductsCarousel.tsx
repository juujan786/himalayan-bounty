"use client";
import { useData } from '../components/DataContext';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

function autoplayPlugin(slider) {
  let timeout;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      slider.next();
    }, 2500);
  }
  slider.on('created', () => {
    nextTimeout();
  });
  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
}

export default function FeaturedProductsCarousel() {
  const { products } = useData();
  const featured = products.filter(p => p.active && p.featured);
  const dispatch = useDispatch();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      '(min-width: 640px)': { slides: { perView: 2, spacing: 16 } },
      '(min-width: 1024px)': { slides: { perView: 4, spacing: 24 } },
    },
    created(s) {
      setTimeout(() => s.moveToIdx(0), 0);
    },
    drag: true,
    renderMode: 'performance',
    mode: 'free-snap',
  }, [autoplayPlugin]);
  if (featured.length === 0) return null;
  return (
    <section className="mb-8" style={{ background: '#f1f0ec', borderRadius: '1rem', padding: '2rem 0' }}>
      <h2 className="text-2xl font-bold mb-4 px-4">Featured Products</h2>
      <div className="relative px-4">
        <div ref={sliderRef} className="keen-slider w-full">
          {featured.map((p, i) => (
            <div key={p.id} className="keen-slider__slide bg-white rounded-xl shadow p-4 flex flex-col gap-2 cursor-pointer hover:shadow-lg transition group">
              <Link href={`/products/${p.id}`} className="flex-1 flex flex-col items-center justify-center w-full">
                <div className="flex-1 flex items-center justify-center h-32 bg-gray-100 rounded mb-2 w-full">
                  <ProductImageCarousel images={p.images} name={p.name} />
                </div>
                <div className="text-xs text-gray-500 mb-1">{p.category}</div>
                <div className="font-semibold mb-1">{p.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-900 font-bold text-lg">{p.price}</span>
                  {p.oldPrice && <span className="text-gray-400 line-through text-xs">{p.oldPrice}</span>}
                  {p.weight && <span className="text-xs text-gray-500 ml-2">({p.weight})</span>}
                </div>
              </Link>
              <button
                className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800 transition mt-2 w-full"
                onClick={() => {
                  let img = p.images[0] || '';
                  if (img.startsWith('data:')) img = '/default-thumbnail.png';
                  dispatch(addToCart({ id: p.id, name: p.name, price: parseFloat(p.price.replace(/[^\d.]/g, "")), image: img, quantity: 1 }));
                }}
              >
                Add to Cart
              </button>
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