import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas'

describe('useContadorDeTarefas', () => {
  it('deve retornar a quantidade correta', () => {
    const tarefas = ['A', 'B', 'C']

    const total = useContadorDeTarefas(tarefas)

    expect(total).toBe(3)
  })
})