import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      1,
      'Estudar Javascript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Melhorar a base'
    ),
    new Tarefa(
      2,
      'Estudar HTML',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Rever a aula 3'
    ),
    new Tarefa(
      3,
      'Estudar Python',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Realizar segundo projeto'
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
