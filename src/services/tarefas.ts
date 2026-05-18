export async function buscarTarefas() {
  return Promise.resolve([
    { id: 1, titulo: 'Estudar Next.js' },
    { id: 2, titulo: 'Aprender Testes' },
  ])
}