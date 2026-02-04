import React, { useState } from 'react';
import { 
  BarChart3, 
  Package, 
  PlusCircle, 
  ShoppingBag, 
  Settings, 
  TrendingUp, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight,
  ChevronRight,
  MoreVertical,
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const STATS = [
  { label: 'Ventes', value: '125000 FCFA', change: '+12%', trend: 'up' },
  { label: 'Commandes', value: '24', change: '+5%', trend: 'up' },
  { label: 'Vues', value: '1,029', change: '-2%', trend: 'down' },
];

const RECENT_ORDERS = [
  { id: '#4901', name: 'Sneakers Air Max', price: '25000 FCFA', status: 'En cours', color: 'text-amber-600 bg-amber-50' },
  { id: '#4899', name: 'Fauteuil Scan', price: '85000 FCFA', status: 'Livré', color: 'text-emerald-600 bg-emerald-50' },
  { id: '#4895', name: 'iPhone 15 Pro', price: '350000 FCFA', status: 'Livré', color: 'text-emerald-600 bg-emerald-50' },
];

export function SellerApp() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="h-full bg-neutral-50 flex flex-col">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 bg-white border-b border-neutral-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-neutral-200">
              <ImageWithFallback src="https://images.unsplash.com/photo-1655249481446-25d575f1c054?auto=format&fit=crop&q=80&w=100" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Ma Boutique</h1>
              <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Mode boutique actif</p>
            </div>
          </div>
          <button className="p-2.5 bg-neutral-100 rounded-full">
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 pb-24 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-3xl border border-neutral-100 shadow-sm">
              <p className="text-[10px] text-neutral-500 font-medium mb-1">{stat.label}</p>
              <p className="text-lg font-bold">{stat.value}</p>
              <div className={`flex items-center gap-1 mt-1 ${stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stat.trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                <span className="text-[9px] font-bold">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sales Chart (Placeholder) */}
        <div className="bg-white p-6 rounded-[32px] border border-neutral-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">Revenus Mensuels</h3>
            <select className="text-xs bg-neutral-50 border-none rounded-lg py-1 px-2 font-medium">
              <option>Ce mois</option>
              <option>Dernier mois</option>
            </select>
          </div>
          <div className="h-32 w-full flex items-end gap-2 px-2">
            {[40, 70, 45, 90, 65, 80, 50, 85, 95, 60].map((h, i) => (
              <div key={i} className="flex-1 bg-indigo-100 rounded-t-md relative group">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="w-full bg-indigo-600 rounded-t-md"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-neutral-400 font-medium pt-2 border-t border-neutral-50">
            <span>Jan</span>
            <span>Mar</span>
            <span>Mai</span>
            <span>Juil</span>
            <span>Sep</span>
            <span>Nov</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-indigo-600 text-white p-6 rounded-[32px] flex flex-col items-center gap-3 transition-transform active:scale-95 shadow-lg shadow-indigo-200">
            <div className="p-3 bg-white/20 rounded-2xl">
              <PlusCircle size={24} />
            </div>
            <span className="font-bold text-sm">Ajouter Produit</span>
          </button>
          <button className="bg-white border border-neutral-200 p-6 rounded-[32px] flex flex-col items-center gap-3 transition-transform active:scale-95">
            <div className="p-3 bg-neutral-100 rounded-2xl text-neutral-900">
              <Package size={24} />
            </div>
            <span className="font-bold text-sm">Gérer Stock</span>
          </button>
        </div>

        {/* Recent Orders */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">Commandes Récentes</h3>
            <button className="text-xs text-indigo-600 font-bold">Voir tout</button>
          </div>
          <div className="space-y-3">
            {RECENT_ORDERS.map((order) => (
              <div key={order.id} className="bg-white p-4 rounded-2xl border border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-400">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-neutral-900">{order.id}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${order.color}`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5">{order.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{order.price}</p>
                  <button className="p-1 text-neutral-400">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-neutral-100 px-6 py-4 flex items-center justify-between z-20">
        <button onClick={() => setActiveTab('dashboard')} className={`flex flex-col items-center gap-1 ${activeTab === 'dashboard' ? 'text-indigo-600' : 'text-neutral-400'}`}>
          <BarChart3 size={22} />
          <span className="text-[10px] font-semibold">Dashboard</span>
        </button>
        <button onClick={() => setActiveTab('products')} className={`flex flex-col items-center gap-1 ${activeTab === 'products' ? 'text-indigo-600' : 'text-neutral-400'}`}>
          <Package size={22} />
          <span className="text-[10px] font-semibold">Produits</span>
        </button>
        <button className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white -mt-8 shadow-lg shadow-indigo-200">
          <Plus size={24} />
        </button>
        <button onClick={() => setActiveTab('orders')} className={`flex flex-col items-center gap-1 ${activeTab === 'orders' ? 'text-indigo-600' : 'text-neutral-400'}`}>
          <ShoppingBag size={22} />
          <span className="text-[10px] font-semibold">Commandes</span>
        </button>
        <button onClick={() => setActiveTab('settings')} className={`flex flex-col items-center gap-1 ${activeTab === 'settings' ? 'text-indigo-600' : 'text-neutral-400'}`}>
          <Settings size={22} />
          <span className="text-[10px] font-semibold">Réglages</span>
        </button>
      </nav>
    </div>
  );
}
