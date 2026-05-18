'use client'

import { useState } from 'react'

interface Props {
  adicionarTarefa: (tarefa: string) => void
}

export default function NovaTarefa({ adicionarTarefa }: Props) {
  const [tarefa, setTarefa] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!tarefa.trim()) return

    adicionarTarefa(tarefa)
    setTarefa('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Adicionar
      </button>
    </form>
  )
}