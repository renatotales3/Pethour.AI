'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Calendar, DollarSign, Bot, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'WhatsApp Integrado',
    description: 'IA responde automaticamente seus clientes 24/7 com informações precisas sobre serviços.',
    gradient: 'from-primary to-primary/70',
  },
  {
    icon: Calendar,
    title: 'Agendamento Automático',
    description: 'Sincronização em tempo real com Google Calendar. Sem conflitos, sem erro humano.',
    gradient: 'from-secondary to-secondary/70',
  },
  {
    icon: DollarSign,
    title: 'Preços Dinâmicos',
    description: 'Atualize seus preços no dashboard e a IA já está informada instantaneamente.',
    gradient: 'from-accent to-accent/70',
  },
  {
    icon: Bot,
    title: 'Veterinário Virtual',
    description: 'Assistente com conhecimento veterinário para responder perguntas básicas dos clientes.',
    gradient: 'from-primary to-secondary',
  },
  {
    icon: BarChart3,
    title: 'Dashboard Completo',
    description: 'Visualize métricas, conversões, agendamentos e performance em tempo real.',
    gradient: 'from-secondary to-accent',
  },
  {
    icon: Shield,
    title: 'Seguro e Confiável',
    description: 'Dados criptografados, conformidade com LGPD e disponibilidade 99.9%.',
    gradient: 'from-accent to-primary',
  },
];

export default function FeaturesSection() {
  return (
    <section id="recursos" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-light/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
            Recursos que <span className="text-primary">transformam</span> seu petshop
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tudo que você precisa para automatizar atendimento e aumentar suas conversões
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-border/30 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="text-white" size={30} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
