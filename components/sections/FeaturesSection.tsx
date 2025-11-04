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
    <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Recursos que <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">transformam</span> seu petshop
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para automatizar atendimento e aumentar suas conversões
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-border group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
