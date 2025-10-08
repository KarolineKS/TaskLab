# Guia de Testes - TaskLab

## Visão Geral

Este projeto contém uma estrutura completa de testes para um sistema de To-Do List em Next.js, com foco em:
- **Testes Unitários** (Jest + React Testing Library)
- **Testes de Sistema/E2E** (Playwright)

## Estrutura de Arquivos de Teste

```
TaskLab/
├── __tests__/                    # Testes Unitários
│   ├── components/               # Testes de componentes React
│   │   ├── TodoItem.test.tsx    # Testes do componente de item individual
│   │   ├── TodoList.test.tsx    # Testes da lista de tarefas
│   │   └── TodoForm.test.tsx    # Testes do formulário de adição
│   └── utils/                    # Testes de funções utilitárias
│       ├── todoUtils.test.ts    # Testes de filtros, validação, etc
│       └── localStorage.test.ts  # Testes de persistência
│
└── e2e/                          # Testes End-to-End (Sistema)
    ├── home.spec.ts              # Testes da página inicial
    ├── todo-crud.spec.ts         # Testes de operações CRUD
    ├── filters-and-search.spec.ts # Testes de filtros e busca
    ├── persistence.spec.ts       # Testes de persistência
    └── performance-and-edge-cases.spec.ts # Testes de performance
```

## Testes Unitários

### Componentes Testados

#### TodoItem.test.tsx
Testes para o componente que representa um item individual da lista:
- ✅ Renderização do item com título e descrição
- ✅ Marcação/desmarcação como concluído
- ✅ Exclusão de item
- ✅ Edição de item
- ✅ Estilos aplicados baseados no estado

#### TodoList.test.tsx
Testes para o componente que gerencia a lista completa:
- ✅ Renderização de lista vazia
- ✅ Renderização de múltiplos itens
- ✅ Filtros (todas, ativas, concluídas)
- ✅ Contador de tarefas ativas
- ✅ Ordenação de tarefas

#### TodoForm.test.tsx
Testes para o formulário de adição de tarefas:
- ✅ Renderização dos campos do formulário
- ✅ Validação de campos obrigatórios
- ✅ Submissão de nova tarefa
- ✅ Limpeza após submissão
- ✅ Validação de tamanho máximo

### Utilitários Testados

#### todoUtils.test.ts
Testes para funções auxiliares:
- ✅ Filtros de tarefas (all, active, completed)
- ✅ Validação de dados
- ✅ Formatação de datas
- ✅ Geração de IDs únicos
- ✅ Contador de tarefas ativas

#### localStorage.test.ts
Testes para persistência de dados:
- ✅ Salvar tarefas no localStorage
- ✅ Carregar tarefas do localStorage
- ✅ Tratamento de erros
- ✅ Tamanho do armazenamento

### Executar Testes Unitários

```bash
# Executar todos os testes unitários
npm run test

# Executar em modo watch (re-executa ao salvar arquivos)
npm run test:watch

# Executar com cobertura de código
npm run test -- --coverage

# Executar testes específicos
npm run test TodoItem.test.tsx
```

## Testes End-to-End (Sistema)

### Arquivos de Teste E2E

#### home.spec.ts
Testes da página inicial:
- ✅ Carregamento da aplicação
- ✅ Elementos principais visíveis
- ✅ Responsividade
- ✅ Acessibilidade básica

#### todo-crud.spec.ts
Testes de operações CRUD completas:
- ✅ Adicionar tarefas (com validações)
- ✅ Visualizar lista de tarefas
- ✅ Marcar/desmarcar como concluída
- ✅ Editar tarefas existentes
- ✅ Excluir tarefas (com confirmação)

#### filters-and-search.spec.ts
Testes de filtros e busca:
- ✅ Filtrar por status (todas/ativas/concluídas)
- ✅ Busca por texto
- ✅ Ordenação de tarefas
- ✅ Limpeza de tarefas concluídas

#### persistence.spec.ts
Testes de persistência:
- ✅ Salvamento automático no localStorage
- ✅ Recuperação após reload
- ✅ Sincronização entre abas
- ✅ Tratamento de erros de armazenamento

#### performance-and-edge-cases.spec.ts
Testes de performance e casos extremos:
- ✅ Performance com muitas tarefas (100+)
- ✅ Validação de limites
- ✅ Prevenção de XSS
- ✅ Acessibilidade avançada
- ✅ Throttling de CPU

### Executar Testes E2E

```bash
# Instalar browsers do Playwright (primeira vez)
npx playwright install

# Executar todos os testes E2E
npm run test:e2e

# Executar com interface visual
npm run test:e2e:ui

# Executar testes específicos
npx playwright test home.spec.ts

# Executar em modo debug
npx playwright test --debug

# Executar em navegador específico
npx playwright test --project=chromium
```

## Configuração

### Jest (Testes Unitários)
Configurado em `jest.config.js`:
- Ambiente: jsdom (simula navegador)
- Setup: `jest.setup.js` carrega @testing-library/jest-dom
- Cobertura: coleta de app/ e components/
- Ignora: node_modules, .next, e2e

### Playwright (Testes E2E)
Configurado em `playwright.config.ts`:
- Múltiplos navegadores: Chromium, Firefox, WebKit
- Servidor local: inicia automaticamente com `npm run dev`
- Retries: 2 tentativas em CI
- Relatórios: HTML

## Cenários de Teste Cobertos

### Funcionalidades Principais
1. **CRUD de Tarefas**: Create, Read, Update, Delete
2. **Filtros**: Todas, Ativas, Concluídas
3. **Busca**: Por título e descrição
4. **Ordenação**: Por data, alfabética, status
5. **Persistência**: LocalStorage com sincronização

### Validações
- Título obrigatório
- Tamanho máximo de campos
- Prevenção de XSS
- Sanitização de entrada

### Acessibilidade
- Navegação por teclado
- Screen readers
- Contraste de cores
- Zoom até 200%

### Performance
- Carregamento rápido
- Renderização eficiente
- Busca instantânea
- Filtros suaves

## Implementação dos Testes

Os arquivos de teste contêm **estruturas de teste documentadas** com comentários `TODO`. 
Cada teste inclui:

1. **Descrição clara** do cenário testado
2. **Passos comentados** para implementação
3. **Expectativas** do resultado esperado

### Exemplo de Estrutura

```typescript
test('deve adicionar uma nova tarefa', async () => {
  // TODO: Implementar teste
  // 1. Navegar para a página inicial
  // 2. Preencher campo de título
  // 3. Clicar no botão "Adicionar"
  // 4. Verificar se tarefa aparece na lista
});
```

## Próximos Passos

Para implementar o sistema de To-Do List:

1. **Criar Componentes**:
   - `components/TodoItem.tsx`
   - `components/TodoList.tsx`
   - `components/TodoForm.tsx`

2. **Criar Utilitários**:
   - `utils/todoUtils.ts`
   - `utils/localStorage.ts`

3. **Implementar Testes**:
   - Remover comentários `TODO`
   - Implementar a lógica de cada teste
   - Executar e validar

4. **Desenvolver Features**:
   - Implementar componentes conforme testes
   - Garantir que testes passem
   - Adicionar estilos

## Boas Práticas

### Testes Unitários
- ✅ Testar comportamento, não implementação
- ✅ Um teste por comportamento
- ✅ Usar mocks para dependências externas
- ✅ Manter testes independentes

### Testes E2E
- ✅ Testar fluxos completos de usuário
- ✅ Usar seletores estáveis (test-id)
- ✅ Evitar dependências entre testes
- ✅ Limpar estado entre testes

## Recursos Úteis

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
- [Next.js Testing](https://nextjs.org/docs/testing)

## Suporte

Para dúvidas ou problemas:
1. Verifique a documentação das ferramentas
2. Execute testes em modo debug
3. Consulte os comentários nos arquivos de teste
