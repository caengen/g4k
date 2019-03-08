import * as React from 'react';
import { Item } from '../../types/Item';
import { StyledItemBoard, BoardCell } from './ItemBoard.style';
import { ItemCard } from '../ItemCard';

export interface ItemBoardProps {
  items: Item[];
}

export default class ItemBoard extends React.Component<ItemBoardProps> {
  public render() {
    return (
      <StyledItemBoard>
        {this.props.items.map((item, index) => (
          <BoardCell key={index}>
            <ItemCard item={item} />
          </BoardCell>
        ))}
      </StyledItemBoard>
    );
  }
}
