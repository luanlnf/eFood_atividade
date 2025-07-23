import { useGetRestauranteQuery } from '../../services/api'
import ListagemRestaurente from '../../components/Listagem'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const Home = () => {
  const { data: Restaurantes } = useGetRestauranteQuery()

  if (!Restaurantes) return <p>Carregando...</p>

  return (
    <>
      <Hero />
      <ListagemRestaurente title="Restaurantes" products={Restaurantes || []} />
      <Footer />
    </>
  )
}

export default Home
