import logo from '../../assets/logo.png'
import vector from '../../assets/Vector.png'
import { Imagem, ImagemLogo, TextoLogo } from './styles'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${vector})` }}>
    <ImagemLogo src={logo} alt="efood" />
    <TextoLogo>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </TextoLogo>
  </Imagem>
)

export default Hero
