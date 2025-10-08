export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">
          TaskLab
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sistema de To-Do List com foco em testes
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">🧪 Estrutura de Testes Criada!</h2>
          <p className="text-gray-700 mb-4">
            10 arquivos de teste com mais de 150 cenários documentados estão prontos.
          </p>
          <ul className="text-left text-gray-600 space-y-2 mb-4">
            <li>✅ 5 arquivos de testes unitários (Jest)</li>
            <li>✅ 5 arquivos de testes E2E (Playwright)</li>
            <li>✅ Cobertura completa de funcionalidades</li>
            <li>✅ Documentação detalhada em TESTS.md</li>
          </ul>
          <p className="text-sm text-gray-500">
            Próximo passo: Implementar os componentes e funcionalidades conforme os testes!
          </p>
        </div>
      </div>
    </main>
  );
}
