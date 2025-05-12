import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HederPequeno from '../../components/HeaderPequeno'
import ListaProdutos from '../../components/ListagemProdutos'
import Footer from '../../components/Footer'
import Cardapio from '../../models/cardapio'

type Restaurante = {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: Cardapio[]
}

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurante(data)
      })
  }, [id])

  if (!restaurante) return <p>Carregando...</p>

  return (
    <>
      <HederPequeno
        nome={restaurante.titulo}
        tipo={restaurante.tipo}
        imagem={restaurante.capa}
      />
      <ListaProdutos
        products={restaurante.cardapio.map((item: Cardapio) => ({
          id: item.id,
          nome: item.nome,
          descricao: item.descricao,
          foto: item.foto,
          preco: item.preco,
          porcao: item.porcao
        }))}
      />
      <Footer />
    </>
  )
}

export default Perfil
