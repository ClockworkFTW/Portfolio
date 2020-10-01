import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Home />
    <About />
    <Projects />
  </>
);

export default App;
