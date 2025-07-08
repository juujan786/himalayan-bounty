'use client';

import { useAuth } from "../components/AuthContext";
import Link from "next/link";
import { FaTachometerAlt, FaBox, FaTags, FaShoppingCart, FaUsers, FaBell, FaTimes, FaCheckCircle } from "react-icons/fa";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-white rounded-xl shadow p-8 max-w-md w-full flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold mb-2">Not Signed In</h1>
          <p className="text-gray-700 mb-4">Please sign in to view your profile.</p>
          <Link href="/signin" className="bg-[#235c42] text-white px-4 py-2 rounded hover:bg-[#1d4d36]">Sign In</Link>
        </div>
      </div>
    );
  }

  // Render the admin dashboard layout for all signed-in users (as per request)
  return (
    <div className="flex gap-8">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 rounded-xl p-6 flex flex-col gap-2 h-fit">
        <nav className="flex flex-col gap-2 text-sm">
          <button className="text-green-900 font-semibold text-left flex items-center gap-2"><FaTachometerAlt /> Dashboard</button>
          <button className="text-gray-700 text-left flex items-center gap-2"><FaBox /> Products</button>
          <button className="text-gray-700 text-left flex items-center gap-2"><FaTags /> Deals</button>
          <button className="text-gray-700 text-left flex items-center gap-2"><FaShoppingCart /> Orders</button>
          <button className="text-gray-700 text-left flex items-center gap-2"><FaUsers /> Users</button>
          <button className="text-gray-700 text-left flex items-center gap-2"><FaBell /> Notifications</button>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-8">
        <section className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><FaBell /> Notification Bar</h2>
          <div className="bg-gray-100 rounded p-4 mb-4">
            <div className="font-semibold mb-2">Create New Notification</div>
            <input className="w-full px-4 py-2 border rounded mb-2" placeholder="Enter notification message..." />
            <div className="flex gap-2 mb-2">
              <input className="px-2 py-1 border rounded w-32" placeholder="#ef4444" />
              <input className="px-2 py-1 border rounded w-32" placeholder="#ffffff" />
            </div>
            <div className="bg-red-400 text-white text-center py-2 rounded mb-2">Your notification message will appear here...</div>
            <button className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800 transition flex items-center gap-2"><FaCheckCircle /> Add Notification</button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-red-500 text-white rounded p-2 flex items-center justify-between">
              <span>Special Spring Sale! Get 25% off on all Shilajit products. Use code SPRING25. Limited time offer!</span>
              <button className="ml-2"><FaTimes /></button>
            </div>
            <div className="bg-green-600 text-white rounded p-2 flex items-center justify-between">
              <span>Free shipping on orders over $50! No code needed. Shop premium dry fruits and nuts today.</span>
              <button className="ml-2"><FaTimes /></button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 