import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { RootState } from '../../store'
import { close, removeProduct, clearCart } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { CheckoutStep } from '../../types'
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

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const [step, setStep] = useState<CheckoutStep>(CheckoutStep.CART)

  // mutation do checkout
  const [purchase, { data, isLoading, isError }] = usePurchaseMutation()

  const closeCart = () => {
    dispatch(close())
    dispatch(clearCart())
    setStep(CheckoutStep.CART)
  }

  const getTotalPreco = () =>
    items.reduce((total, item) => total + item.preco, 0)

  const removeItem = (index: number) => dispatch(removeProduct(index))

  // --- Yup Schemas ---
  const deliverySchema = Yup.object({
    name: Yup.string().min(3, 'Digite um nome válido').required('Obrigatório'),
    address: Yup.string().required('Obrigatório'),
    city: Yup.string().required('Obrigatório'),
    cep: Yup.string().min(8, 'CEP inválido').required('Obrigatório'),
    number: Yup.string().required('Obrigatório')
  })

  const paymentSchema = Yup.object({
    cardName: Yup.string().required('Obrigatório'),
    cardNumber: Yup.string().min(10, 'Número inválido').required('Obrigatório'),
    cvv: Yup.string().min(3, 'CVV inválido').required('Obrigatório'),
    month: Yup.string().required('Obrigatório'),
    year: Yup.string().required('Obrigatório')
  })

  // --- Formik de Entrega ---
  const deliveryForm = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: deliverySchema,
    onSubmit: () => setStep(CheckoutStep.PAYMENT)
  })

  // --- Formik de Pagamento (com chamada do mutation) ---
  const paymentForm = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: ''
    },
    validationSchema: paymentSchema,
    onSubmit: async (values) => {
      const payload = {
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: deliveryForm.values.name,
          address: {
            description: deliveryForm.values.address,
            city: deliveryForm.values.city,
            zipCode: deliveryForm.values.cep,
            number: Number(deliveryForm.values.number),
            complement: deliveryForm.values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber.replace(/\s/g, ''),
            code: Number(values.cvv),
            expires: {
              month: Number(values.month),
              year: Number(
                values.year.length === 2 ? `20${values.year}` : values.year
              )
            }
          }
        }
      }

      try {
        await purchase(payload).unwrap()
        setStep(CheckoutStep.CONFIRMATION)
      } catch (error) {
        console.error('Erro no checkout:', error)
      }
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in deliveryForm.touched
    const isInvalid = fieldName in deliveryForm.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  // Renderiza steps
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
              <Prices>Valor Total</Prices>
              <Prices>{getTotalPreco().toFixed(2).replace('.', ',')}</Prices>
            </Total>
            <BotaoCarrinho
              onClick={() => items.length > 0 && setStep(CheckoutStep.DELIVERY)}
              disabled={items.length === 0}
            >
              Continuar com a entrega
            </BotaoCarrinho>
          </>
        )

      case CheckoutStep.DELIVERY:
        return (
          <form onSubmit={deliveryForm.handleSubmit}>
            <Titulos>Entrega</Titulos>

            <InputGroup>
              <label>Quem irá receber</label>
              <input
                id="name"
                type="text"
                name="name"
                value={deliveryForm.values.name}
                onChange={deliveryForm.handleChange}
                onBlur={deliveryForm.handleBlur}
                className={checkInputHasError('name') ? 'error' : ''}
                min={5}
              />
              {deliveryForm.touched.name && deliveryForm.errors.name && (
                <span>{deliveryForm.errors.name}</span>
              )}
            </InputGroup>

            <InputGroup>
              <label>Endereço</label>
              <input
                id="address"
                type="text"
                name="address"
                value={deliveryForm.values.address}
                onChange={deliveryForm.handleChange}
                onBlur={deliveryForm.handleBlur}
                className={checkInputHasError('address') ? 'error' : ''}
                placeholder="Rua, Avenida, Travessa, etc"
              />
              {deliveryForm.touched.address && deliveryForm.errors.address && (
                <span>{deliveryForm.errors.address}</span>
              )}
            </InputGroup>

            <InputGroup>
              <label>Cidade</label>
              <input
                id="city"
                name="city"
                type="text"
                value={deliveryForm.values.city}
                onChange={deliveryForm.handleChange}
                onBlur={deliveryForm.handleBlur}
                className={checkInputHasError('city') ? 'error' : ''}
              />
              {deliveryForm.touched.city && deliveryForm.errors.city && (
                <span>{deliveryForm.errors.city}</span>
              )}
            </InputGroup>

            <Row>
              <InputGroup style={{ flex: 1 }}>
                <label>CEP</label>
                <input
                  id="cep"
                  name="cep"
                  type="text"
                  value={deliveryForm.values.cep}
                  onChange={deliveryForm.handleChange}
                  onBlur={deliveryForm.handleBlur}
                  className={checkInputHasError('cep') ? 'error' : ''}
                  maxLength={9}
                  minLength={8}
                  placeholder="00000-000"
                />
                {deliveryForm.touched.cep && deliveryForm.errors.cep && (
                  <span>{deliveryForm.errors.cep}</span>
                )}
              </InputGroup>

              <InputGroup style={{ flex: 1 }}>
                <label>Número</label>
                <input
                  id="number"
                  name="number"
                  type="text"
                  value={deliveryForm.values.number}
                  onChange={deliveryForm.handleChange}
                  onBlur={deliveryForm.handleBlur}
                  className={checkInputHasError('number') ? 'error' : ''}
                />
                {deliveryForm.touched.number && deliveryForm.errors.number && (
                  <span>{deliveryForm.errors.number}</span>
                )}
              </InputGroup>
            </Row>

            <InputGroup>
              <label>Complemento (Opcional)</label>
              <input
                id="complement"
                name="complement"
                type="text"
                value={deliveryForm.values.complement}
                onChange={deliveryForm.handleChange}
              />
            </InputGroup>

            <ButonesContainer>
              <BotaoCarrinho type="submit">
                Continuar com o pagamento
              </BotaoCarrinho>
              <BotaoCarrinho
                type="button"
                onClick={() => setStep(CheckoutStep.CART)}
              >
                Voltar para o carrinho
              </BotaoCarrinho>
            </ButonesContainer>
          </form>
        )

      case CheckoutStep.PAYMENT:
        return (
          <form onSubmit={paymentForm.handleSubmit}>
            <Titulos>
              Pagamento - R$: {getTotalPreco().toFixed(2).replace('.', ',')}
            </Titulos>

            <InputGroup>
              <label>Nome no cartão</label>
              <input
                id="cardName"
                type="text"
                name="cardName"
                value={paymentForm.values.cardName}
                onChange={paymentForm.handleChange}
                onBlur={paymentForm.handleBlur}
                className={checkInputHasError('cardName') ? 'error' : ''}
                min={5}
                placeholder="Nome no cartão"
              />
              {paymentForm.touched.cardName && paymentForm.errors.cardName && (
                <span>{paymentForm.errors.cardName}</span>
              )}
            </InputGroup>

            <Row>
              <InputGroup style={{ flex: 1 }}>
                <label>Numero do cartão</label>
                <input
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={paymentForm.values.cardNumber}
                  onChange={paymentForm.handleChange}
                  onBlur={paymentForm.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  maxLength={19}
                  minLength={16}
                  placeholder="0000 0000 0000 0000"
                />
                {paymentForm.touched.cardNumber &&
                  paymentForm.errors.cardNumber && (
                    <span>{paymentForm.errors.cardNumber}</span>
                  )}
              </InputGroup>
              <InputGroup style={{ flex: 1 }}>
                <label>CVV</label>
                <input
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={paymentForm.values.cvv}
                  onChange={paymentForm.handleChange}
                  onBlur={paymentForm.handleBlur}
                  className={checkInputHasError('cvv') ? 'error' : ''}
                  maxLength={3}
                  minLength={2}
                  placeholder="CVV"
                />
                {paymentForm.touched.cvv && paymentForm.errors.cvv && (
                  <span>{paymentForm.errors.cvv}</span>
                )}
              </InputGroup>
            </Row>

            <Row>
              <InputGroup style={{ flex: 1 }}>
                <label>Mês</label>
                <input
                  id="month"
                  type="text"
                  name="month"
                  value={paymentForm.values.month}
                  onChange={paymentForm.handleChange}
                  onBlur={paymentForm.handleBlur}
                  className={checkInputHasError('month') ? 'error' : ''}
                  maxLength={2}
                  minLength={2}
                  placeholder="MM"
                />
                {paymentForm.touched.month && paymentForm.errors.month && (
                  <span>{paymentForm.errors.month}</span>
                )}
              </InputGroup>

              <InputGroup style={{ flex: 1 }}>
                <label>Ano</label>
                <input
                  id="year"
                  type="text"
                  name="year"
                  value={paymentForm.values.year}
                  onChange={paymentForm.handleChange}
                  onBlur={paymentForm.handleBlur}
                  className={checkInputHasError('year') ? 'error' : ''}
                  maxLength={4}
                  placeholder="YYYY"
                />
                {paymentForm.touched.year && paymentForm.errors.year && (
                  <span>{paymentForm.errors.year}</span>
                )}
              </InputGroup>
            </Row>

            {isError && (
              <TextFor style={{ marginTop: 8 }}>
                Ocorreu um erro ao finalizar o pagamento.
              </TextFor>
            )}

            <ButonesContainer>
              <BotaoCarrinho type="submit" disabled={isLoading}>
                {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
              </BotaoCarrinho>
              <BotaoCarrinho
                type="button"
                onClick={() => setStep(CheckoutStep.DELIVERY)}
                disabled={isLoading}
              >
                Voltar para endereço
              </BotaoCarrinho>
            </ButonesContainer>
          </form>
        )

      case CheckoutStep.CONFIRMATION:
        return (
          <>
            {data && (
              <Titulos>
                Pedido realizado - <strong>{data.orderId}</strong>
              </Titulos>
            )}
            <TextFor>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </TextFor>
            <TextFor>
              Nossos entregadores não estão autorizados a realizar cobranças
              extras.
            </TextFor>
            <TextFor>
              Higienize as mãos após o recebimento do pedido. Boa refeição!
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
