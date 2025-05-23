import { Container, List } from './styles'
import Restaurante from '../../models/restaurante'
import Product from '../Restaurantes'

export type Props = {
  title: string
  products: Restaurante[]
}
const ListagemRestaurente = ({ products }: Props) => (
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

export default ListagemRestaurente
