import React, { useState } from 'react';
import { ItemBoard, Scoreboard, Title } from "..";
import { StyledGame, LargeSection, SmallSection } from './Game.style';
import { Item } from '../../types/Item';
import createItem from '../../createItem/createItem';

export interface GameProps {
  initialItems?: Item[];
}

export interface GameState {
  items: Item[];
}

export default class Game extends React.Component<GameProps, GameState> {
  public constructor(props: GameProps) {
    super(props);

    this.state = {
      items: props.initialItems || []
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
          <Scoreboard items={collected} onClickNewGame={this.startNewGame} />
        </SmallSection>
      </StyledGame>
    );
  }

  private collectItem = (item: Item) => {
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

  private startNewGame = () => {
    this.setState({
      items: this.generateItems(9)
    });
  }

  private generateItems = (amount: number): Item[] => {
    const types = [
      {
        name: "A",
        value: 50
      },
      {
        name: "B",
        value: 30
      },
      {
        name: "C",
        value: 20
      },
      {
        name: "D",
        value: 15
      }
    ];

    const items = [];
    for (let i = 0; i < amount; i++) {
      const randType = types[Math.floor(Math.random() * types.length)];
      items.push(createItem(randType))
    }

    return items;
  }
}
