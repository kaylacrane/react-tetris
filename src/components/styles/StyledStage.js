import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(60vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 220px;
  background: #222;
  margin-bottom: 20px;
  min-height: fit-content;
  @media all and (min-width: 768px) {
    max-width: 55vw;
  }
  @media all and (min-width: 1200px) {
    max-width: 40vw;
    grid-template-rows: repeat(
      ${(props) => props.height},
      calc(25vw / ${(props) => props.width})
    );
  }
`;
