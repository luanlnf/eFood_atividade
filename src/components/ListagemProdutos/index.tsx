import { Container, List } from './styles'
import Cardapio from '../../models/cardapio'
import Product from '../Produtos'

export type Props = {
  products: Cardapio[]
}
const ListaProdutos = ({ products }: Props) => (
  <Container>
    <div>
      <List>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaProdutos
