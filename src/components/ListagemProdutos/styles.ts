import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 32px 16px;
  margin: 0 auto 40px auto;
  box-sizing: border-box;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`
