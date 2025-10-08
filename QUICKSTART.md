# 🚀 Guia de Início Rápido - TaskLab

## Bem-vindo ao TaskLab!

Este projeto foi configurado com uma estrutura completa de testes para um sistema de To-Do List em Next.js. Todos os arquivos de teste já foram criados e estão documentados, prontos para você implementar o código seguindo o Test-Driven Development (TDD).

## ⚡ Configuração Inicial

### 1. Instalar Dependências

```bash
npm install
```

### 2. Instalar Navegadores do Playwright (para testes E2E)

```bash
npx playwright install
```

## 🎯 Fluxo de Desenvolvimento TDD

### Passo 1: Escolher um Teste
Comece pelos testes unitários mais simples:
- `__tests__/utils/todoUtils.test.ts` - Funções utilitárias
- `__tests__/components/TodoItem.test.tsx` - Componente mais simples

### Passo 2: Implementar o Código Mínimo
1. Remova o comentário `// TODO: Implementar teste`
2. Implemente a lógica do teste
3. Execute o teste: `npm run test`
4. Veja o teste falhar (RED) ❌

### Passo 3: Fazer o Teste Passar
1. Crie o componente/função necessária
2. Implemente a funcionalidade mínima
3. Execute novamente: `npm run test`
4. Veja o teste passar (GREEN) ✅

### Passo 4: Refatorar
1. Melhore o código mantendo os testes passando
2. Execute novamente para garantir que nada quebrou

## 📁 Ordem Recomendada de Implementação

### Fase 1: Utilitários Básicos (2-3 horas)
```
1. utils/todoUtils.ts
   - generateTodoId()
   - validateTodoData()
   - getActiveCount()
   
2. Testes: __tests__/utils/todoUtils.test.ts
```

### Fase 2: Persistência (1-2 horas)
```
3. utils/localStorage.ts
   - saveTodosToStorage()
   - loadTodosFromStorage()
   - clearTodosFromStorage()
   
4. Testes: __tests__/utils/localStorage.test.ts
```

### Fase 3: Componentes Básicos (3-4 horas)
```
5. components/TodoItem.tsx
   - Renderização
   - Toggle completion
   - Edição inline
   - Exclusão
   
6. Testes: __tests__/components/TodoItem.test.tsx
```

### Fase 4: Formulário (2-3 horas)
```
7. components/TodoForm.tsx
   - Campos de entrada
   - Validações
   - Submissão
   
8. Testes: __tests__/components/TodoForm.test.tsx
```

### Fase 5: Lista Completa (3-4 horas)
```
9. components/TodoList.tsx
   - Renderização de múltiplos itens
   - Filtros
   - Contador
   
10. Testes: __tests__/components/TodoList.test.tsx
```

### Fase 6: Integração na Página (1-2 horas)
```
11. app/page.tsx
    - Integrar todos os componentes
    - Estado global
    - Persistência automática
```

### Fase 7: Testes E2E (2-3 horas)
```
12. Implementar testes E2E
    - e2e/home.spec.ts
    - e2e/todo-crud.spec.ts
    - e2e/filters-and-search.spec.ts
    - e2e/persistence.spec.ts
    - e2e/performance-and-edge-cases.spec.ts
```

**Tempo total estimado: 14-21 horas**

## 🧪 Comandos de Teste

### Testes Unitários

```bash
# Executar todos os testes unitários
npm run test

# Modo watch (re-executa ao salvar)
npm run test:watch

# Com cobertura de código
npm run test -- --coverage

# Teste específico
npm run test TodoItem.test.tsx

# Modo verbose (mais detalhes)
npm run test -- --verbose
```

### Testes E2E

```bash
# Executar todos os testes E2E
npm run test:e2e

# Com interface visual (recomendado)
npm run test:e2e:ui

# Apenas um arquivo
npx playwright test home.spec.ts

# Em modo debug (passo a passo)
npx playwright test --debug

# Navegador específico
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 💻 Comandos de Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm run start

# Verificar erros de lint
npm run lint
```

## 📖 Documentação

| Documento | Descrição |
|-----------|-----------|
| [README.md](./README.md) | Visão geral do projeto |
| [TESTS.md](./TESTS.md) | Guia completo de testes |
| [TEST_SCENARIOS.md](./TEST_SCENARIOS.md) | Lista de todos os 150+ cenários |
| Este arquivo | Guia de início rápido |

## 🎨 Exemplo de Implementação

### 1. Escolha um Teste Simples

Arquivo: `__tests__/utils/todoUtils.test.ts`

```typescript
test('deve gerar ID único', () => {
  // TODO: Implementar teste  ← Remova este comentário
  const id1 = generateTodoId();
  const id2 = generateTodoId();
  expect(id1).toBeDefined();
  expect(id2).toBeDefined();
  expect(id1).not.toBe(id2);
});
```

### 2. Crie a Função

Arquivo: `utils/todoUtils.ts` (criar novo)

```typescript
export function generateTodoId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
```

### 3. Execute o Teste

```bash
npm run test todoUtils.test.ts
```

### 4. Veja o Teste Passar! ✅

## 🎯 Próximos Passos

1. ✅ **Leia este guia completo**
2. ✅ **Leia [TESTS.md](./TESTS.md)** para entender a estrutura
3. ✅ **Execute `npm run test`** para ver os testes (vão falhar, é esperado!)
4. ✅ **Comece implementando** `utils/todoUtils.ts`
5. ✅ **Faça um teste passar por vez**
6. ✅ **Commit frequentemente** após cada teste passar

## 💡 Dicas

### 🟢 Boas Práticas
- ✅ Faça commits pequenos e frequentes
- ✅ Um teste por vez
- ✅ Leia o comentário TODO antes de implementar
- ✅ Mantenha os testes simples e legíveis
- ✅ Execute os testes frequentemente

### 🔴 Evite
- ❌ Implementar múltiplas funcionalidades de uma vez
- ❌ Escrever código sem ter um teste
- ❌ Modificar os testes para fazer passar (implemente a funcionalidade!)
- ❌ Pular a fase de refatoração
- ❌ Commitar código que não passa nos testes

## 🆘 Problemas Comuns

### Teste não encontra módulo
**Problema**: `Cannot find module './TodoItem'`

**Solução**: Crie o arquivo com um componente/função básica primeiro:
```typescript
// components/TodoItem.tsx
export default function TodoItem() {
  return <div>TODO</div>;
}
```

### Testes E2E falham
**Problema**: Playwright não inicia

**Solução**: 
```bash
npx playwright install
npm run dev  # Em outro terminal
npm run test:e2e
```

### Build falha
**Problema**: Erros de TypeScript

**Solução**:
```bash
npm run build  # Ver erros específicos
# Corrija os tipos conforme necessário
```

## 📚 Recursos Úteis

- [Jest Docs](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Docs](https://playwright.dev/)
- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing)
- [TDD Guide](https://testdriven.io/blog/modern-tdd/)

## 🎉 Conclusão

Você agora tem tudo que precisa para começar! A estrutura está pronta, os testes estão documentados, e você só precisa implementar o código.

**Lembre-se**: O objetivo é aprender TDD e praticar testes. Não se preocupe em fazer perfeito na primeira vez. Aprenda, itere, e divirta-se!

---

**Boa codificação! 🚀**
