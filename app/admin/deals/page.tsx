'use client';
import { useState } from 'react';
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { useData } from '../../components/DataContext';

const categories = ['Bundles', 'Combos', 'Wellness', 'Seasonal', 'Other'];

export default function AdminDealsPage() {
  const { deals, createDeal, deactivateDeal, updateDeal } = useData();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', category: '', price: '', oldPrice: '', discount: '', description: '', images: [] as string[], featured: false, weight: '', weightUnit: 'g' });
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ name: '', category: '', price: '', oldPrice: '', discount: '', description: '', images: [] as string[], featured: false, weight: '', weightUnit: 'g' });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImageFiles(files);
      Promise.all(files.map(file => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })).then(imgs => setForm(f => ({ ...f, images: imgs })));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.price) return;
    createDeal({ ...form, weight: form.weight ? form.weight + form.weightUnit : '', active: true });
    setForm({ name: '', category: '', price: '', oldPrice: '', discount: '', description: '', images: [], featured: false, weight: '', weightUnit: 'g' });
    setImageFiles([]);
    setShowModal(false);
  };

  const openEditModal = (d: any) => {
    setEditId(d.id);
    setEditForm({
      name: d.name,
      category: d.category,
      price: d.price,
      oldPrice: d.oldPrice || '',
      discount: d.discount || '',
      description: d.description,
      images: d.images || [],
      featured: d.featured || false,
      weight: d.weight || '',
      weightUnit: d.weightUnit || 'g',
    });
    setShowModal(false);
  };
  const handleEditImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      Promise.all(files.map(file => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })).then(imgs => setEditForm(f => ({ ...f, images: imgs })));
    }
  };
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editId) return;
    updateDeal(editId, { ...editForm, weight: editForm.weight ? editForm.weight + editForm.weightUnit : '' });
    setEditId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Deals</h1>
        <button className="flex items-center gap-2 bg-[#235c42] text-white px-4 py-2 rounded hover:bg-[#1d4d36]" onClick={() => setShowModal(true)}>
          <FaPlus /> Create Deal
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {deals.filter(d => d.active).map(d => (
          <div key={d.id} className="flex items-center gap-4 bg-[#f7f6f3] rounded-xl p-4">
            <div className="flex gap-2">
              {d.images && d.images.map((img, idx) => (
                <img key={idx} src={img} alt={d.name} className="w-12 h-12 rounded object-cover bg-white" />
              ))}
            </div>
            <div className="flex-1">
              <div className="font-semibold">{d.name} <span className="text-xs text-gray-500 ml-2">{d.category}  ${d.price} {d.weight && <span className="ml-2">({d.weight})</span>} <span className="ml-2 text-red-500 font-bold">{d.discount}</span></span></div>
              <div className="text-xs text-gray-500">{d.description}</div>
              {d.featured && <span className="inline-block bg-yellow-300 text-yellow-900 text-xs px-2 py-0.5 rounded ml-2">Featured</span>}
            </div>
            <div className="flex gap-3 text-gray-500">
              <button title="Edit" onClick={() => openEditModal(d)} className="text-blue-500"><FaEdit /></button>
              <button title="Deactivate" className="text-red-500" onClick={() => deactivateDeal(d.id)}><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-xl font-bold mb-4">Create Deal</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input className="border rounded px-3 py-2" placeholder="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
              <select className="border rounded px-3 py-2" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} required>
                <option value="">Select Category</option>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <input className="border rounded px-3 py-2" placeholder="Price" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} required />
              <input className="border rounded px-3 py-2" placeholder="Old Price" value={form.oldPrice} onChange={e => setForm(f => ({ ...f, oldPrice: e.target.value }))} />
              <input className="border rounded px-3 py-2" placeholder="Discount" value={form.discount} onChange={e => setForm(f => ({ ...f, discount: e.target.value }))} />
              <input className="border rounded px-3 py-2" placeholder="Weight" value={form.weight} onChange={e => setForm(f => ({ ...f, weight: e.target.value }))} />
              <select className="border rounded px-2 py-2 ml-2" value={form.weightUnit} onChange={e => setForm(f => ({ ...f, weightUnit: e.target.value }))}>
                <option value="g">g</option>
                <option value="kg">kg</option>
              </select>
              <textarea className="border rounded px-3 py-2" placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} required />
              <input type="file" accept="image/*" multiple className="border rounded px-3 py-2" onChange={handleImageChange} />
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={form.featured} onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))} />
                Featured
              </label>
              <button type="submit" className="bg-[#235c42] text-white px-4 py-2 rounded hover:bg-[#1d4d36] mt-2">Create Deal</button>
            </form>
          </div>
        </div>
      )}
      {editId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setEditId(null)}>&times;</button>
            <h2 className="text-xl font-bold mb-4">Edit Deal</h2>
            <form onSubmit={handleEditSubmit} className="flex flex-col gap-3">
              <input className="border rounded px-3 py-2" placeholder="Name" value={editForm.name} onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))} required />
              <select className="border rounded px-3 py-2" value={editForm.category} onChange={e => setEditForm(f => ({ ...f, category: e.target.value }))} required>
                <option value="">Select Category</option>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <input className="border rounded px-3 py-2" placeholder="Price" value={editForm.price} onChange={e => setEditForm(f => ({ ...f, price: e.target.value }))} required />
              <input className="border rounded px-3 py-2" placeholder="Old Price" value={editForm.oldPrice} onChange={e => setEditForm(f => ({ ...f, oldPrice: e.target.value }))} />
              <input className="border rounded px-3 py-2" placeholder="Discount" value={editForm.discount} onChange={e => setEditForm(f => ({ ...f, discount: e.target.value }))} />
              <input className="border rounded px-3 py-2" placeholder="Weight" value={editForm.weight} onChange={e => setEditForm(f => ({ ...f, weight: e.target.value }))} />
              <select className="border rounded px-2 py-2 ml-2" value={editForm.weightUnit} onChange={e => setEditForm(f => ({ ...f, weightUnit: e.target.value }))}>
                <option value="g">g</option>
                <option value="kg">kg</option>
              </select>
              <textarea className="border rounded px-3 py-2" placeholder="Description" value={editForm.description} onChange={e => setEditForm(f => ({ ...f, description: e.target.value }))} required />
              <input type="file" accept="image/*" multiple className="border rounded px-3 py-2" onChange={handleEditImageChange} />
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={editForm.featured} onChange={e => setEditForm(f => ({ ...f, featured: e.target.checked }))} />
                Featured
              </label>
              <button type="submit" className="bg-[#235c42] text-white px-4 py-2 rounded hover:bg-[#1d4d36] mt-2">Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 