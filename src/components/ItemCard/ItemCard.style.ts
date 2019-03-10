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
      return css`font-size: 2.5em;`;
  }
}

export const StyledItemCard = styled.div<StyledItemCardProps>`
  display: flex;
  justify-content: center;
  padding: 1em;
  background-color: blue;
  color: white;
  margin: .5em;
  cursor: pointer;
  ${p => sizeStyling(p.size)}
`;