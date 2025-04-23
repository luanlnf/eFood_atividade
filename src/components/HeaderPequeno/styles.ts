import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  height: 186px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  position: relative;

  span {
    color: ${cores.Rosa};
    font-weight: bold;
    text-decoration: none;
  }
`

export const Imagem = styled.img`
  width: 125px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const LinkCart = styled.a`
  color: ${cores.Rosa};
  font-weight: bold;
  text-decoration: none;
`
export const ImagemRestaurante = styled.div`
  position: relative;
  width: 100%;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4); /* escurece levemente */
    pointer-events: none;
    z-index: 1;
  }
`

export const NomeRestaurante = styled.h1`
  position: absolute;
  bottom: 24px;
  left: 170px;
  font-size: 32px;
  font-weight: bold;
  color: ${cores.FundoBranco};
  z-index: 2;
`

export const TipoRestaurante = styled.span`
  position: absolute;
  top: 24px;
  left: 170px;
  font-size: 32px;
  font-weight: 100;
  color: ${cores.FundoBranco};
  z-index: 2;
`
