'use client';

import { motion } from 'framer-motion';
import { Bot, Calendar, MessageSquare, TrendingUp, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Decorative blobs - mais sutis */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark leading-[1.1] mb-6">
              Seu petshop com{' '}
              <span className="text-accent">assistente IA</span> 24/7
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed font-normal">
              Atenda clientes automaticamente, forneça cotações e agende serviços via WhatsApp
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToWaitlist}
                className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Entrar na Waitlist
              </button>
              <button className="border-2 border-gray-300 text-dark hover:border-primary hover:text-primary px-10 py-5 rounded-full font-semibold text-lg transition-all">
                Ver Demo
              </button>
            </div>

            {/* Simple badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
              <Sparkles className="text-secondary" size={20} />
              <span className="text-sm font-medium text-dark">🚀 Lançamento em breve</span>
            </div>
          </motion.div>

          {/* Right Content - Imagem de preview estilo PetPiw */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Card principal - similar ao PetPiw mas adaptado para SaaS */}
            <div className="relative bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent p-8 rounded-3xl">
              {/* Placeholder para screenshot do dashboard */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-border/50">
                <div className="space-y-4">
                  {/* Simulação de interface */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Bot className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="h-3 w-32 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-2 w-24 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Cards de features mini */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-gradient-to-br from-primary/10 to-transparent p-4 rounded-xl">
                      <MessageSquare className="text-primary mb-2" size={20} />
                      <div className="h-2 w-16 bg-primary/20 rounded-full"></div>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-transparent p-4 rounded-xl">
                      <Calendar className="text-secondary mb-2" size={20} />
                      <div className="h-2 w-16 bg-secondary/20 rounded-full"></div>
                    </div>
                    <div className="bg-gradient-to-br from-accent/10 to-transparent p-4 rounded-xl">
                      <TrendingUp className="text-accent mb-2" size={20} />
                      <div className="h-2 w-16 bg-accent/20 rounded-full"></div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-transparent p-4 rounded-xl">
                      <Sparkles className="text-primary mb-2" size={20} />
                      <div className="h-2 w-16 bg-primary/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge flutuante estilo PetPiw */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent"></div>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-dark">24/7 Online</p>
                    <p className="text-[10px] text-gray-500">100% Automático</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
