import React, { Component } from 'react';
import { Game } from "..";
import styled from 'styled-components';
import { GlobalStyle, StyledApp } from './App.style';

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
