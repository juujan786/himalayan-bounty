import { FaDollarSign, FaClipboardList, FaCube, FaUserFriends } from "react-icons/fa";

export default function AdminPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-4">Welcome back! Here's what's happening with your store.</p>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100">
          <div className="flex items-center gap-2 text-green-900 font-bold text-lg"><FaDollarSign /> Total Revenue</div>
          <div className="text-2xl font-bold">$12,345 <span className="text-green-600 text-base font-semibold align-top">+12%</span></div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-lg"><FaClipboardList /> Total Orders</div>
          <div className="text-2xl font-bold">156 <span className="text-green-600 text-base font-semibold align-top">+8%</span></div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100">
          <div className="flex items-center gap-2 text-purple-900 font-bold text-lg"><FaCube /> Active Products</div>
          <div className="text-2xl font-bold">4 <span className="text-green-600 text-base font-semibold align-top">+3%</span></div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100">
          <div className="flex items-center gap-2 text-orange-900 font-bold text-lg"><FaUserFriends /> Total Users</div>
          <div className="text-2xl font-bold">2 <span className="text-green-600 text-base font-semibold align-top">+15%</span></div>
        </div>
      </div>
      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <h2 className="text-lg font-bold mb-4">Recent Orders</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between bg-[#f7f6f3] rounded p-4">
            <div>
              <div className="font-semibold">ORD-001</div>
              <div className="text-xs text-gray-500">2024-03-15 • 1 items</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-bold">$25.98</div>
              <span className="text-green-600 text-xs font-semibold">delivered</span>
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#f7f6f3] rounded p-4">
            <div>
              <div className="font-semibold">ORD-002</div>
              <div className="text-xs text-gray-500">2024-03-18 • 1 items</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-bold">$29.99</div>
              <span className="text-blue-600 text-xs font-semibold">shipped</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 