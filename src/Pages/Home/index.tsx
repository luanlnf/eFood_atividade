import { useGetRestauranteQuery } from '../../services/api'
import ListagemRestaurente from '../../components/Listagem'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const Home = () => {
  const { data: restaurantes } = useGetRestauranteQuery()

  return (
    <>
      <Hero />
      <ListagemRestaurente title="restaurantes" products={restaurantes || []} />
      <Footer />
    </>
  )
}

export default Home
