import { TagConatiner } from './styles'
export type Props = {
  size?: 'samll' | 'big'
  children: string
}

const Tag = ({ size = 'samll', children }: Props) => (
  <TagConatiner size={size}>{children}</TagConatiner>
)

export default Tag
