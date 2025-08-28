import styled from 'styled-components'
import { cores } from '../../styles'
import { Botao as BotaoBase } from '../Produtos/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`
export const BotaoCarrinho = styled(BotaoBase)`
  width: 100%;
  margin: 0;
  display: block;
`

export const Sidebar = styled.aside`
  background-color: ${cores.Rosa};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 300px;
    padding: 24px 12px 0 12px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    padding: 20px 16px 0 16px;
  }
`
export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branco};
`
export const Comida = styled.li`
  display: flex;
  background-color: ${cores.brancoBotao};
  margin-bottom: 16px;
  padding: 8px;
  gap: 8px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
    }
    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  }

  .info {
    position: relative;
    margin-left: 8px;
    flex: 1;
  }

  h3 {
    font-size: 18px;
    margin: 0;
    color: ${cores.Rosa};

    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 10px;
    }
  }

  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 12px;
    }
    @media (max-width: 480px) {
      font-size: 10px;
    }
  }

  .delete-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    align-self: flex-end;

    img {
      width: 16px;
      height: 16px;

      @media (max-width: 768px) {
        width: 16px;
        height: 16px;
      }
      @media (max-width: 480px) {
        width: 14px;
        height: 14px;
      }
    }
  }
`
export const Row = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  flex: 1;

  label {
    font-size: 14px;
    display: block;
    margin-bottom: 4px;
    color: ${cores.branco};
    margin-top: 8px;
  }

  input,
  select {
    background-color: ${cores.FundoBranco};
    border: 1px solid ${cores.branco};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
export const ButonesContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const TextFor = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.branco};
  margin-top: 18px;
  margin-bottom: 24px;
`
export const Titulos = styled.h3`
  font-size: 16px;
  font-weight: 700;
  font-style: bold;
  color: ${cores.branco};
  margin-bottom: 16px;
`
