import styled from 'styled-components'
import { cores } from '../../styles'
import { TagConatiner } from '../Tag/styles'

export const Card = styled.div`
  width: 472px;
  min-height: 398px;
  background-color: ${cores.branco};
  border: 1px solid ${cores.Rosa};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${TagConatiner} {
    margin-right: 8px;
  }

  img {
    width: 100%;
    height: auto;
  }

  /* Tablet: largura menor para caber 2 colunas */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 45vw; /* ou algo próximo para caber duas colunas */
    max-width: 320px; /* para não passar do tamanho original */
  }

  /* Celular */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
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

export const Nota = styled.div`
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  color: ${cores.Rosa};
  margin-left: auto;
  padding: 0 auto;
  span {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
