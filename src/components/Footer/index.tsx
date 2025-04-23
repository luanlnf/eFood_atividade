import vector from '../../assets/Vector.png'
import logo from '../../assets/logo.png'
import insta from '../../assets/insta.png'
import face from '../../assets/face.png'
import twitter from '../../assets/twitter.png'
import { RodaPe, ImagemLogo, Redes, Texto } from './styles'

const Footer = () => (
  <RodaPe style={{ backgroundImage: `url(${vector})` }}>
    <ImagemLogo src={logo} alt="efood" />
    <Redes>
      <img src={insta} alt="instagram" />
      <img src={face} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </Redes>
    <Texto>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega <br /> qualidade dos produtos é toda do
      estabelecimento contratado.
    </Texto>
  </RodaPe>
)

export default Footer
