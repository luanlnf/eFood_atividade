import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Total,
  Comida,
  BotaoCarrinho
} from './styled'

import lixeira from '../../assets/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { close, removeProduct } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPreco = () => {
    return items.reduce((total, item) => {
      return total + item.preco
    }, 0)
  }

  const removeItem = (index: number) => {
    dispatch(removeProduct(index))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item, index) => (
            <Comida key={index}>
              <img src={item.foto} alt={item.nome} />
              <div className="info">
                <h3>{item.nome}</h3>
                <span>R$:{item.preco.toFixed(2).replace('.', ',')}</span>
              </div>
              <button
                onClick={() => removeItem(index)}
                className="delete-button"
              >
                <img src={lixeira} alt="Lixeira" />
              </button>
            </Comida>
          ))}
        </ul>
        <Total>
          <Prices>Valor Total </Prices>
          <Prices>{getTotalPreco().toFixed(2).replace('.', ',')}</Prices>
        </Total>

        <BotaoCarrinho title="Clique aqui Para continuar" type="button">
          continuar com a entrega
        </BotaoCarrinho>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
