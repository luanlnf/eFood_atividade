import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  min-height: 1290px;
  padding: 32px 0;
  margin: 0 auto 40px auto;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 16px;
    min-height: auto; /* deixa a altura se ajustar ao conteúdo */
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  flex: 1;
  min-height: 100%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-items: center;
    width: 100%;
  }
`
