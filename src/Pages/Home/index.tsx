import ListagemRestaurente from '../../components/Listagem'
import Hero from '../../components/Hero'
import Restaurante from '../../models/restaurante'
import italiana from '../../assets/italiana.png'
import japonesa from '../../assets/japonesa.png'
import Footer from '../../components/Footer'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: japonesa,
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    nota: 4.9
  },
  {
    id: 2,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: 4.6
  },
  {
    id: 3,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: 4.6
  },
  {
    id: 4,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: 4.6
  },
  {
    id: 5,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: 4.6
  },
  {
    id: 6,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: 4.6
  }
]

const Home = () => (
  <>
    <Hero />
    <ListagemRestaurente title="Restaurantes" products={restaurantes} />
    <Footer />
  </>
)

export default Home
