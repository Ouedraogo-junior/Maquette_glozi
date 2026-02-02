import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const ONBOARDING_STEPS = [
  {
    title: "Bienvenue sur GLOZI",
    description: "La plateforme de commerce nouvelle génération pour acheter et vendre en toute sécurité.",
    image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?auto=format&fit=crop&q=80&w=600",
    color: "bg-indigo-600"
  },
  {
    title: "Achetez malin",
    description: "Des milliers de produits neufs et d'occasion sélectionnés pour vous.",
    image: "https://images.unsplash.com/photo-1760226642567-a5315592c810?auto=format&fit=crop&q=80&w=600",
    color: "bg-emerald-600"
  },
  {
    title: "Vendez facilement",
    description: "Créez votre boutique en quelques clics et commencez à générer des revenus.",
    image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&q=80&w=600",
    color: "bg-amber-500"
  }
];

export function OnboardingFlow({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');

  const nextStep = () => {
    if (step < ONBOARDING_STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setIsLogin(true);
    }
  };

  if (isLogin) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Connexion</h1>
            <p className="mt-2 text-neutral-600">Entrez vos identifiants pour continuer</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@exemple.com"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Mot de passe</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
              />
            </div>
            <button 
              onClick={onComplete}
              className="w-full bg-neutral-900 text-white py-4 rounded-xl font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              Se connecter
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-neutral-500">Ou continuer avec</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors">
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors">
              <span className="text-sm font-medium">Apple</span>
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute inset-0"
          >
            <ImageWithFallback 
              src={ONBOARDING_STEPS[step].image} 
              alt={ONBOARDING_STEPS[step].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-8 pb-12 space-y-6">
        <div className="flex gap-2">
          {ONBOARDING_STEPS.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-neutral-900' : 'w-2 bg-neutral-200'}`}
            />
          ))}
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-neutral-900 leading-tight">
            {ONBOARDING_STEPS[step].title}
          </h2>
          <p className="text-neutral-600 text-lg">
            {ONBOARDING_STEPS[step].description}
          </p>
        </div>

        <button 
          onClick={nextStep}
          className="w-full bg-neutral-900 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 group hover:bg-neutral-800 transition-all"
        >
          {step === ONBOARDING_STEPS.length - 1 ? "Commencer" : "Suivant"}
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
