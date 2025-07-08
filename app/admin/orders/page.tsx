'use client';

const orders = [
  { id: 'ORD-001', date: '2024-03-15', items: 1, product: 'Premium Shilajit Resin', price: 25.98, status: 'Delivered', img: '/file.svg' },
  { id: 'ORD-002', date: '2024-03-18', items: 1, product: 'Shilajit Bundle Pack', price: 29.99, status: 'Shipped', img: '/globe.svg' },
];

export default function AdminOrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <div className="flex flex-col gap-4">
        {orders.map(o => (
          <div key={o.id} className="flex items-center gap-4 bg-[#f7f6f3] rounded-xl p-4">
            <img src={o.img} alt={o.product} className="w-16 h-16 rounded object-cover bg-white" />
            <div className="flex-1">
              <div className="font-semibold">{o.id}</div>
              <div className="text-xs text-gray-500">{o.date} • {o.items} items</div>
              <div className="text-xs text-gray-500">{o.product}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-bold">${o.price.toFixed(2)}</div>
              <span className={`text-xs font-semibold ${o.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'}`}>{o.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 