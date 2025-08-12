import { createGlobalStyle } from 'styled-components'

export const cores = {
  Rosa: '#E66767',
  amarelo: '#FFB930',
  brancoBotao: '#FFEBD9',
  FundoBranco: '#FFF8F2',
  cinzaClaro: '#A3A3A3',
  branco: '#FFFFFF'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }
  body {
    background-color: ${cores.FundoBranco};
    color: ${cores.Rosa};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    .container {
      padding: 0 15px;
    }
  }

  /* Celular */
  @media (max-width: 768px) {
    .container {
      padding: 0 10px;
    }

    body {
      font-size: 14px;
    }
  }

`
