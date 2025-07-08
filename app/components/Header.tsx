'use client';

import { FaSearch, FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "./AuthContext";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user, signOut } = useAuth();
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const cartCount = useSelector((state: RootState) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const router = useRouter();
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (profileRef.current && !(profileRef.current as HTMLDivElement).contains(e.target as Node)) setDropdown(false);
    }
    if (dropdown) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdown]);

  const handleProfileClick = () => {
    try {
      console.log('Profile clicked', user);
      setDropdown(false);
      router.push('/profile');
    } catch (err) {
      console.error('Error navigating to profile:', err);
    }
  };
  const handleDashboardClick = () => {
    try {
      console.log('Dashboard clicked', user);
      setDropdown(false);
      router.push('/admin');
    } catch (err) {
      console.error('Error navigating to dashboard:', err);
    }
  };
  const handleSignOut = () => {
    try {
      console.log('Sign out clicked', user);
      signOut();
      setDropdown(false);
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm flex items-center justify-between px-4 md:px-6 py-3">
      <div className="flex items-center gap-2 font-bold text-lg">
        <span className="text-green-900">🍃</span>
        HIMALAYAN BOUNTY
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-green-900">Home</Link>
        <Link href="/products" className="hover:text-green-900">Products</Link>
        <Link href="/deals" className="hover:text-green-900">Deals</Link>
        <Link href="/about" className="hover:text-green-900">About</Link>
        <Link href="/blog" className="hover:text-green-900">Blog</Link>
      </nav>
      {/* Mobile Hamburger */}
      <button className="md:hidden text-2xl text-[#235c42] ml-2" onClick={() => setMobileMenu(true)} aria-label="Open menu">
        <FaBars />
      </button>
      {/* Right Icons */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="text-gray-500 hover:text-green-900">
          <FaSearch />
        </button>
        <Link href="/cart" className="relative text-gray-500 hover:text-green-900">
          <FaShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center font-bold">
              {cartCount}
            </span>
          )}
        </Link>
        {user ? (
          <div className="relative" ref={profileRef}>
            <button onClick={() => setDropdown(v => !v)} className="text-[#235c42] text-2xl focus:outline-none">
              <FaUserCircle />
            </button>
            {dropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 z-50 border">
                <button onClick={handleProfileClick} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button>
                {user && user.role === 'admin' && (
                  <button onClick={handleDashboardClick} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Dashboard</button>
                )}
                <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/signin" className="bg-[#235c42] text-white px-4 py-1 rounded hover:bg-[#1d4d36] text-sm">Sign In</Link>
        )}
      </div>
      {/* Mobile Nav Drawer */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-black/40 flex md:hidden">
          <div className="bg-white w-64 h-full shadow-lg flex flex-col p-6 gap-6 animate-slideInLeft">
            <button className="self-end text-2xl mb-4 text-[#235c42]" onClick={() => setMobileMenu(false)} aria-label="Close menu">
              <FaTimes />
            </button>
            <Link href="/" className="hover:text-green-900" onClick={() => setMobileMenu(false)}>Home</Link>
            <Link href="/products" className="hover:text-green-900" onClick={() => setMobileMenu(false)}>Products</Link>
            <Link href="/deals" className="hover:text-green-900" onClick={() => setMobileMenu(false)}>Deals</Link>
            <Link href="/about" className="hover:text-green-900" onClick={() => setMobileMenu(false)}>About</Link>
            <Link href="/blog" className="hover:text-green-900" onClick={() => setMobileMenu(false)}>Blog</Link>
          </div>
          <div className="flex-1" onClick={() => setMobileMenu(false)} />
        </div>
      )}
    </header>
  );
} 