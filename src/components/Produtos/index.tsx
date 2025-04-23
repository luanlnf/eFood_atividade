import { Card, Titulo, Descricao, Botao } from './styles'

type Props = {
  title: string
  description: string
  image: string
}
const Produtos = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
)
export default Produtos
