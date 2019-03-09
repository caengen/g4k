import * as React from 'react';
import { Item } from '../../types/Item';
import { ItemCard, ItemCardSize } from '../ItemCard';
import { groupBy } from "lodash";
import { Table, PointDisplay, Row } from './Scoreboard.style';
import { sumBy } from "lodash";

export interface ScoreboardProps {
  items: Item[];
  onClickNewGame?: () => void;
}

export interface Score {
  totalUnitPoints: number;
  bonus: number;
}

export interface ScoreDictionary {
  [key: string]: Score;
}

export default class Scoreboard extends React.Component<ScoreboardProps> {
  public render() {
    const { items, onClickNewGame } = this.props;
    const groups = groupBy(items, "name");
 
    const scores: ScoreDictionary = {}; 
    Object.keys(groups).forEach(key => {
      scores[key] = this.calculateScore(groups[key]);
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
      <tr>
        <th>
          <ItemCard size={ItemCardSize.small} item={items[0]} />
        </th>
        <th>{items.length}</th>
        <th>{score.bonus + score.totalUnitPoints}</th>
      </tr>
    );
  }

  private calculateScore = (items: Item[]): Score => {
    const name = items[0].name;

    let bonus = 0;
    if (name === "A") {
      bonus = Math.floor(items.length / 3) * 50;
    } else if (name === "B") {
      bonus = Math.floor(items.length / 2) * 30;
    }
    
    return {
      bonus,
      totalUnitPoints: sumBy(items, item => item.value)
    };
  }
}
