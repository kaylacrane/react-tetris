import styled from "styled-components";

export const StyledControls = styled.div`
  display: grid;
  grid-template: auto auto auto / auto auto;
  grid-row-gap: 10px;
  width: 100%;
  margin-bottom: 20px;
  & > .control-button {
    background: #333;
    font-size: 60px;
    border-radius: 50%;
    text-align: center;
    transition: color 0.8s linear;
    outline: none;
    border: none;
    &:active {
      color: gold;
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
  @media all and (min-width: 768px) {
    & > .control-button {
      font-size: 80px;
    }
  }
`;
