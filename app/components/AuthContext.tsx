'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type User = { email: string; password: string; role: 'user' | 'admin' };
const demoUsers: User[] = [
  { email: 'user@gmail.com', password: '12345678', role: 'user' },
  { email: 'admin@gmail.com', password: '12345678', role: 'admin' },
];

type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => boolean;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('hb_user') : null;
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const signIn = (email: string, password: string) => {
    const found = demoUsers.find(u => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      if (typeof window !== 'undefined') window.localStorage.setItem('hb_user', JSON.stringify(found));
      return true;
    }
    return false;
  };

  const signOut = () => {
    setUser(null);
    if (typeof window !== 'undefined') window.localStorage.removeItem('hb_user');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
} 