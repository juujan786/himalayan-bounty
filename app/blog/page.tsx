import Image from "next/image";
import { FaBook, FaLeaf, FaAppleAlt, FaFlask, FaLightbulb, FaSeedling } from "react-icons/fa";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Heading */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2">Health & Wellness Blog</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">Expert insights, research-backed articles, and tips for natural health and wellness.</p>
      </section>
      {/* Filters */}
      <section className="flex flex-wrap gap-2 items-center justify-center mb-4">
        {[
          {label: 'All', icon: <FaBook />},
          {label: 'Health & Wellness', icon: <FaLeaf />},
          {label: 'Nutrition', icon: <FaAppleAlt />},
          {label: 'Research', icon: <FaFlask />},
          {label: 'Sustainability', icon: <FaSeedling />},
          {label: 'Tips & Tricks', icon: <FaLightbulb />},
          {label: 'Traditional Medicine', icon: <FaLeaf />},
        ].map(f => (
          <button key={f.label} className="px-4 py-1 rounded-full border border-green-900 text-green-900 bg-white hover:bg-green-100 text-sm flex items-center gap-2">
            {f.icon} {f.label}
          </button>
        ))}
      </section>
      {/* Featured Article */}
      <section className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
        <div className="bg-gray-100 rounded-xl flex-1 min-h-[180px] flex items-center justify-center">
          <Image src="/file.svg" alt="Featured Article" width={120} height={120} />
        </div>
        <div className="flex-1 flex flex-col gap-2 items-start">
          <span className="bg-green-100 text-green-900 px-2 py-1 rounded text-xs mb-2 flex items-center gap-1"><FaLeaf /> Health & Wellness</span>
          <h2 className="font-bold text-xl mb-1">The Complete Guide to Himalayan Shilajit: Benefits and Usage</h2>
          <p className="text-gray-700 text-sm mb-2">Discover the ancient secrets of Himalayan Shilajit, its incredible health benefits, and how to incorporate it into your daily wellness routine for optimal results.</p>
          <button className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800 transition">Read Article</button>
        </div>
      </section>
      {/* Latest Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {img: "/file.svg", type: "Nutrition", title: "Top 10 Health Benefits of Raw Almonds"},
            {img: "/globe.svg", type: "Sustainability", title: "Sustainable Sourcing: Our Journey to the Himalayas"},
            {img: "/window.svg", type: "Research", title: "The Science Behind Shilajit's Anti-Aging Properties"},
            {img: "/next.svg", type: "Nutrition", title: "Cashews vs Almonds: Which Nut is Right for You?"},
            {img: "/globe.svg", type: "Tips & Tricks", title: "How to Store Dry Fruits for Maximum Freshness"},
            {img: "/file.svg", type: "Traditional Medicine", title: "The Traditional Uses of Shilajit in Ayurveda"},
          ].map((a, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
              <div className="flex-1 flex items-center justify-center h-32 bg-gray-100 rounded mb-2">
                <Image src={a.img} alt={a.title} width={80} height={80} />
              </div>
              <div className="text-xs text-gray-500 mb-1">{a.type}</div>
              <div className="font-semibold mb-1">{a.title}</div>
              <div className="text-gray-700 text-sm mb-2">Short description of the article goes here.</div>
              <button className="text-green-900 font-medium hover:underline w-fit">Read More →</button>
            </div>
          ))}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="text-center py-8">
        <h2 className="text-xl font-bold mb-2">Stay Updated</h2>
        <p className="mb-4">Subscribe to our newsletter for the latest health tips, product updates, and exclusive content.</p>
        <div className="flex justify-center gap-2">
          <input className="px-4 py-2 rounded border focus:outline-none" placeholder="Enter your email" />
          <button className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800 transition">Subscribe</button>
        </div>
      </section>
    </div>
  );
} 