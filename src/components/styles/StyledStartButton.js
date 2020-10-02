import styled from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  border: none;
  @media all and (min-width: 760px) {
    font-size: 1.5rem;
    letter-spacing: 2px;
    padding: 30px;
    max-width: 50%;
    margin: 0 auto;
  }
  @media all and (min-width: 1200px) {
    max-width: 100%;
  }
`;
