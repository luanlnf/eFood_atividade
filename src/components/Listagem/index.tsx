import { Container, List } from './styles'
import { Restaurante } from '../../models/restaurante'
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
          <Product
            category={product.tipo}
            description={product.descricao}
            image={product.capa}
            title={product.titulo}
            infos={[]} // pode manter vazio se não usar agora
            nota={product.avaliacao} // ou use alguma nota fixa/mock se ainda não tiver no objeto
            key={product.id}
            id={product.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListagemRestaurente
