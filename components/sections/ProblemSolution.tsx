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
    <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Dores comuns dos petshops
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Você reconhece algum desses problemas no seu dia a dia?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                <div className="bg-gray-50 rounded-2xl p-6 border border-border">
                  {/* Problem */}
                  <div className="flex items-start gap-3 mb-4">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-dark mb-2">Problema</h3>
                      <p className="text-gray-600">{item.problem}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 border-t border-dashed border-border relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-2">
                      <Icon className={`text-${item.color}`} size={20} />
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-dark mb-2">Solução</h3>
                      <p className="text-gray-600">{item.solution}</p>
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
