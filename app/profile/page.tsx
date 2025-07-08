import { FaUser, FaBox, FaHeart, FaMapMarkerAlt, FaCreditCard, FaCog, FaSignOutAlt, FaShoppingBag, FaStar } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div className="flex gap-8">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 rounded-xl p-6 flex flex-col gap-4 h-fit">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <FaUser className="text-green-900 text-4xl" />
          </div>
          <div>
            <div className="font-bold">John Smith</div>
            <div className="text-xs text-gray-500">Member since March 2023</div>
            <div className="text-xs text-gray-500">john.smith@email.com</div>
            <div className="text-xs text-gray-500">+1 (555) 123-4567</div>
          </div>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <button className="text-green-900 font-semibold text-left flex items-center gap-2"><FaUser /> Profile Overview</button>
          <button className="text-gray-700 text-left flex items-center gap-2"><FaBox /> Order History</button>
          <button className="text-gray-700 text-left flex items-center gap-2"><FaHeart /> Wishlist</button>
          <button className="text-gray-700 text-left flex items-center gap-2"><FaMapMarkerAlt /> Addresses</button>
          <button className="text-gray-700 text-left flex items-center gap-2"><FaCreditCard /> Payment Methods</button>
          <button className="text-gray-700 text-left flex items-center gap-2"><FaCog /> Account Settings</button>
          <button className="text-red-500 text-left mt-2 flex items-center gap-2"><FaSignOutAlt /> Logout</button>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-8">
        {/* Personal Info */}
        <section className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><FaUser /> Personal Information</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="font-semibold">First Name</span><br/>John</div>
            <div><span className="font-semibold">Last Name</span><br/>Smith</div>
            <div><span className="font-semibold">Email</span><br/>john.smith@email.com</div>
            <div><span className="font-semibold">Phone</span><br/>+1 (555) 123-4567</div>
            <div><span className="font-semibold">Date of Birth</span><br/>January 15, 1990</div>
            <div><span className="font-semibold">Gender</span><br/>Male</div>
          </div>
        </section>
        {/* Recent Orders */}
        <section className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><FaShoppingBag /> Recent Orders</h2>
          <div className="flex flex-col gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded p-3">
                <div>
                  <div className="font-semibold">#ORD-00{i}</div>
                  <div className="text-xs text-gray-500">March {15 - (i-1)*7}, 2024 • {i+1} items</div>
                </div>
                <div className="font-bold text-green-900">${(25.97*i).toFixed(2)}</div>
                <div className="text-xs text-green-700">{['Delivered','Shipped','Processing'][i-1]}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Favorite Products */}
        <section className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><FaStar /> Favorite Products</h2>
          <div className="flex gap-4">
            {[1,2,3].map(i => (
              <div key={i} className="w-32 h-32 bg-gray-100 rounded flex flex-col items-center justify-center">
                <div className="w-8 h-8 bg-green-900 rounded mb-2" />
                <div className="text-xs font-semibold">Product {i}</div>
                <div className="text-xs text-gray-500">$8.99</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 