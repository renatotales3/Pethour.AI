'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Clock, Users, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    problem: 'Perde vendas porque não responde rápido no WhatsApp',
    solution: 'IA responde em segundos, 24 horas por dia',
    color: 'primary',
  },
  {
    icon: Users,
    problem: 'Agenda desorganizada com agendamentos manuais',
    solution: 'Google Calendar sincronizado automaticamente',
    color: 'secondary',
  },
  {
    icon: DollarSign,
    problem: 'Cotações demoram e cliente vai para concorrência',
    solution: 'Preços dinâmicos atualizados em tempo real',
    color: 'accent',
  },
];

export default function ProblemSolution() {
  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-light/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
            Dores comuns dos petshops
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Você reconhece algum desses problemas no seu dia a dia?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 border border-border/30 shadow-lg hover:shadow-xl transition-all">
                  {/* Problem */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <XCircle className="text-red-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-3 text-lg">Problema</h3>
                      <p className="text-gray-600 leading-relaxed">{item.problem}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-8 border-t border-dashed border-border relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon className="text-white" size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-3 text-lg">Solução</h3>
                      <p className="text-gray-600 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
