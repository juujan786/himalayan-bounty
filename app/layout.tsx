import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./providers";
import ErrorBoundary from "./components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Himalayan Bounty",
  description: "Premium Himalayan treasures and natural wellness products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#f8f8f3] scroll-smooth">
        <ErrorBoundary>
          <Providers>
            {/* Notification Bar */}
            <div className="w-full bg-green-600 text-white text-xs text-center py-1 px-2">
              🚚 Free shipping on orders over $50! No code needed. Shop premium dry fruits and nuts today.
            </div>
            {/* Sticky Header */}
            <Header />
            <main className="pt-28 pb-12 min-h-[80vh] max-w-7xl mx-auto w-full px-4">
              {children}
            </main>
            <footer className="bg-green-900 text-white py-10 px-4 mt-12">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold mb-2">HIMALAYAN BOUNTY</h3>
                  <p className="text-xs text-gray-200">Premium Himalayan treasures and natural wellness products sourced directly from the pristine mountain regions. Your journey to wellness starts here.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quick Links</h4>
                  <ul className="text-sm space-y-1">
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Customer Care</h4>
                  <ul className="text-sm space-y-1">
                    <li>FAQ</li>
                    <li>Shipping Info</li>
                    <li>Returns</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact Info</h4>
                  <ul className="text-sm space-y-1">
                    <li>info@shilajitdryfruits.com</li>
                    <li>+1 (555) 123-4567</li>
                    <li>123 Natural Way, Health City</li>
                    <li className="flex gap-2 mt-2">
                      <span>🌐</span>
                      <span>🐦</span>
                      <span>📸</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-xs text-gray-300 text-center mt-8">© 2024 Himalayan Bounty. All rights reserved. <span className="ml-4">Privacy Policy</span> <span className="ml-2">Terms of Service</span></div>
            </footer>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
