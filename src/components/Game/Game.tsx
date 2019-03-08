import * as React from 'react';

export interface GameProps {
  
}

export default class Game extends React.Component<GameProps> {
  public render() {
    return (
      <div>
        <section>
          <Title>Kahoot! Points</Title>
          <Game />
        </section>
        <section>
          <Title>Player items</Title>
          <Scoreboard />
        </section>
      </div>
    );
  }
}
