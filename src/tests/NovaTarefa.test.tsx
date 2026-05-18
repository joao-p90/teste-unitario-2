import { fireEvent, render, screen } from '@testing-library/react'
import NovaTarefa from '@/components/NovaTarefa'

describe('NovaTarefa', () => {
  it('deve adicionar nova tarefa', () => {
    const mockAdicionar = jest.fn()

    render(
      <NovaTarefa adicionarTarefa={mockAdicionar} />
    )

    const input = screen.getByPlaceholderText(
      'Digite uma tarefa'
    )

    const botao = screen.getByText('Adicionar')

    fireEvent.change(input, {
      target: { value: 'Nova tarefa' },
    })

    fireEvent.click(botao)

    expect(mockAdicionar).toHaveBeenCalledWith(
      'Nova tarefa'
    )
  })
})