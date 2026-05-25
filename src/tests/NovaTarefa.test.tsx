import { fireEvent, render, screen } from '@testing-library/react'
import NovaTarefa from '@/components/NovaTarefa'

describe('NovaTarefa', () => {
  it('deve renderizar input e botão', () => {
    render(
      <NovaTarefa adicionarTarefa={jest.fn()} />
    )

    expect(
      screen.getByPlaceholderText('Digite uma tarefa')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Adicionar')
    ).toBeInTheDocument()
  })

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

  it('não deve adicionar tarefa vazia', () => {
    const mockAdicionar = jest.fn()

    render(
      <NovaTarefa adicionarTarefa={mockAdicionar} />
    )

    const botao = screen.getByText('Adicionar')

    fireEvent.click(botao)

    expect(mockAdicionar).not.toHaveBeenCalled()
  })
})