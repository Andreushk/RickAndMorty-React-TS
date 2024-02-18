import { createGlobalStyle } from 'styled-components';
import baseTheme from './theme';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    background-color: ${baseTheme.colors.bodyBG};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: "Rubik", Arial, Helvetica, sans-serif;
  }

  #root {
    max-width: 1440px;
    margin: 0 auto;
  }
`;
