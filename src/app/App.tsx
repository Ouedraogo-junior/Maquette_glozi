import React, { useState } from "react";
import {
  ShoppingBag,
  Store,
  Settings,
  Home,
  Search,
  User,
  Bell,
  Heart,
  MessageCircle,
  PlusCircle,
  Package,
  TrendingUp,
  ShieldCheck,
  Menu,
  X,
  ChevronRight,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/index.css";
import { BuyerApp } from "@/app/components/buyer-app";
import { SellerApp } from "@/app/components/seller-app";
import { BackOffice } from "@/app/components/back-office";
import { OnboardingFlow } from "@/app/components/auth-onboarding";
import { Toaster } from "sonner";

type Platform = "buyer" | "seller" | "admin" | "onboarding";

export default function App() {
  const [platform, setPlatform] =
    useState<Platform>("onboarding");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleFinishOnboarding = () => {
    setIsAuthenticated(true);
    setPlatform("buyer");
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <Toaster position="top-center" />

      {/* Platform Switcher (Dev Only Helper) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-neutral-200 rounded-full px-4 py-2 shadow-xl flex items-center gap-4">
        <button
          onClick={() => setPlatform("buyer")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${platform === "buyer" ? "bg-indigo-600 text-white shadow-md" : "hover:bg-neutral-100"}`}
        >
          <ShoppingBag size={16} />
          <span className="text-xs font-medium">Buyer</span>
        </button>
        <button
          onClick={() => setPlatform("seller")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${platform === "seller" ? "bg-emerald-600 text-white shadow-md" : "hover:bg-neutral-100"}`}
        >
          <Store size={16} />
          <span className="text-xs font-medium">Seller</span>
        </button>
        <button
          onClick={() => setPlatform("admin")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${platform === "admin" ? "bg-neutral-900 text-white shadow-md" : "hover:bg-neutral-100"}`}
        >
          <ShieldCheck size={16} />
          <span className="text-xs font-medium">Admin</span>
        </button>
      </div>

      <main className="h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          {platform === "onboarding" && (
            <motion.div
              key="onboarding"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              <OnboardingFlow
                onComplete={handleFinishOnboarding}
              />
            </motion.div>
          )}

          {platform === "buyer" && (
            <motion.div
              key="buyer"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="h-full flex items-center justify-center p-4 md:p-8"
            >
              <div className="w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-neutral-900 relative">
                <BuyerApp />
              </div>
            </motion.div>
          )}

          {platform === "seller" && (
            <motion.div
              key="seller"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="h-full flex items-center justify-center p-4 md:p-8"
            >
              <div className="w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-neutral-900 relative">
                <SellerApp />
              </div>
            </motion.div>
          )}

          {platform === "admin" && (
            <motion.div
              key="admin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              <BackOffice />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}