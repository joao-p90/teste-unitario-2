import { render, screen } from '@testing-library/react'
import ListaTarefas from '@/components/ListaTarefas'

describe('ListaTarefas', () => {
  it('deve renderizar tarefas iniciais', () => {
    render(
      <ListaTarefas
        tarefasIniciais={[
          { id: 1, titulo: 'Teste 1' },
          { id: 2, titulo: 'Teste 2' },
        ]}
      />
    )

    expect(screen.getByText('Teste 1')).toBeInTheDocument()

    expect(screen.getByText('Teste 2')).toBeInTheDocument()
  })
})