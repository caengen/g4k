import * as React from 'react';
import { ItemBoard, Scoreboard, Title } from "..";
import { StyledGame, LargeSection, SmallSection } from './Game.style';
import { Item } from '../../types/Item';

export interface GameProps {
  
}

const testItems = [
  {name: "A", value: 50},
  {name: "A", value: 50},
  {name: "A", value: 50},
  {name: "B", value: 30},
  {name: "B", value: 30},
  {name: "C", value: 20},
  {name: "C", value: 20},
  {name: "C", value: 20},
  {name: "D", value: 15},
]

export default class Game extends React.Component<GameProps> {
  public render() {
    return (
      <StyledGame>
        <LargeSection>
          <Title>Kahoot! Points</Title>
          <ItemBoard items={testItems} />
        </LargeSection>
        <SmallSection>
          <Title>Player items</Title>
          <Scoreboard items={testItems} />
        </SmallSection>
      </StyledGame>
    );
  }
}
