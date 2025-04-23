import styled from 'styled-components'
import { cores } from '../../styles'
import { TagConatiner } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.FundoBranco};
  border: 1px solid ${cores.Rosa};
  padding: 8px;
  position: relative;
  ${TagConatiner} {
    margin-right: 8px;
  }
  img {
    width: 100%;
  }
`
export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const BotaoVerMais = styled.button`
  background-color: ${cores.Rosa};
  color: ${cores.FundoBranco};
  border: none;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    opacity: 0.9;
  }
`
export const FlexTituloNota = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Nota = styled.span`
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  color: ${cores.Rosa};
  padding: 4px 8px;
  border-radius: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
