import "@fontsource/montserrat";
import { css } from "@emotion/react";
import { modernNormalizeCss } from "emotion-modern-normalize";

export const GlobalStyles = css`
  ${modernNormalizeCss}

  html {
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
    padding: 0;
    margin: 0;

    background-color: #f8f8f8;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
    display: block;
  }
`;
