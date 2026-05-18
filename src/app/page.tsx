import ListaTarefas from '@/components/ListaTarefas'
import { buscarTarefas } from '@/services/tarefas'

export default async function Home() {
  const tarefas = await buscarTarefas()

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold">
        Gerenciador de Tarefas
      </h1>

      <ListaTarefas tarefasIniciais={tarefas} />
    </main>
  )
}