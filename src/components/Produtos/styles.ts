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
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 0;
`

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1024px;
  height: 344px;
  padding: 24px;
  background-color: ${cores.Rosa};
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${cores.FundoBranco};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  & > h3 {
    font-size: 18px;
    font-weight: bold;
    padding-left: 24px;
  }

  & > p {
    font-size: 14px;
    margin-top: 16px;
    font-weight: 400;
    padding-left: 24px;
  }
  .close-button {
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: none;
    color: ${cores.FundoBranco};
    font-size: 24px;
    cursor: pointer;
  }
`
