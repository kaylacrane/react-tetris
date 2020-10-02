import styled from "styled-components";

import bgImage from "../../images/universe.jpg";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;
  max-width: 300px;
  @media all and (min-width: 768px) {
    max-width: 600px;
  }
  @media all and (min-width: 1200px) {
    align-items: flex-start;
    flex-direction: row;
    max-width: 900px;
  }

  aside {
    width: 100%;
    max-width: 200px;
    display: flex;
    padding: 0 20px;
    flex-direction: column;
    & .info-area {
      display: flex;
      flex-direction: column;
    }
    @media all and (min-width: 760px) {
      max-width: 650px;
      & .info-area {
        flex-direction: row;
        justify-content: space-evenly;
      }
    }
    @media all and (min-width: 1200px) {
      & .info-area {
        flex-direction: column;
        max-width: 100%;
      }
    }
  }
`;
