import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log("rerender")}
  </StyledCell>
);

export default React.memo(
  Cell
); /*only rerenders when cells are changing with movement of tetromino. helps with optimization */
