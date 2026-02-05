import React, { useState } from 'react';
import { 
  Package, 
  PlusCircle, 
  Wallet,
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  Eye,
  MessageCircle,
  ShoppingBag,
  Edit,
  Trash2,
  Minus,
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const STATS = [
  { label: 'Portefeuille', value: '87500 FCFA', change: '+12%', trend: 'up' },
  { label: 'Stock', value: '8 articles', change: '+2', trend: 'up' },
  { label: 'Vues totales', value: '342', change: '-5%', trend: 'down' },
];

const MY_LISTINGS = [
  { 
    id: 1, 
    name: 'Appareil Photo Vintage', 
    price: 70000, 
    views: 145, 
    messages: 8,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1760226642567-a5315592c810?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: 2, 
    name: 'Chaise Bureau Ergonomique', 
    price: 45000, 
    views: 89, 
    messages: 3,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: 3, 
    name: 'Montre Connectée', 
    price: 35000, 
    views: 108, 
    messages: 12,
    status: 'sold',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400'
  },
];

const ORDERS = [
  { id: '#2847', product: 'Montre Connectée', buyer: 'Alice M.', amount: 35000, status: 'Payé', date: 'Il y a 2h' },
  { id: '#2841', product: 'Lampe Design', buyer: 'Bob K.', amount: 28000, status: 'En attente', date: 'Hier' },
];

const STOCK_ITEMS = [
  { 
    id: 1, 
    name: 'Appareil Photo Vintage', 
    category: 'Loisirs',
    quantity: 1, 
    price: 70000,
    cost: 50000,
    status: 'En stock',
    image: 'https://images.unsplash.com/photo-1760226642567-a5315592c810?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: 2, 
    name: 'Chaise Bureau Ergonomique', 
    category: 'Maison',
    quantity: 1, 
    price: 45000,
    cost: 30000,
    status: 'En stock',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: 3, 
    name: 'Montre Connectée', 
    category: 'Tech',
    quantity: 0, 
    price: 35000,
    cost: 25000,
    status: 'Rupture',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: 4, 
    name: 'Lampe Design', 
    category: 'Maison',
    quantity: 2, 
    price: 28000,
    cost: 18000,
    status: 'En stock',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400'
  },
];

export function IndividualSellerView() {
  const [activeSection, setActiveSection] = useState<'listings' | 'orders' | 'wallet' | 'stock'>('listings');

  return (
    <div className="h-full flex flex-col bg-neutral-50">
      {/* Header */}
      <header className="px-5 pt-12 pb-4 bg-white border-b border-neutral-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Mes Ventes</h1>
            <p className="text-xs text-neutral-500 font-medium">Gérez vos produits et commandes</p>
          </div>
          <button className="p-2.5 bg-indigo-100 rounded-full text-indigo-600">
            <PlusCircle size={20} />
          </button>
        </div>

        {/* Section Tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveSection('listings')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${activeSection === 'listings' ? 'bg-indigo-600 text-white' : 'bg-neutral-100 text-neutral-600'}`}
          >
            Produits
          </button>
          <button 
            onClick={() => setActiveSection('stock')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${activeSection === 'stock' ? 'bg-indigo-600 text-white' : 'bg-neutral-100 text-neutral-600'}`}
          >
            Stock
          </button>
          <button 
            onClick={() => setActiveSection('orders')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${activeSection === 'orders' ? 'bg-indigo-600 text-white' : 'bg-neutral-100 text-neutral-600'}`}
          >
            Commandes
          </button>
          <button 
            onClick={() => setActiveSection('wallet')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${activeSection === 'wallet' ? 'bg-indigo-600 text-white' : 'bg-neutral-100 text-neutral-600'}`}
          >
            Portefeuille
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-5 pb-24 space-y-5">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-neutral-100">
              <p className="text-[10px] text-neutral-500 font-medium mb-1">{stat.label}</p>
              <p className="text-base font-bold">{stat.value}</p>
              <div className={`flex items-center gap-1 mt-1 ${stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stat.trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                <span className="text-[9px] font-bold">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        {activeSection === 'wallet' && (
          <div className="bg-white p-5 rounded-3xl border border-neutral-100 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm">Revenus (7 derniers jours)</h3>
            </div>
            <div className="h-32 w-full flex items-end gap-2">
              {[30, 45, 60, 40, 70, 55, 85].map((h, i) => (
                <div key={i} className="flex-1 bg-indigo-100 rounded-t-lg relative">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    className="w-full bg-indigo-600 rounded-t-lg"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-neutral-400 font-medium pt-2 border-t border-neutral-50">
              <span>Lun</span>
              <span>Mar</span>
              <span>Mer</span>
              <span>Jeu</span>
              <span>Ven</span>
              <span>Sam</span>
              <span>Dim</span>
            </div>
          </div>
        )}

        {/* Listings Section */}
        {activeSection === 'listings' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Mes Produits ({MY_LISTINGS.length})</h3>
              <button className="text-xs text-indigo-600 font-bold">Tout voir</button>
            </div>
            <div className="space-y-3">
              {MY_LISTINGS.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl border border-neutral-100 flex gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
                    <ImageWithFallback src={item.image} className="w-full h-full object-cover" />
                    {item.status === 'sold' && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">VENDU</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                    <p className="text-indigo-600 font-bold text-base mt-1">{item.price.toFixed(0)} FCFA</p>
                    <div className="flex items-center gap-3 mt-2 text-neutral-500">
                      <div className="flex items-center gap-1">
                        <Eye size={12} />
                        <span className="text-[10px] font-medium">{item.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={12} />
                        <span className="text-[10px] font-medium">{item.messages}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="p-2 bg-neutral-100 rounded-lg text-neutral-600">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 bg-rose-50 rounded-lg text-rose-600">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Orders Section */}
        {activeSection === 'orders' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Commandes Reçues</h3>
            </div>
            <div className="space-y-3">
              {ORDERS.map((order) => (
                <div key={order.id} className="bg-white p-4 rounded-2xl border border-neutral-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-neutral-900">{order.id}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${order.status === 'Payé' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                        {order.status}
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-500">{order.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{order.product}</p>
                      <p className="text-xs text-neutral-500">Acheteur: {order.buyer}</p>
                    </div>
                    <p className="text-sm font-bold">{order.amount} FCFA</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stock Section */}
        {activeSection === 'stock' && (
          <div className="space-y-4">
            {/* Stock Summary */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-neutral-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <Package size={16} className="text-indigo-600" />
                  </div>
                  <p className="text-xs text-neutral-500 font-medium">Articles</p>
                </div>
                <p className="text-2xl font-bold">{STOCK_ITEMS.length}</p>
                <p className="text-[10px] text-neutral-500 mt-1">Produits au total</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-neutral-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <TrendingUp size={16} className="text-emerald-600" />
                  </div>
                  <p className="text-xs text-neutral-500 font-medium">Valeur</p>
                </div>
                <p className="text-2xl font-bold">{STOCK_ITEMS.reduce((acc, item) => acc + (item.price * item.quantity), 0).toLocaleString()} F</p>
                <p className="text-[10px] text-neutral-500 mt-1">Valeur totale</p>
              </div>
            </div>

            {/* Add Product Button */}
            <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
              <PlusCircle size={20} />
              Ajouter un produit au stock
            </button>

            {/* Stock List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">Inventaire ({STOCK_ITEMS.length})</h3>
                <select className="text-xs bg-white border border-neutral-200 rounded-lg py-1.5 px-3 font-medium">
                  <option>Tous</option>
                  <option>En stock</option>
                  <option>Rupture</option>
                </select>
              </div>

              {STOCK_ITEMS.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl border border-neutral-100">
                  <div className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
                      <ImageWithFallback src={item.image} className="w-full h-full object-cover" />
                      {item.status === 'Rupture' && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="text-white text-[9px] font-bold">RUPTURE</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                          <p className="text-[10px] text-neutral-500">{item.category}</p>
                        </div>
                        <button className="p-1.5 text-neutral-400 hover:text-neutral-600">
                          <MoreVertical size={16} />
                        </button>
                      </div>

                      <div className="space-y-2">
                        {/* Price Info */}
                        <div className="flex items-center justify-between text-xs">
                          <div>
                            <p className="text-neutral-500">Prix vente</p>
                            <p className="font-bold text-indigo-600">{item.price.toLocaleString()} FCFA</p>
                          </div>
                          <div className="text-right">
                            <p className="text-neutral-500">Coût</p>
                            <p className="font-bold text-neutral-900">{item.cost.toLocaleString()} FCFA</p>
                          </div>
                          <div className="text-right">
                            <p className="text-neutral-500">Marge</p>
                            <p className="font-bold text-emerald-600">+{((item.price - item.cost) / item.cost * 100).toFixed(0)}%</p>
                          </div>
                        </div>

                        {/* Quantity Control */}
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-50">
                          <span className="text-xs text-neutral-500 font-medium">Quantité</span>
                          <div className="flex items-center gap-2">
                            <button className="w-7 h-7 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-neutral-200">
                              <Minus size={14} />
                            </button>
                            <span className={`text-sm font-bold min-w-[30px] text-center ${item.quantity === 0 ? 'text-rose-600' : 'text-neutral-900'}`}>
                              {item.quantity}
                            </span>
                            <button className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white hover:bg-indigo-700">
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-3 pt-3 border-t border-neutral-50">
                    <button className="flex-1 py-2 bg-neutral-100 rounded-xl text-xs font-bold text-neutral-700 flex items-center justify-center gap-1.5">
                      <Edit size={14} />
                      Modifier
                    </button>
                    <button className="flex-1 py-2 bg-rose-50 rounded-xl text-xs font-bold text-rose-600 flex items-center justify-center gap-1.5">
                      <Trash2 size={14} />
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Stock Insights */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-3xl border border-amber-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Package size={20} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Astuce Stock</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Vous avez 1 article en rupture de stock. Pensez à réapprovisionner pour ne pas manquer des ventes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Wallet Section */}
        {activeSection === 'wallet' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 rounded-3xl text-white">
              <div className="flex items-center gap-2 mb-2">
                <Wallet size={20} />
                <span className="text-sm font-medium opacity-90">Solde disponible</span>
              </div>
              <p className="text-3xl font-bold mb-4">87 500 FCFA</p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold text-sm w-full">
                Retirer mes gains
              </button>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-neutral-100 space-y-3">
              <h3 className="font-bold text-sm">Transactions récentes</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-neutral-50">
                  <div>
                    <p className="text-sm font-medium">Vente #2847</p>
                    <p className="text-xs text-neutral-500">Il y a 2h</p>
                  </div>
                  <p className="text-sm font-bold text-emerald-600">+35 000 FCFA</p>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-50">
                  <div>
                    <p className="text-sm font-medium">Retrait</p>
                    <p className="text-xs text-neutral-500">Hier</p>
                  </div>
                  <p className="text-sm font-bold text-neutral-900">-50 000 FCFA</p>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium">Vente #2841</p>
                    <p className="text-xs text-neutral-500">Il y a 3j</p>
                  </div>
                  <p className="text-sm font-bold text-emerald-600">+28 000 FCFA</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Action Button */}
        <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-200">
          <PlusCircle size={20} />
          Publier un nouveau produit
        </button>
      </div>
    </div>
  );
}