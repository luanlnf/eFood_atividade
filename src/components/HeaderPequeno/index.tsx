import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import vector from '../../assets/Vector.png'
import apresentacao from '../../assets/apresentacao.png'
import {
  Header,
  Imagem,
  LinkCart,
  ImagemRestaurante,
  TipoRestaurante,
  NomeRestaurante
} from './styles'

const HederPequeno = () => (
  <>
    <Header style={{ backgroundImage: `url(${vector})` }}>
      <Link to={'/'}>
        <span>Restaurantes</span>
      </Link>
      <Imagem src={logo} alt="efood" />
      <LinkCart href="#">0 - Produto(s) no carrinho</LinkCart>
    </Header>
    <ImagemRestaurante>
      <img src={apresentacao} alt="italiana" />
      <TipoRestaurante>Italiana</TipoRestaurante>
      <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
    </ImagemRestaurante>
  </>
)

export default HederPequeno
