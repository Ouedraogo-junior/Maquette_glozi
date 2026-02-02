import React, { useState } from 'react';
import { 
  Home, 
  Search, 
  ShoppingBag, 
  User, 
  Heart, 
  Bell, 
  Filter,
  Star,
  Plus,
  ArrowLeft,
  MessageCircle,
  Clock,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const PRODUCTS = [
  {
    id: 1,
    name: "Sneakers Air Max 2024",
    price: 129.99,
    condition: "Neuf",
    category: "Mode",
    image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    seller: "Nike Store"
  },
  {
    id: 2,
    name: "Fauteuil Scandinave",
    price: 85.00,
    condition: "Occasion",
    category: "Maison",
    image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    seller: "Design House"
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    price: 999.00,
    condition: "Neuf",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1764160377328-2d11d09a1d8e?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    seller: "Apple Off"
  },
  {
    id: 4,
    name: "Appareil Photo Vintage",
    price: 45.00,
    condition: "Occasion",
    category: "Loisirs",
    image: "https://images.unsplash.com/photo-1760226642567-a5315592c810?auto=format&fit=crop&q=80&w=400",
    rating: 4.2,
    seller: "Retro Shop"
  }
];

export function BuyerApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const renderHome = () => (
    <div className="h-full flex flex-col">
      {/* Header */}
      <header className="px-5 pt-12 pb-4 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">GLOZI</h1>
          <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Acheteur</p>
        </div>
        <div className="flex gap-3">
          <button className="p-2.5 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
            <Heart size={20} />
          </button>
          <button className="p-2.5 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Search Bar */}
        <div className="px-5 py-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher un produit..."
              className="w-full bg-neutral-100 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-indigo-600 transition-all"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 bg-white rounded-lg shadow-sm">
              <Filter size={16} />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="px-5 py-4 overflow-x-auto no-scrollbar flex gap-4">
          {['Tous', 'Mode', 'Maison', 'Tech', 'Loisirs', 'Auto'].map((cat, i) => (
            <button 
              key={cat}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${i === 0 ? 'bg-indigo-600 text-white' : 'bg-white border border-neutral-200 text-neutral-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Promo Banner */}
        <div className="px-5 py-4">
          <div className="bg-indigo-600 rounded-3xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10 space-y-2 max-w-[60%]">
              <h3 className="text-xl font-bold">-20% sur tout</h3>
              <p className="text-indigo-100 text-xs">Utilisez le code GLOZI20 lors de votre premier achat.</p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-xl text-xs font-bold mt-2">
                En profiter
              </button>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
               <ImageWithFallback src="https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="px-5 py-4 grid grid-cols-2 gap-4">
          {PRODUCTS.map(product => (
            <motion.div 
              key={product.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-3 bg-neutral-100">
                <ImageWithFallback 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${product.condition === 'Neuf' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'}`}>
                    {product.condition}
                  </span>
                </div>
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-full text-neutral-900 shadow-sm">
                  <Heart size={14} />
                </button>
              </div>
              <h4 className="font-semibold text-sm line-clamp-1">{product.name}</h4>
              <p className="text-neutral-500 text-xs mt-0.5">{product.seller}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-lg">{product.price.toFixed(2)}€</span>
                <div className="flex items-center gap-1">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span className="text-[10px] font-bold">{product.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-neutral-100 px-6 py-4 flex items-center justify-between z-20">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-indigo-600' : 'text-neutral-400'}`}>
          <Home size={22} variant={activeTab === 'home' ? 'bold' : 'linear'} />
          <span className="text-[10px] font-semibold">Accueil</span>
        </button>
        <button onClick={() => setActiveTab('search')} className={`flex flex-col items-center gap-1 ${activeTab === 'search' ? 'text-indigo-600' : 'text-neutral-400'}`}>
          <Search size={22} />
          <span className="text-[10px] font-semibold">Découvrir</span>
        </button>
        <button onClick={() => setActiveTab('cart')} className={`flex flex-col items-center gap-1 ${activeTab === 'cart' ? 'text-indigo-600' : 'text-neutral-400'}`}>
          <div className="relative">
            <ShoppingBag size={22} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">2</span>
          </div>
          <span className="text-[10px] font-semibold">Panier</span>
        </button>
        <button onClick={() => setActiveTab('chat')} className={`flex flex-col items-center gap-1 ${activeTab === 'chat' ? 'text-indigo-600' : 'text-neutral-400'}`}>
          <MessageCircle size={22} />
          <span className="text-[10px] font-semibold">Messages</span>
        </button>
        <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-indigo-600' : 'text-neutral-400'}`}>
          <User size={22} />
          <span className="text-[10px] font-semibold">Profil</span>
        </button>
      </nav>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 z-50 bg-white flex flex-col"
          >
            <div className="relative flex-1 overflow-y-auto no-scrollbar">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-12 left-5 z-20 p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-lg"
              >
                <ArrowLeft size={20} />
              </button>
              
              <div className="aspect-[3/4] w-full">
                <ImageWithFallback src={selectedProduct.image} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 -mt-8 bg-white rounded-t-[40px] relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="px-3 py-1 bg-neutral-100 rounded-lg text-xs font-bold text-neutral-600 uppercase tracking-wider">
                      {selectedProduct.category}
                    </span>
                    <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-indigo-600">{selectedProduct.price.toFixed(2)}€</p>
                    <p className="text-xs text-neutral-500 line-through">{(selectedProduct.price * 1.2).toFixed(2)}€</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 p-4 bg-neutral-50 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <Star size={20} className="fill-current" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{selectedProduct.rating}</p>
                      <p className="text-[10px] text-neutral-500">42 Avis</p>
                    </div>
                  </div>
                  <div className="flex-1 p-4 bg-neutral-50 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Paris</p>
                      <p className="text-[10px] text-neutral-500">2.4km</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold">Description</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Ce produit de haute qualité est parfait pour votre quotidien. En état {selectedProduct.condition.toLowerCase()}, il a été soigneusement vérifié par nos équipes pour garantir une satisfaction totale.
                  </p>
                </div>

                <div className="flex items-center gap-4 py-4 border-t border-neutral-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1655249481446-25d575f1c054?auto=format&fit=crop&q=80&w=100" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">{selectedProduct.seller}</p>
                    <p className="text-xs text-neutral-500">Vendeur certifié • Membre depuis 2023</p>
                  </div>
                  <button className="p-3 bg-neutral-100 rounded-xl">
                    <MessageCircle size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-neutral-100 bg-white flex gap-4">
              <button className="flex-1 bg-neutral-900 text-white py-4 rounded-2xl font-bold hover:bg-neutral-800 transition-all">
                Ajouter au panier
              </button>
              <button className="px-5 border border-neutral-200 rounded-2xl">
                <Heart size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return renderHome();
}
