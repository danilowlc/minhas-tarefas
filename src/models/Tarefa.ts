import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  id: number
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string

  constructor(
    id: number,
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string
  ) {
    this.id = id
    this.titulo = titulo
    this.prioridade = prioridade
    this.descricao = descricao
    this.status = status
  }
}

export default Tarefa
