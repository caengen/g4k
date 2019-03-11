import React from 'react';
import { ItemBoard, Title, Scoreboard } from "..";
import { StyledGame, LargeSection, SmallSection, Flex } from './Game.style';
import { Item } from '../../types';
import { generateItems } from '../../helpers';

export interface GameProps {
  initialItems?: Item[];
}

export interface GameState {
  items: Item[];
}

export default class Game extends React.Component<GameProps, GameState> {
  static ItemAmount = 16;

  public constructor(props: GameProps) {
    super(props);

    this.state = {
      items: props.initialItems || generateItems(Game.ItemAmount)
    };
  }

  public render() {
    const { items } = this.state;

    const uncollected = items.filter(i => !i.collected);
    const collected = items.filter(i => i.collected);

    return (
      <StyledGame>
        <LargeSection>
          <Title>Kahoot! Points</Title>
          <ItemBoard items={uncollected} onClickItem={this.collectItem} />
        </LargeSection>
        <SmallSection>
          <Title>Player items</Title>
          <Flex>
            <Scoreboard items={collected} onClickNewGame={this.startNewGame} />
          </Flex>
        </SmallSection>
      </StyledGame>
    );
  }

  public collectItem = (item: Item) => {
    const { items } = this.state;

    const index = items.findIndex(currItem => currItem.id === item.id);

    this.setState({
      items: [
        ...items.slice(0, index),
        {
          ...items[index],
          collected: true
        },
        ...items.slice(index + 1)
      ]
    });
  }

  public startNewGame = () => {
    this.setState({
      items: generateItems(Game.ItemAmount)
    });
  }
}
