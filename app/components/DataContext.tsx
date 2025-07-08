"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Types
type Product = { id: string; name: string; price: string; oldPrice?: string; category: string; images: string[]; description: string; featured: boolean; weight?: string; active: boolean };
type Deal = { id: string; name: string; price: string; oldPrice?: string; discount?: string; category: string; images: string[]; description: string; featured: boolean; weight?: string; active: boolean };
type User = { id: string; name: string; email: string; role: string };
type Notification = { id: string; message: string };

type DataContextType = {
  products: Product[];
  deals: Deal[];
  users: User[];
  notifications: Notification[];
  createProduct: (p: Omit<Product, "id">) => void;
  updateProduct: (id: string, p: Partial<Product>) => void;
  deactivateProduct: (id: string) => void;
  createDeal: (d: Omit<Deal, "id">) => void;
  updateDeal: (id: string, d: Partial<Deal>) => void;
  deactivateDeal: (id: string) => void;
  createNotification: (n: Omit<Notification, "id">) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

const seedProducts: Product[] = [
  { id: "1", name: "Premium Shilajit Resin", price: "$12.99", oldPrice: "$15.99", category: "Shilajit", images: ["/file.svg"], description: "Pure Himalayan Shilajit resin with authentic minerals", featured: true, weight: "50g", active: true },
  { id: "2", name: "Raw Almonds", price: "$8.99", category: "Nuts", images: ["/window.svg"], description: "Premium quality raw almonds, rich in nutrients", featured: false, weight: "500g", active: true },
  { id: "3", name: "Premium Cashews", price: "$12.99", oldPrice: "$14.99", category: "Nuts", images: ["/globe.svg"], description: "Creamy and fresh cashews from the finest farms", featured: false, weight: "500g", active: true },
  { id: "4", name: "Mixed Dry Fruits", price: "$24.99", category: "Dry Fruits", images: ["/next.svg"], description: "A perfect blend of premium dry fruits and nuts", featured: false, weight: "1kg", active: true },
];
const seedDeals: Deal[] = [
  { id: "1", name: "Shilajit Bundle Pack", price: "$29.99", oldPrice: "$45.99", category: "Bundles", images: ["/file.svg"], description: "Bundle of pure Shilajit products", discount: "33% OFF", featured: true, weight: "150g", active: true },
  { id: "2", name: "Nuts & Dry Fruits Combo", price: "$39.99", oldPrice: "$59.99", category: "Combos", images: ["/globe.svg"], description: "Combo of nuts and dry fruits", discount: "33% OFF", featured: false, weight: "1kg", active: true },
  { id: "3", name: "Wellness Pack", price: "$79.99", oldPrice: "$119.99", category: "Wellness", images: ["/window.svg"], description: "Complete wellness pack", discount: "33% OFF", featured: false, weight: "2kg", active: true },
];
const seedUsers: User[] = [
  { id: "1", name: "Admin User", email: "admin@demo.com", role: "admin" },
  { id: "2", name: "John Doe", email: "john@example.com", role: "user" },
  { id: "3", name: "Jane Smith", email: "jane@example.com", role: "user" },
];
const seedNotifications: Notification[] = [
  { id: "1", message: "🚚 Free shipping on orders over $50! No code needed. Shop premium dry fruits and nuts today." },
];

function getOrSeed<T>(key: string, seed: T): T {
  if (typeof window === "undefined") return seed;
  const data = window.localStorage.getItem(key);
  if (data) return JSON.parse(data);
  window.localStorage.setItem(key, JSON.stringify(seed));
  return seed;
}

export default function DataProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [deals, setDeals] = useState<Deal[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setProducts(getOrSeed("products", seedProducts));
    setDeals(getOrSeed("deals", seedDeals));
    setUsers(getOrSeed("users", seedUsers));
    setNotifications(getOrSeed("notifications", seedNotifications));
  }, []);

  // CRUD for products
  const createProduct = (p: Omit<Product, "id">) => {
    const newProduct = { ...p, id: Date.now().toString(), active: true };
    const updated = [...products, newProduct];
    setProducts(updated);
    window.localStorage.setItem("products", JSON.stringify(updated));
  };
  const updateProduct = (id: string, p: Partial<Product>) => {
    const updated = products.map(prod => prod.id === id ? { ...prod, ...p } : prod);
    setProducts(updated);
    window.localStorage.setItem("products", JSON.stringify(updated));
  };
  const deactivateProduct = (id: string) => updateProduct(id, { active: false });

  // CRUD for deals
  const createDeal = (d: Omit<Deal, "id">) => {
    const newDeal = { ...d, id: Date.now().toString(), active: true };
    const updated = [...deals, newDeal];
    setDeals(updated);
    window.localStorage.setItem("deals", JSON.stringify(updated));
  };
  const updateDeal = (id: string, d: Partial<Deal>) => {
    const updated = deals.map(deal => deal.id === id ? { ...deal, ...d } : deal);
    setDeals(updated);
    window.localStorage.setItem("deals", JSON.stringify(updated));
  };
  const deactivateDeal = (id: string) => updateDeal(id, { active: false });

  // Notifications
  const createNotification = (n: Omit<Notification, "id">) => {
    const newNotification = { ...n, id: Date.now().toString() };
    const updated = [...notifications, newNotification];
    setNotifications(updated);
    window.localStorage.setItem("notifications", JSON.stringify(updated));
  };

  return (
    <DataContext.Provider value={{
      products, deals, users, notifications,
      createProduct, updateProduct, deactivateProduct,
      createDeal, updateDeal, deactivateDeal,
      createNotification,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used within a DataProvider");
  return ctx;
} 