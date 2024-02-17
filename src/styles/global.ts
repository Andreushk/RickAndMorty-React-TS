import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    background-color: #E5E5E5;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: "Rubik", Arial, Helvetica, sans-serif;
  }

  #root {
    max-width: 1440px;
    margin: 0 auto;
  }
`;
