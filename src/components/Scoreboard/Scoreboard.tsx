import React from 'react';
import { ItemCard, ItemCardSize } from '..';
import { groupBy, sumBy } from "lodash";
import { Item, Dictionary, Score } from '../../types';
import { calculateScore } from '../../helpers';
import { Table, Thead, Tbody, Tr, Th, Bonus, Total, Row, StyledScoreboard, NewGameButton } from './Scoreboard.style';

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
      <StyledScoreboard>
        <Table>
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Qty</Th>
              <Th>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(groups).map(key => this.renderRow(groups[key], scores[key]))}
          </Tbody>
        </Table>
        <Bonus>
          Bonus {sumBy(Object.values(scores), score => score.bonus)}
        </Bonus>
        <Row>
          <Total>
            <span>Total</span>
            <span>
              {sumBy(Object.values(scores), score => score.totalUnitPoints + score.bonus)}
            </span>
          </Total>
          <NewGameButton onClick={onClickNewGame}>
            <strong>
              New game
            </strong>  
          </NewGameButton>
        </Row>
      </StyledScoreboard>
    );
  }

  private renderRow = (items: Item[], score: Score) => {
    return (
      <Tr key={items[0].name}>
        <Th>
          <ItemCard size={ItemCardSize.small} item={items[0]} />
        </Th>
        <Th>{items.length}</Th>
        <Th>{score.bonus + score.totalUnitPoints}</Th>
      </Tr>
    );
  }
}
