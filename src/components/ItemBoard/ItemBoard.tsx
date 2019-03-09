import * as React from 'react';
import { Item } from '../../types/Item';
import { StyledItemBoard, BoardCell } from './ItemBoard.style';
import { ItemCard } from '../ItemCard';

export interface ItemBoardProps {
  items: Item[];
  onClickItem?: (item: Item) => void;
}

export default class ItemBoard extends React.Component<ItemBoardProps> {
  public render() {
    const { items, onClickItem } = this.props;

    return (
      <StyledItemBoard>
        {items
          .map(item => (
            <BoardCell key={item.id}>
              <ItemCard item={item} onClick={onClickItem} />
            </BoardCell>
          ))}
      </StyledItemBoard>
    );
  }
}
