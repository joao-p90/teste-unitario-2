import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

jest.mock('../services/tarefas', () => ({
  buscarTarefas: jest.fn().mockResolvedValue([
    { id: 1, titulo: 'Estudar Next.js' },
    { id: 2, titulo: 'Aprender Jest' },
  ]),
}))

describe('Home Page', () => {
  it('deve renderizar tarefas carregadas', async () => {
    const component = await Home()

    render(component)

    expect(
      screen.getByText('Estudar Next.js')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Aprender Jest')
    ).toBeInTheDocument()
  })
})