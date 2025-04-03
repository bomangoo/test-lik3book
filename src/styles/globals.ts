import { css } from '@emotion/react';

export const globalStyles = css`
    /* Reset CSS */
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #__next {
        height: 100%;
        width: 100%;
    }

    body {
        line-height: 1.6;
        color: #333;
        background-color: #000;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul,
    ol {
        list-style: none;
    }

    button {
        all: unset;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        display: block;
    }

    .pc-only {
        display: block;

        @media screen and (max-width: 1023px) {
            display: none;
        }
    }
    .mobile-only {
        display: none;

        @media screen and (max-width: 1023px) {
            display: block;
        }
    }
`;
