import { useEffect, useState } from 'react'
import ListagemRestaurente from '../../components/Listagem'
import Hero from '../../components/Hero'
import Restaurante from '../../models/restaurante'
import Footer from '../../components/Footer'

type RestauranteDaAPI = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  destacado: boolean
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: RestauranteDaAPI[]) => {
        const lista = data.map((item) => ({
          id: item.id,
          title: item.titulo,
          description: item.descricao,
          image: item.capa,
          category: item.tipo,
          infos: item.destacado
            ? ['Destaque da semana', item.tipo]
            : [item.tipo],
          nota: item.avaliacao
        }))
        setRestaurantes(lista)
      })
  }, [])

  return (
    <>
      <Hero />
      <ListagemRestaurente title="Restaurantes" products={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
