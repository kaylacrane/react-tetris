import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onCLick={callback}>start game</StyledStartButton>
);

export default StartButton;
