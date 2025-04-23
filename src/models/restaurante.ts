class Restaurante {
  category: string
  description: string
  id: number
  image: string
  title: string
  infos: string[]
  nota: number

  constructor(
    category: string,
    description: string,
    id: number,
    image: string,
    title: string,
    infos: string[],
    nota: number
  ) {
    this.category = category
    this.description = description
    this.id = id
    this.image = image
    this.title = title
    this.infos = infos
    this.nota = nota
  }
}

export default Restaurante
