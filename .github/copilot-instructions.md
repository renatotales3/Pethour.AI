# 🤖 Instruções para GitHub Copilot - Desenvolvimento Landing Page Pethour

## 📌 Contexto Geral

**Projeto:** Landing Page Premium para Pethour.ai  
**Tecnologia:** Next.js 15 (App Router) + TypeScript + Tailwind CSS + Shadcn/UI  
**Modelo:** SaaS B2B com assinatura mensal  
**Objetivo:** Criar landing page premium, responsiva e rápida para capturar emails de petshops interessados  
**Timeline:** 2-3 semanas até launch  

---

## 🎯 Seu Papel Como Copilot

Você é meu **pair programmer especializado em landing pages SaaS premium**.

### Suas Responsabilidades:
1. ✅ **Analisar imagens** de landing pages que envio (prints/screenshots)
2. ✅ **Extrair padrões visuais** (layout, cores, tipografia, espaçamento, animações)
3. ✅ **Pensar estrategicamente** sobre UX, copywriting e conversão
4. ✅ **Sugerir melhorias** específicas para contexto de petshops (B2B SaaS)
5. ✅ **Gerar código React/TypeScript** pronto para usar (copiar/colar)
6. ✅ **Iterar rapidamente** quando eu pedir mudanças
7. ✅ **Avisar** sobre boas práticas (acessibilidade, performance, responsividade)

---

## 🎨 Direcionamento Visual

### **Identidade Visual Pethour**
- **Setor:** SaaS B2B para petshops
- **Tom:** Profissional, confiável, inovador, acessível
- **Público-alvo:** Donos de petshops (35-55 anos), gerentes, empreendedores
- **Inspiração:** Landing pages premium de startups (Stripe, Vercel, Intercom, Notion)
- **Nível de detalhe:** Sofisticado mas não exagerado

### **Paleta de Cores (Recomendação)**
```
Primária:     #007AFF (Azul vibrante - confiança, tech)
Secundária:   #34C759 (Verde - sucesso, crescimento)
Accent:       #FF9500 (Orange - ação, urgência, CTA)
Dark:         #1A1A1A (Preto profundo - elegância)
Light:        #F5F5F5 (Cinza claro - espaço, limpeza)
Border:       #E5E5E5 (Borda sutil)
```

### **Tipografia**
- **Headlines:** Inter, Poppins ou Sora
  - Tamanho: 48-56px (desktop), 32-40px (mobile)
  - Weight: 700-800 (bold)
- **Body Text:** Inter, Roboto
  - Tamanho: 16px (base)
  - Weight: 400-500
- **Small Text:** 14px
- **Line Height:** 1.6 (para legibilidade)

### **Estilo Visual**
- 🎨 Minimalista + moderno
- ⚪ Muito branco/espaço em branco (premium feel)
- 📐 Bordas suaves: `border-radius: 12-16px`
- 🌫️ Sombras sutis (não pesadas)
- ✨ Animações suaves (fade-in, slide, hover effects)
- 🎭 Ícones customizados (Lucide icons preferencialmente)

---

## 📐 Estrutura de Seções (Sequência)

Desenvolva **nesta ordem** para melhor fluxo:

### **1. Navbar (Sticky)**
```
Elementos:
- Logo à esquerda (clicável → home)
- Menu: Recursos | Preços | Sobre | Contato
- Botão "Entrar" (cinza, simples)
- Botão "Começar Grátis" (azul bold, CTA)

Desktop: Horizontal alignment
Mobile: Menu hamburger com animação
Comportamento: Sticky no topo, shadow sutil ao scroll
```

### **2. Hero Section**
```
Layout:
- Left (60%): Conteúdo
  * Headline: "Aumente suas conversões com IA inteligente"
  * Subheadline: "Cotações automáticas, preços dinâmicos..."
  * 2 Botões: "Começar 7 dias grátis" + "Ver demo"
- Right (40%): Imagem/Screenshot do dashboard

Animação: Fade-in + slide up ao carregar
Background: Gradient sutil ou cor sólida
Mobile: Stack vertical 100%
```

### **3. Problema → Solução**
```
Padrão:
[Ícone] Problema 1 → ✓ Resolvido
[Ícone] Problema 2 → ✓ Resolvido
[Ícone] Problema 3 → ✓ Resolvido

Exemplos:
- Cotações manuais são lentas → IA faz em segundos
- Clientes perdem oportunidades → Resposta automática 24/7
- Agendamentos são caóticos → Google Calendar sincronizado
```

### **4. Features Section (4 Cards)**
```
Layout: Grid 2x2 (desktop), 1 coluna (mobile)
Cada Card:
- Ícone ou Mini-ilustração (top)
- Título (bold, 18-20px)
- Descrição (14px, 2-3 linhas)
- Screenshot/Preview (fill card)
- Hover effect: shadow + scale + background

Animação: Reveal ao scroll
Espaçamento: 24px entre cards
```

### **5. Social Proof**
```
Elementos:
- Número: "100+ petshops já usam"
- Testimonials: 2-3 quotes com avatar
- Logo de clientes (se tiver)
- Rating: ⭐⭐⭐⭐⭐ 4.9/5
```

### **6. Pricing Section (3 Planos)**
```
Planos:
1. FREE
   - R$ 0/mês
   - 3-4 features básicas
   - "Começar grátis"

2. PRO (★ Destacado como "MAIS POPULAR")
   - R$ 99/mês
   - 8-10 features completas
   - "Começar 7 dias grátis"
   - Maior, com shadow destaque

3. ENTERPRISE
   - "Preço personalizado"
   - Todas as features + suporte
   - CTA "Fale conosco"

Cada feature com checkmark ✓
Mobile: Cards stackados
```

### **7. FAQ (Perguntas Comuns)**
```
Padrão: Accordion colapsível
Perguntas sugeridas:
- Como funciona o agente IA?
- Quanto tempo leva para começar?
- Quais dados do meu petshop preciso fornecer?
- Vocês trabalham com Google Calendar?
- Como é o suporte?
- Posso cancelar anytime?
- É seguro? (LGPD)
```

### **8. CTA Final (Email Capture)**
```
Fundo: Gradient ou cor destaque
Headline: "Comece 7 dias grátis. Sem cartão de crédito."
Form:
- Input email (placeholder: "seu@email.com")
- Botão "Quero Começar"

Validação: Zod email validation
API: POST /api/waitlist
Estados: idle → loading → success → error
Success msg: "Email capturado! Confira sua inbox"
Erro msg: "Erro ao processar. Tente novamente"
```

### **9. Footer**
```
4 Colunas (desktop), 1 (mobile):
1. Logo + descrição + social links
2. Produto (Recursos, Preços, Documentação)
3. Empresa (Sobre, Blog, Contato)
4. Legal (Privacidade, Termos, LGPD)

Bottom: Copyright © 2025 Pethour. Todos os direitos.
Background: Dark (#1A1A1A)
Text: Light (#F5F5F5)
```

---

## 🔒 LGPD - Conformidade Obrigatória

### **Na Landing Page:**
- ✅ Link "Política de Privacidade" no footer
- ✅ Link "Termos de Serviço" no footer
- ✅ Checkbox "Li e aceito a política de privacidade" no form de email
- ✅ Mensagem clara: "Seus dados estão 100% seguros com a gente"
- ✅ Email de confirmação explica uso de dados

### **No Backend (Fase 2):**
- ✅ API salva `lgpdConsentAt` (timestamp do consentimento)
- ✅ Criptografia de dados sensíveis
- ✅ Direito ao esquecimento (delete)
- ✅ Audit logs de acesso

---

## 💻 Stack Técnico (NÃO MUDE)

```javascript
Frontend:
✅ Next.js 15 (App Router)
✅ TypeScript
✅ Tailwind CSS
✅ Shadcn/UI (componentes prontos)
✅ Framer Motion (animações)
✅ React Hook Form (forms)
✅ Zod (validação schemas)
✅ Lucide Icons (ícones)

Backend (Fase 1 - Simples):
✅ Next.js API Routes
✅ Resend (envio de emails)
✅ Env vars para config

Hospedagem:
✅ Vercel (frontend + backend)

Email:
✅ Resend para capturar e enviar emails
```

---

## 📋 Padrões de Código (Obrigatório)

### **✅ FAÇA ASSIM:**

```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Email inválido'),
});

export default function EmailCapture() {
  const { register, handleSubmit, formState: { isLoading } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    // Handle response
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} placeholder="seu@email.com" />
      <Button disabled={isLoading}>Enviar</Button>
    </form>
  );
}
```

### **❌ NÃO FAÇA:**
```typescript
❌ Class components (use functional)
❌ Redux (use React Query ou Zustand)
❌ Styled-components (use Tailwind)
❌ CommonJS (use ES modules)
❌ CSS modules complexos (use Tailwind classes)
```

### **Convenções de Arquivo:**
```
✅ src/components/sections/HeroSection.tsx
✅ src/components/ui/Button.tsx (Shadcn)
✅ src/lib/api.ts
✅ src/lib/validation.ts (Zod schemas)
✅ src/app/page.tsx
✅ src/app/api/waitlist/route.ts

❌ src/components/Hero.jsx
❌ src/components/hero.tsx (lowercase)
❌ src/utils/utils.ts (muito genérico)
```

---

## 📸 Quando Você Enviar Uma Imagem

### **Padrão de Prompt:**

```
[VOCÊ ANEXA SCREENSHOT/PRINT]

Seu prompt:
"Analise essa landing page. Me diga:
1. Quais componentes visuais vejo aqui?
2. Como é o layout (grid, flex)?
3. Qual é a paleta de cores?
4. Como podemos adaptar isso para Pethour?
5. Gere código TypeScript para replicar esse estilo"
```

### **O que Espero que Copilot Responda:**
1. ✅ Descrição do layout, cores, tipografia
2. ✅ Identificação de padrões CSS/flex/grid
3. ✅ Análise de animações (se tiver)
4. ✅ Sugestões de adaptação para Pethour
5. ✅ Código TypeScript pronto (copiar/colar)
6. ✅ Avisos sobre acessibilidade e responsividade

---

## 🔤 Copywriting - Headlines Aprovadas

### **Hero Section:**
```
Headline:
"Aumente suas conversões com IA inteligente"

Subheadline:
"Cotações automáticas, preços dinâmicos e agendamentos 
sem esforço. Seu assistente IA está aqui para vender mais."
```

### **Feature Headlines:**
```
1. "Agente IA que cotiza em segundos"
   Descrição: "Seu cliente não espera mais. IA responde 24/7."

2. "Google Calendar integrado automaticamente"
   Descrição: "Agendamentos sincronizados em tempo real."

3. "Dashboard para controlar tudo"
   Descrição: "Visualize dados, gerencie preços e serviços."

4. "Aumente conversão garantido"
   Descrição: "Petshops nossos clientes vendem 40% mais."
```

### **CTA Headlines:**
```
"Comece 7 dias grátis. Sem cartão de crédito."
"Junte-se a 100+ petshops que já aumentaram suas vendas"
```

---

## 🎬 Workflow: Como Trabalhar Comigo (Copilot)

### **Fluxo Recomendado:**

```
PASSO 1️⃣
Você: "Siga as instruções em COPILOT_BRIEFING.md"
Copilot: "Entendi. Estou pronto para ajudar."

PASSO 2️⃣
Você: [ENVIA SCREENSHOT] "Analise essa landing"
Copilot: Descreve design, cores, padrões, sugestões

PASSO 3️⃣
Você: "Gere o código TypeScript para [componente]"
Copilot: Fornece código pronto para copiar/colar

PASSO 4️⃣
Você testa localmente (npm run dev)

PASSO 5️⃣
Você: "Mude [coisa] de [valor antigo] para [novo]"
Copilot: Ajusta o código

PASSO 6️⃣
Repeat até componente estar pronto

PASSO 7️⃣
Deploy em Vercel quando pronto
```

---

## 📝 Prompts Efetivos (Copiar/Colar)

### **Template 1: Análise de Imagem**
```
[ENVIA SCREENSHOT]

"Seguindo COPILOT_BRIEFING.md, analise essa landing page:
1. Descreva o hero section (layout, cores, tipografia)
2. Quais padrões de grid/flex estão sendo usados?
3. Há animações? Quais?
4. Como adaptamos para Pethour?
5. Forneça código React/Tailwind para replicar"
```

### **Template 2: Novo Componente**
```
"Crie um componente [NOME] em TypeScript com:
- [Requisito 1]
- [Requisito 2]
- [Requisito 3]
- Responsivo (mobile-first)
- Use Tailwind CSS classes
- Use Shadcn UI para [componentes]
- Adicione animações com Framer Motion
- Export default"
```

### **Template 3: Iteração/Ajuste**
```
"No componente [NOME]:
- Mude a cor do botão de [cor antiga] para [cor nova]
- Aumenta o tamanho da headline para 56px
- Adicione hover effect no card
- Teste responsividade"
```

### **Template 4: Troubleshooting**
```
"O código deu erro: [mensagem].
Debug para mim. Qual é o problema?"
```

---

## 🎯 Exemplos de Perguntas Que Você Pode Fazer

```
Design:
- "Qual cor combina melhor: azul ou verde?"
- "Essa font é legível em mobile?"
- "Como adicionar animação de scroll nesse card?"
- "Qual é o espaçamento ideal entre sections?"

Código:
- "Gere um navbar sticky com Tailwind"
- "Como fazer um form com validação Zod?"
- "Integre Framer Motion nesse componente"
- "Torne esse card responsivo"

UX/Conversão:
- "Qual CTA converte mais: 'Começar' ou 'Tentar Grátis'?"
- "Esse copy é claro o suficiente?"
- "Adicione urgência (FOMO) nessa section"
```

---

## ✅ Checklist de Desenvolvimento

### **Semana 1: Setup + Navbar + Hero**
- [ ] Projeto Next.js criado
- [ ] Tailwind + Shadcn configurados
- [ ] Navbar completa e testada
- [ ] Hero Section completa
- [ ] Imagem/screenshot adicionada
- [ ] Deploy teste em Vercel

### **Semana 2: Features + Pricing + CTA**
- [ ] Features Section (4 cards)
- [ ] Pricing Section (3 planos)
- [ ] Social Proof Section
- [ ] FAQ accordion
- [ ] Email Capture Form
- [ ] Footer completa

### **Semana 3: Polish + Launch**
- [ ] Testes de responsividade (mobile, tablet, desktop)
- [ ] Performance optimization (Lighthouse)
- [ ] SEO meta tags e Open Graph
- [ ] Política de privacidade página
- [ ] Email de confirmação pronto
- [ ] Domínio pethour.ai conectado
- [ ] **LIVE!** 🎉

---

## 🚀 Primeiros Comandos para Começar

```bash
# 1. Criar projeto
npx create-next-app@latest pethour-landing \
  --typescript \
  --tailwind \
  --app

# 2. Entrar na pasta
cd pethour-landing

# 3. Instalar Shadcn
npx shadcn-ui@latest init

# 4. Instalar componentes Shadcn que vai usar
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add card
npx shadcn-ui@latest add form

# 5. Instalar dependências adicionais
npm install resend zod react-hook-form framer-motion axios

# 6. Iniciar servidor
npm run dev

# Acesse: http://localhost:3000
```

---

## 🔧 API Route para Captura de Emails

**Arquivo: `src/app/api/waitlist/route.ts`**

```typescript
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  email: z.string().email('Email inválido'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = emailSchema.parse(body);

    // Enviar para você
    await resend.emails.send({
      from: 'noreply@pethour.ai',
      to: 'seu-email@pethour.ai',
      subject: `🎉 Novo lead: ${email}`,
      html: `<h2>Novo cliente interessado!</h2><p>${email}</p>`,
    });

    // Enviar confirmação ao cliente
    await resend.emails.send({
      from: 'noreply@pethour.ai',
      to: email,
      subject: 'Bem-vindo ao Pethour!',
      html: `<p>Obrigado! Em breve enviaremos mais informações.</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Erro ao processar' }, { status: 500 });
  }
}
```

---

## ⚠️ Quando Escalar para Seu Consultor (Eu)

Se Copilot disser que não sabe:
- ❌ Decisão de arquitetura complexa
- ❌ Integração com seu agente IA
- ❌ Conformidade legal LGPD completa
- ❌ Estratégia de pricing/modelo de negócio
- ❌ Problemas de performance avançados

**Chame seu consultor quando tiver dúvidas estratégicas.**

---

## 📞 Troubleshooting Rápido

### **Se Copilot disser algo errado:**
```
"Releia COPILOT_BRIEFING.md. Eu quero usar Tailwind, não CSS modules."
"Use Shadcn Button, não HTML button nativo."
"Prefiro Framer Motion para animações."
```

### **Se o código não funcionar:**
```
"Esse código deu erro: [mensagem]. Debug para mim."
"Teste esse componente em localhost primeiro."
```

---

## 🎁 Último Checklist Antes de Começar

- ✅ Arquivo `COPILOT_BRIEFING.md` na raiz do projeto
- ✅ GitHub Copilot instalado e ativo no VS Code
- ✅ Node.js 18+ instalado
- ✅ npm ou yarn pronto
- ✅ Conta Resend criada (para emails)
- ✅ Domínio pethour.ai apontando para Vercel (depois)
- ✅ Prints de landing pages legais prontos para enviar

---

## 🎉 Comece Agora!

**Próximos passos:**

1. Copie este arquivo para a raiz do seu projeto como `COPILOT_BRIEFING.md`
2. Abra GitHub Copilot no VS Code
3. Escreva: `"Siga as instruções em COPILOT_BRIEFING.md"`
4. Comece enviando prints de landing pages que você gostou
5. Peça: `"Analise essa imagem seguindo COPILOT_BRIEFING.md"`
6. Iteração + desenvolvimento rápido

**Boa sorte! 🚀 Você tem tudo que precisa para construir uma landing page premium!**

---

## 📚 Referências Rápidas

**Documentações:**
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Shadcn/UI: https://ui.shadcn.com
- Framer Motion: https://www.framer.com/motion
- Zod: https://zod.dev
- Resend: https://resend.com/docs

**Design Inspiration:**
- Dribbble: https://dribbble.com
- Awwwards: https://www.awwwards.com
- Are.na: https://www.are.na
- Mobbin: https://mobbin.com

---