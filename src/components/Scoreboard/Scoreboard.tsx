import React from 'react';
import { ItemCard, ItemCardSize } from '..';
import { groupBy, sumBy } from "lodash";
import { Item, Dictionary, Score } from '../../types';
import { calculateScore } from '../../helpers';
import { Table, PointDisplay, Row } from './Scoreboard.style';

export interface ScoreboardProps {
  items: Item[];
  onClickNewGame?: () => void;
}

export default class Scoreboard extends React.Component<ScoreboardProps> {
  public render() {
    const { items, onClickNewGame } = this.props;
    const groups = groupBy(items, "name");
 
    const scores: Dictionary<Score> = {}; 
    Object.keys(groups).forEach(key => {
      scores[key] = calculateScore(groups[key]);
    });

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(groups).map(key => this.renderRow(groups[key], scores[key]))}
          </tbody>
        </Table>
        <PointDisplay>
          Bonus {sumBy(Object.values(scores), score => score.bonus)}
        </PointDisplay>
        <Row>
          <PointDisplay>
            Total {sumBy(Object.values(scores), score => score.totalUnitPoints + score.bonus)}
          </PointDisplay>
          <button onClick={onClickNewGame}>
            New game
          </button>
        </Row>
      </div>
    );
  }

  private renderRow = (items: Item[], score: Score) => {
    return (
      <tr key={items[0].name}>
        <th>
          <ItemCard size={ItemCardSize.small} item={items[0]} />
        </th>
        <th>{items.length}</th>
        <th>{score.bonus + score.totalUnitPoints}</th>
      </tr>
    );
  }
}
