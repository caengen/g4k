import * as React from 'react';
import { Item } from '../../types/Item';
import { StyledItemCard } from './ItemCard.style';
import { ItemCardSize } from './ItemCard.types';

export interface ItemCardProps {
  item: Item;
  size?: ItemCardSize;
  onClick?: (item: Item) => void;
}

export default class ItemCard extends React.Component<ItemCardProps> {
  public render() {
    const { item, size } = this.props;
    return (
      <StyledItemCard size={size} onClick={this.handleClick}>
        {item.name}
      </StyledItemCard>
    );
  }

  private handleClick = () => {
    const {item, onClick} = this.props;

    if (!onClick) {
      return;
    }

    onClick(item);
  }
}
