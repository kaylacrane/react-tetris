export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

//creates an array that contains an array of cells for each row
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
