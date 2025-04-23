import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.Rosa};
  color: ${cores.FundoBranco};
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  img {
    width: 100%;
  }
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
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
export const Botao = styled.button`
  background-color: ${cores.FundoBranco};
  border: 1px solid ${cores.Rosa};
  padding: 8px;
  margin-top: 16px;
  color: ${cores.Rosa};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`
