import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`

 *,
 *::after,
 *::before {
   margin: 0;
   padding: 0;
   box-sizing: inherit; }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    transition: all 0.30s linear;

  }
  `
