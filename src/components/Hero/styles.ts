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

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    /* Removendo min-height para não ocupar toda a tela */
    height: 200px; /* pode ajustar a altura para algo menor */
    min-height: unset;
    background-size: cover;
    background-position: center;
    padding: 10px 20px;
  }
`
export const ImagemLogo = styled.img`
  width: 125px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    width: 90px;
  }
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
    margin-top: 60px; /* em vez de usar top, usar margin */
  }

  @media (max-width: 480px) {
    font-size: 22px;
    line-height: 24px;
    margin-top: 10px; /* ajustar margem no celular */
  }
`
