'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Loader2, ArrowRight, XCircle, Shield, Zap, Heart } from 'lucide-react';

export default function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Por favor, insira um email válido');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('🎉 Email cadastrado! Você receberá novidades em breve.');
        setEmail('');
      } else {
        throw new Error('Falha ao cadastrar');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Erro ao processar. Tente novamente em instantes.');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-tight">
            Comece <span className="text-primary">grátis</span> hoje
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Junte-se a centenas de petshops que já aumentaram suas vendas com nossa IA. 
            Sem cartão de crédito. Sem compromisso.
          </p>

          {/* Form */}
                    {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              disabled={status === 'loading'}
              className="flex-1 px-8 py-6 rounded-3xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none text-dark text-lg placeholder:text-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed shadow-lg transition-all"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-10 py-6 bg-primary text-white font-bold rounded-full hover:bg-primary/90 hover:scale-105 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl shadow-primary/30 text-lg"
            >
              {status === 'loading' ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <>
                  <span>Começar agora</span>
                  <ArrowRight size={24} />
                </>
              )}
            </button>
          </motion.form>

                    {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-accent font-semibold text-lg bg-accent/10 py-4 px-6 rounded-2xl max-w-2xl mx-auto"
            >
              <CheckCircle size={24} />
              <span>Email cadastrado! Confira sua caixa de entrada.</span>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-red-500 font-semibold text-lg bg-red-50 py-4 px-6 rounded-2xl max-w-2xl mx-auto"
            >
              <XCircle size={24} />
              <span>Erro ao processar. Tente novamente.</span>
            </motion.div>
          )}

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-base text-gray-500 mt-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield size={20} className="text-primary" />
              </div>
              <span className="font-medium">LGPD Compliant</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Zap size={20} className="text-accent" />
              </div>
              <span className="font-medium">Setup em 5 minutos</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                <Heart size={20} className="text-secondary" />
              </div>
              <span className="font-medium">100+ petshops confiam</span>
            </div>
          </motion.div>

          <p className="text-sm text-white/70 mt-6">
            Seus dados estão 100% seguros. Política de privacidade em conformidade com LGPD.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
