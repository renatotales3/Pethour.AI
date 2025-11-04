'use client';

import { motion } from 'framer-motion';
import { Bot, Calendar, MessageSquare, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-light via-white to-secondary/5">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              Seu petshop com
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {' '}assistente veterinário IA{' '}
              </span>
              24/7
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Atenda clientes automaticamente no WhatsApp, forneça informações sobre serviços, 
              preços dinâmicos e agende consultas via Google Calendar. Tudo em um só lugar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToWaitlist}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Entrar na Waitlist
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
                Ver Como Funciona
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div>
                <p className="text-3xl font-bold text-dark">24/7</p>
                <p className="text-sm text-gray-600">Atendimento</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-dark">100%</p>
                <p className="text-sm text-gray-600">Automático</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-dark">+40%</p>
                <p className="text-sm text-gray-600">Conversão</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Feature Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-dark mb-2">WhatsApp IA</h3>
                <p className="text-sm text-gray-600">Responde clientes automaticamente</p>
              </motion.div>

              {/* Feature Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-border mt-8"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="text-secondary" size={24} />
                </div>
                <h3 className="font-bold text-dark mb-2">Agendamentos</h3>
                <p className="text-sm text-gray-600">Google Calendar integrado</p>
              </motion.div>

              {/* Feature Card 3 */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-border"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-accent" size={24} />
                </div>
                <h3 className="font-bold text-dark mb-2">Preços Dinâmicos</h3>
                <p className="text-sm text-gray-600">Atualize e IA aprende na hora</p>
              </motion.div>

              {/* Feature Card 4 */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-border mt-8"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Bot className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-dark mb-2">Veterinário IA</h3>
                <p className="text-sm text-gray-600">Informações precisas sempre</p>
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
            >
              🚀 Em breve!
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
