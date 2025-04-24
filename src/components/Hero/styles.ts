import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 360px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`
export const ImagemLogo = styled.img`
  width: 125px;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const TextoLogo = styled.h1`
  color: ${cores.Rosa};
  font-size: 36px;
  text-align: center;
  line-height: 40px;
  margin-top: 100px;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
    width: 90%;
    left: 5%;
    top: 200px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 24px;
    top: 180px;
  }
`
