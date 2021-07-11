import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.main`
    background: var(--black);
`;

export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #000;
        --white: #FFF;
        --blue: #030b6f;
        --header: #141419;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--black);
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
