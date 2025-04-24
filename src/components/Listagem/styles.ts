import styled from 'styled-components'

export const Container = styled.div`
  width: 1024px;
  min-height: 1290px;
  padding: 32px 0;
  margin: 0 auto 40px auto;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  flex: 1; // ocupa todo o espaço restante no Container
  min-height: 100%; // garante altura mínima
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
