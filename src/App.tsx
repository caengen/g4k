import React, { Component } from 'react';
import { Game } from "./components";
import styled from 'styled-components';

const StyledApp = styled.div`
  color: #222;
  height: 100%;
`;

import { createGlobalStyle } from 'styled-components'
import createItem from './createItem/createItem';

const GlobalStyle = createGlobalStyle`
  body, #root {
    height: 100vh;
  }
`;

const testItems = [
  createItem({name: "A", value: 50}),
  createItem({name: "A", value: 50}),
  createItem({name: "A", value: 50}),
  createItem({name: "B", value: 30}),
  createItem({name: "B", value: 30}),
  createItem({name: "C", value: 20}),
  createItem({name: "C", value: 20}),
  createItem({name: "C", value: 20}),
  createItem({name: "D", value: 15}),
]

class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <Game initialItems={testItems} />
      </StyledApp>
    );
  }
}

export default App;
