import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.main`
    height: 100vh;
    background: #000;
`;

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #191920;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: var(---background);
        -webkit-font-smoothing: antialiased;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
