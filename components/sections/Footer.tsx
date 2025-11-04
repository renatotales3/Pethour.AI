'use client';

import { Mail, Instagram, Linkedin, Twitter, Heart, Facebook } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Recursos', href: '#recursos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Preços', href: '#waitlist' },
  ],
  company: [
    { name: 'Sobre Nós', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contato', href: '#contato' },
  ],
  legal: [
    { name: 'Política de Privacidade', href: '/privacy' },
    { name: 'Termos de Serviço', href: '/terms' },
    { name: 'LGPD', href: '/lgpd' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold">Pethour.ai</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-base">
              Assistente IA que aumenta vendas de petshops com atendimento inteligente 24/7.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-light/10 hover:bg-primary hover:scale-110 rounded-2xl flex items-center justify-center transition-all shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-light/10 hover:bg-primary hover:scale-110 rounded-2xl flex items-center justify-center transition-all shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-light/10 hover:bg-primary hover:scale-110 rounded-2xl flex items-center justify-center transition-all shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-light/10 hover:bg-primary hover:scale-110 rounded-2xl flex items-center justify-center transition-all shadow-lg"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-xl mb-8">Produto</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-xl mb-8">Empresa</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-xl mb-8">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-base">
            © 2025 Pethour.AI. Todos os direitos reservados.
          </p>
          <a href="mailto:contato@pethour.ai" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-base">
            <Mail size={18} />
            contato@pethour.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
