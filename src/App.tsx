import React, { Component } from 'react';
import { Game } from "./components";
import styled from 'styled-components';

const StyledApp = styled.div`
  color: #222;
  height: 100%;
`;

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, #root {
    height: 100vh;
  }
`

class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <Game />
      </StyledApp>
    );
  }
}

export default App;
