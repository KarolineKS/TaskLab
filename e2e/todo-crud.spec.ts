/**
 * Testes de Sistema (E2E) - Gerenciamento de Tarefas
 * 
 * Este arquivo contém testes end-to-end para validar operações CRUD
 * (Create, Read, Update, Delete) de tarefas.
 * 
 * Cenários testados:
 * - Adicionar novas tarefas
 * - Visualizar lista de tarefas
 * - Editar tarefas existentes
 * - Excluir tarefas
 * - Marcar tarefas como concluídas
 */

import { test, expect } from '@playwright/test';

test.describe('Adicionar Tarefas', () => {
  test('deve adicionar uma nova tarefa com título', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Preencher campo de título com "Comprar leite"
    // 3. Clicar no botão "Adicionar"
    // 4. Verificar se a tarefa aparece na lista
  });

  test('deve adicionar uma nova tarefa com título e descrição', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Preencher título: "Estudar TypeScript"
    // 3. Preencher descrição: "Completar tutorial oficial"
    // 4. Submeter formulário
    // 5. Verificar se tarefa foi adicionada com ambos os campos
  });

  test('não deve adicionar tarefa com título vazio', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Tentar submeter formulário sem preencher título
    // 3. Verificar se mensagem de erro é exibida
    // 4. Verificar se tarefa não foi adicionada à lista
  });

  test('deve limpar formulário após adicionar tarefa', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Preencher e submeter formulário
    // 3. Verificar se campos foram limpos após submissão
  });

  test('deve adicionar múltiplas tarefas sequencialmente', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar 3 tarefas diferentes
    // 3. Verificar se todas as 3 aparecem na lista
  });

  test('deve manter foco no campo de título após adicionar tarefa', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar uma tarefa
    // 3. Verificar se o foco retornou para o campo de título
  });
});

test.describe('Visualizar Tarefas', () => {
  test('deve exibir todas as tarefas adicionadas', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar 3 tarefas
    // 3. Verificar se todas estão visíveis na lista
  });

  test('deve exibir contador de tarefas ativas', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar 5 tarefas
    // 3. Verificar se contador mostra "5 tarefas ativas"
  });

  test('deve mostrar data de criação da tarefa', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar uma tarefa
    // 3. Verificar se data de criação está visível
  });
});

test.describe('Marcar Tarefas como Concluídas', () => {
  test('deve marcar tarefa como concluída ao clicar no checkbox', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar uma tarefa
    // 3. Clicar no checkbox da tarefa
    // 4. Verificar se tarefa está marcada como concluída (texto riscado)
  });

  test('deve desmarcar tarefa concluída ao clicar novamente', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar e marcar tarefa como concluída
    // 3. Clicar novamente no checkbox
    // 4. Verificar se tarefa voltou ao estado ativo
  });

  test('deve atualizar contador ao marcar tarefa como concluída', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar 3 tarefas
    // 3. Marcar 1 como concluída
    // 4. Verificar se contador mostra "2 tarefas ativas"
  });

  test('deve aplicar estilo visual diferente em tarefas concluídas', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar e marcar tarefa como concluída
    // 3. Verificar se texto está com line-through
    // 4. Verificar se opacidade está reduzida
  });
});

test.describe('Editar Tarefas', () => {
  test('deve permitir editar título da tarefa', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar tarefa "Comprar pão"
    // 3. Clicar no botão de editar
    // 4. Alterar para "Comprar pão integral"
    // 5. Salvar alterações
    // 6. Verificar se título foi atualizado
  });

  test('deve permitir editar descrição da tarefa', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar tarefa com descrição
    // 3. Editar a descrição
    // 4. Verificar se foi atualizada
  });

  test('deve cancelar edição ao pressionar ESC', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar e iniciar edição de tarefa
    // 3. Alterar o texto
    // 4. Pressionar ESC
    // 5. Verificar se alterações foram descartadas
  });

  test('não deve salvar tarefa com título vazio durante edição', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar e editar tarefa
    // 3. Tentar limpar o título
    // 4. Verificar se validação impede salvar
  });
});

test.describe('Excluir Tarefas', () => {
  test('deve excluir tarefa ao clicar no botão deletar', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar uma tarefa
    // 3. Clicar no botão de deletar
    // 4. Verificar se tarefa foi removida da lista
  });

  test('deve solicitar confirmação antes de excluir', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar uma tarefa
    // 3. Clicar no botão de deletar
    // 4. Verificar se modal de confirmação é exibido
    // 5. Confirmar exclusão
    // 6. Verificar se tarefa foi removida
  });

  test('deve cancelar exclusão se usuário cancelar confirmação', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar uma tarefa
    // 3. Clicar no botão de deletar
    // 4. Cancelar no modal de confirmação
    // 5. Verificar se tarefa permanece na lista
  });

  test('deve atualizar contador após excluir tarefa', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar 3 tarefas
    // 3. Excluir 1 tarefa
    // 4. Verificar se contador mostra "2 tarefas ativas"
  });

  test('deve exibir mensagem quando lista ficar vazia após exclusão', async ({ page }) => {
    // TODO: Implementar teste
    // 1. Navegar para a página inicial
    // 2. Adicionar 1 tarefa
    // 3. Excluir a tarefa
    // 4. Verificar se mensagem "Nenhuma tarefa cadastrada" é exibida
  });
});
