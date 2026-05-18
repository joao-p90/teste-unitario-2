'use client'

import { useState } from 'react'
import NovaTarefa from './NovaTarefa'
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas'

interface Tarefa {
  id: number
  titulo: string
}

interface Props {
  tarefasIniciais: Tarefa[]
}

export default function ListaTarefas({ tarefasIniciais }: Props) {
  const [tarefas, setTarefas] = useState(tarefasIniciais)

  function adicionarTarefa(titulo: string) {
    const nova = {
      id: Date.now(),
      titulo,
    }

    setTarefas([...tarefas, nova])
  }

  const total = useContadorDeTarefas(
    tarefas.map((t) => t.titulo)
  )

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Lista de Tarefas
      </h2>

      <p>Total de tarefas: {total}</p>

      <ul className="mt-4 space-y-2">
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            className="border p-2 rounded"
          >
            {tarefa.titulo}
          </li>
        ))}
      </ul>

      <NovaTarefa adicionarTarefa={adicionarTarefa} />
    </div>
  )
}