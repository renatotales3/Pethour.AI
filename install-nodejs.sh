#!/bin/bash

# Script de instalação do Node.js e dependências do Pethour.AI
# Execute com: bash install-nodejs.sh

set -e  # Para em caso de erro

echo "🚀 Instalando Node.js e dependências do Pethour.AI..."
echo ""

# Detectar distribuição Linux
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
    VERSION=$VERSION_ID
else
    echo "❌ Não foi possível detectar a distribuição Linux"
    exit 1
fi

echo "📦 Sistema detectado: $OS $VERSION"
echo ""

# Instalar Node.js baseado na distribuição
case $OS in
    ubuntu|debian|pop)
        echo "📥 Instalando Node.js 20.x LTS via NodeSource..."
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
        ;;
    
    fedora)
        echo "📥 Instalando Node.js via DNF..."
        sudo dnf install -y nodejs npm
        ;;
    
    rhel|centos|rocky|almalinux)
        echo "📥 Instalando Node.js 20.x LTS via NodeSource..."
        curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
        sudo yum install -y nodejs
        ;;
    
    arch|manjaro)
        echo "📥 Instalando Node.js via Pacman..."
        sudo pacman -S --noconfirm nodejs npm
        ;;
    
    opensuse*)
        echo "📥 Instalando Node.js via Zypper..."
        sudo zypper install -y nodejs npm
        ;;
    
    *)
        echo "❌ Distribuição '$OS' não suportada automaticamente"
        echo "Por favor, instale Node.js 18+ manualmente:"
        echo "  https://nodejs.org/"
        exit 1
        ;;
esac

echo ""
echo "✅ Node.js instalado!"
node --version
npm --version

echo ""
echo "📦 Instalando dependências do projeto..."
cd "$(dirname "$0")"
npm install

echo ""
echo "✅ Tudo pronto!"
echo ""
echo "🚀 Para rodar o projeto:"
echo "   npm run dev"
echo ""
echo "🌐 Acesse: http://localhost:3000"
