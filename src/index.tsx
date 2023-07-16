import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { HelmetProvider } from "react-helmet-async";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./shared/styles/theme";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./shared/styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/beer-recipes-app">
        <Global styles={GlobalStyles} />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </HelmetProvider>
  // </React.StrictMode>
);
