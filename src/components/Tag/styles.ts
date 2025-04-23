import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagConatiner = styled.div<Props>`
  background-color: ${cores.Rosa};
  color: ${cores.FundoBranco};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
`
