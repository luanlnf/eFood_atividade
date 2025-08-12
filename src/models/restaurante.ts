import { Cardapio } from './cardapio'

export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  capa: string
  descricao: string
  avaliacao: number
  cardapio: Cardapio[]
}

export type { Cardapio }
