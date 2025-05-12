import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import vector from '../../assets/Vector.png'
import {
  Header,
  Imagem,
  LinkCart,
  ImagemRestaurante,
  TipoRestaurante,
  NomeRestaurante
} from './styles'

type Props = {
  nome: string
  tipo: string
  imagem: string
}

const HederPequeno = ({ nome, tipo, imagem }: Props) => (
  <>
    <Header style={{ backgroundImage: `url(${vector})` }}>
      <Link to={'/'}>
        <span>Restaurantes</span>
      </Link>
      <Imagem src={logo} alt="efood" />
      <LinkCart href="#">0 - Produto(s) no carrinho</LinkCart>
    </Header>
    <ImagemRestaurante>
      <img src={imagem} alt={tipo} />
      <TipoRestaurante>{tipo}</TipoRestaurante>
      <NomeRestaurante>{nome}</NomeRestaurante>
    </ImagemRestaurante>
  </>
)

export default HederPequeno
