import { useState } from 'react'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Total,
  Comida,
  BotaoCarrinho,
  Row,
  InputGroup,
  ButonesContainer,
  TextFor,
  Titulos
} from './styled'
import lixeira from '../../assets/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { close, removeProduct } from '../../store/reducers/cart'
import { CheckoutStep } from '../../types'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const [step, setStep] = useState<CheckoutStep>(CheckoutStep.CART)

  const closeCart = () => {
    dispatch(close())
    setStep(CheckoutStep.CART) // sempre reseta pro carrinho ao fechar
  }

  const getTotalPreco = () => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  const removeItem = (index: number) => {
    dispatch(removeProduct(index))
  }

  const renderContent = () => {
    switch (step) {
      case CheckoutStep.CART:
        return (
          <>
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
            <BotaoCarrinho onClick={() => setStep(CheckoutStep.DELIVERY)}>
              Continuar com a entrega
            </BotaoCarrinho>
          </>
        )

      case CheckoutStep.DELIVERY:
        return (
          <>
            <Titulos>Entrega</Titulos>
            <InputGroup>
              <label>Quem irá receber</label>
              <input placeholder="Nome" />
            </InputGroup>

            <InputGroup>
              <label>Endereço</label>
              <input placeholder="Endereço" />
            </InputGroup>

            <InputGroup>
              <label>Cidade</label>
              <input placeholder="Cidade" />
            </InputGroup>

            {/* Aqui sim usamos Row, pq CEP e Número devem ficar lado a lado */}
            <Row>
              <InputGroup style={{ flex: 1 }}>
                <label>CEP</label>
                <input placeholder="CEP" />
              </InputGroup>

              <InputGroup style={{ flex: 1 }}>
                <label>Número</label>
                <input placeholder="Número da casa" />
              </InputGroup>
            </Row>

            <InputGroup>
              <label>Complemento (Opcional)</label>
              <input type="text" />
            </InputGroup>
            <ButonesContainer>
              <BotaoCarrinho onClick={() => setStep(CheckoutStep.PAYMENT)}>
                Continuar com o pagamento
              </BotaoCarrinho>
              <BotaoCarrinho onClick={() => setStep(CheckoutStep.CART)}>
                Voltar para o carrinho
              </BotaoCarrinho>
            </ButonesContainer>
          </>
        )

      case CheckoutStep.PAYMENT:
        return (
          <>
            <Titulos>
              Pagamento - R$: {getTotalPreco().toFixed(2).replace('.', ',')}
            </Titulos>
            <InputGroup>
              <label htmlFor="name">Nome do cartão</label>
              <input placeholder="Nome no cartão" />
            </InputGroup>
            <Row>
              <InputGroup style={{ flex: 1 }}>
                <label htmlFor="name">Nº do cartão</label>
                <input placeholder="Nº do cartão" />
              </InputGroup>
              <InputGroup style={{ flex: 1 }}>
                <label htmlFor="name">CVV</label>
                <input placeholder="CVV" />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup style={{ flex: 1 }}>
                <label htmlFor="name">Mês de Vencimento</label>
                <input placeholder="Validade" />
              </InputGroup>
              <InputGroup style={{ flex: 1 }}>
                <label htmlFor="name">Ano de Vencimento</label>
                <input placeholder="Validade" />
              </InputGroup>
            </Row>
            <ButonesContainer>
              <BotaoCarrinho onClick={() => setStep(CheckoutStep.CONFIRMATION)}>
                Finalizar pagamento
              </BotaoCarrinho>
              <BotaoCarrinho onClick={() => setStep(CheckoutStep.DELIVERY)}>
                Voltar para endereço
              </BotaoCarrinho>
            </ButonesContainer>
          </>
        )

      case CheckoutStep.CONFIRMATION:
        return (
          <>
            <Titulos>Pedido realizado - </Titulos>
            <TextFor>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.{' '}
              <br />
            </TextFor>
            <TextFor>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
            </TextFor>
            <TextFor>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição. <br />
            </TextFor>
            <TextFor>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </TextFor>
            <BotaoCarrinho onClick={closeCart}>Concluir</BotaoCarrinho>
          </>
        )
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>{renderContent()}</Sidebar>
    </CartContainer>
  )
}

export default Cart
