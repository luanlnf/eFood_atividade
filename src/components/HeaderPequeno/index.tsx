import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import vector from '../../assets/Vector.png'
import {
  Header,
  Imagem,
  CartButton,
  ImagemRestaurante,
  TipoRestaurante,
  NomeRestaurante
} from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

type Props = {
  nome: string
  tipo: string
  imagem: string
}

const HederPequeno = ({ nome, tipo, imagem }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Header style={{ backgroundImage: `url(${vector})` }}>
        <Link to={'/'}>
          <span>Restaurantes</span>
        </Link>
        <Imagem src={logo} alt="efood" />
        <CartButton onClick={openCart}>
          {items.length} - Produto(s) no carrinho
        </CartButton>
      </Header>
      <ImagemRestaurante>
        <img src={imagem} alt={tipo} />
        <TipoRestaurante>{tipo}</TipoRestaurante>
        <NomeRestaurante>{nome}</NomeRestaurante>
      </ImagemRestaurante>
    </>
  )
}

export default HederPequeno
