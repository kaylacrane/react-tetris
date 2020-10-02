import styled from "styled-components";

export const StyledControls = styled.div`
  display: grid;
  grid-template: auto auto auto / auto auto;
  grid-row-gap: 10px;
  width: 100%;
  margin-bottom: 20px;
  & > .control-button {
    font-size: 60px;

    border-radius: 50%;
    text-align: center;
    &:active {
      color: #111;
    }
  }
  & > .up-button {
    grid-column: 2;
  }
  & > .left-button {
    grid-column: 1;
    grid-row: 1 / span 2;
    align-self: center;
  }
  & > .right-button {
    grid-column: 3;
    grid-row: 1 / span 2;
    align-self: center;
  }
  & > .down-button {
    grid-column: 2;
    grid-row: 2;
  }
`;
