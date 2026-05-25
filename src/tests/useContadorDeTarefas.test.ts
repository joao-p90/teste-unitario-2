import { renderHook } from '@testing-library/react'
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas'

describe('useContadorDeTarefas', () => {
  it('deve retornar a quantidade correta', () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas([
        'A',
        'B',
        'C',
      ])
    )

    expect(result.current).toBe(3)
  })
})