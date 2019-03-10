import React from 'react';
import { Item } from '../../types';
import { StyledItemBoard } from './ItemBoard.style';
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
            <ItemCard key={item.id} item={item} onClick={onClickItem} />
          ))}
      </StyledItemBoard>
    );
  }
}
