import styled, { css } from "styled-components";

export const StyledScoreboard = styled.div`
  display: flex;
  padding: 1em 0;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
`;

export const Table = styled.table`
  display: block;
  flex: 1;
  width: 100%;
  overflow-y: scroll;
`;

export const Thead = styled.thead`
  display: block;
`;

export const Tbody = styled.tbody`
  display: block;
`;

export const Tr = styled.tr`
  display: flex;
  align-items: center;
`;

export const Th = styled.th`
  flex: 1;
`;

const pointsCss = css`
  font-size: 1.5em;
  padding: 0.5em 0;
`;
export const Bonus = styled.div`
  ${pointsCss}
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${pointsCss}
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const NewGameButton = styled.button`
  text-decoration: none;
  padding: .5em 1em;
  background-color: #7A9F35;
  border-bottom: 3px solid #354F00;
  color: white;
  border: 2px solid white;
  border-radius: 9px;
  font-size: 1em;
`;