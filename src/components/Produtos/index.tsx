import { useState } from 'react'
import { Card, Titulo, Descricao, Botao, Modal, Overlay } from './styles'
import { useDispatch } from 'react-redux'
import { addProduct, open } from '../../store/reducers/cart'

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

const Produtos = ({ id, nome, descricao, foto, preco, porcao }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false)

  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      addProduct({
        id,
        nome,
        descricao,
        foto,
        preco,
        porcao
      })
    )
    dispatch(open())
  }
  const handleClick = () => {
    addToCart()
    closeModal()
  }

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <Titulo>{nome}</Titulo>
        <Descricao>{descricao}</Descricao>
        <Botao onClick={openModal}>Mais detalhes</Botao>
      </Card>

      {isModalVisible && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <img src={foto} alt={nome} />
            <div>
              <Titulo>{nome}</Titulo>
              <Descricao>{descricao}</Descricao>
              <p>Serve: {porcao}</p>
              <Botao onClick={handleClick}>
                Adicionar ao carrinho – R$ {preco.toFixed(2).replace('.', ',')}
              </Botao>
            </div>
          </Modal>
        </>
      )}
    </>
  )
}

export default Produtos
