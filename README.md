# 🐾 Pethour.AI - Assistente Virtual para Petshops

Landing page premium para Pethour.AI, um assistente virtual com IA que automatiza atendimento, cotações e agendamentos para petshops.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan)

## 🚀 Sobre o Projeto

**Pethour.AI** é um assistente veterinário virtual que atende clientes automaticamente via WhatsApp, fornece informações sobre serviços e preços dinâmicos, e agenda consultas através do Google Calendar.

### Funcionalidades Principais
- 🤖 **Assistente IA 24/7** - Responde clientes automaticamente no WhatsApp
- 📅 **Agendamento Automático** - Integração com Google Calendar
- 💰 **Preços Dinâmicos** - Atualize preços e a IA aprende instantaneamente
- 📊 **Dashboard Completo** - Métricas e analytics em tempo real
- 🔒 **Seguro e Confiável** - LGPD compliant e dados criptografados

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Formulários:** React Hook Form + Zod

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** ou **yarn**
- **Git**

### Instalando Node.js no Linux (Ubuntu/Debian)

```bash
# Instalar Node.js 20.x LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalação
node --version
npm --version
```

### Instalando Node.js no Fedora/RHEL

```bash
# Instalar Node.js
sudo dnf install nodejs

# Ou via nvm (recomendado)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
```

## 🏁 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/renatotales3/Pethour.AI.git
cd Pethour.AI
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Execute o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

### 4. Acesse no navegador

Abra [http://localhost:3000](http://localhost:3000) para ver a landing page.

## 📁 Estrutura do Projeto

```
Pethour.AI/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts         # API endpoint para captura de emails
│   ├── layout.tsx                # Layout raiz (metadados SEO)
│   ├── page.tsx                  # Página principal
│   └── globals.css               # Estilos globais
├── components/
│   └── sections/
│       ├── Navbar.tsx            # Navbar sticky com menu mobile
│       ├── HeroSection.tsx       # Seção hero com CTAs
│       ├── ProblemSolution.tsx   # Dores dos petshops + soluções
│       ├── FeaturesSection.tsx   # Cards de funcionalidades
│       ├── WaitlistCTA.tsx       # Form de captura de email
│       └── Footer.tsx            # Footer com links e contato
├── public/                       # Assets estáticos (imagens, etc)
├── .github/
│   └── copilot-instructions.md   # Instruções para AI agents
├── tailwind.config.ts            # Configuração Tailwind
├── tsconfig.json                 # Configuração TypeScript
├── next.config.js                # Configuração Next.js
├── package.json                  # Dependências do projeto
└── README.md                     # Este arquivo
```

## 🎨 Paleta de Cores

```css
--primary:   #FF9066  /* Coral (inspirado em PetPiw) */
--secondary: #A78BFA  /* Roxo pastel */
--accent:    #34C759  /* Verde (sucesso) */
--dark:      #1F2937  /* Cinza escuro */
--light:     #F9FAFB  /* Cinza claro */
```

## 🔧 Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Linting
npm run lint         # Executa ESLint
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático a cada push na branch `main`

```bash
# Ou via CLI
npm install -g vercel
vercel
```

## 📧 Integração de Email (Waitlist)

A API route `/api/waitlist` atualmente apenas loga emails no console. Para produção, integre com:

### Opção 1: Resend (Recomendado)

```bash
npm install resend
```

```typescript
// app/api/waitlist/route.ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

// Enviar email de confirmação
await resend.emails.send({
  from: 'noreply@pethour.ai',
  to: email,
  subject: 'Bem-vindo à Pethour.AI!',
  html: '<p>Obrigado por se inscrever...</p>',
});
```

### Opção 2: Google Sheets

```bash
npm install googleapis
```

### Opção 3: Banco de Dados (Supabase, Firebase)

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz:

```env
# Email Service (Resend)
RESEND_API_KEY=your_api_key_here

# Banco de Dados (se usar)
DATABASE_URL=your_database_url

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 TODO List

- [x] Scaffold projeto Next.js 15
- [x] Criar componentes (Navbar, Hero, Features, Footer)
- [x] Implementar form de waitlist
- [x] Adicionar animações com Framer Motion
- [ ] Integrar Resend para emails
- [ ] Adicionar Google Analytics
- [ ] Testes com Playwright
- [ ] CI/CD com GitHub Actions
- [ ] SEO otimizado (sitemap, robots.txt)
- [ ] Adicionar página de Política de Privacidade
- [ ] Adicionar página de Termos de Serviço

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email:** contato@pethour.ai
- **GitHub:** [@renatotales3](https://github.com/renatotales3)
- **Repositório:** [Pethour.AI](https://github.com/renatotales3/Pethour.AI)

---

**Feito com ❤️ para petshops que querem crescer com tecnologia**
