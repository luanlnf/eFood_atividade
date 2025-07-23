import { useParams } from 'react-router-dom'
import HederPequeno from '../../components/HeaderPequeno'
import ListaProdutos from '../../components/ListagemProdutos'
import Footer from '../../components/Footer'
import { Cardapio } from '../../models/cardapio'
import { useGetPerfilQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetPerfilQuery(id!)

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
