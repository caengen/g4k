import styled, { css } from "styled-components";
import { ItemCardSize } from "./ItemCard.types";

interface StyledItemCardProps {
  size?: ItemCardSize;
}

const sizeStyling = (size?: ItemCardSize) => {
  switch (size) {
    case ItemCardSize.small:
      return css`font-size: 1em;`;
    case ItemCardSize.large:
    default:
      return css`font-size: 3em;`;
  }
}

export const StyledItemCard = styled.div<StyledItemCardProps>`
  padding: 1em;
  ${p => sizeStyling(p.size)}
  background-color: blue;
  color: white;
  margin: .5em;
  cursor: pointer;
`;