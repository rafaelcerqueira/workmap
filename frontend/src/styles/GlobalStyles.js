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
        font-family: Roboto, sans-serif;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        background-color:rgb(79, 131, 219);
        color: #333;
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: 1.2;
        font-weight: 700;
    }

    h1 {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
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

    #root {
        height: 100%;
    }
`;

export default GlobalStyles;