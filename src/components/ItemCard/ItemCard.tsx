import * as React from 'react';
import { Item } from '../../types/Item';
import { StyledItemCard } from './ItemCard.style';

export interface ItemCardProps {
  item: Item;
}

export default class ItemCard extends React.Component<ItemCardProps, any> {
  public render() {
    return (
      <StyledItemCard>
        {this.props.item.name}
      </StyledItemCard>
    );
  }
}
