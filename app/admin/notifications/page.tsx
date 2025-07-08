'use client';

import { FaPlus, FaTrash, FaBell } from "react-icons/fa";

const notifications = [
  { id: 1, message: "Special Spring Sale! Get 25% off on all Shilajit products. Use code SPRING25. Limited time offer!", color: "#ef4444", text: "#fff", created: "2024-03-20" },
  { id: 2, message: "Free shipping on orders over $50! No code needed. Shop premium dry fruits and nuts today.", color: "#22c55e", text: "#fff", created: "2024-03-18" },
];

export default function AdminNotificationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2"><FaBell /> Notification Bar</h1>
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <div className="font-semibold mb-2">Create New Notification</div>
        <input className="w-full px-4 py-2 border rounded mb-2" placeholder="Enter notification message..." />
        <div className="flex gap-2 mb-2">
          <input className="px-2 py-1 border rounded w-32" placeholder="#ef4444" />
          <input className="px-2 py-1 border rounded w-32" placeholder="#ffffff" />
        </div>
        <div className="bg-red-400 text-white text-center py-2 rounded mb-2">Your notification message will appear here...</div>
        <button className="bg-[#235c42] text-white px-4 py-2 rounded hover:bg-[#1d4d36] flex items-center gap-2"><FaPlus /> Add Notification</button>
      </div>
      <div className="flex flex-col gap-4">
        {notifications.map(n => (
          <div key={n.id} className="flex items-center justify-between rounded p-4" style={{ background: n.color, color: n.text }}>
            <span>{n.message}</span>
            <button className="ml-2"><FaTrash /></button>
          </div>
        ))}
      </div>
    </div>
  );
} 