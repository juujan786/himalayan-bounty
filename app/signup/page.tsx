import { FaUser, FaEnvelope, FaLock, FaGoogle, FaTwitter, FaPhone } from "react-icons/fa";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12">
      <div className="bg-gray-50 rounded-xl shadow p-8 w-full max-w-md flex flex-col items-center gap-4">
        <div className="text-4xl mb-2"><FaUser className="text-green-900" /></div>
        <h1 className="text-2xl font-bold mb-2">Create Account</h1>
        <p className="text-gray-700 text-sm mb-4">Join us for premium natural products</p>
        <div className="flex gap-2 w-full">
          <div className="relative flex-1">
            <input className="w-full px-4 py-2 border rounded focus:outline-none pr-10" placeholder="First Name" />
            <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative flex-1">
            <input className="w-full px-4 py-2 border rounded focus:outline-none pr-10" placeholder="Last Name" />
            <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="relative w-full">
          <input className="w-full px-4 py-2 border rounded focus:outline-none pr-10" placeholder="john@example.com" />
          <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <div className="relative w-full">
          <input className="w-full px-4 py-2 border rounded focus:outline-none pr-10" placeholder="+1 (555) 123-4567" />
          <FaPhone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <div className="relative w-full">
          <input className="w-full px-4 py-2 border rounded focus:outline-none pr-10" placeholder="Create a strong password" type="password" />
          <FaLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <div className="relative w-full">
          <input className="w-full px-4 py-2 border rounded focus:outline-none pr-10" placeholder="Confirm your password" type="password" />
          <FaLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex flex-col gap-1 w-full text-xs text-gray-500 mb-2">
          <label className="flex items-center gap-1"><input type="checkbox" /> I agree to the Terms of Service and Privacy Policy</label>
          <label className="flex items-center gap-1"><input type="checkbox" /> Subscribe to our newsletter for health tips and product updates</label>
        </div>
        <button className="bg-green-900 text-white px-4 py-2 rounded w-full hover:bg-green-800 transition flex items-center gap-2"><FaUser /> Create Account</button>
        <div className="flex items-center w-full my-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="mx-2 text-xs text-gray-400">or sign up with</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <div className="flex gap-4 w-full">
          <button className="flex-1 bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 flex items-center gap-2"><FaGoogle /> Google</button>
          <button className="flex-1 bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 flex items-center gap-2"><FaTwitter /> Twitter</button>
        </div>
        <div className="text-xs text-gray-500 mt-4">Already have an account? <a href="/signin" className="text-green-900 hover:underline">Sign in</a></div>
      </div>
    </div>
  );
} 