import React from "react";
import GlobalStyle from "./styles/globalStyles";
import { ModalContextProvider } from "./context/ModalContext";

import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <ModalContextProvider>
      <Routes />
    </ModalContextProvider>
  </Router>,
  document.getElementById("root")
);
