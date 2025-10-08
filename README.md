# TaskLab

Um sistema simples de to-do list desenvolvido com Next.js, focado em testes de sistema e testes unitários.

## 📋 Sobre o Projeto

Este projeto foi criado com ênfase em **testes automatizados**, incluindo:
- ✅ **Testes Unitários** com Jest e React Testing Library
- ✅ **Testes de Sistema (E2E)** com Playwright
- ✅ Estrutura completa de testes documentados

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Instalar navegadores do Playwright (para testes E2E)
npx playwright install
```

### Executar a Aplicação

```bash
# Modo desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🧪 Executar Testes

```bash
# Testes Unitários (Jest)
npm run test
npm run test:watch

# Testes E2E (Playwright)
npm run test:e2e
npm run test:e2e:ui
```

📖 **[Documentação Completa de Testes](./TESTS.md)** - Veja o guia detalhado de todos os testes

## 📁 Estrutura do Projeto

```
TaskLab/
├── app/              # Páginas e layouts Next.js
├── components/       # Componentes React reutilizáveis
├── utils/            # Funções utilitárias
├── __tests__/        # Testes unitários
│   ├── components/   # Testes de componentes
│   └── utils/        # Testes de utilitários
└── e2e/              # Testes end-to-end (Playwright)
```

## 🎯 Funcionalidades Planejadas

- [ ] Adicionar, editar e excluir tarefas
- [ ] Marcar tarefas como concluídas
- [ ] Filtrar tarefas (todas, ativas, concluídas)
- [ ] Buscar tarefas por texto
- [ ] Persistência com LocalStorage
- [ ] Interface responsiva
- [ ] Totalmente acessível

## 🛠️ Tecnologias

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilo**: Tailwind CSS
- **Testes Unitários**: Jest + React Testing Library
- **Testes E2E**: Playwright
- **Lint**: ESLint

## 📚 Aprender Mais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Guia de Testes](./TESTS.md)
- [Jest Documentation](https://jestjs.io/)
- [Playwright Documentation](https://playwright.dev/)
