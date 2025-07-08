'use client';

import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

type DealCardProps = {
  image?: string | React.ReactNode;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  children?: React.ReactNode;
};

export default function DealCard({ image, title, price, oldPrice, discount, children }: DealCardProps) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: title,
      name: title,
      price: parseFloat(price.replace(/[^\d.]/g, "")),
      image: typeof image === "string" ? image : "",
      quantity: 1,
    }));
  };
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 w-64 min-h-[320px] relative">
      {discount && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{discount}</span>}
      <div className="flex-1 flex items-center justify-center h-32 bg-gray-100 rounded mb-2">
        {typeof image === "string" ? (
          <Image src={image} alt={title} width={100} height={100} />
        ) : image || "Image"}
      </div>
      <div className="font-semibold mb-1">{title}</div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-900 font-bold text-lg">{price}</span>
        {oldPrice && <span className="text-gray-400 line-through text-xs">{oldPrice}</span>}
      </div>
      {children}
      <button onClick={handleAddToCart} className="bg-green-900 text-white px-4 py-2 rounded mt-2 hover:bg-green-800 transition flex items-center gap-2">
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
} 