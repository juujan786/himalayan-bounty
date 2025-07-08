'use client';

import Image from "next/image";
import { FaShoppingCart, FaTrash, FaBox, FaCheck, FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeFromCart, updateQuantity, clearCart } from "../cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal > 0 ? 1.76 : 0;
  const total = subtotal + tax;

  return (
    <div className="flex flex-col gap-12">
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2"><FaShoppingCart /> Shopping Cart</h1>
        <p className="text-gray-700 mb-6">{cartItems.length} items in your cart</p>
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4"><FaShoppingCart /></div>
            <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
            <p className="text-gray-700 mb-4">Looks like you haven't added any items to your cart yet. Start shopping to fill it up!</p>
            <div className="flex gap-4 justify-center">
              <a href="/products" className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800 transition flex items-center gap-2"><FaBox /> Shop Products</a>
              <a href="/deals" className="bg-white border border-green-900 text-green-900 px-4 py-2 rounded hover:bg-green-100 transition flex items-center gap-2"><FaArrowLeft /> Browse Deals</a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-4">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white rounded-xl shadow p-4">
                  <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                    <Image src={item.image} alt={item.name} width={60} height={60} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-xs text-gray-500">Product</div>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))} className="px-2 py-1 bg-gray-200 rounded">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} className="px-2 py-1 bg-gray-200 rounded">+</button>
                    </div>
                  </div>
                  <div className="font-bold text-green-900">${item.price.toFixed(2)}</div>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500 hover:text-red-700 ml-2"><FaTrash /></button>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/3 bg-gray-50 rounded-xl p-6 flex flex-col gap-4 h-fit">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><FaBox /> Order Summary</h3>
              <div className="flex justify-between text-sm"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm"><span>Shipping</span><span>Free</span></div>
              <div className="flex justify-between text-sm"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
              <div className="flex justify-between font-bold text-lg border-t pt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
              <button className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800 transition mt-4 flex items-center gap-2"><FaCheck /> Proceed to Checkout</button>
              <a href="/products" className="bg-white border border-green-900 text-green-900 px-4 py-2 rounded hover:bg-green-100 transition flex items-center gap-2"><FaArrowLeft /> Continue Shopping</a>
              <button onClick={() => dispatch(clearCart())} className="text-red-500 hover:text-red-700 mt-2 flex items-center gap-2"><FaTrash /> Clear Cart</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
} 