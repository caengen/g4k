import * as React from 'react';
import { Item } from '../../types/Item';

export interface ScoreboardProps {
  items: Item[];
}

export default class Scoreboard extends React.Component<ScoreboardProps, any> {
  public render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Score</th>
          </tr>
        </thead>
      </table>
    );
  }
}
