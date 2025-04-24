import styled from 'styled-components'

export const Container = styled.div`
  width: 1024px;
  min-height: 708px;
  padding: 32px 0;
  margin: 0 auto 40px auto;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
