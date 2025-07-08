'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTachometerAlt, FaBox, FaTags, FaShoppingCart, FaUsers, FaBell } from "react-icons/fa";

const links = [
  { href: "/admin", label: "Dashboard", icon: <FaTachometerAlt /> },
  { href: "/admin/products", label: "Products", icon: <FaBox /> },
  { href: "/admin/deals", label: "Deals", icon: <FaTags /> },
  { href: "/admin/orders", label: "Orders", icon: <FaShoppingCart /> },
  { href: "/admin/users", label: "Users", icon: <FaUsers /> },
  { href: "/admin/notifications", label: "Notifications", icon: <FaBell /> },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex gap-8">
      {/* Sidebar */}
      <aside className="w-64 bg-[#f7f6f3] border-r border-gray-200 min-h-[80vh] pt-8">
        <nav className="flex flex-col gap-2 text-sm">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded font-semibold ${pathname === link.href ? 'bg-[#235c42] text-white' : 'hover:bg-[#f1f0ec] text-gray-800'}`}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 flex flex-col gap-8 pt-8">{children}</main>
    </div>
  );
} 