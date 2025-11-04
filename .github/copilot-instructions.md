# Instruções para agentes (Copilot / AI)

Resumo rápido
- Repositório mínimo inicial: contém `README.md`, `.gitignore`, `LICENSE` e está conectado ao remoto `origin` (branch `main`).
- O propósito aparente: "Pethour.AI" — projeto relacionado a pets/horários; porém a stack/arquitetura ainda não foram adicionadas.

Objetivo destas instruções
- Ajudar um agente a ser produtivo imediatamente: quais arquivos ler, que perguntas fazer, e convenções locais a seguir.

O que ler primeiro
1. `README.md` — visão geral do projeto e links para o remoto.
2. `.gitignore` — padrão para Node/Python presente.
3. `LICENSE` — uso da licença MIT.

Observações de arquitetura (estado atual)
- Não há código fonte no repositório. Antes de modificar a arquitetura, confirme a stack com o mantenedor.
- Recomenda-se perguntar: "Qual stack preferida? (Node+TS / FastAPI / outro)". Use a resposta para scaffolder o projeto.

Workflows e comandos práticos
- Git: o repositório tem `origin` configurado para `https://github.com/renatotales3/Pethour.AI.git` e branch principal `main`.
  - Configure identidade de commit global se necessário: `git config --global user.name "Seu Nome"` e `git config --global user.email "seu@email"`.
  - Fluxo recomendado para mudanças: criar branch descritiva `feature/<curto-descritivo>` ou `fix/<issue-numero>` e abrir PR contra `main`.
- Ao adicionar scaffold, inclua `README.md` atualizado com comandos "how to run" e um `README.dev` ou seção "developer workflows".

Padrões e convenções locais (detectáveis)
- Branch principal é `main`.
- Commits curtos e com prefixo (ex.: `feat:`, `fix:`) são preferíveis para clareza ao revisar PRs.
- Arquivos atuais sugerem suporte para Node e Python (padrões no `.gitignore`). Quando adicionar código, siga convenções da stack escolhida (p.ex. `src/` para Node/TS).

Integrações e pontos de atenção
- Remote GitHub já criado; nenhum workflow CI presente ainda. Se for adicionar GitHub Actions, coloque em `.github/workflows/` com um job `lint-test-build` simples.
- Se você adicionar dependências externas (APIs, DBs, provedores de autenticação), documente variáveis em `.env.example` e não as commite.

Exemplos de instruções específicas para tarefas comuns
- Scaffold Node + TypeScript API mínima:
  - Criar `package.json`, `tsconfig.json`, `src/index.ts`, `README.md` com `npm run dev` (usando `nodemon`), e testes em `tests/`.
  - Adicionar `.github/workflows/ci.yml` com jobs: install, lint, test, build.
- Scaffold FastAPI (Python):
  - Criar `pyproject.toml` ou `requirements.txt`, `app/` com `main.py`, e `tests/` com pytest.

Como o agente deve pedir esclarecimentos (quando necessário)
- "Qual stack preferido para o scaffold inicial?" (Node+TS / FastAPI / outro)
- "Quais integrações externas (DB, serviços de terceiros, hospedagem) serão necessárias?"
- "Deseja CI/CD automático (GitHub Actions) no push para main ou apenas PR checks?"

Regra mínima de segurança e privacidade
- Nunca commitar chaves, tokens ou `.env` com segredos. Se encontrar segredos, avise o mantenedor imediatamente.

Resumo curto de checklist para agentes ao começar uma tarefa
- [ ] Confirmar stack com o mantenedor.
- [ ] Criar branch `feature/...`.
- [ ] Atualizar `README.md` com comandos de build/run/test.
- [ ] Adicionar `.env.example` se houver variáveis de ambiente.
- [ ] Adicionar GitHub Actions básico (opcional, mas recomendado).

Seções que podem ser ampliadas com acesso ao código
- Exemplos de padrões de código, layers (controllers/services/repositories), contratos de API, e convenções de logging/erros — adicionar assim que houver código.

Peça de feedback
- Se algo aqui estiver incompleto ou impreciso, diga quais padrões/arquitetura você planeja usar e eu ajusto estas instruções para corresponder exatamente ao projeto.
