import { Link } from 'react-router-dom'
import Tag from '../Tag'
import {
  Card,
  Descricao,
  Infos,
  Titulo,
  BotaoVerMais,
  FlexTituloNota,
  Nota,
  CardContent
} from './styles'

type Props = {
  category: string
  description: string
  image: string
  title: string
  infos: string[]
  nota: number
  id: number
}

const Product = ({ description, image, title, infos, nota, id }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardContent>
      <FlexTituloNota>
        <Titulo>{title}</Titulo>
        <Nota>
          {nota}
          <span>⭐</span>
        </Nota>
      </FlexTituloNota>
      <Descricao>{description}</Descricao>
      <Link to={`/perfil/${id}`}>
        <BotaoVerMais>Saiba mais</BotaoVerMais>
      </Link>
    </CardContent>
  </Card>
)

export default Product
