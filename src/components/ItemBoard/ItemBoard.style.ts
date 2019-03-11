import styled from "styled-components";

export const StyledItemBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  overflow-y: scroll;
  height: 500px;
`;