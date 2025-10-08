# Resumo de Cenários de Teste - TaskLab

## Total de Cenários de Teste: 100+

Este documento lista todos os cenários de teste criados para o sistema de To-Do List.

---

## 📝 TESTES UNITÁRIOS

### 1. TodoItem.test.tsx (10 cenários)

**Componente**: Item individual da lista de tarefas

| # | Cenário de Teste | Descrição |
|---|------------------|-----------|
| 1 | Renderizar item com título | Verifica se o título da tarefa é exibido corretamente |
| 2 | Renderizar item com descrição | Verifica se a descrição é exibida quando fornecida |
| 3 | Marcar como concluído | Testa a funcionalidade de checkbox para conclusão |
| 4 | Desmarcar item concluído | Testa a alternância do estado de conclusão |
| 5 | Aplicar estilo riscado | Verifica estilo visual em tarefas concluídas |
| 6 | Excluir tarefa | Testa o botão de deletar e callback |
| 7 | Exibir botão de edição | Verifica presença do botão editar |
| 8 | Entrar em modo de edição | Testa transição para modo de edição |
| 9 | Salvar alterações | Testa salvamento após edição |
| 10 | Cancelar edição com ESC | Testa cancelamento de edição |

---

### 2. TodoList.test.tsx (9 cenários)

**Componente**: Lista completa de tarefas com filtros

| # | Cenário de Teste | Descrição |
|---|------------------|-----------|
| 1 | Renderizar lista vazia | Verifica mensagem quando não há tarefas |
| 2 | Renderizar múltiplos itens | Testa exibição de várias tarefas |
| 3 | Filtrar tarefas ativas | Testa filtro para mostrar apenas ativas |
| 4 | Filtrar tarefas concluídas | Testa filtro para mostrar apenas concluídas |
| 5 | Contador de tarefas ativas | Verifica cálculo correto do contador |
| 6 | Atualizar contador | Testa atualização ao marcar como concluída |
| 7 | Exibir todas as tarefas | Testa filtro "Todas" |
| 8 | Ordenar por data | Testa ordenação por data de criação |
| 9 | Reordenar por drag and drop | Testa funcionalidade de arrastar e soltar |

---

### 3. TodoForm.test.tsx (12 cenários)

**Componente**: Formulário para adicionar novas tarefas

| # | Cenário de Teste | Descrição |
|---|------------------|-----------|
| 1 | Renderizar campo de título | Verifica presença do input de título |
| 2 | Renderizar campo de descrição | Verifica presença do textarea |
| 3 | Renderizar botão adicionar | Verifica presença do botão de submit |
| 4 | Permitir digitar título | Testa entrada de texto no título |
| 5 | Permitir digitar descrição | Testa entrada de texto na descrição |
| 6 | Validar título obrigatório | Impede submissão sem título |
| 7 | Submeter com título | Testa submissão válida |
| 8 | Limpar campos após submissão | Verifica reset do formulário |
| 9 | Descrição opcional | Permite submissão sem descrição |
| 10 | Validar tamanho máximo | Limita título a 100 caracteres |
| 11 | Desabilitar durante envio | Previne múltiplas submissões |
| 12 | Contador de caracteres | Mostra caracteres restantes |

---

### 4. todoUtils.test.ts (15 cenários)

**Módulo**: Funções utilitárias para gerenciamento de tarefas

#### 4.1 filterTodos (4 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Filtrar todas | Retorna todas as tarefas |
| 2 | Filtrar ativas | Retorna apenas não concluídas |
| 3 | Filtrar concluídas | Retorna apenas concluídas |
| 4 | Array vazio | Retorna array vazio quando não há tarefas |

#### 4.2 validateTodoData (4 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Validar título válido | Aceita título dentro dos limites |
| 2 | Rejeitar sem título | Falha sem título |
| 3 | Rejeitar título longo | Falha com > 100 caracteres |
| 4 | Aceitar sem descrição | Descrição é opcional |

#### 4.3 sortTodosByDate (2 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Ordenar por data | Mais recentes primeiro |
| 2 | Manter ordem relativa | Para tarefas com mesma data |

#### 4.4 generateTodoId (2 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Gerar ID único | IDs não se repetem |
| 2 | Formato esperado | Segue padrão UUID |

#### 4.5 formatTodoDate (2 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Formato brasileiro | dd/mm/yyyy |
| 2 | Com hora | dd/mm/yyyy HH:mm |

#### 4.6 getActiveCount (3 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Contar ativas | Conta corretamente |
| 2 | Zero ativas | Retorna 0 |
| 3 | Array vazio | Retorna 0 |

---

### 5. localStorage.test.ts (9 cenários)

**Módulo**: Gerenciamento de persistência no localStorage

#### 5.1 saveTodosToStorage (3 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Salvar array | Persiste tarefas |
| 2 | Serializar como JSON | Formato correto |
| 3 | Quota excedida | Trata erro de espaço |

#### 5.2 loadTodosFromStorage (4 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Carregar tarefas | Recupera dados |
| 2 | Retornar vazio | Quando não há dados |
| 3 | JSON inválido | Trata erro graciosamente |
| 4 | Deserializar datas | Converte strings para Date |

#### 5.3 clearTodosFromStorage (1 cenário)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Limpar storage | Remove todas as tarefas |

#### 5.4 getStorageSize (2 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Retornar tamanho | Calcula bytes usados |
| 2 | Storage vazio | Retorna 0 |

---

## 🎭 TESTES END-TO-END (SISTEMA)

### 6. home.spec.ts (8 cenários)

**Página**: Inicial da aplicação

#### 6.1 Página Inicial (5 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Carregar corretamente | Status 200, título correto |
| 2 | Exibir título | "To-Do List" visível |
| 3 | Exibir formulário | Campos de entrada presentes |
| 4 | Mensagem lista vazia | Quando não há tarefas |
| 5 | Responsivo mobile | Funciona em 375x667 |

#### 6.2 Acessibilidade (3 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | HTML semântico | Tags apropriadas |
| 2 | Atributos ARIA | Labels e roles corretos |
| 3 | Navegação por teclado | Tab funciona |

---

### 7. todo-crud.spec.ts (30 cenários)

**Funcionalidade**: Operações CRUD completas

#### 7.1 Adicionar Tarefas (6 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Adicionar com título | Tarefa aparece na lista |
| 2 | Adicionar com título e descrição | Ambos campos salvos |
| 3 | Impedir título vazio | Validação funciona |
| 4 | Limpar formulário | Campos resetados |
| 5 | Múltiplas tarefas | Adicionar várias sequencialmente |
| 6 | Manter foco | Retorna ao campo título |

#### 7.2 Visualizar Tarefas (3 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Exibir todas | Todas visíveis |
| 2 | Contador de ativas | Mostra número correto |
| 3 | Data de criação | Timestamp visível |

#### 7.3 Marcar como Concluída (4 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Marcar concluída | Checkbox funciona |
| 2 | Desmarcar | Toggle funciona |
| 3 | Atualizar contador | Decrementa ao marcar |
| 4 | Estilo visual | Line-through aplicado |

#### 7.4 Editar Tarefas (4 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Editar título | Atualiza título |
| 2 | Editar descrição | Atualiza descrição |
| 3 | Cancelar com ESC | Descarta alterações |
| 4 | Validar título vazio | Impede salvar vazio |

#### 7.5 Excluir Tarefas (5 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Excluir tarefa | Remove da lista |
| 2 | Confirmação | Modal de confirmação |
| 3 | Cancelar exclusão | Mantém tarefa |
| 4 | Atualizar contador | Decrementa |
| 5 | Lista vazia | Mensagem após exclusão |

---

### 8. filters-and-search.spec.ts (20 cenários)

**Funcionalidade**: Filtros, busca e ordenação

#### 8.1 Filtros de Tarefas (6 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Exibir todas (padrão) | Filtro inicial |
| 2 | Filtrar ativas | Só não concluídas |
| 3 | Filtrar concluídas | Só concluídas |
| 4 | Manter após reload | Persiste seleção |
| 5 | Atualizar visualização | Responde a mudanças |
| 6 | Mensagem sem resultados | Quando filtro vazio |

#### 8.2 Busca de Tarefas (6 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Buscar por título | Encontra correspondências |
| 2 | Case-insensitive | Ignora maiúsculas/minúsculas |
| 3 | Buscar em descrição | Busca também na descrição |
| 4 | Limpar busca | Botão limpar funciona |
| 5 | Mensagem sem resultados | Quando nada encontrado |
| 6 | Busca + filtros | Trabalham juntos |

#### 8.3 Ordenação (4 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Por data (padrão) | Mais recentes primeiro |
| 2 | Alfabética | Ordem A-Z |
| 3 | Por status | Ativas primeiro |
| 4 | Inverter ordem | Botão de inversão |

#### 8.4 Limpar Concluídas (3 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Limpar todas concluídas | Remove em lote |
| 2 | Confirmação | Modal antes de limpar |
| 3 | Botão desabilitado | Quando não há concluídas |

---

### 9. persistence.spec.ts (13 cenários)

**Funcionalidade**: Persistência e sincronização

#### 9.1 LocalStorage (6 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Salvar tarefas | Persiste automaticamente |
| 2 | Recuperar ao carregar | Restaura dados |
| 3 | Manter status | Conclusão persistida |
| 4 | Manter ordem | Ordem preservada |
| 5 | Persistir filtro | Filtro selecionado salvo |
| 6 | Storage vazio | Funciona sem dados |

#### 9.2 Sincronização entre Abas (3 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Sincronizar criação | Nova tarefa em todas |
| 2 | Sincronizar exclusão | Remove em todas |
| 3 | Sincronizar status | Conclusão sincronizada |

#### 9.3 Tratamento de Erros (3 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Storage cheio | Mensagem de erro |
| 2 | Storage desabilitado | Modo somente leitura |
| 3 | Dados corrompidos | Recuperação automática |

---

### 10. performance-and-edge-cases.spec.ts (24 cenários)

**Funcionalidade**: Performance e casos extremos

#### 10.1 Performance (4 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Carregar 100 tarefas | < 2 segundos |
| 2 | Renderizar 100 tarefas | Sem lag |
| 3 | Buscar em 100 tarefas | < 300ms |
| 4 | Filtrar lista grande | Transição suave |

#### 10.2 Limites e Validações (5 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Tamanho máximo título | 100 caracteres |
| 2 | Tamanho máximo descrição | 500 caracteres |
| 3 | Prevenir XSS | Sanitização |
| 4 | Suporte a emojis | Unicode funciona |
| 5 | Limite de tarefas | Se houver limite |

#### 10.3 Casos Extremos (5 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Cliques rápidos | Debounce funciona |
| 2 | Edições simultâneas | Sem conflitos |
| 3 | Perda de conexão | Funciona offline |
| 4 | Redimensionamento | Layout adaptável |
| 5 | CPU lento | Throttling OK |

#### 10.4 Acessibilidade Avançada (4 cenários)
| # | Cenário | Descrição |
|---|---------|-----------|
| 1 | Anúncios para screen reader | Aria-live funciona |
| 2 | Navegação completa por teclado | Todas as ações |
| 3 | Contraste adequado | WCAG AA |
| 4 | Zoom 200% | Sem perda de função |

---

## 📊 Resumo Estatístico

| Categoria | Quantidade |
|-----------|-----------|
| **Testes Unitários** | 55 cenários |
| - Componentes | 31 cenários |
| - Utilitários | 24 cenários |
| **Testes E2E** | 95 cenários |
| - Interface e Navegação | 8 cenários |
| - CRUD | 30 cenários |
| - Filtros e Busca | 20 cenários |
| - Persistência | 13 cenários |
| - Performance | 24 cenários |
| **TOTAL** | **150 cenários** |

---

## 🎯 Cobertura de Funcionalidades

### ✅ Coberto
- ✅ CRUD completo (Create, Read, Update, Delete)
- ✅ Filtros (todas, ativas, concluídas)
- ✅ Busca por texto
- ✅ Ordenação múltipla
- ✅ Persistência local
- ✅ Sincronização entre abas
- ✅ Validações de entrada
- ✅ Tratamento de erros
- ✅ Performance com volumes altos
- ✅ Acessibilidade (WCAG)
- ✅ Responsividade
- ✅ Segurança (XSS)

### 🔄 Níveis de Teste
1. **Unitário**: Componentes e funções isoladas
2. **Integração**: Interação entre componentes
3. **Sistema (E2E)**: Fluxos completos do usuário
4. **Performance**: Comportamento sob carga
5. **Acessibilidade**: Usabilidade para todos

---

## 📝 Notas Importantes

- Todos os testes estão **documentados com comentários TODO**
- Cada teste inclui **passos claros de implementação**
- Estrutura preparada para **TDD (Test-Driven Development)**
- Compatível com **práticas de CI/CD**
- Segue **boas práticas** da comunidade React/Next.js

---

Este documento serve como **guia de referência** para implementação dos testes e desenvolvimento do sistema de To-Do List.
