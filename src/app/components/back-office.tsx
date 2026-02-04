import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Store, 
  ShoppingBag, 
  AlertCircle, 
  Wallet, 
  Settings,
  Search,
  Bell,
  ChevronDown,
  Filter,
  Download,
  CheckCircle2,
  XCircle,
  Clock,
  MoreHorizontal
} from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const DATA = [
  { name: 'Lun', sales: 4000, users: 2400 },
  { name: 'Mar', sales: 3000, users: 1398 },
  { name: 'Mer', sales: 2000, users: 9800 },
  { name: 'Jeu', sales: 2780, users: 3908 },
  { name: 'Ven', sales: 1890, users: 4800 },
  { name: 'Sam', sales: 2390, users: 3800 },
  { name: 'Dim', sales: 3490, users: 4300 },
];

const RECENT_SHOPS = [
  { id: 1, name: 'Nike Paris', owner: 'Marc Dupont', status: 'Vérifié', sales: '140kFCFA', joined: '12 Jan 2024' },
  { id: 2, name: 'Electro World', owner: 'Sophie Martin', status: 'En attente', sales: '0FCFA', joined: '25 Jan 2024' },
  { id: 3, name: 'Vintage Chic', owner: 'Lucas Bernard', status: 'Vérifié', sales: '2,1kFCFA', joined: '18 Dec 2023' },
  { id: 4, name: 'Eco Living', owner: 'Emma Leroy', status: 'Signalé', sales: '840kFCFA', joined: '05 Jan 2024' },
];

export function BackOffice() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="flex h-screen bg-neutral-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 text-white flex flex-col shrink-0">
        <div className="p-8">
          <h2 className="text-2xl font-black tracking-tighter">GLOZI <span className="text-indigo-400">ADMIN</span></h2>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          <MenuItem 
            icon={<LayoutDashboard size={20} />} 
            label="Tableau de bord" 
            active={activeMenu === 'dashboard'} 
            onClick={() => setActiveMenu('dashboard')} 
          />
          <MenuItem 
            icon={<Users size={20} />} 
            label="Utilisateurs" 
            active={activeMenu === 'users'} 
            onClick={() => setActiveMenu('users')} 
          />
          <MenuItem 
            icon={<Store size={20} />} 
            label="Boutiques" 
            active={activeMenu === 'shops'} 
            onClick={() => setActiveMenu('shops')} 
          />
          <MenuItem 
            icon={<ShoppingBag size={20} />} 
            label="Produits" 
            active={activeMenu === 'products'} 
            onClick={() => setActiveMenu('products')} 
          />
          <MenuItem 
            icon={<AlertCircle size={20} />} 
            label="Litiges" 
            active={activeMenu === 'disputes'} 
            onClick={() => setActiveMenu('disputes')} 
            badge="4"
          />
          <MenuItem 
            icon={<Wallet size={20} />} 
            label="Revenus" 
            active={activeMenu === 'revenue'} 
            onClick={() => setActiveMenu('revenue')} 
          />
          <div className="pt-8 pb-4 px-4">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Système</p>
          </div>
          <MenuItem 
            icon={<Settings size={20} />} 
            label="Paramètres" 
            active={activeMenu === 'settings'} 
            onClick={() => setActiveMenu('settings')} 
          />
        </nav>

        <div className="p-4 border-t border-neutral-800">
          <div className="flex items-center gap-3 p-2">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">JD</div>
            <div>
              <p className="text-sm font-bold">Jean Admin</p>
              <p className="text-[10px] text-neutral-500">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-neutral-200 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <input 
                type="text" 
                placeholder="Rechercher une boutique, un utilisateur..."
                className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-lg relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-neutral-200 mx-2" />
            <button className="flex items-center gap-2 hover:bg-neutral-100 p-2 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-lg bg-neutral-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1655249481446-25d575f1c054?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" />
              </div>
              <ChevronDown size={16} className="text-neutral-400" />
            </button>
          </div>
        </header>

        {/* Dashboard View */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">Bienvenue, Jean</h1>
              <p className="text-neutral-500 text-sm">Voici un aperçu de l'activité de GLOZI aujourd'hui.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors">
                <Download size={16} />
                Exporter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
                <Filter size={16} />
                Filtrer
              </button>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Ventes Totales" value="740.039FCFA" change="+12.5%" trend="up" color="indigo" />
            <StatCard label="Nouveaux Utilisateurs" value="1,240" change="+8.2%" trend="up" color="emerald" />
            <StatCard label="Commandes" value="842" change="-2.4%" trend="down" color="amber" />
            <StatCard label="Taux de conversion" value="3.2%" change="+0.4%" trend="up" color="rose" />
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Chart Area */}
            <div className="col-span-2 bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-neutral-900">Croissance des revenus</h3>
                <div className="flex bg-neutral-100 p-1 rounded-lg">
                  {['7j', '30j', '90j'].map((t) => (
                    <button key={t} className={`px-3 py-1 text-xs font-bold rounded-md ${t === '30j' ? 'bg-white shadow-sm' : 'text-neutral-500'}`}>{t}</button>
                  ))}
                </div>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={DATA}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area type="monotone" dataKey="sales" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Side Table */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
              <h3 className="font-bold text-neutral-900">Boutiques à surveiller</h3>
              <div className="space-y-6">
                {RECENT_SHOPS.map((shop) => (
                  <div key={shop.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center font-bold text-neutral-400">
                        {shop.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-neutral-900">{shop.name}</p>
                        <p className="text-xs text-neutral-500">{shop.owner}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-indigo-600">{shop.sales}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        shop.status === 'Vérifié' ? 'bg-emerald-100 text-emerald-700' : 
                        shop.status === 'Signalé' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {shop.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-2 text-sm font-bold text-neutral-500 hover:text-neutral-900 border border-neutral-100 rounded-xl transition-colors">
                Gérer toutes les boutiques
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function MenuItem({ icon, label, active, onClick, badge }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${active ? 'bg-indigo-600 text-white' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      {badge && (
        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${active ? 'bg-white text-indigo-600' : 'bg-rose-500 text-white'}`}>
          {badge}
        </span>
      )}
    </button>
  );
}

function StatCard({ label, value, change, trend, color }: any) {
  const colorMap: any = {
    indigo: 'text-indigo-600 bg-indigo-50',
    emerald: 'text-emerald-600 bg-emerald-50',
    amber: 'text-amber-600 bg-amber-50',
    rose: 'text-rose-600 bg-rose-50',
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">{label}</span>
        <div className={`p-2 rounded-lg ${colorMap[color]}`}>
          {trend === 'up' ? <Clock size={16} /> : <AlertCircle size={16} />}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <h4 className="text-2xl font-bold text-neutral-900">{value}</h4>
        <span className={`text-xs font-bold ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}
