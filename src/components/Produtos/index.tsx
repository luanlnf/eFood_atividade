import { useState } from 'react'
import { Card, Titulo, Descricao, Botao, Modal, Overlay } from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

const Produtos = ({ nome, descricao, foto, preco, porcao }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false)

  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)

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
              <Botao>
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
