import { Cardapio } from './cardapio'

export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: Cardapio[]
}
