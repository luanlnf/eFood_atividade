import { Container, List } from './styles'
import { Cardapio } from '../../models/cardapio'
import Produtos from '../Produtos'

export type Props = {
  products: Cardapio[]
}
const ListaProdutos = ({ products }: Props) => (
  <Container>
    <div>
      <List>
        {products.map((product) => (
          <Produtos
            key={product.id}
            nome={product.nome}
            descricao={product.descricao}
            foto={product.foto}
            preco={product.preco}
            porcao={product.porcao}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaProdutos
