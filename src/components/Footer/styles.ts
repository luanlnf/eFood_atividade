import styled from 'styled-components'
import { cores } from '../../styles'

export const RodaPe = styled.footer`
  width: 100%;
  height: 280px;
  padding: 32px 0;
  text-align: center;
  color: ${cores.Rosa};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
export const ImagemLogo = styled.img`
  width: 125px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    width: 90px;
  }
`
export const Redes = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  img {
    width: 24px;
    height: 24px;
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`

export const Texto = styled.p`
  margin-top: 40px;
  font-size: 14px;
  line-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
    padding: 0 16px;
  }
`
