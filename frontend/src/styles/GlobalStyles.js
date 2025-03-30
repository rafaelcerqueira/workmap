import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
    /* Reset CSS */
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        font-family: Arial, sans-serif;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        background-color: #f0f2f5;
        color: #333;
        margin: 0;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    #root {
        height: 100%;
    }
`;

export default GlobalStyles;