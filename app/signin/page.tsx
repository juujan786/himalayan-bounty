'use client';

import { FaUser, FaEnvelope, FaLock, FaGoogle, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../components/AuthContext";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const ok = signIn(email, password);
    if (ok) {
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12">
      <div className="bg-gray-50 rounded-xl shadow p-8 w-full max-w-md flex flex-col items-center gap-4">
        <div className="text-4xl mb-2"><FaUser className="text-green-900" /></div>
        <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-700 text-sm mb-4">Sign in to your account to continue</p>
        <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className="w-full px-4 py-2 border rounded focus:outline-none pr-10"
              placeholder="Enter your email (abc@gmail.com)"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              required
            />
            <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              className="w-full px-4 py-2 border rounded focus:outline-none pr-10"
              placeholder="Enter your password (12345678)"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              required
            />
            <FaLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
          <div className="flex items-center justify-between w-full text-xs text-gray-500 mb-2">
            <label className="flex items-center gap-1"><input type="checkbox" /> Remember me</label>
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="bg-green-900 text-white px-4 py-2 rounded w-full hover:bg-green-800 transition flex items-center gap-2"><FaUser /> Sign In</button>
        </form>
        <div className="flex items-center w-full my-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="mx-2 text-xs text-gray-400">or continue with</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <div className="flex gap-4 w-full">
          <button className="flex-1 bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 flex items-center gap-2"><FaGoogle /> Google</button>
          <button className="flex-1 bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 flex items-center gap-2"><FaTwitter /> Twitter</button>
        </div>
        <div className="text-xs text-gray-500 mt-4">Don't have an account? <a href="/signup" className="text-green-900 hover:underline">Sign up</a></div>
      </div>
    </div>
  );
} 