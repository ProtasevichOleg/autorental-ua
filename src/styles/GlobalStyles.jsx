import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import ManropeRegular from '../assets/fonts/Manrope/Manrope-Regular.ttf';
import ManropeMedium from '../assets/fonts/Manrope/Manrope-Medium.ttf';
import ManropeSemiBold from '../assets/fonts/Manrope/Manrope-SemiBold.ttf';
import MontserratRegular from '../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat/Montserrat-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Manrope';
        src: local('ManropeRegular'),
        url(${ManropeRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    
    @font-face {
      font-family: 'Manrope';
      src: local('ManropeMedium'),
      url(${ManropeMedium}) format('truetype');
      font-weight: 500;
      font-style: normal;
    }
    
    @font-face {
      font-family: 'Manrope';
      src: local('ManropeSemiBold'),
      url(${ManropeSemiBold}) format('truetype');
      font-weight: 600;
      font-style: normal;
    }
    
    @font-face {
      font-family: 'Montserrat';
      src: local('MontserratRegular'),
      url(${MontserratRegular}) format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    
    @font-face {
      font-family: 'Montserrat';
      src: local('MontserratSemiBold'),
      url(${MontserratSemiBold}) format('truetype');
      font-weight: 600;
      font-style: normal;
    }

  html, body {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.4;
    color: ${p => p.theme.mainTextColor};
    background-color: ${p => p.theme.mainBgColor};
    font-family: Manrope;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 500;
  }

  p {
    margin: 0;
    font-weight: 500;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
`;
