#!/bin/bash

# Script auxiliar para rodar comandos npm com NVM no VS Code Flatpak
# Use: ./dev.sh [comando]
# Exemplos:
#   ./dev.sh          # Inicia servidor de desenvolvimento
#   ./dev.sh build    # Cria build de produção
#   ./dev.sh lint     # Executa linter

# Carregar NVM
export NVM_DIR="$HOME/.var/app/com.visualstudio.code/config/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Ir para diretório do projeto
cd "$(dirname "$0")"

# Comando padrão é 'dev'
COMANDO="${1:-dev}"

case "$COMANDO" in
    dev)
        echo "🚀 Iniciando servidor de desenvolvimento..."
        npm run dev
        ;;
    build)
        echo "🏗️  Criando build de produção..."
        npm run build
        ;;
    start)
        echo "▶️  Iniciando servidor de produção..."
        npm run start
        ;;
    lint)
        echo "🔍 Executando linter..."
        npm run lint
        ;;
    install)
        echo "📦 Instalando dependências..."
        npm install
        ;;
    *)
        echo "📝 Executando: npm run $COMANDO"
        npm run "$COMANDO"
        ;;
esac
