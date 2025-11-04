# 🎨 Configuração do MCP Figma

## O que é MCP Figma?

O **Model Context Protocol (MCP) do Figma** permite que o GitHub Copilot acesse diretamente seus designs do Figma, facilitando a conversão de designs em código React/TypeScript.

## 📦 Instalação

✅ Pacote já instalado: `figma-mcp@0.1.4`

```bash
npm install -D figma-mcp
```

## 🔑 Obter Token de Acesso do Figma

### Passo 1: Gerar Token
1. Acesse: https://www.figma.com/developers/api#access-tokens
2. Faça login na sua conta Figma
3. Clique em "Get personal access token"
4. Dê um nome descritivo (ex: "Pethour Landing Page - MCP")
5. Copie o token gerado (você só verá uma vez!)

### Passo 2: Adicionar ao .env
```bash
# .env
FIGMA_ACCESS_TOKEN=figd_seu_token_aqui_muito_longo
```

⚠️ **IMPORTANTE:** O `.env` já está no `.gitignore` - nunca commite suas chaves!

## 🚀 Como Usar com GitHub Copilot

### Método 1: Via Chat do Copilot
```
Copilot, usando o MCP do Figma, me traga o design desta URL:
https://www.figma.com/file/ABC123/Pethour-Landing?node-id=1:2
```

### Método 2: Buscar Componente Específico
```
@figma busque o componente "Hero Section" do arquivo Pethour Landing
```

### Método 3: Gerar Código a partir do Design
```
Copilot, pegue o design do Figma [URL] e gere o código React/TypeScript
usando Tailwind CSS conforme as instruções em copilot-instructions.md
```

## 📋 Comandos Úteis

### Listar Arquivos Figma (se tiver acesso)
```bash
npx figma-mcp list-files
```

### Exportar Assets
```bash
npx figma-mcp export --file-key ABC123 --node-id 1:2
```

## 🔗 URLs do Figma

O formato das URLs do Figma é:
```
https://www.figma.com/file/{FILE_KEY}/{FILE_NAME}?node-id={NODE_ID}
```

Exemplo:
```
https://www.figma.com/file/ABC123XYZ/Pethour-Landing?node-id=1:2
```

Onde:
- `FILE_KEY`: ABC123XYZ
- `NODE_ID`: 1:2

## 🎯 Fluxo de Trabalho Recomendado

1. **Design no Figma:** Crie seus designs no Figma
2. **Compartilhe:** Obtenha o link do arquivo/componente
3. **MCP:** Use Copilot para buscar o design via MCP
4. **Código:** Copilot gera código React/Tailwind baseado no design
5. **Refinamento:** Ajuste conforme necessário

## 📚 Recursos

- **Documentação MCP Figma:** https://github.com/modelcontextprotocol/servers/tree/main/src/figma
- **API Figma:** https://www.figma.com/developers/api
- **Figma para Desenvolvedores:** https://help.figma.com/hc/en-us/articles/360039958934

## 🐛 Troubleshooting

### Erro: "Invalid token"
- Verifique se copiou o token completo (começa com `figd_`)
- Regenere o token no Figma se necessário
- Confirme que está no arquivo `.env` correto

### Erro: "File not found"
- Verifique se você tem acesso ao arquivo no Figma
- Confirme que o FILE_KEY está correto na URL
- O arquivo deve estar na sua conta ou workspace

### Erro: "Node not found"
- Verifique o NODE_ID na URL (formato: `1:2` ou `123:456`)
- Certifique-se de que o nó existe no arquivo

## 💡 Dicas

✅ **Use para:** Converter designs Figma em código rapidamente
✅ **Use para:** Manter consistência visual entre design e código
✅ **Use para:** Extrair specs (cores, espaçamentos, tipografia)
❌ **Não use para:** Substituir completamente seu processo de design
❌ **Não use para:** Designs muito complexos (ajustes manuais serão necessários)

## 🔐 Segurança

- ✅ `.env` está no `.gitignore`
- ✅ Nunca compartilhe seu token publicamente
- ✅ Revogue tokens antigos se comprometidos
- ✅ Use tokens diferentes para projetos diferentes (opcional)

---

**Status:** ✅ MCP Figma instalado e pronto para uso!  
**Próximo passo:** Adicione seu `FIGMA_ACCESS_TOKEN` no arquivo `.env`
