import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider, createGlobalStyle } from "styled-components";

import App from "./App";
import { fstoreTheme } from "./theme";

const root = document.getElementById('root');

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: ${fstoreTheme.fonts.primary};
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;

ReactDOM.render(
    <ThemeProvider theme={fstoreTheme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    root
);