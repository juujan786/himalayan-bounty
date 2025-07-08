'use client';

const users = [
  { id: 1, name: 'Admin User', email: 'admin@gmail.com', joined: '2024-01-01', role: 'Admin' },
  { id: 2, name: 'John Smith', email: 'abc@gmail.com', joined: '2024-03-01', role: 'User' },
];

export default function AdminUsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <div className="flex flex-col gap-4">
        {users.map(u => (
          <div key={u.id} className="flex items-center gap-4 bg-[#f7f6f3] rounded-xl p-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-[#235c42]">
              {u.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="font-semibold">{u.name} <span className="ml-2 text-xs text-gray-500">{u.email}</span></div>
              <div className="text-xs text-gray-500">Joined: {u.joined}</div>
            </div>
            <div className="text-xs px-2 py-1 rounded bg-[#235c42] text-white font-semibold">{u.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 